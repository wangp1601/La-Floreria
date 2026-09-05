# La Florería — Catálogo

Catálogo web de **La Florería**, Lechería. Portada, carrusel 3D con la
colección y rejilla con todos los arreglos; cada producto lleva su foto, su
precio y un botón que abre WhatsApp con el pedido ya redactado.

La primera colección publicada es **Flores Amarillas**, para el 21 de
septiembre.

Es un sitio estático: solo HTML, CSS y JavaScript. No hace falta instalar
nada para trabajar con él.

## Los archivos

| Archivo | Para qué sirve |
| --- | --- |
| `productos.js` | **Lo único que hay que editar**: nombres, precios, descripciones, fotos y sellos |
| `img/` | Fotos de los productos y logotipos de la marca |
| `index.html` | Estructura de la página (cabecera, portada, carrusel, rejilla, pie) |
| `estilos.css` | Colores y tipografía de la marca |
| `catalogo.js` | Arma el carrusel, la rejilla y los enlaces de WhatsApp |
| `fuentes/` | Tipografía Fraunces con su licencia |
| `herramientas/pagina-unica.mjs` | Genera el catálogo entero en un solo archivo |

## Cambiar un precio o un nombre

Abrir `productos.js` y editar el texto entre comillas. Nada más. El carrusel y
la rejilla se actualizan solos, en el mismo orden en que están escritos los
productos.

## Agregar la foto de un producto

1. Guardar la imagen dentro de `img/` (JPG o WebP, formato vertical —el
   carrusel recorta a 3:4 y la rejilla a 4:5—, idealmente 1000 × 1333 px y
   menos de 400 KB).
2. Escribir ese nombre de archivo en el campo `foto` del producto.

Un producto sin foto muestra el marco "Próximamente" con la margarita de la
marca, así que la página nunca se ve rota.

**Al cambiar una foto por otra:** si el archivo nuevo se llama igual que el
viejo, los navegadores y el servidor pueden seguir mostrando el anterior hasta
una hora. Para que el cambio se vea al instante, guardar la foto nueva con otro
nombre (por ejemplo `ramo-girasoles-2.jpg`) y actualizar el campo `foto`.

## Botón "Agendar pedido"

Cada botón abre WhatsApp al **+58 414-8025286** con el mensaje ya escrito,
incluyendo el nombre y el precio del producto. El número se cambia en un solo
lugar: el campo `telefonoWhatsapp` al final de `productos.js`.

## Cómo se mueve el carrusel

Avanza solo cada 5 segundos hasta que alguien lo toca; después responde a
arrastre con el dedo o el ratón, a las flechas, a los puntos de abajo y a las
teclas ← →. Tocar una foto de la rejilla lleva esa flor al centro del carrusel.
Con "reducir movimiento" activado en el teléfono, el giro automático no se
enciende.

## Verlo en la computadora

Los navegadores no dejan que una página abierta con doble clic cargue sus
propios archivos, así que hay dos formas:

```bash
# 1. Un servidor local (Python viene instalado en Mac y Linux)
python3 -m http.server 8000
# y abrir http://localhost:8000

# 2. O generar el catálogo en un solo archivo y abrirlo con doble clic
node herramientas/pagina-unica.mjs   # crea pagina-unica.html
```

`pagina-unica.html` lleva todo dentro (estilos, código, logos, fuente y fotos),
así que también sirve para mandarlo por correo o subirlo a cualquier lado tal
cual.

## Publicarlo

En [Vercel](https://vercel.com): *Add New… → Project*, elegir este
repositorio, dejar el framework en **Other** y desplegar. No hay que
configurar nada más: `vercel.json` ya trae las cabeceras de seguridad y el
sitio se sirve tal cual. Cada cambio que se suba al repositorio se publica
solo.

## La marca

Los logotipos salen de los originales de la Guía de Identidad Visual,
recortados y con el fondo transparente para poder ponerlos sobre cualquier
color.

| Archivo | Cuándo usarlo |
| --- | --- |
| `img/logo-amarillo.png` | Imagotipo amarillo, para fondos rosa o vino |
| `img/logo-rosa.png` | Imagotipo rosa, para fondos amarillos o claros |
| `img/isotipo-rosa.png` | La margarita sola (favicon, marcos, marcas de agua) |
| `img/isotipo-amarillo.png`, `img/isotipo-crema.png` | La margarita en las otras dos tintas |

| Color | Hex | Uso en la página |
| --- | --- | --- |
| Rosa 7635C | `#D45D79` | Cabecera, escenario del carrusel, botones |
| Rosa 1205C | `#F9679F` | Sellos ("Más pedido", "Nuevo") |
| Nude 406C | `#E3D5CA` | Damero y marcos sin foto |
| Vino 1815C | `#9E2A2B` | Títulos, damero y fondo del carrusel |
| Amarillo | `#F9E79F` | Portada, pie, precios y botones — el color de la colección |

La tipografía de los títulos es [Fraunces](https://fonts.google.com/specimen/Fraunces)
(SIL Open Font License 1.1, incluida en `fuentes/`), la más parecida al
lettering del imagotipo.
