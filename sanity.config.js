'use client'

import { defineConfig } from 'sanity'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { dataset, projectId } from './src/sanity/env.js'
import { initialValueTemplates, schemaTypes } from './src/sanity/schema-types/index.js'
import { structure } from './src/sanity/structure.js'
import { resolve } from './src/sanity/presentation.js'
import { ContentInstallerTool } from './src/sanity/migration-tool.jsx'

const singletonTypes = new Set(['siteSettings', 'homePage', 'editorialPage'])

export default defineConfig({
  name: 'default',
  title: 'Grafeno de Verdad · Administrador',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    presentationTool({
      resolve,
      previewUrl: {
        initial: '/es',
        previewMode: {
          enable: '/api/draft-mode/enable',
          disable: '/api/draft-mode/disable',
        },
      },
    }),
  ],
  tools: [{ name: 'instalar-v5', title: 'Instalar V5', component: ContentInstallerTool }],
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
