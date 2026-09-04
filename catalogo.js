/**
 * Arma el catálogo a partir de productos.js: el carrusel 3D de arriba y la
 * rejilla completa de abajo. Para cambiar productos, precios o fotos basta
 * con editar productos.js; este archivo no hace falta tocarlo.
 */
import { productos, tienda } from './productos.js';

const RUTA_FOTOS = 'img/';
const MARGARITA = 'img/isotipo-rosa.png';
/* Tintes de marca para los marcos "Próximamente", así ningún par de tarjetas
   sin foto se ve idéntico. */
const TINTES = ['#f9e79f', '#e3d5ca', '#f7dde3', '#fbe9c8', '#efdcc8'];

const menosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Enlace de WhatsApp con el mensaje del producto ya escrito. */
function enlaceWhatsapp(producto) {
  const mensaje = producto
    ? `¡Hola, La Florería! Quiero agendar mi pedido de: ${producto.nombre} (${producto.precio}).`
    : '¡Hola, La Florería! Quiero agendar un pedido de flores amarillas.';
  const url = new URL('https://api.whatsapp.com/send/');
  url.searchParams.set('phone', tienda.telefonoWhatsapp);
  url.searchParams.set('text', mensaje);
  url.searchParams.set('type', 'phone_number');
  url.searchParams.set('app_absent', '0');
  return url.toString();
}

/** Foto del producto o, si todavía no está cargada, un marco de la marca. */
function crearMedia(producto, indice, clase) {
  const marco = document.createElement('div');
  marco.className = 'sinfoto';
  marco.style.background = TINTES[indice % TINTES.length];
  const flor = document.createElement('img');
  flor.src = MARGARITA;
  flor.alt = '';
  marco.append(flor);
  const texto = document.createElement('span');
  texto.textContent = 'Próximamente';
  marco.append(texto);

  if (!producto.foto) return marco;

  const img = document.createElement('img');
  img.className = clase;
  img.src = RUTA_FOTOS + producto.foto;
  img.alt = producto.nombre;
  img.loading = 'lazy';
  // Si el archivo aún no existe, la tarjeta cae en el marco en vez de romperse.
  img.addEventListener('error', () => img.replaceWith(marco));
  return img;
}

function sello(texto) {
  const etiqueta = document.createElement('span');
  etiqueta.className = 'diapo__etiqueta';
  etiqueta.textContent = texto;
  return etiqueta;
}

/* ------------------------------------------------------------------ */
/* Carrusel 3D                                                         */
/* ------------------------------------------------------------------ */

const coverflow = document.getElementById('coverflow');
const pista = document.getElementById('pista');
const puntos = document.getElementById('puntos');
const total = productos.length;
let activo = 0;

const diapos = productos.map((producto, i) => {
  const diapo = document.createElement('div');
  diapo.className = 'diapo';
  diapo.append(crearMedia(producto, i, 'diapo__foto'));
  if (producto.etiqueta) diapo.append(sello(producto.etiqueta));

  const pie = document.createElement('div');
  pie.className = 'diapo__pie';
  pie.textContent = producto.nombre;
  const precio = document.createElement('b');
  precio.textContent = producto.precio;
  pie.append(precio);
  diapo.append(pie);

  diapo.addEventListener('click', () => {
    if (Date.now() - finArrastre < 250) return;
    if (i !== activo) ir(i);
  });
  return diapo;
});
pista.append(...diapos);

const bolitas = productos.map((producto, i) => {
  const punto = document.createElement('button');
  punto.type = 'button';
  punto.className = 'punto';
  punto.setAttribute('aria-label', producto.nombre);
  punto.addEventListener('click', () => ir(i));
  return punto;
});
puntos.append(...bolitas);

/** Distancia circular de una diapositiva a la que está activa. */
function separacion(i) {
  let o = i - activo;
  if (o > total / 2) o -= total;
  if (o < -total / 2) o += total;
  return o;
}

function pintar(arrastre = 0) {
  const ancho = diapos[0].offsetWidth || 260;
  const paso = ancho * 0.56;
  diapos.forEach((diapo, i) => {
    const o = separacion(i) + arrastre;
    const abs = Math.abs(o);
    diapo.style.transform =
      `translate(-50%, -50%) translateX(${o * paso}px) translateZ(${-abs * 150}px) ` +
      `rotateY(${-o * 34}deg) scale(${Math.max(0.55, 1 - abs * 0.07)})`;
    diapo.style.opacity = abs <= 1 ? '1' : String(Math.max(0, 1 - (abs - 1) * 0.42));
    diapo.style.zIndex = String(100 - Math.round(abs * 10));
    diapo.style.pointerEvents = abs > 2.6 ? 'none' : 'auto';
    diapo.classList.toggle('diapo--activa', i === activo);
  });
}

const ficha = {
  contador: document.getElementById('contador'),
  nombre: document.getElementById('fichaNombre'),
  detalle: document.getElementById('fichaDetalle'),
  precio: document.getElementById('fichaPrecio'),
  boton: document.getElementById('fichaBoton'),
};

function pintarFicha() {
  const producto = productos[activo];
  ficha.contador.textContent = `${String(activo + 1).padStart(2, '0')} / ${total}`;
  ficha.nombre.textContent = producto.nombre;
  ficha.detalle.textContent = producto.detalle || '';
  ficha.precio.textContent = producto.precio;
  ficha.boton.href = enlaceWhatsapp(producto);
  bolitas.forEach((punto, i) => punto.classList.toggle('punto--activo', i === activo));
}

