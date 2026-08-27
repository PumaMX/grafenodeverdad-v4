import { defineLocations } from 'sanity/presentation'

const pageTitles = {
  empresa: 'Empresa',
  capacidades: 'Capacidades',
  'academia-industria': 'Academia–Industria',
  calidad: 'Calidad',
  recursos: 'Recursos',
  contacto: 'Contacto',
  materiales: 'Materiales',
  soluciones: 'Soluciones',
}

export const resolve = {
  locations: {
    homePage: defineLocations({
      locations: [{ title: 'Portada', href: '/es' }],
    }),
    editorialPage: defineLocations({
      select: { pageKey: 'pageKey', title: 'title.es' },
      resolve: (document) => ({
        locations: document?.pageKey ? [{ title: document.title || pageTitles[document.pageKey] || 'Página', href: `/es/${document.pageKey}` }] : [],
      }),
    }),
    material: defineLocations({
      select: { title: 'name.es', slug: 'slug.current' },
      resolve: (document) => ({
        locations: document?.slug ? [{ title: document.title || 'Material', href: `/es/materiales/${document.slug}` }, { title: 'Materiales', href: '/es/materiales' }] : [],
      }),
    }),
    solution: defineLocations({
      select: { title: 'name.es', slug: 'slug.current' },
      resolve: (document) => ({
        locations: document?.slug ? [{ title: document.title || 'Solución', href: `/es/soluciones/${document.slug}` }, { title: 'Soluciones', href: '/es/soluciones' }] : [],
      }),
    }),
    siteSettings: defineLocations({
      message: 'Esta configuración se utiliza en todo el sitio.',
      tone: 'caution',
    }),
  },
}
