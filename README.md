# Web de Luis Miguel Agud Sorlí

Portfolio personal y escaparate literario construido con Astro, Tailwind CSS y Pages CMS.

---

## ⚠ Antes de publicar — Lista de comprobación

> **Haz esto antes de lanzar la web al público:**

- [ ] Cambia el dominio `luismiguelagud.com` por el dominio real en `astro.config.mjs`
- [ ] Sustituye todas las imágenes en `public/images/placeholder/` por las reales
- [ ] Actualiza `src/data/autor.yaml` con la biografía real y las redes sociales reales
- [ ] Actualiza `src/data/config.yaml` con el email real y los textos finales
- [ ] Revisa el aviso legal en `src/content/paginas/aviso-legal.md`
- [ ] Revisa la política de privacidad en `src/content/paginas/politica-privacidad.md`
- [ ] Comprueba que los enlaces de compra de los libros son correctos
- [ ] Elimina o modifica el contenido de demostración
- [ ] Conecta el repositorio con Pages CMS (ver instrucciones abajo)
- [ ] Configura el despliegue en Cloudflare Pages (ver instrucciones abajo)

---

## Stack técnico

| Tecnología | Uso |
|---|---|
| [Astro 4](https://astro.build) | Framework principal, generación estática |
| [TypeScript](https://typescriptlang.org) | Tipado |
| [Tailwind CSS](https://tailwindcss.com) | Estilos |
| [Pages CMS](https://pagescms.org) | Panel de administración sin backend |
| [GitHub](https://github.com) | Repositorio y almacenamiento |
| [Cloudflare Pages](https://pages.cloudflare.com) | Hosting gratuito |

**Coste mensual: 0 €**

---

## Estructura del proyecto

```
├── public/
│   ├── images/placeholder/   ← SUSTITUIR por imágenes reales
│   ├── uploads/              ← Imágenes subidas desde el CMS
│   └── robots.txt
├── src/
│   ├── components/           ← Componentes Astro
│   ├── content/              ← Contenido en Markdown
│   │   ├── libros/
│   │   ├── articulos/
│   │   ├── apariciones/
│   │   └── paginas/          ← Páginas legales
│   ├── data/                 ← Configuración en YAML
│   │   ├── config.yaml       ← Configuración general
│   │   └── autor.yaml        ← Datos del autor
│   ├── layouts/
│   ├── pages/
│   └── styles/
├── .pages.yml                ← Configuración de Pages CMS
├── astro.config.mjs
└── wrangler.toml             ← Configuración de Cloudflare Pages
```

---

## Desarrollo local

### Requisitos

- Node.js 18 o superior
- npm

### Instalar y arrancar

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La web estará disponible en `http://localhost:4321`.

### Compilar para producción

```bash
npm run build
# El resultado estará en dist/
```

---

## Conectar GitHub con Pages CMS

Pages CMS es el panel desde el que Luis Miguel podrá editar el contenido sin tocar código.

### Pasos

1. **Crea una cuenta en Pages CMS**
   - Ve a [https://app.pagescms.org](https://app.pagescms.org)
   - Haz clic en «Sign in with GitHub»
   - Autoriza el acceso a tu cuenta de GitHub

2. **Abre el repositorio**
   - En el panel de Pages CMS verás la lista de repositorios a los que tienes acceso
   - Selecciona el repositorio de esta web
   - Pages CMS leerá el archivo `.pages.yml` y mostrará las colecciones automáticamente

3. **Comprueba las colecciones**
   Deberías ver estas secciones en el panel:
   - ⚙ Configuración general
   - ✍ Datos del autor
   - 📚 Libros
   - 📰 Artículos y publicaciones
   - 🎙 Apariciones y eventos
   - 📄 Páginas legales

4. **Guarda el enlace**
   - El panel de Pages CMS estará siempre disponible en [https://app.pagescms.org](https://app.pagescms.org)
   - También puedes acceder desde `/admin` en tu propia web

---

## Desplegar en Cloudflare Pages

### Primera vez

1. Ve a [https://pages.cloudflare.com](https://pages.cloudflare.com)
2. Crea una cuenta gratuita (o usa la que tengas)
3. Pulsa «Create a project» → «Connect to Git»
4. Autoriza el acceso a GitHub y selecciona este repositorio
5. Configura el build:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Node version:** `20` (en Variables de entorno: `NODE_VERSION = 20`)
6. Pulsa «Save and Deploy»

Cloudflare Pages generará una URL del tipo `tu-proyecto.pages.dev`.

### Despliegue automático

A partir de ahora, **cada vez que Pages CMS guarde un cambio**, se creará un commit en GitHub y Cloudflare Pages desplegará la web automáticamente en 1-2 minutos.

---

## Conectar un dominio personalizado

1. En Cloudflare Pages → tu proyecto → «Custom domains»
2. Pulsa «Set up a custom domain»
3. Introduce tu dominio (ej: `luismiguelagud.com`)
4. Sigue las instrucciones para añadir los registros DNS en tu proveedor de dominio

Si el dominio está registrado en Cloudflare, los registros se configuran automáticamente.

---

## Cómo añadir un libro (sin tocar código)

1. Ve a [https://app.pagescms.org](https://app.pagescms.org) y accede con GitHub
2. Selecciona el repositorio de la web
3. En el menú lateral, haz clic en **📚 Libros**
4. Pulsa el botón **«Nuevo libro»** (o similar)
5. Rellena los campos:
   - **Título** (obligatorio)
   - **Portada** — sube la imagen de la portada
   - **Descripción de la portada** — texto alternativo accesible
   - **Descripción corta** — una frase para mostrar en la tarjeta
   - **Sinopsis completa** — texto largo para la página individual
   - **Precio**, **Editorial**, **ISBN**, etc.
   - **Estado** — Disponible / Próximamente / Agotado
   - **Enlace de compra** — URL de Amazon u otra tienda
   - **Orden** — número que determina en qué posición aparece (1 = primero)
6. Pulsa **«Guardar»**
7. En 1-2 minutos el libro aparecerá en la web

---

## Cómo añadir un artículo

1. En Pages CMS → **📰 Artículos y publicaciones** → **Nuevo artículo**
2. Elige el **tipo**:
   - «Artículo propio» → escribe el contenido directamente en el campo «Contenido»
   - «Artículo externo» → pon la URL en el campo «URL del artículo externo»
3. Rellena título, extracto, fecha y categoría
4. Guarda → la web se actualiza sola

---

## Personalización de colores y tipografía

Edita `tailwind.config.mjs`:

```js
colors: {
  tinta:  '#0F0E0D',  // color principal del texto
  crema:  '#F7F3EE',  // fondo claro
  oro:    '#B8975A',  // acento (color de marca)
  arena:  '#E8E2D9',  // fondo secundario
  gris:   '#6B6560',  // texto secundario
}
```

Cambia estos valores y vuelve a compilar. Toda la web cambiará de colores.

Para las tipografías, edita el `@import` en `src/styles/global.css` y actualiza `fontFamily` en `tailwind.config.mjs`.

---

## Imágenes placeholder

Todas las imágenes de demostración están en `public/images/placeholder/`. Sustitúyelas por las reales con los mismos nombres de archivo, o actualiza las rutas en los archivos de contenido.

| Archivo | Dónde se usa |
|---|---|
| `hero-autor.jpg` | Foto principal de la portada |
| `autor-bio.jpg` | Foto en la sección «Sobre mí» |
| `libro-1.jpg` | Portada del primer libro |
| `libro-2.jpg` | Portada del segundo libro |
| `libro-3.jpg` | Portada del tercer libro |
| `articulo-1.jpg` | Imagen artículo 1 |
| `articulo-2.jpg` | Imagen artículo 2 |
| `articulo-3.jpg` | Imagen artículo 3 |
| `articulo-4.jpg` | Imagen artículo 4 |
| `og-default.jpg` | Imagen al compartir en redes (1200×630 px) |

---

## SEO y datos estructurados

La web incluye automáticamente:
- Título y descripción por página
- Open Graph y Twitter Cards
- Schema.org `Person`, `Book` y `Article`
- Sitemap XML generado por Astro
- `robots.txt`
- URLs limpias y canónicas

Para personalizar el SEO de cada libro o artículo, edita sus campos `titulo` y `extracto` en el CMS.

---

## Accesibilidad

- HTML semántico completo
- Enlace «Saltar al contenido» para lectores de pantalla
- Todos los botones e imágenes tienen etiquetas accesibles
- Navegación completa por teclado
- Foco visible en todos los elementos interactivos
- Animaciones desactivadas con `prefers-reduced-motion`
- Contraste de color WCAG AA

---

## Privacidad y cookies

Esta web **no usa cookies** ni rastrea usuarios. No hay analítica por defecto. No se muestra banner de cookies.

Si en el futuro quieres añadir analítica, se recomienda [Fathom](https://usefathom.com) o [Plausible](https://plausible.io) (ambas respetuosas con la privacidad y con plan gratuito para sitios pequeños).

---

## Licencia del código

El código de este proyecto es de uso privado de Luis Miguel Agud Sorlí. El contenido (textos, imágenes) es propiedad del autor.
