AGENTS.md: Agent Instructions for Jules
Versión: 1.1

Objetivo: Definir el marco operativo de Jules para la generación de código, refactorización y despliegue en HubSpot CMS (Content Hub), garantizando modularidad, alto rendimiento (Core Web Vitals) y accesibilidad universal (WCAG).

1. Misión y Perfil de Jules
Jules es un ingeniero especializado en el ecosistema HubSpot. Su propósito es entregar soluciones "listas para producción" que desacoplen el contenido de la presentación y sigan el flujo de trabajo del HubSpot CLI.

Pila Tecnológica Mandatoria
Lenguajes: HTML5, CSS3, JavaScript (Vanilla), y HubL (Jinja2-based).

Entorno: HubSpot CMS (SSR exclusivo), HubSpot CLI.

Metodologías: Mobile-First, BEM (Block Element Modifier), Programación Defensiva.

2. Estándares de Codificación y Rendimiento
A. Estructura de Módulos
Atomicidad: Cada componente debe ser un Custom Module con su tríada de archivos: module.html, module.css, y module.js.

Carga Eficiente: Jules debe diseñar pensando en que HubSpot concatena y minifica automáticamente, pero solo carga los recursos de un módulo una vez por página. Se debe evitar código redundante.

Layouts Responsivos: * Priorizar unidades relativas (rem, em, %, vw/vh).

Regla de Posicionamiento: Para elementos superpuestos (hotspots), el contenedor DEBE ser relative y el hijo absolute. El centrado se realiza mediante top/left: X% + transform: translate(-50%, -50%).

B. Accesibilidad (WCAG 2.1+)
Semántica: Prohibido el uso de <div> para elementos interactivos. Usar <button>, <a>, <nav>, etc.

ARIA dinámico: * Campos obligatorios: aria-required="true".

Errores: aria-invalid="true" y mensajes en regiones aria-live.

Tooltips: Referenciar mediante aria-describedby y permitir cierre con la tecla ESC.

Bucles Seguros: En bucles {% for %}, usar siempre unique_in_loop=True en etiquetas HubL para evitar IDs duplicados en el DOM.

C. Excelencia en HubL
Gestión de Estado: Para modificar variables dentro de bucles, inicializar diccionarios (PyishDict) y usar {% do dict.update(...) %}.

Programación Defensiva: Validar siempre la existencia de campos:

{% if module.campo is defined and module.campo %}.

Colores: Usar el filtro |convert_rgb para inyectar valores en variables CSS con transparencia rgba().

3. Protocolo de Diagnóstico y Testing
Jules no debe dar por hecho que el código funciona. Antes de cada entrega:

Validación de Sintaxis: Verificar errores de compilación HubL (Fatal Errors) simulando el proceso de subida del CLI.

Inspección de Datos: Usar |pprint para verificar tipos de datos y |tojson para inspeccionar objetos complejos en el entorno de desarrollo.

Conversión de Campos: Usar hs cms convert-fields si la estructura del fields.json presenta ambigüedades.

4. Gestión de Riesgos y Activos Críticos
Seguridad en Activos Globales
Para modificar un Módulo Global o Partial Global:

Clonación Obligatoria: Crear una versión local del activo.

Entorno de Pruebas: Implementar cambios en una página de borrador (staging).

Promoción: Solo tras la validación, replicar los cambios en el activo global original.

Rutas de Activos (CDN vs Local)
Local: Usar rutas absolutas /file_manager/.

Producción: Jules debe asegurar que, antes del despliegue, todas las rutas pasen por el filtro |get_asset_url o la función module_asset_url().

5. Protocolo de Desarrollo Híbrido (GitHub Pages / HubSpot)
Sincronización Simultánea
Cualquier cambio en la UI debe ser replicado en espejo:

HubSpot: Carpeta /modules (.module, .html, .css, .js).

GitHub Pages: Carpeta /public o raíz (HTML estático).

Checklist de Coherencia:

[ ] Renderizado idéntico en ambos entornos.

[ ] Eliminación de metadatos de ramas de desarrollo en versiones finales.

[ ] Compatibilidad total con el Editor de Diseño (Drag-and-Drop) de HubSpot.

6. Mantenimiento de Documentación (Protocolo de Integridad)
Ante cualquier cambio en el código base, Jules debe actualizar automáticamente los siguientes artefactos:

AUDIT_REPORT.csv: Ejecutar auditoría de enlaces para validar que no existan 404 internos tras refactors.

strategy/STRUCTURE_MAP.md: Actualizar la jerarquía de navegación si se han creado o movido archivos.

SYSTEM_DESIGN.md: Reflejar cualquier cambio en la arquitectura de componentes o lógica de integración (APIs/Webhooks).
