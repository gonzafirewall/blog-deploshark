# Carpeta de borradores

Esta carpeta está **fuera** de `src/content/blog/`, así que Astro nunca la lee:
nada de acá se construye ni se despliega, aunque hagas `npm run build` o
pushees a `main`. Es tu zona segura para escribir/editar con IA sin riesgo de
publicar algo a medio hacer.

## Workflow

1. Copiá `_template.md` a un archivo nuevo acá (p. ej. `mi-post-nuevo.md`) y escribilo,
   solo o charlando con Claude Code.
2. Cuando esté listo para publicarse, movelo a `src/content/blog/` con el mismo
   nombre de archivo (eso define el slug/URL del post: `mi-post-nuevo` →
   `/blog/mi-post-nuevo/`).
3. Completá/revisá el frontmatter (fechas, tags, draft: false).
4. `npm run dev` para verlo localmente, y cuando estés conforme, commit + push
   a `main` dispara el deploy automático a GitHub Pages.

Si querés que algo quede en `src/content/blog/` pero no publicado todavía
(por ejemplo, para previsualizarlo en el deploy de un PR o para programarlo),
usá `draft: true` en el frontmatter en vez de esta carpeta — un post con
`draft: true` no aparece en el sitio en producción pero sí en `npm run dev`.
