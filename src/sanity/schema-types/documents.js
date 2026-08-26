import { defineArrayMember, defineField, defineType } from 'sanity'
import { homeInitialValue } from '../initial-content.js'

const bilingualRequired = (Rule) => Rule.custom((value) => {
  if (!value?.es || !value?.en) return 'Complete las versiones en español e inglés.'
  return true
})

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Configuración del sitio',
  type: 'document',
  groups: [{ name: 'identity', title: 'Identidad' }, { name: 'contact', title: 'Contacto' }, { name: 'seo', title: 'SEO' }],
  fields: [
    defineField({ name: 'siteName', title: 'Nombre público', type: 'string', group: 'identity', validation: (Rule) => Rule.required() }),
    defineField({ name: 'legalName', title: 'Razón social', type: 'string', group: 'identity' }),
    defineField({ name: 'tagline', title: 'Descriptor de marca', type: 'localizedString', group: 'identity' }),
    defineField({ name: 'logo', title: 'Logotipo', type: 'editorialImage', group: 'identity' }),
    defineField({ name: 'contactEmail', title: 'Correo público', type: 'email', group: 'contact' }),
    defineField({ name: 'phone', title: 'Teléfono público', type: 'string', group: 'contact' }),
    defineField({ name: 'address', title: 'Dirección pública', type: 'localizedText', group: 'contact' }),
    defineField({ name: 'canonicalUrl', title: 'Dominio canónico', type: 'url', group: 'seo' }),
    defineField({ name: 'defaultSocialImage', title: 'Imagen predeterminada para compartir', type: 'editorialImage', group: 'seo' }),
  ],
  initialValue: {
    siteName: 'Grafeno de Verdad',
    legalName: 'Grafeno de Verdad, S.A. de C.V.',
    tagline: { _type: 'localizedString', es: 'Materiales avanzados', en: 'Advanced materials' },
    contactEmail: 'contacto@grafeno.mx',
  },
  preview: { prepare: () => ({ title: 'Configuración del sitio' }) },
})

export const homePage = defineType({
  name: 'homePage',
  title: 'Portada',
  type: 'document',
  groups: [{ name: 'hero', title: 'Primera pantalla', default: true }, { name: 'sections', title: 'Secciones' }, { name: 'media', title: 'Imágenes' }, { name: 'seo', title: 'SEO' }],
  fields: [
    defineField({ name: 'eyebrow', title: 'Antetítulo', type: 'localizedString', group: 'hero', validation: bilingualRequired }),
    defineField({ name: 'title', title: 'Título principal', type: 'localizedString', group: 'hero', validation: bilingualRequired }),
    defineField({ name: 'description', title: 'Propuesta de valor', type: 'localizedText', group: 'hero', validation: bilingualRequired }),
    defineField({ name: 'primaryCta', title: 'Botón principal', type: 'localizedCta', group: 'hero' }),
    defineField({ name: 'secondaryCta', title: 'Botón secundario', type: 'localizedCta', group: 'hero' }),
    defineField({ name: 'heroImage', title: 'Imagen principal', type: 'editorialImage', group: 'media' }),
    defineField({ name: 'imageCaption', title: 'Nota de imagen', type: 'localizedText', group: 'media' }),
    defineField({ name: 'gallery', title: 'Galería de portada', type: 'array', of: [defineArrayMember({ type: 'editorialImage' })], group: 'media' }),
    defineField({ name: 'signals', title: 'Datos clave', type: 'array', of: [defineArrayMember({ type: 'keyFact' })], group: 'sections', validation: (Rule) => Rule.max(4) }),
    defineField({ name: 'sections', title: 'Secciones editoriales', type: 'array', of: [defineArrayMember({ type: 'contentSection' })], group: 'sections' }),
    defineField({ name: 'seo', title: 'SEO y redes', type: 'seoFields', group: 'seo' }),
  ],
  initialValue: homeInitialValue,
  preview: { prepare: () => ({ title: 'Portada' }) },
})

export const material = defineType({
  name: 'material',
  title: 'Material',
  type: 'document',
  groups: [{ name: 'content', title: 'Contenido', default: true }, { name: 'technical', title: 'Ficha técnica' }, { name: 'media', title: 'Imágenes' }, { name: 'seo', title: 'SEO' }],
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'localizedString', group: 'content', validation: bilingualRequired }),
    defineField({ name: 'slug', title: 'Ruta', type: 'slug', options: { source: 'name.es' }, group: 'content', validation: (Rule) => Rule.required() }),
    defineField({ name: 'code', title: 'Código', type: 'string', group: 'technical', validation: (Rule) => Rule.required() }),
    defineField({ name: 'eyebrow', title: 'Familia o formato', type: 'localizedString', group: 'content' }),
    defineField({ name: 'summary', title: 'Resumen', type: 'localizedText', group: 'content', validation: bilingualRequired }),
    defineField({ name: 'body', title: 'Descripción ampliada', type: 'localizedRichText', group: 'content' }),
    defineField({ name: 'formats', title: 'Formatos de suministro', type: 'localizedStringList', group: 'technical' }),
    defineField({ name: 'applications', title: 'Aplicaciones de referencia', type: 'localizedStringList', group: 'technical' }),
    defineField({ name: 'characterization', title: 'Caracterización', type: 'array', of: [defineArrayMember({ type: 'string' })], group: 'technical' }),
    defineField({ name: 'leadImage', title: 'Imagen principal', type: 'editorialImage', group: 'media' }),
    defineField({ name: 'gallery', title: 'Galería', type: 'array', of: [defineArrayMember({ type: 'editorialImage' })], group: 'media' }),
    defineField({ name: 'featured', title: 'Destacar en portada', type: 'boolean', group: 'content', initialValue: false }),
    defineField({ name: 'order', title: 'Orden', type: 'number', group: 'content', initialValue: 99 }),
    defineField({ name: 'seo', title: 'SEO y redes', type: 'seoFields', group: 'seo' }),
  ],
  orderings: [{ title: 'Orden editorial', name: 'editorialOrder', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name.es', subtitle: 'code', media: 'leadImage' } },
})

