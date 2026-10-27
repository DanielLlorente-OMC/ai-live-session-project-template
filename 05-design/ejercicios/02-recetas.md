# Mesa · Home de una app de recetas

## Referencia visual

[Modern Food Recipe Mobile App UI Design – Clean, Minimal](https://dribbble.com/shots/27333532-Modern-Food-Recipe-Mobile-App-UI-Design-Clean-Minimal) — M Rashid Nawaz, Dribbble. Referencia de inspiración, no asset para copiar. Enlace y descripción consultados el 27/10/2026; imagen completa pendiente de revisión visual. Antes de construir, abre el shot si tu herramienta permite inspeccionarlo. Si no puedes verlo, dilo y sigue la dirección propia del brief; no inventes observaciones del diseño. No copies marca, textos ni imágenes del autor.

## Prompt principal para el Centro de Control

Actúa como mi Centro de Control de este proyecto. Lee primero las instrucciones del repositorio y este ejercicio. Quiero construir únicamente la home de una app como práctica estética de una hora. Ejecuta el trabajo y comprueba el resultado; no te limites a devolver instrucciones o un prompt.

Diseña Mesa, una app para descubrir qué cocinar hoy. Busca una estética gastronómica editorial: fotografía apetecible, superficies claras y poco ruido. Propuesta propia de paleta: fondo #FBFAF6, texto #252A23, verde #456A46, superficie #EEF1E7 y acento #E1B965. Combina títulos en Lora con cuerpo en DM Sans y sus alternativas locales. No presentes estos valores como tokens extraídos del shot.

La cabecera muestra Mesa y un saludo breve: «¿Qué cocinamos hoy?». Sigue un buscador visual «Busca un plato o ingrediente» y filtros Todo, Rápidas y Vegetales. El protagonista es una fotografía de una ensalada de verduras asadas con el texto «Tu próxima comida», nombre de receta, 25 min y dificultad Fácil. Dale una imagen generosa y una jerarquía limpia; no añadas párrafos de marketing. Debajo presenta «Para esta semana» con dos recetas: pasta de limón (20 min) y crema de calabaza (30 min), con miniatura y botón de guardar. Añade navegación Inicio, Guardadas y Mi cocina. Utiliza contenido inventado y fotografías con licencia compatible o ilustraciones originales; no copies fotografías del shot. Si no tienes una imagen utilizable, crea una ilustración de ingredientes cuidada y explícala en el resumen de entrega. Limita el ejercicio a descubrir recetas en la home, sin desarrollar la ficha ni el proceso de cocina.

Construye una sola pantalla en HTML, CSS y JavaScript mínimo, sin framework, backend, registro, APIs ni herramientas de compilación. Mobile first a 390 px y adaptable de 360 a 1440 px; en escritorio limita el ancho de la app a unos 480 px y centra la composición. No dibujes un teléfono, un notch ni un tablero de varias pantallas. Evita desbordamientos, texto diminuto, sombras repetidas y tarjetas anidadas. Incluye HTML semántico, foco visible, nombres accesibles y contraste legible. No añadas explicaciones técnicas al contenido de la interfaz.

Trabaja dentro de la estructura clonada: crea `artefacto/02-recetas/index.html`, `styles.css`, `script.js` solo si lo necesitas y `assets/` solo para recursos utilizados. Toda la implementación, documentación de estilos y exportaciones del ejercicio permanecerán en esa subcarpeta de `artefacto/`. No reorganices ni borres las carpetas existentes; los briefs permanecen en `05-design/ejercicios/`. Si ya existe trabajo, revísalo y actualízalo sin sobrescribir otros ejercicios.

Antes de construir define en pocas líneas la composición y los tokens. Implementa después sin esperar aprobación para decisiones reversibles. Usa variables CSS y documenta valores reales, tipografía y alternativas, espaciado, radios y componentes en `artefacto/02-recetas/design-system.md`. Verifica la pantalla en móvil y escritorio si puedes abrir un navegador; distingue revisión realizada de comprobación pendiente. Entrega la ruta de apertura, los archivos cambiados y un breve resumen de las decisiones.

## Dos cambios para practicar, uno cada vez

1. «Cambia la dirección visual a blanco y verde salvia, conservando las imágenes y la estructura. Actualiza el HTML/CSS y la documentación de tokens, y comprueba el resultado».
2. «Da más protagonismo a la receta destacada y convierte las dos recomendaciones en filas compactas. Mantén una sola pantalla y conserva el resto del trabajo».

## Continuar en Figma

«Lleva la versión actual de `artefacto/02-recetas/` a un archivo de Figma de práctica donde tenga permiso de edición. Utiliza la conexión disponible y sus instrucciones. Crea una home con elementos editables, texto real y auto layout donde proceda; no la resuelvas pegando una captura. Añade una sección de fundamentos con los colores, tipografía, espaciado y componentes realmente utilizados, con nombres coherentes con las variables CSS. Documenta el enlace del archivo y del frame en `artefacto/02-recetas/figma-handoff.md`. Si falta conexión o permiso, indica el paso concreto que necesito completar y conserva el HTML; no afirmes haber creado el diseño».

## Devolver un cambio de Figma al HTML

«He cambiado el diseño en este frame: [PEGAR ENLACE]. Inspecciona su estado actual con las herramientas disponibles. Resume las diferencias respecto al HTML y aplica solo esos cambios a `artefacto/02-recetas/`. Actualiza los tokens y la documentación afectados y comprueba la pantalla. Si no puedes inspeccionar Figma, pide el dato que falta; no adivines el cambio. No hay sincronización automática: compara y verifica».

## Guardar versiones

En mi copia del repositorio, revisa los archivos modificados y prepara un commit por hito (home inicial, ajustes y cambio desde Figma), con mensajes claros. No incluyas credenciales, datos privados ni cambios ajenos. Si no existe repositorio Git o falta identidad, indícalo. Distingue commit local de push y sube únicamente cuando te lo solicite. No afirmes que algo está comiteado o publicado sin comprobarlo.
