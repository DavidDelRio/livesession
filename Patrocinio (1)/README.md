# VOID:LIVE — Media Kit

Sitio estático (HTML + CSS + JSX transpilado en runtime con Babel Standalone).
No requiere build step.

## Estructura

- `index.html` — landing del proyecto
- `patrocinadores.html` — media kit / paquetes para marcas
- `styles.css` — estilos globales
- `packages.jsx` — tabla comparativa de paquetes (React + Babel runtime)
- `tweaks-panel.jsx` — panel de ajustes en vivo
- `img/` — imágenes referenciadas por las páginas

## Deploy en Vercel

### Opción A · Desde la web (más fácil)

1. Subí esta carpeta a un repo en GitHub.
2. Entrá a [vercel.com/new](https://vercel.com/new) → Import del repo.
3. **Framework Preset:** `Other` (es estático, sin build).
4. **Build Command:** dejar vacío.
5. **Output Directory:** dejar vacío (sirve la raíz).
6. Deploy.

### Opción B · CLI

```bash
npm i -g vercel
vercel        # primera vez, crea el proyecto
vercel --prod # deploy a producción
```

## Notas

- `vercel.json` configura `cleanUrls` (la URL `/patrocinadores` sirve `patrocinadores.html`) y caching para imágenes/CSS/JSX.
- La carpeta `uploads/` está en `.gitignore` — no se sube al repo ni a Vercel. Si necesitás algún archivo de ahí en producción, movelo a `img/` o a la raíz primero.
