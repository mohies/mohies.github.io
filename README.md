# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## EmailJS setup (contact modal)

If you want the contact modal to send emails directly from the site, configure EmailJS:

- Create a free account at https://www.emailjs.com/
- Create a Service and a Template, then copy the Service ID, Template ID and Public Key.
- Copy `.env.example` to `.env` and fill the values:

```
VITE_EMAILJS_SERVICE_ID=service_xxx
VITE_EMAILJS_TEMPLATE_ID=template_xxx
VITE_EMAILJS_PUBLIC_KEY=user_xxx
```

Además añade `VITE_CONTACT_EMAIL` con la dirección que quieras usar para `mailto:` (no la incluyas en el repo; ponla en tu `.env`):

```
VITE_CONTACT_EMAIL=tu_correo@dominio.com
```

- Restart the dev server after adding the `.env` file so Vite loads the environment variables.
- If you don't configure EmailJS, the modal will fallback to opening the user's mail client.

Security note: Never commit your real `.env` to version control; keep secrets out of the repo.

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    # Portafolio (React + TypeScript + Vite)

    Proyecto personal: sitio de portafolio desarrollado con React, TypeScript, Vite y TailwindCSS.

    Resumen de cambios recientes:
    - Animación sutil en el Hero.
    - Modal de contacto con integración opcional a EmailJS.
    - Mejora de tarjetas de proyectos con preview y overlay.
    - Lazy-load básico para imágenes.

    Requisitos
    - Node.js 18+ y npm

    Instalación y desarrollo
    1. Instala dependencias:

    ```bash
    npm install
    ```

    2. Ejecuta el servidor de desarrollo:

    ```bash
    npm run dev
    ```

    Build y despliegue (GitHub Pages)
    - El repositorio incluye `gh-pages` y el script `deploy` en `package.json`.
    - Flujo recomendado:

    ```bash
    # 1. añade y sube tus cambios al repo (asegúrate de estar en la rama main)
    git add .
    git commit -m "Describe los cambios"
    git push origin main

    # 2. publicar en GitHub Pages (esto hace build y sube la carpeta dist)
    npm run deploy
    ```

    Nota: en la última operación el remoto indicó que el repositorio se movió a `git@github.com:mohies/mohies.github.io.git`. Si quieres apuntar el `remote` al repositorio de Pages, ejecuta:

    ```bash
    git remote set-url origin git@github.com:mohies/mohies.github.io.git
    git push origin main
    ```

    EmailJS (opcional)
    - Si quieres enviar correos desde el modal sin abrir el cliente de correo, crea una cuenta en https://www.emailjs.com/ y añade las variables al archivo `.env` (usa `.env.example` como plantilla):

    ```
    VITE_EMAILJS_SERVICE_ID=service_xxx
    VITE_EMAILJS_TEMPLATE_ID=template_xxx
    VITE_EMAILJS_PUBLIC_KEY=user_xxx
    ```

    - Reinicia el servidor tras añadir `.env`.
    - Si no configuras EmailJS, el modal hará `mailto:` como fallback.

    Comandos útiles
    - `npm run dev` → servidor local
    - `npm run build` → producción (crea `dist`)
    - `npm run deploy` → build + publicar en GitHub Pages
    - `npm run lint` → ejecutar ESLint

    Buenas prácticas
    - No subas tu `.env` con claves públicas/privadas.
    - Optimiza imágenes antes de añadirlas a `/public` o `src/assets`.

    Problemas comunes
    - Si `npm run deploy` falla, ejecuta `npm run build` para ver errores de compilación.
    - Si el push a `origin` falla porque el repo se movió, actualiza el `remote` como se muestra arriba.

    Contacto
    - El modal de contacto en la web envía correos si configuras EmailJS, o abre el cliente de correo por defecto como fallback.

    Si quieres, actualizo este README con más detalles (por ejemplo, scripts CI/CD o guía de contribución).
