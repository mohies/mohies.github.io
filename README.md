
# Portafolio — Mohcen Benizza

Este es mi sitio web personal / portafolio. Aquí muestro proyectos, habilidades y formas de contacto.

Descripción breve
- Sitio estático moderno, diseñado para presentar trabajos, tecnologías y una forma directa de contacto.

Stack y librerías principales
- React ^19.0.0
- TypeScript ~5.7.2
- Vite ^6.3.1 (bundler / dev server)
- TailwindCSS ^4.1.5 (estilos utilitarios)
- Framer Motion ^12.9.4 (animaciones)
- react-icons ^5.5.0 (iconos)
- react-simple-typewriter ^5.0.1 (efecto typewriter en el About)
- emailjs-com ^3.2.0 (opcional: envío de formularios desde el cliente)
- gh-pages ^6.3.0 (deploy a GitHub Pages)

Estructura principal
- `src/` : código fuente React + TypeScript
	- `components/` : componentes reutilizables (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `Contact`, ...)
	- `assets/` : imágenes y recursos estáticos
	- `main.tsx` / `App.tsx` : punto de entrada
- `public/` : recursos públicos (logo, avatar, resume PDF)

Scripts útiles
- `npm run dev` — servidor de desarrollo (localhost)
- `npm run build` — build de producción (crea `dist`)
- `npm run deploy` — build + publicar en GitHub Pages (usa `gh-pages`)
- `npm run lint` — ejecutar ESLint

Características destacadas
- Hero con imagen de avatar y CTA destacado.
- Modal de contacto (envío vía EmailJS si se configura, o `mailto:` como fallback).
- Sección Tech Stack con iconos y filtros.
- Sección Projects con tarjetas y preview/overlay.
- Micro-animaciones con Framer Motion para transiciones suaves.