function ir(i) {
  activo = ((i % total) + total) % total;
  pintar();
  pintarFicha();
}

document.getElementById('anterior').addEventListener('click', () => ir(activo - 1));
document.getElementById('siguiente').addEventListener('click', () => ir(activo + 1));

coverflow.tabIndex = 0;
coverflow.addEventListener('keydown', (evento) => {
  if (evento.key === 'ArrowLeft') ir(activo - 1);
  if (evento.key === 'ArrowRight') ir(activo + 1);
});

/* Arrastre con el dedo o el ratón: las tarjetas siguen la mano y al soltar
   se acomodan en la más cercana. */
let inicioX = null;
let punteroId = null;
let arrastrando = false;
let arrastre = 0;
let finArrastre = 0;

function pasoEnPx() {
  return (diapos[0].offsetWidth || 260) * 0.56;
}

coverflow.addEventListener('pointerdown', (evento) => {
  if (evento.button !== undefined && evento.button !== 0) return;
  // Las flechas son botones: no deben iniciar un arrastre.
  if (evento.target.closest('.flecha')) return;
  detenerSolo();
  inicioX = evento.clientX;
  punteroId = evento.pointerId;
  arrastre = 0;
  arrastrando = false;
});

coverflow.addEventListener('pointermove', (evento) => {
  if (inicioX === null) return;
  const recorrido = inicioX - evento.clientX;
  // Hasta que la mano no se mueve de verdad esto sigue siendo un clic.
  if (!arrastrando) {
    if (Math.abs(recorrido) < 6) return;
    arrastrando = true;
    coverflow.setPointerCapture(punteroId);
    diapos.forEach((d) => d.classList.add('diapo--arrastrando'));
  }
  arrastre = Math.max(-2, Math.min(2, recorrido / pasoEnPx()));
  pintar(arrastre);
});

function soltar() {
  if (inicioX === null) return;
  inicioX = null;
  if (!arrastrando) return;
  arrastrando = false;
  finArrastre = Date.now();
  diapos.forEach((d) => d.classList.remove('diapo--arrastrando'));
  if (Math.abs(arrastre) > 0.3) {
    const salto = Math.round(arrastre) || Math.sign(arrastre);
    ir(activo + salto);
  } else {
    pintar();
  }
  arrastre = 0;
}

coverflow.addEventListener('pointerup', soltar);
coverflow.addEventListener('pointercancel', soltar);

/* El carrusel avanza solo hasta que la persona lo toca. */
let solo = null;
function detenerSolo() {
  if (solo) {
    clearInterval(solo);
    solo = null;
  }
}
let aLaVista = true;
if (!menosMovimiento) {
  solo = setInterval(() => {
    if (!document.hidden && aLaVista) ir(activo + 1);
  }, 5000);
  coverflow.addEventListener('mouseenter', detenerSolo);
  coverflow.addEventListener('click', detenerSolo);
  puntos.addEventListener('click', detenerSolo);
  // Mientras el carrusel no está en pantalla no tiene sentido que gire.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(
      ([entrada]) => {
        aLaVista = entrada.isIntersecting;
      },
      { threshold: 0.25 },
    ).observe(coverflow);
  }
}

window.addEventListener('resize', () => pintar());

/* ------------------------------------------------------------------ */
/* Rejilla con todo el catálogo                                        */
/* ------------------------------------------------------------------ */

function crearTarjeta(producto, i) {
  const tarjeta = document.createElement('article');
  tarjeta.className = 'tarjeta';

  const foto = document.createElement('button');
  foto.type = 'button';
  foto.className = 'tarjeta__foto';
  foto.setAttribute('aria-label', `Ver ${producto.nombre} en grande`);
  foto.append(crearMedia(producto, i, ''));
  if (producto.etiqueta) foto.append(sello(producto.etiqueta));
  foto.addEventListener('click', () => {
    detenerSolo();
    ir(i);
    coverflow.scrollIntoView({ behavior: menosMovimiento ? 'auto' : 'smooth', block: 'center' });
  });
  tarjeta.append(foto);

  const cuerpo = document.createElement('div');
  cuerpo.className = 'tarjeta__cuerpo';

  const titulo = document.createElement('h3');
  titulo.className = 'tarjeta__titulo';
  titulo.textContent = producto.nombre;
  cuerpo.append(titulo);

  if (producto.detalle) {
    const detalle = document.createElement('p');
    detalle.className = 'tarjeta__detalle';
    detalle.textContent = producto.detalle;
    cuerpo.append(detalle);
  }

  const precio = document.createElement('p');
  precio.className = 'tarjeta__precio';
  const monto = document.createElement('span');
  monto.className = 'precio__monto';
  monto.textContent = producto.precio;
  const nota = document.createElement('span');
  nota.className = 'precio__nota';
  nota.textContent = 'Precio';
  precio.append(monto, nota);
  cuerpo.append(precio);

  const boton = document.createElement('a');
  boton.className = 'boton';
  boton.href = enlaceWhatsapp(producto);
  boton.target = '_blank';
  boton.rel = 'noopener noreferrer';
  boton.textContent = 'Agendar pedido';
  cuerpo.append(boton);

  tarjeta.append(cuerpo);
  return tarjeta;
}

document.getElementById('grid').replaceChildren(...productos.map(crearTarjeta));

const generico = document.getElementById('whatsappGeneral');
if (generico) generico.href = enlaceWhatsapp(null);

ir(0);
