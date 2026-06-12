import { defineCollection, z } from 'astro:content';

// ── Libros ────────────────────────────────────────────────
const libros = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    portada: z.string(),
    portada_alt: z.string(),
    descripcion_corta: z.string(),
    sinopsis: z.string().optional(),
    precio: z.number().optional(),
    moneda: z.string().default('EUR'),
    fecha_publicacion: z.coerce.date().optional(),
    editorial: z.string().optional(),
    isbn: z.string().optional(),
    paginas: z.number().int().positive().optional(),
    genero: z.string().optional(),
    estado: z.enum(['publicado', 'proximamente', 'agotado']).default('publicado'),
    boton_texto: z.string().default('Conseguir libro'),
    enlace_compra: z.string().url().optional(),
    enlaces_alternativos: z
      .array(z.object({ texto: z.string(), url: z.string().url() }))
      .optional(),
    destacado: z.boolean().default(false),
    orden: z.number().int().default(99),
    fragmento_pdf: z.string().optional(),
    resenas: z
      .array(z.object({ texto: z.string(), autor: z.string() }))
      .optional(),
  }),
});

// ── Artículos ─────────────────────────────────────────────
const articulos = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    imagen: z.string().optional(),
    imagen_alt: z.string().optional(),
    extracto: z.string(),
    fecha: z.coerce.date(),
    medio: z.string().optional(),
    categoria: z.string().optional(),
    etiquetas: z.array(z.string()).optional(),
    autor: z.string().default('Luis Miguel Agud Sorlí'),
    enlace_externo: z.string().url().optional(),
    tiempo_lectura: z.number().int().positive().optional(),
    destacado: z.boolean().default(false),
    orden: z.number().int().default(99),
    tipo: z.enum(['externo', 'propio']).default('propio'),
    publicado: z.boolean().default(true),
  }),
});

// ── Apariciones ───────────────────────────────────────────
const apariciones = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    tipo: z.enum([
      'entrevista',
      'podcast',
      'presentacion',
      'premio',
      'evento',
      'colaboracion',
      'relato',
      'prensa',
      'otro',
    ]),
    fecha: z.coerce.date().optional(),
    medio: z.string().optional(),
    descripcion: z.string().optional(),
    enlace: z.string().url().optional(),
    imagen: z.string().optional(),
    imagen_alt: z.string().optional(),
    activo: z.boolean().default(true),
    orden: z.number().int().default(99),
  }),
});

// ── Páginas legales ───────────────────────────────────────
const paginas = defineCollection({
  type: 'content',
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string().optional(),
    publicada: z.boolean().default(true),
  }),
});

export const collections = { libros, articulos, apariciones, paginas };
