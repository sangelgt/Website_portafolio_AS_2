# SYSTEM_DESIGN.md: Manual Maestro de Arquitectura y Estrategia
**Versión: 2.0**

## 1. Visión Estratégica y Arquitectura General

### 1.1. Propósito Central: La Crisis del ROI en IA
El núcleo de este proyecto es resolver la "crisis del ROI" en la Inteligencia Artificial, donde se estima que el 95% de los pilotos tecnológicos fracasan en generar resultados financieros medibles. Nuestra misión es cambiar el paradigma: dejar de "comprar herramientas de IA" para empezar a **"construir sistemas de rentabilidad"**.

### 1.2. Protocolo de Desarrollo Híbrido
Este proyecto opera bajo un **Protocolo de Desarrollo Híbrido**, manteniendo una sincronización estricta entre el entorno de HubSpot CMS (`/app`) y un sitio estático de previsualización (`/public`). La **Regla de Oro de Sincronización** (definida en `AGENTS.md`) es mandatoria: todo cambio de UI debe replicarse en ambos entornos simultáneamente.

### 1.3. Ecosistema de Documentación
La integridad del proyecto se mantiene a través de un conjunto de documentos vivos, regidos por el **Protocolo de Sincronización Perpetua de Documentación**:
-   **`AGENTS.md`**: Protocolos operativos para agentes de IA.
 feat/documentation-synchronization-12119633349580291143
-   **`strategy/STRUCTURE_MAP.md`**: Arquitectura de la información.
 main
-   **`AUDIT_REPORT.csv`**: Estado de todos los enlaces internos/externos.
-   **`STATUS_AUDIT.md`**: Cumplimiento de protocolos de calidad.

## 2. Arquitectura de la Información y Experiencia de Usuario (UX)

### 2.1. Mapa del Sitio Estratégico
La estructura del sitio está diseñada como un embudo de conversión para guiar al usuario desde la validación del problema hasta la solicitud de un diagnóstico personalizado. Las páginas clave son:
1.  **Inicio (Home)**: Captura la necesidad y valida la frustración del cliente.
2.  **Casos de Éxito**: Construye confianza a través de análisis "Post-Mortem" transparentes.
3.  **Metodología**: Explica el sistema "Orden antes que Herramienta".
4.  **Recursos**: Proporciona activos de conocimiento para evitar la "amnesia organizacional".
5.  **Diagnóstico Estratégico**: Convierte al usuario ofreciendo un cálculo de ROI personalizado.

### 2.2. Jerarquía de Llamadas a la Acción (CTAs)
Para guiar al usuario de forma clara, se utiliza una jerarquía visual estricta:
-   **CTA Primario**: Botón púrpura oscuro sólido (`#7f13ec`). Reservado para acciones de conversión críticas (ej. "Calcula tu Potencial de ROI").
-   **CTA Secundario**: Botón con contorno (outline) púrpura. Utilizado para acciones de exploración que no deben interrumpir el flujo principal (ej. "Explorar nuestro proceso").

## 3. Diseño Visual y Estrategia de Contenido

### 3.1. Estética y Jerarquía Visual
La interfaz sigue una estética "brutalist tech" limpia y funcional, con un tema oscuro (`#050505` de fondo) para maximizar el impacto del contenido.
-   **Tipografía**: Uso exclusivo de fuentes sans-serif (ej. 'Space Grotesk') para legibilidad.
-   **Jerarquía de Encabezados**:
    -   `<h1>`: Mensaje central de alto impacto. Solo uno por página.
    -   `<h2>`: Títulos de las secciones principales.
    -   `<h3>`: Detalles de pilares metodológicos y datos.

### 3.2. Tono de Voz y Fórmula de Contenido (PAS)
El tono de voz es profesional, experto y orientado a resultados de negocio (estilo McKinsey/Gartner). Se utiliza la fórmula **PAS (Problema-Agitación-Solución)** para estructurar el contenido, especialmente en la página de inicio.

### 3.3. Micro-copy y UX Writing
El micro-copy está diseñado para reducir la fricción y guiar al usuario, con mensajes claros en formularios (ej. "Tu correo está seguro. Odiamos el spam tanto como tú") y CTAs orientados a la acción (ej. "Obtener mi Diagnóstico de ROI").

## 4. Especificaciones Técnicas y de Desarrollo

### 4.1. Cumplimiento de Accesibilidad (WCAG 2.2 Nivel AA)
El proyecto debe ser universalmente accesible. Es mandatorio cumplir con:
-   **Contraste**: Ratio mínimo de 4.5:1 para texto y componentes interactivos.
-   **Navegación por Teclado**: El orden de tabulación debe ser lógico y predecible (Criterio 2.4.3).
-   **Semántica HTML**: Uso estricto de etiquetas semánticas (`<nav>`, `<main>`, `<button>`) y jerarquía de encabezados correcta.
-   **ARIA**: Uso de `aria-required`, `aria-invalid` y regiones `aria-live` para comunicar estados dinámicamente.

### 4.2. Implementación de Formularios
Los formularios son un punto de conversión crítico y deben ser "inteligentes":
-   **Etiquetado Semántico**: Uso correcto de `<label>` para cada `<input>`.
-   **Autocompletado**: Implementación obligatoria de atributos `autocomplete` para minimizar el esfuerzo cognitivo del usuario.

## 5. Gobernanza del Sistema y Metodología

### 5.1. Metodología: "Orden antes que Herramienta"
El principio fundamental del proyecto. No se automatiza el desorden; primero se orquestan los procesos de negocio y luego se aplica la tecnología de IA para servir a objetivos medibles.

### 5.2. El Rol del "AI Owner"
Se define la figura del **AI Owner** como el responsable de negocio encargado de las métricas de éxito del sistema: horas liberadas, reducción de costes y ROI del capital invertido. Su presencia es un factor crítico de éxito.

### 5.3. Gestión del Conocimiento
Para combatir la "amnesia organizacional", todas las lecciones aprendidas de cada implementación se sistematizan y convierten en activos de conocimiento (guías, artículos), disponibles en la sección de **Recursos**.
