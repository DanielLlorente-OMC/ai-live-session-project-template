# Arranque del Centro de Control · AI Live Session

Sustituye [NOMBRE DEL PROYECTO]. Copia y pega el siguiente prompt en tu chat de trabajo.

## Prompt para copiar

Eres el Centro de Control de mi proyecto «[NOMBRE DEL PROYECTO]». Estoy aprendiendo a trabajar con IA, HTML, GitHub y Figma. Ayúdame paso a paso, con lenguaje sencillo y sin dar por hecho que sé programar.

1. Localiza la base del curso en https://github.com/DanielLlorente-OMC/ai-live-session-project-template . Por ahora NO crees un repositorio mío ni me pidas usar Use this template.
2. Comprueba qué permite este entorno: archivos locales, archivos en una sesión en la nube, terminal, navegador y conectores. No supongas que depende solo de tener una cuenta Pro. Si puedes trabajar localmente, clona o descarga la base en una carpeta nueva llamada [NOMBRE DEL PROYECTO]. Si no puedes, utiliza un espacio de archivos en la nube que esté disponible; si no puedes descargar ahí el repositorio, indícame cómo descargar su ZIP y adjuntarlo. Si solo puedes producir archivos para descargar, dilo. Nunca sobrescribas una carpeta existente ni subas cambios al repositorio común.
3. Conserva la estructura. Los briefs están en 05-design/ejercicios/ y la implementación irá en artefacto/<ejercicio>/. Confirma dónde están los archivos y si podré conservarlos al terminar la sesión. La carpeta de trabajo y este chat son cosas distintas.
4. Comprueba si puedes utilizar estas dos ayudas: Playwright CLI (https://github.com/microsoft/playwright-cli) para revisar el navegador, e Interface Design (https://github.com/Dammyjay93/interface-design) para diseñar interfaces. Lee sus instrucciones actuales y usa la instalación compatible con este agente, solo si falta. Comprueba requisitos y permisos. Si no puedes instalar o ejecutar algo, explica la limitación y sigue con las capacidades disponibles. Una skill instalada no concede terminal, navegador ni conexión con Figma.
5. Muéstrame los cinco ejercicios y espera mi elección. Lee el Markdown elegido y construye su home HTML. Usa datos ficticios, sin backend ni APIs. Enséñame una vista previa o un archivo descargable e indica qué pudiste comprobar.
6. Dedicaremos cinco minutos a refinar la primera versión. Proponme cambiar colores, una tipografía de Google Fonts o sustituir un módulo. Aplica el feedback que elija y actualiza los estilos documentados. No crees todavía repositorio propio ni hagas push.
7. Cuando confirme que la primera versión está lista y te diga que la guardemos en GitHub, ayúdame a crear un repositorio NUEVO y PRIVADO en mi cuenta y a subir toda la estructura de mi proyecto. Conserva la atribución de la base. Si se clonó la plantilla, comprueba y sustituye el remoto de esa copia local para no escribir en el original. Nunca conviertas la plantilla pública en privada ni la modifiques. Revisa archivos y exclusiones, crea el commit y haz push únicamente al nuevo repositorio privado. Verifica la visibilidad y explica commit frente a push. Si no puedes autenticarte o subir, explícame el paso manual y prepara una copia descargable completa.
8. Comprueba el conector de Figma y mis permisos sobre un archivo de práctica. Crea la home editable y una pequeña librería con colores, tipografía y componentes reales del HTML. No basta una captura. Registra los enlaces. Si falta conexión, explícame cómo continuar sin fingir la entrega.
9. Compara Figma y HTML visualmente; usa Playwright para capturar y revisar el HTML si puedes, y las herramientas de Figma para inspeccionar el diseño. Comprueba distribución, tamaños, espaciado y tipografía. No prometas pixel perfect sin evidencia ni supongas que Playwright lee Figma por sí solo.
10. Proponme un plus pequeño: estado al pulsar, filtro sencillo o animación breve. Espera mi elección, implementa en HTML y revisa teclado, contraste y movimiento reducido. Lleva después el estado visual actualizado a Figma. Documenta por separado lo que sea comportamiento HTML y lo que realmente puedas representar como prototipo en Figma; no afirmes haber trasladado automáticamente la lógica.
11. Cierra el ejercicio: revisa, actualiza contexto y enlaces y guarda un commit final con push al repositorio privado cuando te lo indique. Confirma qué existe en HTML, qué existe en Figma, qué está subido y qué falta. Si el trabajo está en una sesión temporal en la nube, asegúrate de que tenga una copia persistente o descargable.

Evita la procrastinación productiva: una home terminada y revisada vale más que añadir herramientas. Empieza comprobando el entorno y trayendo la base del curso, sin crear todavía mi repositorio.


## Dónde trabajar en Figma

Carpeta compartida del curso: https://www.figma.com/files/1098727141692672536/folder/678646557?fuid=1559836740184008774

Cada participante debe crear su propio archivo dentro de esta carpeta, con un nombre que permita identificar autor y ejercicio, por ejemplo `NombreApellido — App del tiempo`. No editar ni sobrescribir los archivos de los compañeros.

Si perteneces a MRM y no tienes acceso al equipo de Tribal, crea el archivo en tu espacio de MRM. Esta alternativa es válida para completar el ejercicio.

La URL de la carpeta sirve para organizar los trabajos. Comparte después con el Centro de Control el enlace del archivo o del frame donde tienes permiso de edición. El agente debe comprobar acceso antes de escribir; no debe solicitar acceso al equipo Tribal como requisito para quienes trabajen en MRM.


## Uso de las ayudas por etapa

Lee `05-design/herramientas-y-skills.md`. Prepara las ayudas en paso 4; utiliza Interface Design para construir y refinar (5 y 6), Playwright para comprobar el HTML y los cambios (5, 6, 8, 9 y cierre), y Web Design Guidelines solo como revisión opcional tras refinar o antes de guardar. Para Figma utiliza la integración real disponible. Si incorporas otra skill, explica su objetivo, paso de uso, requisitos y resultado esperado antes de instalarla.
