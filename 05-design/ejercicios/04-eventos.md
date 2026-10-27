# Plan · Home de una app de eventos

## Referencia visual

[The Evento, Festival Booking App](https://dribbble.com/shots/22393200-The-Evento-Festival-Booking-App) — Samira Baderestani / DeXign Studio, Dribbble. Referencia de inspiración, no asset para copiar. Enlace y descripción consultados el 27/10/2026; imagen completa pendiente de revisión visual. Antes de construir, abre el shot si tu herramienta permite inspeccionarlo. Si no puedes verlo, dilo y sigue la dirección propia del brief; no inventes observaciones del diseño. No copies marca, textos ni imágenes del autor.

## Prompt principal para el Centro de Control

Actúa como mi Centro de Control de este proyecto. Lee primero las instrucciones del repositorio y este ejercicio. Quiero construir únicamente la home de una app como práctica estética de una hora. Ejecuta el trabajo y comprueba el resultado; no te limites a devolver instrucciones o un prompt.

Diseña Plan, una app para descubrir planes culturales en una ciudad. Propón una estética nocturna sofisticada con carteles expresivos: fondo #171729, superficie #24243B, texto #F5F3FC, lavanda #BBA9F5 y melocotón #FFC49B. Usa Outfit para títulos y cuerpo. Esta dirección es una adaptación original para la práctica; no afirmes que reproduce los colores del shot.

La cabecera muestra Plan, «Madrid» y un acceso discreto a favoritos. El título es «Tu próximo plan está aquí». Añade filtros Todos, Música, Arte y Charlas. El evento destacado es «Noches del patio», viernes 12 de junio de 2026, 20:00, Patio Norte, desde 18 €. Es contenido ficticio y debe indicarse como tal en la documentación. El cartel debe ocupar una superficie amplia: crea una composición gráfica original con formas y tipografía, sin usar logotipos ni fotografías del diseño de referencia. En la parte inferior del cartel presenta fecha, nombre y lugar con contraste suficiente. Debajo incluye dos filas: «Diseño en conversación · Sábado · 12 €» y «Luz y forma · Domingo · Gratis». Cierra con navegación Explorar, Guardados y Perfil. Limita la interacción a seleccionar un filtro o guardar un evento; no implementes reserva, compra, mapas ni QR. Cuida que los textos sobre imágenes sigan siendo legibles y que el cartel no convierta la home en una landing publicitaria.

Construye una sola pantalla en HTML, CSS y JavaScript mínimo, sin framework, backend, registro, APIs ni herramientas de compilación. Mobile first a 390 px y adaptable de 360 a 1440 px; en escritorio limita el ancho de la app a unos 480 px y centra la composición. No dibujes un teléfono, un notch ni un tablero de varias pantallas. Evita desbordamientos, texto diminuto, sombras repetidas y tarjetas anidadas. Incluye HTML semántico, foco visible, nombres accesibles y contraste legible. No añadas explicaciones técnicas al contenido de la interfaz.

Trabaja dentro de la estructura clonada: crea `artefacto/04-eventos/index.html`, `styles.css`, `script.js` solo si lo necesitas y `assets/` solo para recursos utilizados. Toda la implementación, documentación de estilos y exportaciones del ejercicio permanecerán en esa subcarpeta de `artefacto/`. No reorganices ni borres las carpetas existentes; los briefs permanecen en `05-design/ejercicios/`. Si ya existe trabajo, revísalo y actualízalo sin sobrescribir otros ejercicios.

Antes de construir define en pocas líneas la composición y los tokens. Implementa después sin esperar aprobación para decisiones reversibles. Usa variables CSS y documenta valores reales, tipografía y alternativas, espaciado, radios y componentes en `artefacto/04-eventos/design-system.md`. Verifica la pantalla en móvil y escritorio si puedes abrir un navegador; distingue revisión realizada de comprobación pendiente. Entrega la ruta de apertura, los archivos cambiados y un breve resumen de las decisiones.

## Cinco minutos de feedback, un cambio cada vez

1. «Cambia a una versión diurna clara manteniendo la identidad lavanda y la jerarquía. Actualiza el HTML/CSS y la documentación de tokens, y comprueba el resultado».
2. «Convierte el evento protagonista en una composición horizontal y da más espacio a los dos siguientes. Mantén una sola pantalla y conserva el resto del trabajo».

## Dónde trabajar en Figma

Carpeta compartida del curso: https://www.figma.com/files/1098727141692672536/folder/678646557?fuid=1559836740184008774

Cada participante debe crear su propio archivo dentro de esta carpeta, con un nombre que permita identificar autor y ejercicio, por ejemplo `NombreApellido — App del tiempo`. No editar ni sobrescribir los archivos de los compañeros.

Si perteneces a MRM y no tienes acceso al equipo de Tribal, crea el archivo en tu espacio de MRM. Esta alternativa es válida para completar el ejercicio.

La URL de la carpeta sirve para organizar los trabajos. Comparte después con el Centro de Control el enlace del archivo o del frame donde tienes permiso de edición. El agente debe comprobar acceso antes de escribir; no debe solicitar acceso al equipo Tribal como requisito para quienes trabajen en MRM.

## Continuar en Figma

«Lleva la versión actual de `artefacto/04-eventos/` a un archivo de Figma de práctica donde tenga permiso de edición. Utiliza la conexión disponible y sus instrucciones. Crea una home con elementos editables, texto real y auto layout donde proceda; no la resuelvas pegando una captura. Añade una sección de fundamentos con los colores, tipografía, espaciado y componentes realmente utilizados, con nombres coherentes con las variables CSS. Documenta el enlace del archivo y del frame en `artefacto/04-eventos/figma-handoff.md`. Si falta conexión o permiso, indica el paso concreto que necesito completar y conserva el HTML; no afirmes haber creado el diseño».

En el HTML del ejercicio, proponme una interacción o animación pequeña. Implementa solo la que elija y revisa el resultado con las herramientas disponibles. Después actualiza la home y sus estados visuales en mi frame de Figma [ENLACE]. Distingue lo que está implementado en HTML de lo que puedes representar en Figma. Actualiza documentación y prepara el cierre con commit y push a mi repositorio privado.

## Guardar versiones

Primero construye y refina la home sin crear un repositorio propio. Cuando apruebe la primera versión, ayúdame a crear un repositorio NUEVO y PRIVADO con toda esta estructura y a guardar un commit y push. Comprueba el remoto: nunca subas al original del curso. Al terminar el refinamiento y la actualización de Figma, haz el cierre con otro commit y push cuando lo solicite. Verifica visibilidad y archivos; si la sesión en la nube es temporal, prepara copia persistente o descargable. No afirmes que algo está subido sin comprobarlo.
