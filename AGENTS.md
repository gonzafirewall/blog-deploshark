## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Este proyecto

Blog estático en Astro (sin backend). Ver `README.md` para el detalle completo. Reglas clave:

- Los posts publicados viven en `src/content/blog/*.md`. **Nunca** escribas ahí directamente
  salvo que el usuario ya te haya confirmado que el post está listo para publicarse — el flujo
  normal es escribir en `drafts/` primero (ver `drafts/README.md` y el comando `/new-post`).
- `drafts/` está fuera del build de Astro a propósito — nada de ahí se despliega.
- Colores/tipografía: tocar solo `src/styles/theme.css`, nunca hardcodear colores en componentes.
- No agregues backend/API routes/base de datos — el requisito explícito es "sin backend, 100%
  estático".

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