export const solution = defineType({
  name: 'solution',
  title: 'Solución',
  type: 'document',
  groups: [{ name: 'content', title: 'Contenido', default: true }, { name: 'media', title: 'Imágenes' }, { name: 'seo', title: 'SEO' }],
  fields: [
    defineField({ name: 'name', title: 'Nombre', type: 'localizedString', group: 'content', validation: bilingualRequired }),
    defineField({ name: 'slug', title: 'Ruta', type: 'slug', options: { source: 'name.es' }, group: 'content', validation: (Rule) => Rule.required() }),
    defineField({ name: 'code', title: 'Código', type: 'string', group: 'content', validation: (Rule) => Rule.required() }),
    defineField({ name: 'summary', title: 'Resumen', type: 'localizedText', group: 'content', validation: bilingualRequired }),
    defineField({ name: 'body', title: 'Descripción ampliada', type: 'localizedRichText', group: 'content' }),
    defineField({ name: 'outcomes', title: 'Resultados buscados', type: 'localizedStringList', group: 'content' }),
    defineField({ name: 'leadImage', title: 'Imagen principal', type: 'editorialImage', group: 'media' }),
    defineField({ name: 'gallery', title: 'Galería', type: 'array', of: [defineArrayMember({ type: 'editorialImage' })], group: 'media' }),
    defineField({ name: 'featured', title: 'Destacar en portada', type: 'boolean', group: 'content', initialValue: false }),
    defineField({ name: 'order', title: 'Orden', type: 'number', group: 'content', initialValue: 99 }),
    defineField({ name: 'seo', title: 'SEO y redes', type: 'seoFields', group: 'seo' }),
  ],
  orderings: [{ title: 'Orden editorial', name: 'editorialOrder', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'name.es', subtitle: 'code', media: 'leadImage' } },
})

export const editorialPage = defineType({
  name: 'editorialPage',
  title: 'Página',
  type: 'document',
  groups: [{ name: 'content', title: 'Contenido', default: true }, { name: 'media', title: 'Imágenes' }, { name: 'seo', title: 'SEO' }],
  fields: [
    defineField({ name: 'pageKey', title: 'Identificador', type: 'string', readOnly: true, group: 'content' }),
    defineField({ name: 'eyebrow', title: 'Antetítulo', type: 'localizedString', group: 'content' }),
    defineField({ name: 'title', title: 'Título', type: 'localizedString', group: 'content', validation: bilingualRequired }),
    defineField({ name: 'description', title: 'Introducción', type: 'localizedText', group: 'content', validation: bilingualRequired }),
    defineField({ name: 'sections', title: 'Secciones', type: 'array', of: [defineArrayMember({ type: 'contentSection' })], group: 'content' }),
    defineField({ name: 'heroImage', title: 'Imagen principal', type: 'editorialImage', group: 'media' }),
    defineField({ name: 'gallery', title: 'Galería', type: 'array', of: [defineArrayMember({ type: 'editorialImage' })], group: 'media' }),
    defineField({ name: 'seo', title: 'SEO y redes', type: 'seoFields', group: 'seo' }),
  ],
  preview: { select: { title: 'title.es', subtitle: 'pageKey', media: 'heroImage' } },
})

export const resource = defineType({
  name: 'resource',
  title: 'Recurso',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'localizedString', validation: bilingualRequired }),
    defineField({ name: 'slug', title: 'Ruta', type: 'slug', options: { source: 'title.es' }, validation: (Rule) => Rule.required() }),
    defineField({ name: 'summary', title: 'Resumen', type: 'localizedText' }),
    defineField({ name: 'cover', title: 'Portada', type: 'editorialImage' }),
    defineField({ name: 'file', title: 'Archivo descargable', type: 'file', fields: [defineField({ name: 'version', title: 'Versión', type: 'string' })] }),
    defineField({ name: 'publishedAt', title: 'Fecha de publicación', type: 'date' }),
    defineField({ name: 'featured', title: 'Destacar', type: 'boolean', initialValue: false }),
  ],
  preview: { select: { title: 'title.es', subtitle: 'publishedAt', media: 'cover' } },
})
