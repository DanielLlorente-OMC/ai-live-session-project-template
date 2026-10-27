# Herramientas y skills: para qué y cuándo

Prepararlas en el paso 4 no significa ejecutarlas todas a la vez. No se han instalado nuevas skills como parte de esta documentación.

## Interface Design

- Tipo: Skill; también disponible como plugin con comandos.
- Para qué: Definir jerarquía, tipografía, espaciado, componentes y coherencia visual.
- Cuándo: Pasos 5 y 6: construir y refinar. Volver a usarla en 8 y 9 para mantener el sistema visual.
- Alcance: Base del ejercicio, si el agente es compatible. No conecta Figma ni ejecuta un navegador.
- Fuente: https://github.com/Dammyjay93/interface-design

## Playwright CLI + skill asociada

- Tipo: Herramienta ejecutable y guía para utilizarla.
- Para qué: Abrir el HTML, revisar tamaños de pantalla, interactuar y capturar evidencia.
- Cuándo: Pasos 5 y 6: primera revisión. Pasos 8 y 9: comparar capturas y probar cambios. Paso 10: comprobación final.
- Alcance: Preparar en paso 4; ejecutar solo si hay terminal y navegador disponibles. No inspecciona Figma por sí sola.
- Fuente: https://github.com/microsoft/playwright-cli

## Web Design Guidelines · Vercel

- Tipo: Skill opcional de revisión.
- Para qué: Revisar el código de interfaz frente a pautas web, incluidos aspectos de accesibilidad.
- Cuándo: Después de aprobar el aspecto en paso 6, o antes de cerrar en paso 10. Repetir si el plus del paso 9 cambia controles o estados.
- Alcance: Solo si queda tiempo. No sustituye las pruebas en navegador ni acredita una auditoría completa.
- Fuente: https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines

## Figma: conexión independiente

Comprobar acceso y permisos en paso 4; utilizar las herramientas y las instrucciones de Figma disponibles en pasos 8 y 9 para crear elementos editables, componentes y actualizar el diseño. No instalar una supuesta skill universal de Figma: cada agente debe identificar la integración y el flujo que realmente tenga disponibles.

## Regla para futuras incorporaciones

Antes de añadir una skill, documentar nombre, fuente, tipo, objetivo, paso de uso, requisitos, resultado esperado y si es opcional. Añadirla solo si resuelve una necesidad del ejercicio.
