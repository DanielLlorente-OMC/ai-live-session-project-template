# Píldoras de conocimiento

## Paso 1 - Cuenta, Git y GitHub

La cuenta identifica quién eres. Git guarda el historial; GitHub aloja repositorios. Crear una cuenta no instala Git ni crea un proyecto.

## Paso 2 - Local y nube

Comprueba dónde están los archivos y cómo conservarlos. Un chat no siempre dispone de archivos, terminal o navegador, sea local o remoto.

## Paso 3 - Prompt, contexto y agente

El prompt explica la tarea; el contexto aporta fuentes y decisiones. El agente combina modelo, instrucciones y herramientas para actuar. Centro de Control es el rol de este chat; el nombre no le concede capacidades.

## Paso 4 - Skill, CLI, conector y plugin

Una skill aporta instrucciones reutilizables; una CLI es un programa que ejecuta comandos. Un conector permite trabajar con un servicio y sus permisos. Un plugin empaqueta capacidades. El agente utiliza estas piezas; una skill no es otro agente.

## Paso 5 - HTML, CSS y JavaScript

HTML estructura contenido, CSS define la apariencia y JavaScript aporta comportamiento. Una home con datos ficticios no necesita un backend.

## Paso 6 - Iterar y usar tokens

Cambia una cosa cada vez y comprueba si mejora la pantalla. Los tokens son valores con nombre, cómo color de acción o radio de botón, que permiten mantener coherencia.

## Paso 7 - Commit y push

Un commit guarda una versión local; push la envía al repositorio remoto. Privado limita el acceso, pero no sustituye revisar los archivos que subes.

## Paso 8 - Editable y reutilizable

Una captura es una imagen; una home editable contiene elementos y texto modificables. Estilos, variables y componentes reutilizan decisiones. Una librería local no es automáticamente una biblioteca de equipo publicada.

## Paso 9 - Revisar aspecto y comportamiento

Playwright comprueba el navegador; las herramientas de Figma inspeccionan el diseño. Compara ambos y prueba teclado, estados y movimiento reducido. La lógica HTML no se transfiere automáticamente a Figma.

## Paso 10 - Construido, comprobado y guardado

Son estados distintos: existen archivos, has revisado el resultado y tienes una copia recuperable. Registra que hay en HTML, Figma y GitHub. Los checks de la guía solo se guardan en este navegador.

## Fuentes y ampliación

Playwright CLI es herramienta con skill asociada. Interface Design contiene una skill y puede distribuirse cómo plugin con comandos; no implica agentes autónomos. Web Design Guidelines de Vercel es una tercera skill opcional para revisión de interfaz y accesibilidad. Figma requiere un conector independiente.

Consultado el 27/10/2026:
- https://github.com/microsoft/playwright-cli
- https://github.com/Dammyjay93/interface-design
- https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines
- https://developers.openai.com/plugins/concepts/skills


## Ampliación de GitHub para principiantes

GitHub aloja proyectos y facilita compartirlos. Un repositorio reúne archivos e historial. Git gestiona versiones; GitHub las aloja. Una rama permite desarrollar una mejora separada de la principal; merge integra cambios y una pull request propone revisarlos en GitHub. Commit guarda una versión local, push la envía y pull trae e integra cambios remotos. En esta primera práctica basta trabajar en main.

Las píldoras se muestran después del control de paso completado. El control conserva su checkbox accesible y progreso local, con una representación circular.


# Ejemplos y recursos complementarios

## Paso 1 - Un ejemplo sencillo

Tu repositorio puede contener la home, sus estilos, las referencias y decisiones. Cada commit sirve de hito: primera home, cambio de paleta y ajuste responsive. Una rama permite probar una alternativa sin modificar directamente la principal. En esta primera práctica basta main.

[GitHub desde cero: repositorios, ramas y cambios](https://docs.github.com/en/get-started/using-github/hello-world)

## Paso 2 - Clonar o descargar un ZIP

Clonar trae los archivos y su historial Git. Un ZIP contiene una copia de los archivos, sin ese historial. Ambos sirven para empezar este ejercicio; más adelante prepararemos tu repositorio privado. Copiar el proyecto no concede permiso para escribir en el original.

[Cómo clonar un repositorio](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)

## Paso 3 - Qué conviene contarle al Centro de Control

Explica objetivo, fuentes, ubicación de archivos y como sabras que esta terminado. Por ejemplo: una home, datos ficticios, sin backend y revisión en móvil. Pidele distinguir lo que propone de lo que realmente ha ejecutado y conservar decisiones en los archivos del proyecto.

[Que es una skill y como complementa las herramientas](https://developers.openai.com/plugins/concepts/skills)

## Paso 4 - Instalar no es comprobar

Revisa por separado que la skill esté disponible, que la herramienta pueda ejecutarse y que tenga acceso a los archivos. Usa Interface Design para construir y refinar; Playwright para comprobar la pantalla y los estados. Preparar herramientas no debe consumir el tiempo de construir.

[Documentación de Playwright CLI](https://github.com/microsoft/playwright-cli)

## Paso 5 - Qué archivos estás creando

index.html define la estructura, styles.css su apariencia y script.js el comportamiento que necesites. Usa rutas relativas para los recursos. Una maqueta bonita no implica que un formulario envíe datos o que un login funcione: aqui no hay servicios conectados.

[Tu primera web: guía de MDN](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)

## Paso 6 - Cómo dar feedback util

En lugar de pedir que quede mejor, concreta: reduce el espacio entre título e imagen; sustituye este módulo por una lista; cambia la tipografía manteniendo la jerarquía. Revisa un cambio cada vez. Si eliges una fuente externa, define también una alternativa para cuando no cargue.

[Aprender sobre tipografía en Google Fonts](https://fonts.google.com/knowledge)

## Paso 7 - Antes de subir

Comprueba destino y visibilidad privada. Revisa la lista de archivos, excluye claves y archivos personales y escribe un mensaje de commit concreto. Si trabajas desde una copia clonada del curso, el remoto inicial puede seguir apuntando al repositorio común: hay que cambiarlo antes del push.

[Practicar commits y pull requests](https://docs.github.com/en/get-started/using-github/hello-world)

## Paso 8 - Componentes e instancias

Un componente define un elemento reutilizable, como un botón; sus instancias permiten repetirlo conservando una base común. Empieza por pocos elementos: botón, tarjeta y navegación. Conserva nombres coherentes con los estilos del HTML y comprueba que la fuente está disponible.

[Guía de componentes de Figma](https://help.figma.com/hc/en-us/articles/360038662654-Guide-to-components-in-Figma)

## Paso 9 - Una microinteracción con sentido

Elige un detalle que responda a una acción: guardar una receta, activar un filtro o confirmar un paso. Comprueba el estado inicial, el resultado y como deshacerlo. Usa una alternativa sin movimiento y no dependas solo del color para explicar el cambio.

[Web Design Guidelines: revisión opcional](https://github.com/vercel-labs/agent-skills/tree/main/skills/web-design-guidelines)

## Paso 10 - Deja el proyecto listo para retomarlo

Guarda una nota con la ruta de apertura, el enlace a Figma, el último resultado revisado y el siguiente paso. Si otra persona tuviera que abrirlo mañana, deberia entender que funciona y que falta sin reconstruir toda la conversación.

[Volver al repositorio del taller](https://github.com/DanielLlorente-OMC/ai-live-session-project-template)

