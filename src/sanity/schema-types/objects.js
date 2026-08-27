import { defineArrayMember, defineField, defineType } from 'sanity'

export const localizedString = defineType({
  name: 'localizedString',
  title: 'Texto breve bilingüe',
  type: 'object',
  fields: [
    defineField({ name: 'es', title: 'Español', type: 'string' }),
    defineField({ name: 'en', title: 'English', type: 'string' }),
  ],
})

export const localizedText = defineType({
  name: 'localizedText',
  title: 'Texto bilingüe',
  type: 'object',
  fields: [
    defineField({ name: 'es', title: 'Español', type: 'text', rows: 4 }),
    defineField({ name: 'en', title: 'English', type: 'text', rows: 4 }),
  ],
})

export const localizedStringList = defineType({
  name: 'localizedStringList',
  title: 'Lista bilingüe',
  type: 'object',
  fields: [
    defineField({ name: 'es', title: 'Español', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
    defineField({ name: 'en', title: 'English', type: 'array', of: [defineArrayMember({ type: 'string' })] }),
  ],
})

export const localizedRichText = defineType({
  name: 'localizedRichText',
  title: 'Contenido enriquecido bilingüe',
  type: 'object',
  fields: [
    defineField({ name: 'es', title: 'Español', type: 'array', of: [defineArrayMember({ type: 'block' })] }),
    defineField({ name: 'en', title: 'English', type: 'array', of: [defineArrayMember({ type: 'block' })] }),
  ],
})

export const localizedCta = defineType({
  name: 'localizedCta',
  title: 'Botón o enlace',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Etiqueta', type: 'localizedString' }),
    defineField({ name: 'href', title: 'Ruta o URL', type: 'string', description: 'Ejemplo: materiales, contacto o https://…' }),
  ],
  preview: { select: { title: 'label.es', subtitle: 'href' } },
})

export const editorialImage = defineType({
  name: 'editorialImage',
  title: 'Imagen editorial',
  type: 'image',
  options: { hotspot: true },
  fields: [
    defineField({ name: 'alt', title: 'Texto alternativo', type: 'localizedString', description: 'Describa la información visual; déjelo vacío solo si la imagen es decorativa.' }),
    defineField({ name: 'caption', title: 'Pie de imagen', type: 'localizedText' }),
    defineField({ name: 'credit', title: 'Crédito o autor', type: 'string' }),
    defineField({ name: 'rights', title: 'Derechos y procedencia', type: 'string', description: 'Registre licencia, propietario o autorización de uso.' }),
  ],
})

export const keyFact = defineType({
  name: 'keyFact',
  title: 'Dato clave',
  type: 'object',
  fields: [
    defineField({ name: 'value', title: 'Valor breve', type: 'string' }),
    defineField({ name: 'label', title: 'Explicación', type: 'localizedString' }),
  ],
  preview: { select: { title: 'value', subtitle: 'label.es' } },
})

export const directorMessage = defineType({
  name: 'directorMessage',
  title: 'Mensaje del Director',
  type: 'object',
  fields: [
    defineField({ name: 'label', title: 'Texto del botón', type: 'localizedString' }),
    defineField({ name: 'title', title: 'Título del mensaje', type: 'localizedString' }),
    defineField({ name: 'paragraphs', title: 'Párrafos', description: 'Cada elemento se muestra como un párrafo independiente.', type: 'localizedStringList' }),
    defineField({ name: 'directorName', title: 'Nombre del Director', type: 'string' }),
    defineField({ name: 'role', title: 'Cargo', type: 'localizedString' }),
    defineField({ name: 'companyName', title: 'Empresa', type: 'string' }),
    defineField({ name: 'address', title: 'Domicilio en la firma', type: 'string' }),
  ],
  preview: { select: { title: 'title.es', subtitle: 'directorName' } },
})

export const processStep = defineType({
  name: 'processStep',
  title: 'Paso',
  type: 'object',
  fields: [
    defineField({ name: 'number', title: 'Número', type: 'string' }),
    defineField({ name: 'title', title: 'Título', type: 'localizedString' }),
    defineField({ name: 'description', title: 'Descripción', type: 'localizedText' }),
  ],
  preview: { select: { title: 'title.es', subtitle: 'number' } },
})

export const contentSection = defineType({
  name: 'contentSection',
  title: 'Sección editorial',
  type: 'object',
  fields: [
    defineField({ name: 'internalTitle', title: 'Nombre interno', type: 'string', description: 'Solo identifica la sección dentro del administrador.' }),
    defineField({ name: 'eyebrow', title: 'Antetítulo', type: 'localizedString' }),
    defineField({ name: 'title', title: 'Título', type: 'localizedString' }),
    defineField({ name: 'body', title: 'Texto', type: 'localizedText' }),
    defineField({ name: 'richBody', title: 'Contenido enriquecido', type: 'localizedRichText' }),
    defineField({ name: 'image', title: 'Imagen', type: 'editorialImage' }),
    defineField({ name: 'cta', title: 'Botón', type: 'localizedCta' }),
    defineField({ name: 'style', title: 'Tratamiento visual', type: 'string', options: { list: [{ title: 'Claro', value: 'light' }, { title: 'Oscuro', value: 'dark' }, { title: 'Acento', value: 'accent' }] }, initialValue: 'light' }),
    defineField({ name: 'enabled', title: 'Mostrar sección', type: 'boolean', initialValue: true }),
  ],
  preview: { select: { title: 'internalTitle', subtitle: 'title.es', media: 'image' } },
})

export const seoFields = defineType({
  name: 'seoFields',
  title: 'SEO y redes',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Título SEO', type: 'localizedString' }),
    defineField({ name: 'description', title: 'Descripción SEO', type: 'localizedText' }),
    defineField({ name: 'image', title: 'Imagen para compartir', type: 'editorialImage' }),
    defineField({ name: 'noIndex', title: 'Ocultar de buscadores', type: 'boolean', initialValue: false }),
  ],
})
