# ConstruyeSistemas - Brutalist Tech & HubSpot

## Descripción

Este repositorio contiene el código fuente del sitio web de **ConstruyeSistemas**, una consultoría de automatización estratégica e IA enfocada en el ROI tangible. El proyecto está construido sobre **HubSpot CMS** y sigue un diseño **"Brutalist Tech"**, con un fuerte enfoque en la **accesibilidad universal (WCAG 2.2 AA)**.

El sistema opera bajo un **Protocolo de Desarrollo Híbrido**, manteniendo una sincronización constante entre el entorno de HubSpot y un sitio estático para previsualización y pruebas.

## Stack Tecnológico

-   **CMS**: HubSpot CMS
-   **Frontend**: HTML5, CSS3 (Tailwind CSS), Vanilla JavaScript
-   **Testing**: Playwright (para pruebas de regresión visual)
-   **CI/CD**: GitHub Actions

## Estructura del Repositorio

-   **/app**: Contiene los archivos fuente del HubSpot CMS, incluyendo módulos, plantillas y parciales.
-   **/public**: Alberga la versión estática del sitio para previsualización en GitHub Pages.
-   **/strategy**: Contiene los documentos de planificación estratégica, incluyendo el mapa de estructura del sitio, la estrategia de contenido SEO y los lineamientos de traspaso.
-   **/tests**: Contiene los scripts de prueba de Playwright.
-   **/.github/workflows**: Define los pipelines de CI/CD, incluyendo el flujo de trabajo de regresión visual.

## Comandos Clave

### Instalación

Para instalar las dependencias de desarrollo (para testing), ejecuta:

```bash
npm install
```

### Ejecución de Pruebas

Para ejecutar el set de pruebas de Playwright, utiliza el siguiente comando:

```bash
npx playwright test
```

Asegúrate de tener un servidor web local corriendo y sirviendo el directorio `/public` en `http://localhost:3000`. Puedes usar el siguiente comando para iniciar un servidor:

```bash
npm start
```
