# Deploshark Blog

Blog técnico de [Deploshark](https://deploshark.com): programación, IA y alguna reflexión
sobre construir software. Sitio 100% estático (Astro), sin backend, pensado para escribir en
Markdown con asistencia de IA y publicar vía GitHub Pages.

## Stack

- **[Astro](https://astro.build)** — generador estático, content collections para los posts.
- **Markdown** para el contenido (`src/content/blog/`).
- **Shiki** con tema Dracula para los bloques de código.
- Tema claro/oscuro por CSS variables (`src/styles/theme.css`), oscuro por defecto.
- Deploy a **GitHub Pages** vía GitHub Actions (`.github/workflows/deploy.yml`).

## Comandos

| Comando                  | Qué hace                                              |
| ------------------------ | ------------------------------------------------------ |
| `pnpm install`             | Instala dependencias                                   |
| `pnpm dev`                 | Server local en `localhost:4321`                       |
| `pnpm build`               | Build de producción a `./dist/`                        |
| `pnpm preview`             | Sirve el build de producción localmente                |
| `pnpm check`               | Chequeo de tipos / content collections                 |
| `pnpm import:blogger`      | Importa posts desde un export de Blogger (ver abajo)   |

## Escribir un post

Dos formas, se puede mezclar:

1. **Con el comando de Claude Code**: `/new-post <tema o idea>` — arranca una conversación
   corta para definir el ángulo y te deja un primer borrador completo en `drafts/`.
2. **A mano**: copiá `drafts/_template.md` a `drafts/mi-post.md` y escribilo (solo o pidiéndome
   ayuda en el chat).

`drafts/` está **fuera** de `src/content/blog/`, así que Astro nunca la toca — nada de ahí se
construye ni se despliega. Cuando el post está listo:

```sh
mv drafts/mi-post.md src/content/blog/mi-post.md
```

y poné `draft: false` en el frontmatter (o sacá la línea, el default ya es `false`). El nombre
del archivo define la URL: `mi-post.md` → `/blog/mi-post/`.

Si preferís que un post quede en `src/content/blog/` pero no público todavía (por ejemplo para
programarlo a futuro), usá `draft: true` en vez de la carpeta `drafts/` — con eso no sale en
`pnpm build` (producción) pero sí lo ves en `pnpm dev`.

### Frontmatter

```yaml
---
title: "Título del post"
description: "1-2 oraciones para la lista de posts, RSS y SEO."
pubDate: 2026-01-01
updatedDate: 2026-01-05 # opcional
tags: ["programacion", "ia"]
draft: false
cover: ./imagen.jpg # opcional: local (se optimiza sola) o URL externa
coverAlt: "descripción de la imagen" # opcional
---
```

## Theming

Todos los colores/tipografías salen de `src/styles/theme.css` — es el único archivo que hace
falta tocar para adaptar el sitio a la marca definitiva de Deploshark más adelante (el logo
actual en `public/logo_deploshark.png` ya definió la paleta base: azul marino + carbón + plata).
Dark (estilo "darkula") es el tema por defecto; el toggle guarda la preferencia en
`localStorage`.

## Importar / re-importar desde Blogger

```sh
node scripts/import-blogger.mjs [ruta-al-zip-de-takeout]
```

Sin argumento, busca el primer `takeout-*.zip` en la raíz del repo (el export de Google Takeout
de Blogger). Convierte HTML → Markdown de forma mecánica:

- Posts **LIVE** → `src/content/blog/<slug>.md` (quedan publicados, con `legacy: true`)
- Posts **DRAFT** → `drafts/legacy/<slug>.md` (nunca se buildean)
- Imágenes que encuentra en el Album del Takeout se copian a `public/images/legacy/<slug>/`;
  las que no, quedan apuntando a la URL vieja de `blogger.googleusercontent.com`.

Es una migración mecánica, no una reescritura — los posts migrados llevan un aviso visible de
"viene del blog viejo" y probablemente convenga revisarlos/actualizarlos con el tiempo (varios
son de 2013-2015 y están técnicamente desactualizados). El export original no incluye el
permalink real de cada post, así que no se linkea al "original" en Blogger.

## Deploy (GitHub Pages)

1. Creá un repo en GitHub y pusheá esto a `main`.
2. En **Settings → Pages**, poné el source en "GitHub Actions" (el workflow
   `.github/workflows/deploy.yml` ya hace build + deploy en cada push a `main`).
3. En tu DNS (donde manejás `deploshark.com`), agregá un registro `CNAME` para el subdominio
   `blog` apuntando a `<tu-usuario>.github.io`. El archivo `public/CNAME` ya le dice a GitHub
   Pages que el dominio custom es `blog.deploshark.com`.
4. Esperá la propagación de DNS y que GitHub emita el certificado HTTPS (automático, puede
   tardar un rato la primera vez).

## Estructura

```
src/
  content/blog/*.md       posts publicados
  content.config.ts        schema de los posts (zod)
  components/               Header, Footer, PostCard, ThemeToggle
  layouts/                  BaseLayout, PostLayout
  pages/                     index, /blog/[slug], /tags, /about, rss.xml, 404
  styles/                    theme.css (tokens) + global.css
drafts/                    borradores, fuera del build
scripts/import-blogger.mjs  importador de Blogger
```
