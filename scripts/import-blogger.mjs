#!/usr/bin/env node
/**
 * Importa los posts del blog "Deploshark - Tech Blog" desde un export de
 * Google Takeout de Blogger (el .zip que se descarga desde Blogger ->
 * Configuración -> Administrar blog -> Hacer copia de seguridad del contenido,
 * o desde takeout.google.com).
 *
 * - Posts LIVE  -> src/content/blog/<slug>.md   (quedan publicados, legacy: true)
 * - Posts DRAFT -> drafts/legacy/<slug>.md       (nunca se buildean)
 * - Imágenes que coinciden con un archivo en el Album de Takeout se copian a
 *   public/images/legacy/<slug>/ y se reescribe el <img src>. Las que no se
 *   encuentran localmente quedan apuntando a la URL original de Blogger.
 *
 * Uso:
 *   node scripts/import-blogger.mjs [ruta-al-zip-de-takeout]
 *
 * Si no se pasa ruta, busca el primer archivo `takeout-*.zip` en la raíz del repo.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, writeFileSync, copyFileSync, readdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { XMLParser } from 'fast-xml-parser';
import { NodeHtmlMarkdown } from 'node-html-markdown';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const BLOG_FOLDER_NAME = 'Deploshark - Tech Blog';
const TMP_DIR = path.join(ROOT, '.tmp-takeout');

function findZip(argPath) {
  if (argPath) return path.resolve(argPath);
  const candidate = readdirSync(ROOT).find((f) => /^takeout.*\.zip$/i.test(f));
  if (!candidate) {
    console.error('No encontré ningún takeout-*.zip en la raíz del repo. Pasalo como argumento.');
    process.exit(1);
  }
  return path.join(ROOT, candidate);
}

function extractZip(zipPath) {
  if (existsSync(TMP_DIR)) rmSync(TMP_DIR, { recursive: true, force: true });
  mkdirSync(TMP_DIR, { recursive: true });
  execFileSync(
    'unzip',
    [
      '-q',
      '-o',
      zipPath,
      `Takeout/Blogger/Blogs/${BLOG_FOLDER_NAME}/*`,
      `Takeout/Blogger/Albums/${BLOG_FOLDER_NAME}/*`,
      '-d',
      TMP_DIR,
    ],
    { stdio: 'inherit' }
  );
}

function slugify(title) {
  return title
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80)
    .replace(/-+$/g, '');
}

function stripHtml(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function makeDescription(html) {
  const text = stripHtml(html);
  if (text.length <= 160) return text;
  return text.slice(0, 157).replace(/\s+\S*$/, '') + '...';
}

function fenceBarePre(html) {
  // <pre> sin <code> adentro no queda como fenced code block, así que lo envolvemos.
  return html.replace(/<pre(\s[^>]*)?>([\s\S]*?)<\/pre>/g, (match, attrs, inner) => {
    if (/<code/i.test(inner)) return match;
    return `<pre${attrs || ''}><code>${inner}</code></pre>`;
  });
}

function yamlString(value) {
  return JSON.stringify(value);
}

function frontmatter(data) {
  const lines = ['---'];
  lines.push(`title: ${yamlString(data.title)}`);
  lines.push(`description: ${yamlString(data.description)}`);
  lines.push(`pubDate: ${data.pubDate}`);
  if (data.updatedDate) lines.push(`updatedDate: ${data.updatedDate}`);
  lines.push(`tags: [${data.tags.map(yamlString).join(', ')}]`);
  lines.push(`draft: ${data.draft}`);
  lines.push(`legacy: true`);
  if (data.cover) lines.push(`cover: ${yamlString(data.cover)}`);
  lines.push('---');
  return lines.join('\n');
}

function main() {
  const zipPath = findZip(process.argv[2]);
  console.log(`Extrayendo ${path.basename(zipPath)}...`);
  extractZip(zipPath);

  const feedPath = path.join(TMP_DIR, 'Takeout/Blogger/Blogs', BLOG_FOLDER_NAME, 'feed.atom');
  const albumDir = path.join(TMP_DIR, 'Takeout/Blogger/Albums', BLOG_FOLDER_NAME);
  const xml = readFileSync(feedPath, 'utf-8');

  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '@_',
    textNodeName: '#text',
  });
  const parsed = parser.parse(xml);
  const entries = Array.isArray(parsed.feed.entry) ? parsed.feed.entry : [parsed.feed.entry];

  const nhm = new NodeHtmlMarkdown({ useLinkReferenceDefinitions: false });

  const outBlogDir = path.join(ROOT, 'src/content/blog');
  const outDraftDir = path.join(ROOT, 'drafts/legacy');
  const outImagesDir = path.join(ROOT, 'public/images/legacy');
  mkdirSync(outBlogDir, { recursive: true });
  mkdirSync(outDraftDir, { recursive: true });

  const usedSlugs = new Set();
  let published = 0;
  let drafted = 0;
  let imagesCopied = 0;
  let imagesRemote = 0;

  for (const entry of entries) {
    if (entry['blogger:type'] !== 'POST') continue;
    const status = entry['blogger:status'];
    if (status !== 'LIVE' && status !== 'DRAFT') continue;

    const title = String(entry.title ?? '(sin título)').trim();
    let slug = slugify(title) || 'post';
    let n = 2;
    while (usedSlugs.has(slug)) {
      slug = `${slugify(title)}-${n++}`;
    }
    usedSlugs.add(slug);

    let rawHtml = String(entry.content?.['#text'] ?? entry.content ?? '');
    rawHtml = fenceBarePre(rawHtml);

    // Reescribe imágenes de Blogger que tengamos localmente en el Album.
    const postImageDir = path.join(outImagesDir, slug);
    let imgCount = 0;
    rawHtml = rawHtml.replace(/(src|href)="([^"]+)"/g, (m, attr, url) => {
      const isImg = /\.(jpe?g|png|gif|webp)(\?|$)/i.test(url);
      if (!isImg) return m;
      const basename = decodeURIComponent(url.split('/').pop().split('?')[0]);
      const localFile = path.join(albumDir, basename);
      if (existsSync(localFile)) {
        mkdirSync(postImageDir, { recursive: true });
        copyFileSync(localFile, path.join(postImageDir, basename));
        imagesCopied++;
        imgCount++;
        return `${attr}="/images/legacy/${slug}/${basename}"`;
      }
      imagesRemote++;
      return m;
    });

    const categories = entry.category
      ? (Array.isArray(entry.category) ? entry.category : [entry.category])
          .map((c) => c['@_term'])
          .filter(Boolean)
      : [];
    const tags = [...new Set(categories.map((t) => t.toLowerCase()))];

    const pubDate = String(entry.published).slice(0, 10);
    const updated = String(entry.updated).slice(0, 10);
    const updatedDate = updated !== pubDate ? updated : undefined;

    const markdownBody = nhm.translate(rawHtml).trim();
    const description = makeDescription(rawHtml);

    const fm = frontmatter({
      title,
      description,
      pubDate,
      updatedDate,
      tags,
      draft: status === 'DRAFT',
    });

    const fileContents = `${fm}\n\n${markdownBody}\n`;
    const targetDir = status === 'LIVE' ? outBlogDir : outDraftDir;
    writeFileSync(path.join(targetDir, `${slug}.md`), fileContents, 'utf-8');

    if (status === 'LIVE') published++;
    else drafted++;
  }

  rmSync(TMP_DIR, { recursive: true, force: true });

  console.log(`\nListo.`);
  console.log(`  Publicados (src/content/blog):  ${published}`);
  console.log(`  Borradores (drafts/legacy):     ${drafted}`);
  console.log(`  Imágenes copiadas localmente:    ${imagesCopied}`);
  console.log(`  Imágenes que quedaron remotas:   ${imagesRemote}`);
  console.log(`\nRevisá el contenido migrado antes de dar por terminada la importación —`);
  console.log(`la conversión HTML->Markdown es mecánica y puede necesitar retoques.`);
}

main();
