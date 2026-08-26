import { defineArrayMember, defineField, defineType } from 'sanity'

const surfaceField = defineField({
  name: 'surface',
  title: 'Fondo',
  type: 'string',
  options: {
    layout: 'radio',
    list: [
      { title: 'Papel', value: 'paper' },
      { title: 'Claro', value: 'light' },
      { title: 'Oscuro', value: 'dark' },
      { title: 'Acento verde', value: 'accent' },
    ],
  },
  initialValue: 'paper',
})

const commonFields = () => [
  defineField({ name: 'internalTitle', title: 'Nombre interno del bloque', type: 'string', description: 'Sirve para reconocer el bloque al ordenar la página.' }),
  defineField({ name: 'enabled', title: 'Mostrar bloque', type: 'boolean', initialValue: true }),
  surfaceField,
]

const headingFields = () => [
  defineField({ name: 'eyebrow', title: 'Antetítulo', type: 'localizedString' }),
  defineField({ name: 'title', title: 'Título', type: 'localizedString' }),
  defineField({ name: 'body', title: 'Introducción', type: 'localizedText' }),
]

const preview = {
  select: { internalTitle: 'internalTitle', title: 'title.es', media: 'image' },
  prepare: ({ internalTitle, title, media }) => ({ title: internalTitle || title || 'Bloque sin nombre', subtitle: title, media }),
}

export const blockItem = defineType({
  name: 'blockItem',
  title: 'Elemento',
  type: 'object',
  fields: [
    defineField({ name: 'number', title: 'Número', type: 'string' }),
    defineField({ name: 'value', title: 'Código o valor destacado', type: 'string' }),
    defineField({ name: 'title', title: 'Título', type: 'localizedString' }),
    defineField({ name: 'body', title: 'Texto', type: 'localizedText' }),
    defineField({ name: 'points', title: 'Lista', type: 'localizedStringList' }),
    defineField({ name: 'link', title: 'Enlace', type: 'localizedCta' }),
    defineField({ name: 'image', title: 'Imagen', type: 'editorialImage' }),
  ],
  preview: {
    select: { title: 'title.es', subtitle: 'number', media: 'image' },
    prepare: ({ title, subtitle, media }) => ({ title: title || 'Elemento', subtitle, media }),
  },
})

export const splitTextBlock = defineType({
  name: 'splitTextBlock',
  title: 'Texto en columnas',
  type: 'object',
  fields: [
    ...commonFields(),
    ...headingFields(),
    defineField({ name: 'lead', title: 'Texto destacado', type: 'localizedText' }),
    defineField({ name: 'points', title: 'Lista de puntos', type: 'localizedStringList' }),
    defineField({ name: 'image', title: 'Imagen', type: 'editorialImage' }),
    defineField({
      name: 'layout', title: 'Composición', type: 'string', initialValue: 'text',
      options: { layout: 'radio', list: [{ title: 'Dos columnas de texto', value: 'text' }, { title: 'Imagen izquierda', value: 'imageLeft' }, { title: 'Imagen derecha', value: 'imageRight' }] },
    }),
    defineField({ name: 'action', title: 'Botón', type: 'localizedCta' }),
  ],
  preview,
})

export const cardsBlock = defineType({
  name: 'cardsBlock',
  title: 'Tarjetas',
  type: 'object',
  fields: [
    ...commonFields(),
    ...headingFields(),
    defineField({
      name: 'presentation', title: 'Apariencia', type: 'string', initialValue: 'cards',
      options: { list: [{ title: 'Tarjetas', value: 'cards' }, { title: 'Principios numerados', value: 'principles' }, { title: 'Capacidades', value: 'capabilities' }, { title: 'Documentos', value: 'documents' }] },
    }),
    defineField({ name: 'columns', title: 'Columnas', type: 'number', initialValue: 3, validation: (Rule) => Rule.min(1).max(4) }),
    defineField({ name: 'items', title: 'Elementos', type: 'array', of: [defineArrayMember({ type: 'blockItem' })] }),
    defineField({ name: 'action', title: 'Botón general', type: 'localizedCta' }),
  ],
  preview,
})

export const journeyBlock = defineType({
  name: 'journeyBlock',
  title: 'Rutas o puntos de partida',
  type: 'object',
  fields: [
    ...commonFields(),
    ...headingFields(),
    defineField({ name: 'items', title: 'Rutas', type: 'array', of: [defineArrayMember({ type: 'blockItem' })], validation: (Rule) => Rule.max(4) }),
  ],
  preview,
})

export const processBlock = defineType({
  name: 'processBlock',
  title: 'Proceso por pasos',
  type: 'object',
  fields: [
    ...commonFields(),
    ...headingFields(),
    defineField({ name: 'items', title: 'Pasos', type: 'array', of: [defineArrayMember({ type: 'blockItem' })] }),
  ],
  preview,
})

export const catalogBlock = defineType({
  name: 'catalogBlock',
  title: 'Catálogo dinámico',
  type: 'object',
  fields: [
    ...commonFields(),
    ...headingFields(),
    defineField({ name: 'catalogType', title: 'Contenido', type: 'string', options: { layout: 'radio', list: [{ title: 'Materiales', value: 'materials' }, { title: 'Soluciones', value: 'solutions' }] }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'display', title: 'Presentación', type: 'string', initialValue: 'cards', options: { layout: 'radio', list: [{ title: 'Tarjetas', value: 'cards' }, { title: 'Lista editorial', value: 'list' }] } }),
    defineField({ name: 'limit', title: 'Número máximo', type: 'number', description: 'Déjelo vacío para mostrar todo el catálogo.', validation: (Rule) => Rule.min(1).max(24) }),
    defineField({ name: 'itemLabel', title: 'Texto del enlace de cada elemento', type: 'localizedString' }),
    defineField({ name: 'moreLink', title: 'Enlace para ver todo', type: 'localizedCta' }),
  ],
  preview,
})

