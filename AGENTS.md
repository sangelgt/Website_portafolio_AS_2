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
