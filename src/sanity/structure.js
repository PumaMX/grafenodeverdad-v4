import { materials, solutions } from '../data/site-content.js'
import { pageTemplates } from './initial-content.js'

const singleton = (S, { id, schemaType, title, templateId = schemaType }) =>
  S.listItem()
    .id(id)
    .title(title)
    .schemaType(schemaType)
    .child(S.document().schemaType(schemaType).documentId(id).initialValueTemplate(templateId))

const catalog = (S, { id, title, schemaType, items, templatePrefix }) =>
  S.listItem()
    .id(id)
    .title(title)
    .child(
      S.list()
        .title(title)
        .items([
          ...items.map((item) => singleton(S, {
            id: `${schemaType}.${item.slug}`,
            schemaType,
            title: item.name.es,
            templateId: `${templatePrefix}-${item.slug}`,
          })),
          S.divider(),
          S.documentTypeListItem(schemaType).title(`Todos y nuevos ${title.toLowerCase()}`),
        ]),
    )

export const structure = (S) =>
  S.list()
    .title('Contenido')
    .items([
      singleton(S, { id: 'siteSettings', schemaType: 'siteSettings', title: 'Configuración del sitio' }),
      singleton(S, { id: 'homePage', schemaType: 'homePage', title: 'Portada' }),
      S.listItem()
        .id('pages')
        .title('Páginas')
        .child(
          S.list()
            .title('Páginas')
            .items(pageTemplates.map((page) => singleton(S, {
              id: page.documentId,
              schemaType: 'editorialPage',
              title: page.title,
              templateId: page.id,
            }))),
        ),
      S.divider(),
      catalog(S, { id: 'materials', title: 'Materiales', schemaType: 'material', items: materials, templatePrefix: 'material' }),
      catalog(S, { id: 'solutions', title: 'Soluciones', schemaType: 'solution', items: solutions, templatePrefix: 'solution' }),
      S.documentTypeListItem('resource').title('Recursos y documentos'),
    ])