export const evidenceBlock = defineType({
  name: 'evidenceBlock',
  title: 'Evidencia o preguntas clave',
  type: 'object',
  fields: [
    ...commonFields(),
    ...headingFields(),
    defineField({ name: 'items', title: 'Preguntas o evidencias', type: 'array', of: [defineArrayMember({ type: 'blockItem' })] }),
    defineField({ name: 'action', title: 'Botón', type: 'localizedCta' }),
  ],
  preview,
})

export const tableBlock = defineType({
  name: 'tableBlock',
  title: 'Tabla técnica',
  type: 'object',
  fields: [
    ...commonFields(),
    ...headingFields(),
    defineField({ name: 'firstColumn', title: 'Encabezado de primera columna', type: 'localizedString' }),
    defineField({ name: 'secondColumn', title: 'Encabezado de segunda columna', type: 'localizedString' }),
    defineField({ name: 'rows', title: 'Filas', type: 'array', of: [defineArrayMember({ type: 'blockItem' })] }),
    defineField({ name: 'note', title: 'Nota al pie', type: 'localizedText' }),
  ],
  preview,
})

export const resourceListBlock = defineType({
  name: 'resourceListBlock',
  title: 'Lista de recursos',
  type: 'object',
  fields: [
    ...commonFields(),
    ...headingFields(),
    defineField({ name: 'items', title: 'Recursos', type: 'array', of: [defineArrayMember({ type: 'blockItem' })] }),
  ],
  preview,
})

export const galleryBlock = defineType({
  name: 'galleryBlock',
  title: 'Galería de imágenes',
  type: 'object',
  fields: [
    ...commonFields(),
    ...headingFields(),
    defineField({ name: 'columns', title: 'Columnas', type: 'number', initialValue: 3, validation: (Rule) => Rule.min(1).max(4) }),
    defineField({ name: 'images', title: 'Imágenes', type: 'array', of: [defineArrayMember({ type: 'editorialImage' })] }),
  ],
  preview,
})

export const richTextBlock = defineType({
  name: 'richTextBlock',
  title: 'Texto enriquecido',
  type: 'object',
  fields: [
    ...commonFields(),
    ...headingFields(),
    defineField({ name: 'content', title: 'Contenido', type: 'localizedRichText' }),
    defineField({ name: 'image', title: 'Imagen', type: 'editorialImage' }),
    defineField({ name: 'action', title: 'Botón', type: 'localizedCta' }),
  ],
  preview,
})

export const ctaBlock = defineType({
  name: 'ctaBlock',
  title: 'Llamada a la acción',
  type: 'object',
  fields: [
    defineField({ name: 'internalTitle', title: 'Nombre interno del bloque', type: 'string' }),
    defineField({ name: 'enabled', title: 'Mostrar bloque', type: 'boolean', initialValue: true }),
    ...headingFields(),
    defineField({ name: 'primary', title: 'Botón principal', type: 'localizedCta' }),
    defineField({ name: 'secondary', title: 'Botón secundario', type: 'localizedCta' }),
    defineField({ name: 'image', title: 'Imagen', type: 'editorialImage' }),
    defineField({ name: 'tone', title: 'Apariencia', type: 'string', initialValue: 'dark', options: { layout: 'radio', list: [{ title: 'Oscura', value: 'dark' }, { title: 'Clara', value: 'light' }, { title: 'Panel compacto', value: 'panel' }] } }),
  ],
  preview,
})

export const contactFormBlock = defineType({
  name: 'contactFormBlock',
  title: 'Formulario de proyecto',
  type: 'object',
  fields: [
    defineField({ name: 'internalTitle', title: 'Nombre interno del bloque', type: 'string' }),
    defineField({ name: 'enabled', title: 'Mostrar bloque', type: 'boolean', initialValue: true }),
    defineField({ name: 'sidebarTitle', title: 'Título lateral', type: 'localizedString' }),
    defineField({ name: 'points', title: 'Datos solicitados', type: 'localizedStringList' }),
    defineField({ name: 'directLabel', title: 'Texto antes del correo', type: 'localizedString' }),
  ],
  preview: { select: { title: 'internalTitle', subtitle: 'sidebarTitle.es' }, prepare: ({ title, subtitle }) => ({ title: title || 'Formulario de proyecto', subtitle }) },
})

export const pageBlockTypes = [
  blockItem,
  splitTextBlock,
  cardsBlock,
  journeyBlock,
  processBlock,
  catalogBlock,
  evidenceBlock,
  tableBlock,
  resourceListBlock,
  galleryBlock,
  richTextBlock,
  ctaBlock,
  contactFormBlock,
]

export const pageBlockMembers = [
  'splitTextBlock',
  'cardsBlock',
  'journeyBlock',
  'processBlock',
  'catalogBlock',
  'evidenceBlock',
  'tableBlock',
  'resourceListBlock',
  'galleryBlock',
  'richTextBlock',
  'ctaBlock',
  'contactFormBlock',
  'contentSection',
].map((type) => defineArrayMember({ type }))
