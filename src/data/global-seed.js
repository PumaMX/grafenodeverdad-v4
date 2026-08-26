const short = (es, en) => ({ _type: 'localizedString', es, en })
const long = (es, en) => ({ _type: 'localizedText', es, en })
const link = (key, es, en, href) => ({ _key: key, _type: 'localizedCta', label: short(es, en), href })

export const siteSettingsSeed = {
  siteName: 'Grafeno de Verdad',
  legalName: 'Grafeno de Verdad, S.A. de C.V.',
  tagline: short('Materiales avanzados', 'Advanced materials'),
  contactEmail: 'contacto@grafeno.mx',
  navigation: [
    link('materials', 'Materiales', 'Materials', 'materiales'),
    link('solutions', 'Soluciones', 'Solutions', 'soluciones'),
    link('capabilities', 'Capacidades', 'Capabilities', 'capacidades'),
    link('quality', 'Calidad', 'Quality', 'calidad'),
    link('company', 'Empresa', 'Company', 'empresa'),
    link('resources', 'Recursos', 'Resources', 'recursos'),
  ],
  contactCta: link('contact', 'Iniciar proyecto', 'Start a project', 'contacto'),
  footerStatement: long('Materiales grafénicos verificables, diseñados para integrarse y escalar. Hechos en México.', 'Verifiable graphene materials, designed to integrate and scale. Made in Mexico.'),
  footerExploreLabel: short('Explorar', 'Explore'),
  footerContactLabel: short('Conversemos', 'Let’s talk'),
  footerLegal: long('México · Información técnica sujeta a confirmación por grado y lote.', 'Mexico · Technical information is subject to grade and batch confirmation.'),
}
