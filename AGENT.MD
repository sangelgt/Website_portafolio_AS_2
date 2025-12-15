Agent Instructions for Jules
El propósito de este archivo es guiar a Jules para que genere planes de desarrollo, refactors y código que sigan rigurosamente las convenciones de la plataforma HubSpot CMS y optimicen las métricas de rendimiento y accesibilidad (WCAG). Todas las completions deben ser modulares y listas para ser implementadas a través del HubSpot CLI.
Architecture Overview
Este proyecto se centra en el desarrollo modular de websites para HubSpot CMS (Content Hub), donde el contenido es desacoplado de la presentación.
Pila Tecnológica Principal
• Frontend/View: HTML, CSS, JavaScript, y HubL (el lenguaje de plantillas de HubSpot basado en Jinjava), que se ejecuta exclusivamente en el lado del servidor (SSR).
• Componentes: La lógica del diseño debe residir en Módulos Personalizados (Custom Modules), compuestos por tres archivos principales: module.html (HubL/HTML), module.css y module.js.
• Herramientas de Desarrollo: HubSpot CLI y la extensión de VS Code de HubSpot (para linting local).
• Integración de Datos (Backend): La lógica de negocio y sincronización con bases de datos externas (como Firebase/Firestore, si aplica) se maneja a través de HubSpot Webhooks (para flujo de HubSpot hacia el servidor) y APIs óptimas de HubSpot (para flujo del servidor hacia HubSpot).
Coding Conventions
Jules debe adherirse a los siguientes estándares, enfocados en la calidad, el rendimiento y la accesibilidad, que son críticos en el CMS de HubSpot.
A. Estructura y Rendimiento
1. Modularidad (Archivos): Asegurar que module.css y module.js se carguen de forma eficiente. HubSpot carga estos archivos una sola vez por página, independientemente de cuántas veces se use el módulo, y esto debe ser explotado para el rendimiento.
2. CSS Responsivo: Seguir la metodología Mobile-First. Utilizar unidades de medida relativas (%, em, rem, vw/vh) en lugar de píxeles fijos (px) para asegurar la fluidez del diseño.
3. Posicionamiento Absoluto: Para la superposición de elementos (hotspots, títulos) sobre una imagen o contenedor responsive:
    ◦ El contenedor principal debe tener position: relative;.
    ◦ Los elementos flotantes deben usar position: absolute; con coordenadas porcentuales (top: Y%; left: X%;).
    ◦ Para el centrado preciso, aplicar siempre transform: translate(-50%, -50%); al elemento posicionado absolutamente.
B. Accesibilidad (A11y/ARIA)
El código generado debe cumplir con los estándares WCAG.
1. Marcado Semántico: Utilizar elementos HTML semánticos (<header>, <main>, <nav>, <footer>) para comunicar la estructura del contenido a las tecnologías asistivas. Evitar el uso de <div> para elementos interactivos.
2. Formularios y Validación:
    ◦ Campos Requeridos: Marcar los campos de formulario obligatorios (que son visibles) con el atributo aria-required="true".
    ◦ Errores de Validación: Si un campo falla la validación, establecer aria-invalid="true".
    ◦ Notificación de Errores: Para mensajes de error generados dinámicamente, utilizar role="alert" o regiones vivas (aria-live) para asegurar que el lector de pantalla anuncie el error sin que el usuario tenga que cambiar el foco.
3. Tooltips y Descripciones:
    ◦ El contenido flotante contextual (que no contiene elementos interactivos) debe tener role="tooltip".
    ◦ El elemento que activa el tooltip (el hotspot o campo) debe usar aria-describedby para referenciar el ID del elemento con el rol tooltip.
    ◦ Asegurar que los tooltips puedan cerrarse presionando la tecla Escape.
4. IDs Únicos en Bucles: Si se utiliza un bucle ({% for %}) para generar elementos interactivos (como íconos repetibles), se debe usar el parámetro unique_in_loop=True en las etiquetas HubL para generar IDs de HTML válidos y únicos, lo cual es vital para ARIA y JavaScript.
C. Convenciones HubL
1. Manejo de Variables Mutables: Debido a las reglas de scoping de Jinjava/HubL, las variables definidas con {% set %} fuera de un bucle no pueden ser modificadas dentro de él. Para modificar diccionarios (arrays o contadores) dentro de un bucle, se debe inicializar la variable como un diccionario (PyishDict) y usar la etiqueta {% do %} junto con el método .update().
2. Programación Defensiva: Antes de acceder a una propiedad de un objeto (ej. module.campo.propiedad), se debe validar que la variable exista o no sea nula, usando {% if variable is defined %} o el filtro |default para prevenir errores de compilación o runtime.
3. Inyección de Estilos: Usar el filtro |convert_rgb para integrar valores de campos de color de HubSpot en declaraciones CSS rgba() que manejan transparencia.
Running Tests
Jules debe verificar los cambios y diagnosticar fallos utilizando los siguientes comandos y herramientas nativas de HubSpot:
• Detección de Errores Fatales (Pre-Publicación): Antes de intentar un upload, Jules debe asumir que la extensión de VS Code ya verificó el código. Si se realiza un intento de upload con el HubSpot CLI, el terminal detectará y prevenirá la subida de cualquier archivo que contenga un Error Fatal (errores de compilación HubL).
• Diagnóstico de Datos y Tipo de Variable: Si la lógica de HubL falla (e.g., un filtro no funciona), Jules debe usar el filtro |pprint para imprimir el tipo de dato exacto de la variable (e.g., PyishDate o String) y asegurarse de que está aplicando filtros compatibles.
• Inspección de Objetos Complejos: Para examinar la estructura de objetos grandes (como los datos de un módulo o un resultado de API), usar el filtro |tojson.
• Debugging Detallado de Módulos: Si un módulo con funcionalidad compleja (ej. campos JavaScript) devuelve un error ambiguo, Jules debe usar el comando hs cms convert-fields en la CLI para convertir la configuración a formato JSON. Esto proporciona un error más detallado sobre la falla estructural o de sintaxis.
Common Tasks: Desarrollo Seguro de Activos Críticos
Para cualquier modificación o refactor de componentes de alto impacto, Jules debe seguir este protocolo de seguridad operacional:
1. Modificación de Activos Globales: Si la tarea implica editar un Módulo Global o un Parcial Global (componentes reutilizados en múltiples páginas), Jules no debe modificar el activo original directamente.
2. Flujo de Trabajo: Jules debe clonar el Módulo Global a un ámbito local (Local Module).
3. Pruebas Aisladas: Realizar todos los cambios y pruebas en la versión clonada dentro de un entorno de pruebas (staging/draft page).
4. Promoción Controlada: Una vez verificada la estabilidad del código en el clon, aplicar los cambios al activo Global original, minimizando el riesgo de un impacto generalizado en el sitio.
5. Conversión de Rutas de Archivos: Al desarrollar localmente, para cargar imágenes en el servidor proxy local (HubL server), se debe usar la convención de ruta absoluta: <img src="/file_manager/ruta/a/imagen.png" />. Sin embargo, antes de la publicación final en el CMS, estas rutas deben ser convertidas para usar el filtro get_asset_url() o la función module_asset_url() para que apunten correctamente a la CDN de HubSpot en producción. La discrepancia entre /file_manager/ (local) y get_asset_url() (producción) es un punto crítico de fallo que requiere atención manual o automatizada.
