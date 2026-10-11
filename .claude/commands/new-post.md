---
description: Arranca un borrador nuevo de post en drafts/ con asistencia de IA
---

El usuario quiere escribir un post nuevo para el blog de Deploshark. Tema/idea que dio: $ARGUMENTS

Seguí este proceso:

1. **Entender el ángulo.** Si el tema es vago o da para varios enfoques, hacé 1-3 preguntas
   cortas y concretas antes de escribir nada (¿qué querés que se lleve el lector?, ¿es un
   tutorial, una opinión, un post explicando algo que hiciste?, ¿nivel técnico esperado?).
   No preguntes por preguntar — si el tema ya es claro y accionable, pasá directo al punto 2.

2. **Chequear el tono del blog.** Mirá 1-2 posts existentes en `src/content/blog/` que no sean
   `legacy: true` (si hay) para calibrar voz; si no hay ninguno todavía, el tono es: técnico,
   directo, sin relleno motivacional tipo Medium, en español, primera persona. Nada de emojis
   salvo que el usuario los use. Los posts "legacy" (migrados de Blogger) NO son el modelo de
   tono a seguir — son contenido viejo.

3. **Armar el borrador.** Creá el archivo en `drafts/<slug>.md` (slug en minúsculas, con
   guiones, derivado del título) usando el frontmatter de `drafts/_template.md`:
   - `title`, `description` (1-2 oraciones, para listados/SEO)
   - `pubDate` con la fecha de hoy
   - `tags`: 2-4 tags relevantes, en minúscula, coherentes con tags ya usados en el sitio
     cuando aplique (mirá `/tags/` corriendo `pnpm dev` o grepeando `src/content/blog/*.md`
     si hace falta)
   - `draft: true`
   - Escribí un primer borrador completo del cuerpo en Markdown, no solo un esqueleto de
     bullets — algo que el usuario pueda leer y corregir, no arrancar de cero.

4. **Dejarlo en drafts/, nunca en src/content/blog/.** El punto de esta carpeta es que nada acá
   se publica solo. Avisale al usuario dónde quedó el archivo y que cuando esté conforme lo
   mueva a `src/content/blog/` (y ponga `draft: false`) para que salga en el próximo deploy.

5. **Cerrar con una pregunta simple:** ¿lo revisás vos ahora, o seguimos iterando juntos acá?

No uses herramientas de git (no hagas commit/push) — este comando solo escribe el archivo de
borrador.
