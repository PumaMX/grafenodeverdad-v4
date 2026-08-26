'use client'

import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { dataset, projectId } from './src/sanity/env.js'
import { initialValueTemplates, schemaTypes } from './src/sanity/schema-types/index.js'
import { structure } from './src/sanity/structure.js'

const singletonTypes = new Set(['siteSettings', 'homePage', 'editorialPage'])

export default defineConfig({
  name: 'default',
  title: 'Grafeno de Verdad · Administrador',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
    templates: (previous) => [
      ...previous.filter((template) => !singletonTypes.has(template.schemaType)),
      ...initialValueTemplates,
    ],
  },
  document: {
    newDocumentOptions: (previous) => previous.filter((item) => !singletonTypes.has(item.templateId)),
  },
})
