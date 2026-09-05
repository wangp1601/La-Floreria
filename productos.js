/**
 * Catálogo de La Florería Lechería — Colección Flores Amarillas.
 *
 * Esto es lo único que hay que tocar para actualizar el catálogo.
 * Cada producto es un bloque entre llaves { } separado por una coma.
 *
 *   nombre    Título del producto tal como se lee en la tarjeta.
 *   precio    Texto libre: "$15", "$15 / Bs 550", "Desde $12"...
 *   detalle   Una línea corta que describe el arreglo (opcional).
 *   foto      Nombre del archivo dentro de la carpeta img/.
 *             Si se deja vacío ("") se muestra un marco "Próximamente"
 *             en lugar de una foto rota.
 *   etiqueta  Sello opcional sobre la foto: "Más pedido", "Nuevo", "Últimos"...
 *
 * Para quitar un producto del catálogo basta con borrar su bloque.
 */
export const productos = [
  {
    nombre: 'Mini bouquet 1 Rosa Amarilla Arreglada',
    precio: '$8',
    detalle:
      'Pequeño y coqueto, ideal para sorprender en ese día especial, ' +
      'acompañado de 1 rosa amarilla y follaje.',
    foto: 'mini-bouquet-rosa-amarilla.jpg',
    etiqueta: '',
  },
  {
    nombre: '1 girasol arreglado',
    precio: '$10',
    detalle:
      'Un imponente girasol acompañado de follaje, envuelto elegantemente en ' +
      'papel kraft. Un detalle clásico.',
    foto: 'girasol-arreglado.jpg',
    etiqueta: '',
  },
  {
    nombre: '1 gerbera amarilla arreglada',
    precio: '$10',
    detalle:
      'Una vibrante gerbera amarilla acompañada de un delicado follaje, ' +
      'envuelta elegantemente en papel kraft. Un detalle clásico y especial.',
    foto: 'gerbera-arreglada.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Bouquet de mini girasoles',
    precio: '$15',
    detalle:
      'Un hermoso bouquet de mini girasoles acompañados de un delicado ' +
      'follaje, envuelto elegantemente en papel kraft.',
    foto: 'bouquet-mini-girasoles.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Minibouquet de margaritas amarillas',
    precio: '$15',
    detalle:
      'Un tierno minibouquet de margaritas amarillas y delicado follaje. ' +
      'Envuelto en papel kraft.',
    foto: 'minibouquet-margaritas.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Bouquet de 4 girasoles arreglados',
    precio: '$30',
    detalle:
      'Cuatro girasoles frescos con toques de delicado follaje, envueltos ' +
      'en un vibrante papel amarillo y contrastados con un elegante moño ' +
      'negro. Un arreglo lleno de luz y energía, diseñado para robar ' +
      'miradas y garantizar una sonrisa.',
    foto: 'bouquet-4-girasoles.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Bouquet de 5 gerberas amarillas',
    precio: '$30',
    detalle:
      'Un hermoso arreglo de cinco gerberas amarillas acompañadas de ' +
      'follaje, envuelto elegantemente en papel kraft con un lazo a juego. ' +
      'Incluye tarjeta.',
    foto: 'bouquet-5-gerberas.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Bouquet Encanto',
    precio: '$30',
    detalle:
      'Un hermoso arreglo mixto que combina vibrantes rosas en tonos ' +
      'cálidos, flores crema, toques de hortensia y delicados detalles ' +
      'silvestres. Envuelto en papel kraft con sutiles transparencias de ' +
      'mariposas y encaje, incluye una hermosa tarjeta para tu dedicatoria.',
    foto: 'bouquet-encanto.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Flores en jarrón',
    precio: '$40',
    detalle:
      'Un arreglo de girasoles, hortensias y flores amarillas variadas ' +
      'acompañadas de follaje, presentado en un elegante jarrón de vidrio.',
    foto: 'flores-en-jarron.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Bouquet de 12 rosas amarillas',
    precio: '$45',
    detalle:
      'Un deslumbrante arreglo de 12 rosas amarillas, bellamente ' +
      'contrastadas con un delicado follaje blanco. Envuelto en un elegante ' +
      'papel claro con detalles en malla que resaltan su luz y ' +
      'sofisticación, es un ramo radiante que enamora a primera vista. ' +
      '¡El obsequio irresistible que querrás llevarte de inmediato!',
    foto: 'bouquet-12-rosas.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Bouquet de 7 girasoles',
    precio: '$50',
    detalle:
      '7 radiantes girasoles con hermoso follaje, envueltos en un elegante ' +
      'papel negro que hace explotar todo su color. Incluye tarjeta ' +
      'especial. ¡Un contraste cautivador y lleno de luz, el detalle ideal ' +
      'para sorprender!',
    foto: 'bouquet-7-girasoles.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Bouquet de flores amarillas variadas',
    precio: '$60',
    detalle:
      'Un voluminoso arreglo de rosas amarillas, hortensias, claveles y ' +
      'flores variadas en tonos cálidos, envuelto elegantemente en papel ' +
      'kraft con un lazo a juego y una tarjeta.',
    foto: 'bouquet-variado.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Bouquet Mariposa',
    precio: '$60',
    detalle:
      'Un espectacular mix de rosas amarillas y un imponente girasol ' +
      'central, coronado con exclusivas alas de mariposa y follaje.',
    foto: 'bouquet-mariposa.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Bouquet de 10 girasoles',
    precio: '$70',
    detalle:
      '10 imponentes girasoles acompañados de delicado follaje, envueltos ' +
      'en papel premium. Un arreglo majestuoso, voluminoso y lleno de luz, ' +
      'diseñado para dejar una impresión imborrable. El chocolate que ' +
      'aparece en la foto no está incluido.',
    foto: 'bouquet-10-girasoles.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Bouquet Corazón amarillo',
    precio: '$120',
    detalle:
      'Un espectacular arreglo en forma de corazón con rosas amarillas. En ' +
      'su interior, una hermosa cama de delicado follaje hace resaltar tres ' +
      'encantadoras gerberas en tonos cálidos. Presentado en un exclusivo ' +
      'envoltorio con bordes festoneados.',
    foto: 'bouquet-corazon-amarillo.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Box Amarillo — Arreglo de base de girasoles',
    precio: '$150',
    detalle:
      'Un espectacular arreglo de girasoles con toques delicados de ' +
      'follaje. Presentado en una elegante base blanca, es un diseño ' +
      'imponente y lleno de vida.',
    foto: 'box-amarillo-girasoles.jpg',
    etiqueta: '',
  },
];

/** Datos de contacto y textos de cabecera. */
export const tienda = {
  telefonoWhatsapp: '584148025286',
  ciudad: 'Lechería',
  instagram: 'lafloreria.ve',
};
