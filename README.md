# Bruma Coffee — Scrollytelling Landing

Landing de producto para una cafetería / marca de café, creada con Next.js, TypeScript y Framer Motion.

## Incluye

- Diseño responsive para móvil, tablet y escritorio.
- Hero de producto premium.
- Scrollytelling con `position: sticky`, `useScroll` y `useTransform`.
- Cuatro capítulos animados: origen, tueste, molienda y taza.
- Mockups originales construidos con CSS, sin imágenes externas.
- Secciones de notas de cata, ritual y producto.
- Metadata Open Graph, sitemap y robots.
- Lista para GitHub y Vercel.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Compilar

```bash
npm run build
```

## Subir a GitHub

```bash
git init
git add .
git commit -m "Bruma Coffee landing"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
git push -u origin main
```

## Desplegar en Vercel

1. Entra en Vercel.
2. Importa el repositorio de GitHub.
3. Vercel detectará Next.js automáticamente.
4. Pulsa Deploy.

## Personalización rápida

- Contenido principal: `app/page.tsx`
- Colores y estilos: `app/globals.css`
- Scrollytelling: `components/CoffeeStory.tsx`
- Bolsa de café: `components/CoffeePack.tsx`
- Taza: `components/CoffeeCup.tsx`
- Navegación: `components/NavBar.tsx`

Sustituye `https://example.com` en `app/layout.tsx`, `app/sitemap.ts` y `app/robots.ts` por el dominio real antes de publicar.

## Mobile fluidity update

This version includes a mobile stability pass: safe viewport sizing for sticky scrollytelling, fluid `clamp()` typography and artwork sizing, horizontal overflow protection, small-height viewport handling, and a lightly damped Framer Motion spring for smoother touch scrolling.
