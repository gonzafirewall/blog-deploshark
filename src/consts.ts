export const SITE_TITLE = 'Deploshark Blog';
export const SITE_DESCRIPTION =
  'Programación, IA y alguna reflexión filosófica sobre construir software. El blog técnico de Deploshark.';
export const SITE_URL = 'https://deploshark.com/blog';

// El sitio se publica bajo /blog (ver `base` en astro.config.mjs): todo link interno
// o asset de public/ tiene que pasar por url() para llevar ese prefijo.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const url = (path: string) => `${BASE}${path}`;
export const COMPANY_URL = 'https://deploshark.com';
// Tomado del autor del blog viejo en Blogger (GonzaMartinez) — cambialo si querés otro nombre/firma.
export const AUTHOR = 'Gonza Martínez';

export const NAV_LINKS = [
  { href: url('/'), label: 'Posts' },
  { href: url('/tags/'), label: 'Tags' },
  { href: url('/about/'), label: 'Sobre esto' },
];
