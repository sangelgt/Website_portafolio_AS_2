# INVENTARIO TÉCNICO DE MÓDULOS

Este documento realiza un escaneo profundo de la arquitectura del repositorio, detallando los módulos, lógica, dependencias y animaciones de cada página del proyecto.

## Elementos Globales (Shared Components)

| Módulo | Ubicación | Utilidad y Funciones | Dependencias | Animación Implementada |
| :--- | :--- | :--- | :--- | :--- |
 fix/responsive-layout-recursos-11270512732813222217
| Responsive Header | `app/templates/partials/header.html` | Encabezado principal del sitio, con menú de escritorio y menú de hamburguesa para móviles. | `main.js` para la funcionalidad del menú móvil. | Transiciones de color en hover (`transition-colors`) |
| Footer | `app/templates/partials/footer.html` | Pie de página principal del sitio, con enlaces y copyright. | Google Fonts (iconos) | `animate-pulse` en el indicador de estado. |

## Página: Index

| Módulo | Ubicación | Utilidad y Funciones | Dependencias | Animación Implementada |
| :--- | :--- | :--- | :--- | :--- |
 fix/responsive-layout-recursos-11270512732813222217
| Hero Banner | `app/modules/hero_banner.module` | Banner principal de la página de inicio, con imagen de fondo, titular y CTA. | Globales | `animate-pulse` en el indicador de estado. `glitch-hover` en el botón de diagnóstico. |
| Stats & Services | `app/templates/index.html` | Sección de tarjetas con estadísticas y servicios. | Globales | `animate-spin` en el icono de procesamiento. Transiciones de color en hover. |
| Clients / Grid | `app/templates/index.html` | Rejilla de logotipos de clientes. | Globales | Transiciones de opacidad y color en hover. |
| Case Study Grid | `app/templates/index.html` | Rejilla de estudios de caso. | Globales | `group-hover:scale-105` en las imágenes. Transiciones de color en hover. |
| CTA Section | `app/templates/index.html` | Sección de llamada a la acción. | Globales | `glitch-hover` en el botón de auditoría. |

## Página: Metodología

| Módulo | Ubicación | Utilidad y Funciones | Dependencias | Animación Implementada |
| :--- | :--- | :--- | :--- | :--- |
| Hero Section | `app/templates/methodology.html` | Encabezado principal de la página de metodología. | Globales | `animate-pulse` en el indicador de estado. |
| Strategic Pillars | `app/templates/methodology.html` | Rejilla de pilares estratégicos. | Globales | `group-hover:scale-105` en las imágenes. Transiciones de color en hover. |
| CTA Section | `app/templates/methodology.html` | Sección de llamada a la acción. | Globales | `blink` en el cursor del botón. Transiciones de opacidad y color en hover. |

## Página: Recursos

| Módulo | Ubicación | Utilidad y Funciones | Dependencias | Animación Implementada |
| :--- | :--- | :--- | :--- | :--- |
| Page Header | `app/templates/recursos.html` | Encabezado principal de la página de recursos. | Globales | Transiciones de color en hover en el botón de filtro. |
| Chips / Categories | `app/templates/recursos.html` | Barra de filtros de categorías. | Globales | Transiciones de color en hover. |
| Featured Section | `app/templates/recursos.html` | Rejilla de tarjetas de casos de éxito. | Globales | `group-hover:-translate-y-1` en las tarjetas. Transiciones de color en hover. |
| List Section | `app/templates/recursos.html` | Lista de cargas recientes. | Globales | Transiciones de color en hover en los elementos de la lista y botones. |

## Página: Case Study

| Módulo | Ubicación | Utilidad y Funciones | Dependencias | Animación Implementada |
| :--- | :--- | :--- | :--- | :--- |
| Case Study Hero | `app/templates/case-study.html` | Encabezado principal del estudio de caso. | Globales | Ninguna. |
| Results Grid | `app/templates/case-study.html` | Rejilla de resultados y métricas. | Globales | Transiciones de color en hover. |
| Timeline | `app/templates/case-study.html` | Línea de tiempo del proyecto. | Globales | Ninguna. |
| Transparency Section | `app/templates/case-study.html` | Sección de transparencia y post-mortem. | Globales | Transiciones de color en hover. |
| CTA Banner | `app/templates/case-study.html` | Banner de llamada a la acción. | Globales | `glitch-hover` en el botón. |

## Página: Diagnostics

| Módulo | Ubicación | Utilidad y Funciones | Dependencias | Animación Implementada |
| :--- | :--- | :--- | :--- | :--- |
| Diagnostics Hero | `app/templates/diagnostics.html` | Encabezado principal de la página de diagnóstico. | Globales | Ninguna. |
| Form Section | `app/templates/diagnostics.html` | Formulario de diagnóstico. | Globales | `animate-pulse` en el indicador de estado. |

---

## Recomendaciones de Optimización y Control

Aquí se detallan las recomendaciones estratégicas basadas en el análisis de la arquitectura actual.

### 1. Identificación de Redundancias
*   **Análisis:** El proyecto utiliza una única fuente de iconos (Google Fonts - Material Symbols) y un único framework de estilos (Tailwind CSS), lo cual es óptimo. No se detectaron librerías redundantes.
*   **Recomendación:** Mantener la disciplina de utilizar un único proveedor para iconos y un único framework de UI para evitar la carga de activos duplicados y mantener la consistencia del diseño.

### 2. Sugerencias de Code-Splitting (Carga Diferida)
*   **Análisis:** Actualmente, todas las dependencias de CSS y fuentes se cargan de forma global en `base.html`. El único script cargado de forma diferida es `header.module.js` (usando `defer`), lo cual es una buena práctica.
*   **Recomendación:** No se requiere `code-splitting` a nivel de JavaScript, ya que el proyecto no utiliza módulos pesados específicos de cada página. La estrategia actual de carga global es eficiente para la escala del proyecto.

### 3. Optimización de Animaciones
*   **Análisis:** Las animaciones implementadas son en su mayoría transiciones de CSS (`transition-colors`, `transform`) y animaciones de Tailwind (`animate-pulse`, `animate-spin`). La animación `glitch-hover` es una animación de `transform` personalizada.
*   **Recomendación:** Las animaciones actuales son de bajo riesgo para el rendimiento, ya que se basan principalmente en las propiedades `transform` y `opacity`, que son eficientes y no provocan `layout shifts` (CLS). El `Cumulative Layout Shift` del sitio es bajo. No se requieren optimizaciones críticas en este momento.
