# Pulso · Home de una app de entrenamiento

## Referencia visual

[Fitness App Design](https://dribbble.com/shots/25273044-Fitness-App-Design) — Nixtio, Dribbble. Referencia de inspiración, no asset para copiar. Enlace y descripción consultados el 27/10/2026; imagen completa pendiente de revisión visual. Antes de construir, abre el shot si tu herramienta permite inspeccionarlo. Si no puedes verlo, dilo y sigue la dirección propia del brief; no inventes observaciones del diseño. No copies marca, textos ni imágenes del autor.

## Prompt principal para el Centro de Control

Actúa como mi Centro de Control de este proyecto. Lee primero las instrucciones del repositorio y este ejercicio. Quiero construir únicamente la home de una app como práctica estética de una hora. Ejecuta el trabajo y comprueba el resultado; no te limites a devolver instrucciones o un prompt.

Diseña Pulso, una app para encontrar la sesión del día. La composición debe transmitir energía tranquila mediante fotografía deportiva, espacio generoso y números claros. Propuesta propia: blanco #F7FAF8, texto #20352E, menta #DDF3E9, verde #26775E y gris #738279. Usa Sora para títulos y DM Sans para cuerpo. Estos son valores propuestos, no una extracción del shot.

En la cabecera, Pulso y «Tu entrenamiento de hoy». Un selector semanal muy sencillo muestra L, M, X, J y V con el miércoles seleccionado. La pieza principal es «Fuerza y movilidad», con una imagen atlética o ilustración original, duración 30 min, nivel Iniciación y botón «Ver sesión». La persona debe ser anónima y el contenido, ficticio. Debajo coloca «Tu semana» con 2 de 3 sesiones completadas y una barra de progreso sobria. Finaliza con dos opciones secundarias, «Movilidad suave · 12 min» y «Fuerza general · 25 min», y navegación Hoy, Sesiones y Progreso. No desarrolles temporizadores ni planes personalizados; los controles solo necesitan mostrar un estado visual. La pantalla debe destacar una sesión, sin convertirse en un panel saturado de calorías, anillos y gráficas. Usa el recorte de la fotografía con intención y comprueba que no tape información. No incluyas recomendaciones médicas ni datos reales de salud.

Construye una sola pantalla en HTML, CSS y JavaScript mínimo, sin framework, backend, registro, APIs ni herramientas de compilación. Mobile first a 390 px y adaptable de 360 a 1440 px; en escritorio limita el ancho de la app a unos 480 px y centra la composición. No dibujes un teléfono, un notch ni un tablero de varias pantallas. Evita desbordamientos, texto diminuto, sombras repetidas y tarjetas anidadas. Incluye HTML semántico, foco visible, nombres accesibles y contraste legible. No añadas explicaciones técnicas al contenido de la interfaz.

Trabaja dentro de la estructura clonada: crea `artefacto/03-entrenamiento/index.html`, `styles.css`, `script.js` solo si lo necesitas y `assets/` solo para recursos utilizados. Toda la implementación, documentación de estilos y exportaciones del ejercicio permanecerán en esa subcarpeta de `artefacto/`. No reorganices ni borres las carpetas existentes; los briefs permanecen en `05-design/ejercicios/`. Si ya existe trabajo, revísalo y actualízalo sin sobrescribir otros ejercicios.

Antes de construir define en pocas líneas la composición y los tokens. Implementa después sin esperar aprobación para decisiones reversibles. Usa variables CSS y documenta valores reales, tipografía y alternativas, espaciado, radios y componentes en `artefacto/03-entrenamiento/design-system.md`. Verifica la pantalla en móvil y escritorio si puedes abrir un navegador; distingue revisión realizada de comprobación pendiente. Entrega la ruta de apertura, los archivos cambiados y un breve resumen de las decisiones.

## Cinco minutos de feedback, un cambio cada vez

1. «Cambia el acento menta por azul deportivo y ajusta los estados seleccionados. Actualiza el HTML/CSS y la documentación de tokens, y comprueba el resultado».
2. «Haz la sesión principal más compacta y aumenta el espacio dedicado al progreso semanal. Mantén una sola pantalla y conserva el resto del trabajo».

## Dónde trabajar en Figma

Carpeta compartida del curso: https://www.figma.com/files/1098727141692672536/folder/678646557?fuid=1559836740184008774

Cada participante debe crear su propio archivo dentro de esta carpeta, con un nombre que permita identificar autor y ejercicio, por ejemplo `NombreApellido — App del tiempo`. No editar ni sobrescribir los archivos de los compañeros.

Si perteneces a MRM y no tienes acceso al equipo de Tribal, crea el archivo en tu espacio de MRM. Esta alternativa es válida para completar el ejercicio.

La URL de la carpeta sirve para organizar los trabajos. Comparte después con el Centro de Control el enlace del archivo o del frame donde tienes permiso de edición. El agente debe comprobar acceso antes de escribir; no debe solicitar acceso al equipo Tribal como requisito para quienes trabajen en MRM.

## Continuar en Figma

«Lleva la versión actual de `artefacto/03-entrenamiento/` a un archivo de Figma de práctica donde tenga permiso de edición. Utiliza la conexión disponible y sus instrucciones. Crea una home con elementos editables, texto real y auto layout donde proceda; no la resuelvas pegando una captura. Añade una sección de fundamentos con los colores, tipografía, espaciado y componentes realmente utilizados, con nombres coherentes con las variables CSS. Documenta el enlace del archivo y del frame en `artefacto/03-entrenamiento/figma-handoff.md`. Si falta conexión o permiso, indica el paso concreto que necesito completar y conserva el HTML; no afirmes haber creado el diseño».

En el HTML del ejercicio, proponme una interacción o animación pequeña. Implementa solo la que elija y revisa el resultado con las herramientas disponibles. Después actualiza la home y sus estados visuales en mi frame de Figma [ENLACE]. Distingue lo que está implementado en HTML de lo que puedes representar en Figma. Actualiza documentación y prepara el cierre con commit y push a mi repositorio privado.

## Guardar versiones

Primero construye y refina la home sin crear un repositorio propio. Cuando apruebe la primera versión, ayúdame a crear un repositorio NUEVO y PRIVADO con toda esta estructura y a guardar un commit y push. Comprueba el remoto: nunca subas al original del curso. Al terminar el refinamiento y la actualización de Figma, haz el cierre con otro commit y push cuando lo solicite. Verifica visibilidad y archivos; si la sesión en la nube es temporal, prepara copia persistente o descargable. No afirmes que algo está subido sin comprobarlo.
