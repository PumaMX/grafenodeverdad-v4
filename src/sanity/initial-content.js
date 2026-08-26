import { materials, solutions } from '../data/site-content.js'

const localized = (es, en) => ({ _type: 'localizedString', es, en })
const localizedText = (es, en) => ({ _type: 'localizedText', es, en })
const localizedList = (value) => ({ _type: 'localizedStringList', es: value.es, en: value.en })

export const homeInitialValue = {
  eyebrow: localized('Materiales avanzados · México', 'Advanced materials · Mexico'),
  title: localized('Del material correcto a una integración que sí escala.', 'From the right material to an integration that can scale.'),
  description: localizedText(
    'Materiales grafénicos, formulación y co-desarrollo para convertir una hipótesis técnica en una decisión industrial medible.',
    'Graphene materials, formulation and co-development to turn a technical hypothesis into a measurable industrial decision.',
  ),
  primaryCta: { _type: 'localizedCta', label: localized('Encontrar un material', 'Find a material'), href: 'materiales' },
  secondaryCta: { _type: 'localizedCta', label: localized('Resolver un reto técnico', 'Solve a technical challenge'), href: 'contacto' },
  imageCaption: localizedText(
    'Visualización editorial generada; no representa una instalación o lote específico.',
    'Generated editorial visualization; it does not represent a specific facility or batch.',
  ),
  signals: [
    { _type: 'keyFact', value: 'MX', label: localized('Empresa mexicana', 'Mexican company') },
    { _type: 'keyFact', value: '25+', label: localized('Años de experiencia acumulada', 'Years of combined experience') },
    { _type: 'keyFact', value: '04', label: localized('Etapas: definir, seleccionar, validar y escalar', 'Stages: define, select, validate and scale') },
  ],
  sections: [
    {
      _type: 'contentSection',
      internalTitle: 'Dos puntos de partida',
      eyebrow: localized('Dos puntos de partida', 'Two starting points'),
      title: localized('¿Qué necesita mover hoy?', 'What do you need to move today?'),
      body: localizedText(
        'Empiece por la ruta que mejor describe su proyecto. Ambas terminan en criterios de éxito verificables.',
        'Start with the path that best describes your project. Both end in verifiable success criteria.',
      ),
      style: 'light',
      enabled: true,
    },
    {
      _type: 'contentSection',
      internalTitle: 'Co-desarrollo',
      eyebrow: localized('Co-desarrollo', 'Co-development'),
      title: localized('Menos promesas. Más decisiones con evidencia.', 'Fewer promises. More evidence-backed decisions.'),
      body: localizedText(
        'Una secuencia breve para reducir incertidumbre antes de escalar.',
        'A short sequence to reduce uncertainty before scaling.',
      ),
      style: 'dark',
      enabled: true,
    },
  ],
}

export const materialTemplates = materials.map((item, index) => ({
  id: `material-${item.slug}`,
  title: item.name.es,
  schemaType: 'material',
  value: {
    code: item.code,
    slug: { _type: 'slug', current: item.slug },
    order: index + 1,
    featured: index < 3,
    name: { _type: 'localizedString', ...item.name },
    eyebrow: { _type: 'localizedString', ...item.eyebrow },
    summary: { _type: 'localizedText', ...item.summary },
    formats: localizedList(item.formats),
    applications: localizedList(item.applications),
    characterization: item.characterization,
  },
}))

export const solutionTemplates = solutions.map((item, index) => ({
  id: `solution-${item.slug}`,
  title: item.name.es,
  schemaType: 'solution',
  value: {
    code: item.code,
    slug: { _type: 'slug', current: item.slug },
    order: index + 1,
    featured: index < 5,
    name: { _type: 'localizedString', ...item.name },
    summary: { _type: 'localizedText', ...item.summary },
    outcomes: localizedList(item.outcomes),
  },
}))

export const pageTemplates = [
  {
    id: 'page-empresa',
    documentId: 'page.empresa',
    title: 'Empresa',
    value: {
      pageKey: 'empresa',
      eyebrow: localized('Grafeno de Verdad · México', 'Grafeno de Verdad · Mexico'),
      title: localized('Ciencia útil para la industria', 'Useful science for industry'),
      description: localizedText(
        'Somos una empresa mexicana enfocada en materiales grafénicos, sistemas 2D y el trabajo técnico necesario para integrarlos.',
        'We are a Mexican company focused on graphene materials, 2D systems and the technical work required to integrate them.',
      ),
    },
  },
  {
    id: 'page-capacidades',
    documentId: 'page.capacidades',
    title: 'Capacidades',
    value: {
      pageKey: 'capacidades',
      eyebrow: localized('De la materia prima a la decisión', 'From raw material to decision'),
      title: localized('Capacidades', 'Capabilities'),
      description: localizedText(
        'Integramos formulación, caracterización y transferencia tecnológica en un solo hilo de trabajo.',
        'We connect formulation, characterization and technology transfer in one continuous workflow.',
      ),
    },
  },
  {
    id: 'page-calidad',
    documentId: 'page.calidad',
    title: 'Calidad',
    value: {
      pageKey: 'calidad',
      eyebrow: localized('Evidencia y trazabilidad', 'Evidence and traceability'),
      title: localized('Calidad que se puede leer', 'Quality you can read'),
      description: localizedText(
        'Una afirmación técnica es útil cuando identifica el material, el método, el resultado y su alcance.',
        'A technical claim is useful when it identifies the material, method, result and scope.',
      ),
    },
  },
  {
    id: 'page-recursos',
    documentId: 'page.recursos',
    title: 'Recursos',
    value: {
      pageKey: 'recursos',
      eyebrow: localized('Biblioteca técnica', 'Technical library'),
      title: localized('Recursos para decidir mejor', 'Resources for better decisions'),
      description: localizedText(
        'Guías breves para separar señal de ruido al seleccionar, caracterizar e integrar materiales grafénicos.',
        'Short guides to separate signal from noise when selecting, characterizing and integrating graphene materials.',
      ),
    },
  },
  {
    id: 'page-contacto',
    documentId: 'page.contacto',
    title: 'Contacto',
    value: {
      pageKey: 'contacto',
      eyebrow: localized('Iniciar proyecto', 'Start a project'),
      title: localized('Empecemos por la pregunta correcta', 'Let’s start with the right question'),
      description: localizedText(
        'Comparta el contexto técnico mínimo. Le responderemos con preguntas, opciones y un siguiente paso; no con una promesa genérica.',
        'Share the minimum technical context. We will reply with questions, options and a next step—not a generic promise.',
      ),
    },
  },
]
