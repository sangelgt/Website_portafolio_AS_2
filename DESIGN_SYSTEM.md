# DESIGN_SYSTEM.md

## 1. Identidad Visual

### Colores

- **Primario/Acento (Naranja):** `#f27f0d` (para botones CTA y elementos interactivos)
- **Fondo (Más Oscuro):** `#221910` (para el fondo principal de las secciones)
- **Superficie (Claro):** `#2c2117` (para tarjetas, contenedores y áreas de contenido)
- **Texto (Principal):** `#FFFFFF`
- **Texto (Secundario):** `#CCCCCC`

### Tipografía

- **Encabezados:** "Inter", sans-serif
- **Cuerpo de Texto:** "Noto Sans", sans-serif
- **Iconografía:** "Material Symbols Outlined"

## 2. Especificación de Animaciones

### Scroll-Reveal (Efecto de Entrada)

- **Lógica:** Los elementos deben aparecer gradualmente al entrar en el viewport durante el scroll.
- **Implementación:**
  - **Estado Inicial:** `opacity: 0; transform: translateY(20px);`
  - **Estado Final:** `opacity: 1; transform: translateY(0);`
  - **Transición:** `transition: opacity 0.5s ease-out, transform 0.5s ease-out;`
- **Comportamiento de Salida:** Al salir del viewport, los elementos deben resetearse a su estado inicial para que la animación se repita si el usuario vuelve a hacer scroll hacia arriba.

## 3. Corrección de Errores Históricos

- **Instancia Única del Header:** El componente del encabezado (`Header`) debe ser una instancia única en todas las plantillas. Se debe evitar la duplicación o la carga de múltiples versiones para prevenir distorsiones visuales y problemas de rendimiento.
- **Sistema de Plantillas Sincronizadas:** Este proyecto es un sistema de plantillas sincronizadas, no una aplicación de React. Todos los cambios en los componentes globales deben reflejarse tanto en los módulos de HubSpot como en los archivos estáticos de GitHub Pages.

## 4. Estructura de Despliegue

- **Activos Estáticos:** Todos los activos estáticos para producción (imágenes, fuentes, etc.) deben residir en la carpeta `/public` del repositorio. El workflow de despliegue está configurado para leer desde esta ubicación.
