# AGENTS.md

## PROTOCOLO DE DESARROLLO HÍBRIDO

### Regla de Oro de Sincronización
Cualquier modificación en componentes de UI (Header, Footer, Botones, Layouts) DEBE aplicarse simultáneamente en:

- **Directorio de HubSpot:** Archivos .module o plantillas dentro de la carpeta /modules.
- **Directorio Estático:** Archivos .html en la raíz o carpeta `/public` destinados a GitHub Pages.

### Instrucciones de Codificación
- **Tecnologías Permitidas:** Evitar el uso de sintaxis de React/JSX. El código debe ser escrito en HTML5, CSS3 (Tailwind/Plano), JavaScript Vanilla y HubL (HubSpot Markup Language).
- **Estilos Compartidos:** Los estilos deben ser compartidos o replicados para garantizar que el renderizado sea idéntico en ambos entornos.

### Validación de Coherencia
Checklist obligatorio para cada tarea de UI:

- [ ] ¿El cambio se refleja en la vista previa de GitHub Pages?
- [ ] ¿El código es compatible con el editor de diseño de HubSpot?
- [ ] ¿Se han eliminado metadatos de ramas de desarrollo (branch-names) en la versión final?

## PROTOCOLO DE SINCRONIZACIÓN PERPETUA DE DOCUMENTACIÓN

### Regla de Coherencia Automatizada
Ante cualquier cambio en archivos de código, rutas o configuración del proyecto, es **obligatorio** ejecutar un protocolo de auditoría y actualización para mantener la coherencia entre el código base y la documentación del sistema.

### Acciones Mandatorias del Agente
El agente debe re-escanear y verificar la integridad de los siguientes artefactos de documentación:

1.  **`AUDIT_REPORT.csv`**: Re-ejecutar el script de auditoría de enlaces para validar todos los destinos internos y externos, y actualizar el reporte.
2.  **`STRUCTURE_MAP.md`**: Validar que la jerarquía de navegación documentada coincide con la estructura de enlaces y archivos actual.
3.  **`SYSTEM_DESIGN.md`**: Asegurar que las descripciones de componentes y la arquitectura general del sistema reflejen los cambios implementados.

Este protocolo garantiza que la documentación sea un reflejo fiel y actualizado del estado del proyecto en todo momento.
