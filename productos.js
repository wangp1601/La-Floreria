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
    nombre: '1 girasol arreglado',
    precio: '$10',
    detalle:
      'Un imponente girasol acompañado de follaje, envuelto elegantemente en ' +
      'papel kraft. Un detalle clásico.',
    foto: 'girasol-arreglado.jpg',
    etiqueta: '',
  },
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
    nombre: '1 gerbera amarilla arreglada',
    precio: '$10',
    detalle:
      'Una vibrante gerbera amarilla acompañada de un delicado follaje, ' +
      'envuelta elegantemente en papel kraft. Un detalle clásico y especial.',
    foto: 'gerbera-arreglada.jpg',
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
    nombre: 'Box Amarillo',
    precio: '$35',
    detalle: 'Caja sombrerera vino con rosas y gerberas amarillas.',
    foto: 'box-amarillo.jpg',
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
    nombre: 'Combo Flores + Globo',
    precio: '$38',
    detalle: 'Ramo amarillo, globo de flores amarillas y tarjeta escrita a mano.',
    foto: 'combo-globo.jpg',
    etiqueta: 'Nuevo',
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
    nombre: 'Flores en jarrón',
    precio: '$40',
    detalle:
      'Un arreglo de girasoles, hortensias y flores amarillas variadas ' +
      'acompañadas de follaje, presentado en un elegante jarrón de vidrio.',
    foto: 'flores-en-jarron.jpg',
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
    nombre: 'Ramo Amarillo y Blanco',
    precio: '$28',
    detalle: 'Rosas amarillas con astromelias blancas y eucalipto.',
    foto: 'ramo-amarillo-blanco.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Girasoles + Chocolates',
    precio: '$42',
    detalle: 'Tres girasoles con caja de bombones surtidos.',
    foto: 'girasoles-chocolates.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Canasta Primavera',
    precio: '$50',
    detalle: 'Canasta de mimbre con flores amarillas de temporada.',
    foto: 'canasta-primavera.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Ramo XL 24 Rosas',
    precio: '$65',
    detalle: 'Veinticuatro rosas amarillas para una declaración en grande.',
    foto: 'ramo-xl-24.jpg',
    etiqueta: 'Edición especial',
  },
  {
    nombre: 'Combo Desayuno Floral',
    precio: '$60',
    detalle: 'Desayuno sorpresa acompañado de un ramo de flores amarillas.',
    foto: 'combo-desayuno.jpg',
    etiqueta: '',
  },
];

/** Datos de contacto y textos de cabecera. */
export const tienda = {
  telefonoWhatsapp: '584148025286',
  ciudad: 'Lechería',
  instagram: 'lafloreria.ve',
};
