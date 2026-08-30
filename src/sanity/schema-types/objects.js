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
    defineField({
      name: 'fallbackPath',
      title: 'Imagen predeterminada del sitio',
      type: 'string',
      readOnly: true,
      description: 'Ruta de respaldo incluida en el sitio. Al cargar una imagen en Sanity, la imagen cargada tendrá prioridad.',
    }),
    defineField({ name: 'url', title: 'URL resuelta', type: 'string', hidden: true, readOnly: true }),
    defineField({ name: 'alt', title: 'Texto alternativo', type: 'localizedString', description: 'Describa la información visual; déjelo vacío solo si la imagen es decorativa.' }),
    defineField({ name: 'caption', title: 'Pie de imagen', type: 'localizedText' }),
    defineField({
      name: 'fit',
      title: 'Encuadre en la página',
      type: 'string',
      description: 'Use “Completa” para micrografías, gráficas o imágenes con escalas y rótulos que no deben recortarse.',
      options: { layout: 'radio', list: [{ title: 'Llenar el marco', value: 'cover' }, { title: 'Mostrar completa', value: 'contain' }] },
      initialValue: 'cover',
    }),
    defineField({
      name: 'provenance',
      title: 'Procedencia visual',
      type: 'string',
      description: 'Permite distinguir evidencia de GdV de material externo o de una visualización conceptual.',
      options: { list: [{ title: 'Evidencia o fotografía de GdV', value: 'gdv' }, { title: 'Colaborador o tercero autorizado', value: 'thirdParty' }, { title: 'Visualización conceptual', value: 'conceptual' }] },
    }),
    defineField({ name: 'credit', title: 'Crédito o autor', type: 'string' }),
    defineField({ name: 'rights', title: 'Derechos y procedencia', type: 'string', description: 'Registre licencia, propietario o autorización de uso.' }),
    defineField({ name: 'sourceUrl', title: 'Fuente o licencia', type: 'url' }),
  ],
})

export const solutionProject = defineType({
  name: 'solutionProject',
  title: 'Proyecto o ruta de aplicación',
  type: 'object',
  fields: [
    defineField({ name: 'title', title: 'Nombre del proyecto', type: 'localizedString' }),
    defineField({
      name: 'status',
      title: 'Estado editorial',
      type: 'string',
      description: 'Describe el grado de preparación sin convertir una hipótesis en una promesa comercial.',
      options: {
        layout: 'radio',
        list: [
          { title: 'Disponible para evaluación técnica', value: 'evaluation' },
          { title: 'Línea de co-desarrollo', value: 'coDevelopment' },
          { title: 'Oportunidad de proyecto', value: 'concept' },
        ],
      },
      initialValue: 'coDevelopment',
    }),
    defineField({ name: 'summary', title: 'Descripción', type: 'localizedText' }),
    defineField({ name: 'objective', title: 'Objetivo técnico', type: 'localizedText' }),
    defineField({ name: 'validation', title: 'Qué se mediría', type: 'localizedStringList' }),
    defineField({ name: 'image', title: 'Imagen del proyecto', type: 'editorialImage' }),
  ],
  preview: { select: { title: 'title.es', subtitle: 'status', media: 'image' } },
})

export const scientificPrecedent = defineType({
  name: 'scientificPrecedent',
  title: 'Precedente científico',
  type: 'object',
  fields: [
    defineField({ name: 'milestone', title: 'Hito o referencia breve', type: 'string' }),
    defineField({ name: 'contribution', title: 'Contribución reportada', type: 'localizedText' }),
    defineField({ name: 'implication', title: 'Relevancia para esta línea', type: 'localizedText' }),
    defineField({ name: 'boundary', title: 'Límite de la comparación', type: 'localizedText' }),
    defineField({ name: 'url', title: 'Publicación', type: 'url' }),
  ],
  preview: { select: { title: 'milestone', subtitle: 'contribution.es' } },
})

export const scientificReference = defineType({
  name: 'scientificReference',
  title: 'Referencia científica',
  type: 'object',
  fields: [
    defineField({ name: 'citation', title: 'Referencia', type: 'text', rows: 3 }),
    defineField({ name: 'url', title: 'DOI o fuente', type: 'url' }),
    defineField({ name: 'context', title: 'Nota editorial', type: 'localizedText' }),
  ],
  preview: { select: { title: 'citation', subtitle: 'url' } },
})

export const impactFact = defineType({
  name: 'impactFact',
  title: 'Dato de contexto e impacto',
  type: 'object',
  fields: [
    defineField({ name: 'value', title: 'Cifra o valor', type: 'string' }),
    defineField({ name: 'label', title: 'Qué representa', type: 'localizedString' }),
    defineField({ name: 'context', title: 'Alcance, supuesto o cautela', type: 'localizedText' }),
    defineField({ name: 'url', title: 'Fuente pública', type: 'url' }),
  ],
  preview: { select: { title: 'value', subtitle: 'label.es' } },
})

export const solutionApplicationProfile = defineType({
  name: 'solutionApplicationProfile',
  title: 'Ficha de aplicación en desarrollo',
  type: 'object',
  fields: [
    defineField({ name: 'publicStatus', title: 'Estado público', type: 'localizedString' }),
    defineField({ name: 'trl', title: 'TRL actual', type: 'number', description: 'Visible únicamente dentro de la ficha detallada.' }),
    defineField({ name: 'technicalName', title: 'Nombre técnico', type: 'localizedText' }),
    defineField({ name: 'industrialProblem', title: 'Problema industrial', type: 'localizedText' }),
    defineField({ name: 'grapheneSolution', title: 'Solución basada en grafeno', type: 'localizedText' }),
    defineField({ name: 'expectedAdvantages', title: 'Ventajas esperadas', type: 'localizedText' }),
    defineField({ name: 'maturity', title: 'Estado de madurez', type: 'localizedText' }),
    defineField({ name: 'evidence', title: 'Evidencia disponible', type: 'localizedText' }),
    defineField({ name: 'nextMilestone', title: 'Siguiente hito', type: 'localizedText' }),
    defineField({ name: 'targetFunctions', title: 'Funciones objetivo', type: 'localizedStringList' }),
    defineField({ name: 'sectors', title: 'Sectores objetivo', type: 'localizedStringList' }),
    defineField({ name: 'modality', title: 'Modalidad', type: 'localizedText' }),
    defineField({ name: 'websiteCopy', title: 'Texto público de introducción', type: 'localizedStringList' }),
    defineField({ name: 'pilotScope', title: 'Alcance del piloto', type: 'localizedText' }),
    defineField({ name: 'pilotValidation', title: 'Validación del piloto', type: 'localizedText' }),
    defineField({ name: 'pilotGate', title: 'Criterio de avance', type: 'localizedText' }),
    defineField({ name: 'contactPrompt', title: 'Llamado a contacto', type: 'localizedText' }),
    defineField({ name: 'technicalFigure', title: 'Figura técnica autorizada', type: 'editorialImage' }),
    defineField({ name: 'scientificContext', title: 'Contexto científico', type: 'localizedText' }),
    defineField({ name: 'impactContext', title: 'Contexto de cifras públicas', type: 'localizedText' }),
    defineField({ name: 'impactFacts', title: 'Cifras públicas y escenarios', type: 'array', of: [defineArrayMember({ type: 'impactFact' })] }),
    defineField({ name: 'precedents', title: 'Precedentes científicos', type: 'array', of: [defineArrayMember({ type: 'scientificPrecedent' })] }),
    defineField({ name: 'references', title: 'Referencias selectivas', type: 'array', of: [defineArrayMember({ type: 'scientificReference' })] }),
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
