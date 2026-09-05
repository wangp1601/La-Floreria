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
    nombre: 'Ramo de Girasoles',
    precio: '$25',
    detalle: 'Girasoles frescos con follaje de temporada y papel de la casa.',
    foto: 'ramo-girasoles.jpg',
    etiqueta: 'Más pedido',
  },
  {
    nombre: 'Ramo Amarillo Clásico',
    precio: '$30',
    detalle: 'Doce rosas amarillas envueltas a mano con lazo de seda.',
    foto: 'ramo-amarillo-clasico.jpg',
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
    nombre: 'Ramo Campestre',
    precio: '$20',
    detalle: 'Margaritas, solidago y gerberas amarillas en estilo silvestre.',
    foto: 'ramo-campestre.jpg',
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
    nombre: 'Bouquet Deluxe',
    precio: '$55',
    detalle: 'Girasoles, rosas y lisianthus amarillos en formato XL.',
    foto: 'bouquet-deluxe.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Arreglo en Jarrón',
    precio: '$45',
    detalle: 'Composición amarilla lista para colocar, en jarrón de vidrio.',
    foto: 'arreglo-jarron.jpg',
    etiqueta: '',
  },
  {
    nombre: 'Caja Corazón',
    precio: '$40',
    detalle: 'Corazón de rosas amarillas en caja rosada de la marca.',
    foto: 'caja-corazon.jpg',
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
