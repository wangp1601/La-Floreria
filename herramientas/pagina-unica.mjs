/**
 * Arma "pagina-unica.html": todo el catálogo (estilos, código, logos, fuente y
 * fotos) dentro de un solo archivo HTML, sin depender de ningún servidor.
 *
 * Sirve para abrir el catálogo con doble clic, mandarlo por correo o subirlo a
 * cualquier lado tal cual. Se ejecuta desde la carpeta del proyecto con:
 *
 *     node herramientas/pagina-unica.mjs
 */
import { readFileSync, existsSync, writeFileSync } from 'node:fs';
import { extname, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const TIPOS = {
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

/** Convierte un archivo del proyecto en un data: URI, o null si no existe. */
function incrustar(rel) {
  const archivo = join(RAIZ, rel);
  if (!existsSync(archivo)) return null;
  return `data:${TIPOS[extname(archivo)]};base64,${readFileSync(archivo).toString('base64')}`;
}

const css = readFileSync(join(RAIZ, 'estilos.css'), 'utf8').replace(
  /url\("([^"]+)"\)/g,
  (_, ruta) => `url("${incrustar(ruta)}")`,
);

const html = readFileSync(join(RAIZ, 'index.html'), 'utf8');
const cabeza = html.slice(html.indexOf('<title>'), html.indexOf('</title>') + 8);
const cuerpo = html
  .slice(html.indexOf('<body>') + 6, html.indexOf('</body>'))
  .replace(/\s*<script[\s\S]*?<\/script>/g, '')
  .replace(/src="((?:img|fuentes)\/[^"]+)"/g, (_, ruta) => `src="${incrustar(ruta)}"`);

const { productos, tienda } = await import(join(RAIZ, 'productos.js'));
// Las fotos que ya existen viajan dentro del archivo; las que faltan quedan
// vacías para que la tarjeta muestre el marco "Próximamente".
const conFotos = productos.map((producto) => ({
  ...producto,
  foto: (producto.foto && incrustar('img/' + producto.foto)) || '',
}));

const js = readFileSync(join(RAIZ, 'catalogo.js'), 'utf8')
  .replace(/^import[\s\S]*?;\n/m, '')
  .replace("const RUTA_FOTOS = 'img/';", 'const RUTA_FOTOS = "";')
  .replace(
    "const MARGARITA = 'img/isotipo-rosa.png';",
    `const MARGARITA = ${JSON.stringify(incrustar('img/isotipo-rosa.png'))};`,
  );

const salida = `${cabeza}
<style>
${css}
</style>
${cuerpo}
<script type="module">
const productos = ${JSON.stringify(conFotos, null, 1)};
const tienda = ${JSON.stringify(tienda)};
${js}
</script>
`;

const destino = join(RAIZ, 'pagina-unica.html');
writeFileSync(destino, salida);
console.log(`Listo: ${destino} (${(salida.length / 1024).toFixed(0)} KB)`);
