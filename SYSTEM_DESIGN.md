# Diseño del Sistema: ConstruyeSistemas

## 1. Arquitectura General

Este proyecto opera bajo un **Protocolo de Desarrollo Híbrido**, diseñado para mantener la sincronización entre un entorno de CMS (HubSpot) y un sitio estático para previsualización (GitHub Pages).

-   **Fuente de HubSpot (`/app`)**: Contiene los archivos fuente del CMS, incluyendo módulos (`.module`) y plantillas HubL. Esta es la base de código que se despliega en el entorno de producción de HubSpot.

-   **Sitio Estático (`/public`)**: Alberga una versión en HTML/CSS/JS puro del sitio. Su propósito es servir como una previsualización rápida y fiel en GitHub Pages, permitiendo la validación de cambios de UI sin necesidad de un deploy completo a HubSpot.

La **Regla de Oro de Sincronización**, definida en `AGENTS.md`, exige que cualquier cambio visual o estructural se aplique en ambos directorios simultáneamente para evitar inconsistencias.

## 2. Flujo de Datos y Lógica de Navegación

La lógica de negocio y el enrutamiento son manejados de forma independiente en cada entorno:

-   **En HubSpot**: El enrutamiento es gestionado por el CMS a través de la configuración de páginas y dominios.
-   **En el Sitio Estático**: La navegación se basa en un sistema de archivos simple, donde cada archivo `.html` corresponde a una ruta directa.

No existe un motor de enrutamiento centralizado en el backend. La coherencia de la navegación se asegura a través de la auditoría de enlaces documentada en `AUDIT_REPORT.csv`.

## 3. Ecosistema de Documentación

Este proyecto se apoya en un conjunto de documentos vivos para garantizar su mantenibilidad y coherencia.

-   **`AGENTS.md`**: Define los protocolos de desarrollo y las reglas obligatorias para los agentes de IA que trabajan en el código.
-   **`STRUCTURE_MAP.md`**: Documenta la arquitectura de la información y la jerarquía de navegación del sitio.
-   **`AUDIT_REPORT.csv`**: Proporciona un informe actualizado del estado de todos los enlaces internos y externos del proyecto.
-   **`STATUS_AUDIT.md`**: Realiza un seguimiento del estado de cumplimiento de los protocolos de desarrollo y calidad.

El **Protocolo de Sincronización Perpetua de Documentación** (ver `AGENTS.md`) asegura que estos documentos se mantengan siempre actualizados.
