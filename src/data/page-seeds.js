const short = (es, en) => ({ _type: 'localizedString', es, en })
const long = (es, en) => ({ _type: 'localizedText', es, en })
const list = (es, en) => ({ _type: 'localizedStringList', es, en })
const cta = (key, es, en, href) => ({ _key: key, _type: 'localizedCta', label: short(es, en), href })
const item = (key, { number, value, title, body, points, link, image } = {}) => ({
  _key: key,
  _type: 'blockItem',
  ...(number ? { number } : {}),
  ...(value ? { value } : {}),
  ...(title ? { title: short(...title) } : {}),
  ...(body ? { body: long(...body) } : {}),
  ...(points ? { points: list(...points) } : {}),
  ...(link ? { link: cta(`${key}-link`, ...link) } : {}),
  ...(image ? { image } : {}),
})

const page = (pageKey, eyebrow, title, description, sections) => ({
  pageKey,
  eyebrow: short(...eyebrow),
  title: short(...title),
  description: long(...description),
  sections,
})

export const homeSeed = {
  eyebrow: short('Materiales avanzados · México', 'Advanced materials · Mexico'),
  title: short('Del material correcto a una integración que sí escala.', 'From the right material to an integration that can scale.'),
  description: long(
    'Materiales grafénicos, formulación y co-desarrollo para convertir una hipótesis técnica en una decisión industrial medible.',
    'Graphene materials, formulation and co-development to turn a technical hypothesis into a measurable industrial decision.',
  ),
  primaryCta: cta('home-primary', 'Encontrar un material', 'Find a material', 'materiales'),
  secondaryCta: cta('home-secondary', 'Resolver un reto técnico', 'Solve a technical challenge', 'contacto'),
  imageCaption: long(
    'Visualización editorial generada; no representa una instalación o lote específico.',
    'Generated editorial visualization; it does not represent a specific facility or batch.',
  ),
  directorMessage: {
    _type: 'directorMessage',
    label: short('Mensaje del Director', "Director's Message"),
    title: short('La confianza no se pide: se demuestra', 'Trust is not asked for. It is demonstrated.'),
    paragraphs: list(
      [
        'Grafeno de Verdad nació de una convicción: México puede desarrollar materiales grafénicos con rigor científico, infraestructura propia y capacidad para llevarlos del laboratorio a aplicaciones reales.',
        'Por esa convicción decidí invertir en la construcción de instalaciones especializadas y en equipamiento científico de alto nivel. Hoy contamos con infraestructura para síntesis por CVD, producción y procesamiento a escala piloto e industrial, así como capacidades de caracterización mediante espectroscopía Raman, UV–Vis y otras técnicas especializadas.',
        'Esta visión se fortalece actualmente con la dirección científica del Dr. José Luis Rodríguez López y con un equipo comprometido con convertir el conocimiento en materiales, procesos y soluciones técnicamente sustentadas.',
        'Nuestra regla es sencilla: no prometemos lo que no podemos demostrar y no llamamos “grafeno” a un material sin evidencia que respalde su identidad y sus características.',
        'Damos la cara.',
        'Nuestros clientes y colaboradores pueden visitar nuestras instalaciones físicas, previa cita, conocer nuestra infraestructura, conversar con el equipo y comprender cómo trabajamos. No les pedimos que confíen ciegamente en nosotros: les mostramos capacidades, procesos, resultados y documentación.',
        'Los materiales que ofrecemos se acompañan de la caracterización y la información técnica correspondientes a su tipo, grado o lote. Cuando el proyecto lo requiere, los resultados pueden ser corroborados por laboratorios o especialistas externos e independientes. Así, el cliente puede saber qué material está recibiendo y evaluar si cumple con las necesidades de su aplicación.',
        'También somos francos sobre los alcances. Si un material no es adecuado para un propósito, lo decimos. Si una aplicación requiere desarrollo adicional, proponemos un camino con mediciones, especificaciones y criterios claros para validar los resultados.',
        'Ésa es la certeza que queremos ofrecer: una empresa mexicana con instalaciones reales, infraestructura científica, responsabilidad técnica y disposición para responder personalmente por su trabajo.',
        'Para nosotros, “Grafeno de Verdad” no es solamente un nombre. Es el compromiso con el que elegimos trabajar y ser evaluados.',
      ],
      [
        'Grafeno de Verdad was founded on a conviction: Mexico can develop graphene materials with scientific rigor, its own infrastructure and the capacity to take them from the laboratory to real-world applications.',
        'Because of that conviction, I decided to invest in purpose-built facilities and high-level scientific equipment. Today, we have infrastructure for CVD synthesis, pilot- and industrial-scale production and processing, as well as characterization capabilities including Raman spectroscopy, UV–Vis and other specialized techniques.',
        'That vision is now strengthened by the scientific leadership of Dr. José Luis Rodríguez López and a team committed to turning knowledge into technically grounded materials, processes and solutions.',
        'Our rule is simple: we do not promise what we cannot demonstrate, and we do not call a material “graphene” without evidence supporting its identity and characteristics.',
        'We stand behind our work.',
        'Our clients and collaborators may visit our facilities by appointment, see our infrastructure, speak with the team and understand how we work. We do not ask them to trust us blindly: we show them our capabilities, processes, results and documentation.',
        'The materials we offer are accompanied by the characterization and technical information corresponding to their type, grade or batch. When a project requires it, results can be corroborated by independent external laboratories or specialists. This allows the client to know what material they are receiving and assess whether it meets the needs of their application.',
        'We are also candid about scope. If a material is not suitable for a purpose, we say so. If an application requires further development, we propose a path with clear measurements, specifications and criteria for validating the results.',
        'That is the certainty we want to offer: a Mexican company with real facilities, scientific infrastructure, technical accountability and a willingness to answer personally for its work.',
        'For us, “Grafeno de Verdad” is more than a name. It is the commitment by which we choose to work and be evaluated.',
      ],
    ),
    directorName: 'Luis Caballero Navarro',
    role: short('Director', 'Director'),
    companyName: 'Grafeno de Verdad, S.A. de C.V.',
  },
  signals: [
    { _key: 'mexico', _type: 'keyFact', value: 'MX', label: short('Empresa mexicana', 'Mexican company') },
    { _key: 'experience', _type: 'keyFact', value: '25+', label: short('Años de experiencia acumulada', 'Years of combined experience') },
    { _key: 'stages', _type: 'keyFact', value: '04', label: short('Etapas: definir, seleccionar, validar y escalar', 'Stages: define, select, validate and scale') },
  ],
  sections: [
    {
      _key: 'starting-points', _type: 'journeyBlock', internalTitle: 'Dos puntos de partida', enabled: true, surface: 'light',
      eyebrow: short('Dos puntos de partida', 'Two starting points'),
      title: short('¿Qué necesita mover hoy?', 'What do you need to move today?'),
      body: long('Empiece por la ruta que mejor describe su proyecto. Ambas terminan en criterios de éxito verificables.', 'Start with the path that best describes your project. Both end in verifiable success criteria.'),
      items: [
        item('need-material', { number: '01', title: ['Necesito un material', 'I need a material'], body: ['Compare familias, formatos, técnicas de caracterización y aplicaciones de referencia.', 'Compare families, formats, characterization techniques and reference applications.'], link: ['Explorar el catálogo', 'Explore the catalog', 'materiales'] }),
        item('need-performance', { number: '02', title: ['Necesito mejorar desempeño', 'I need better performance'], body: ['Traducimos su reto en una hipótesis, una formulación y un plan de validación.', 'We translate your challenge into a hypothesis, a formulation and a validation plan.'], link: ['Definir mi proyecto', 'Define my project', 'contacto'] }),
      ],
    },
    {
      _key: 'materials-catalog', _type: 'catalogBlock', internalTitle: 'Materiales destacados', enabled: true, surface: 'paper',
      eyebrow: short('Materiales', 'Materials'), title: short('Una familia para cada interfaz.', 'A family for every interface.'),
      body: long('La especificación final se confirma según grado, formato, volumen y método de integración.', 'The final specification is confirmed according to grade, format, volume and integration method.'),
      catalogType: 'materials', display: 'cards', limit: 3,
      itemLabel: short('Ficha técnica', 'Technical profile'),
      moreLink: cta('materials-all', 'Ver los seis materiales', 'View all six materials', 'materiales'),
    },
    {
      _key: 'process', _type: 'processBlock', internalTitle: 'Proceso de co-desarrollo', enabled: true, surface: 'dark',
      eyebrow: short('Co-desarrollo', 'Co-development'), title: short('Menos promesas. Más decisiones con evidencia.', 'Fewer promises. More evidence-backed decisions.'),
      body: long('Una secuencia breve para reducir incertidumbre antes de escalar.', 'A short sequence to reduce uncertainty before scaling.'),
      items: [
        item('define', { number: '01', title: ['Definir', 'Define'], body: ['Objetivo funcional, matriz, proceso y criterio de éxito.', 'Functional target, matrix, process and success criterion.'] }),
        item('select', { number: '02', title: ['Seleccionar', 'Select'], body: ['Material, formato y ventana inicial de formulación.', 'Material, format and initial formulation window.'] }),
        item('validate', { number: '03', title: ['Validar', 'Validate'], body: ['Muestra o prototipo con caracterización orientada al riesgo.', 'Sample or prototype with risk-oriented characterization.'] }),
        item('scale', { number: '04', title: ['Escalar', 'Scale'], body: ['Ajuste de proceso, repetibilidad y siguiente decisión técnica.', 'Process adjustment, repeatability and the next technical decision.'] }),
      ],
    },
    {
      _key: 'solutions-catalog', _type: 'catalogBlock', internalTitle: 'Soluciones destacadas', enabled: true, surface: 'paper',
      eyebrow: short('Soluciones', 'Solutions'), title: short('El grafeno no es el producto final.', 'Graphene is not the end product.'),
      body: long('Diseñamos la interfaz entre el material, el proceso y el desempeño que importa.', 'We design the interface between the material, the process and the performance that matters.'),
      catalogType: 'solutions', display: 'list', limit: 5,
      itemLabel: short('Ver solución', 'View solution'),
      moreLink: cta('solutions-all', 'Explorar soluciones', 'Explore solutions', 'soluciones'),
    },
    {
      _key: 'evidence', _type: 'evidenceBlock', internalTitle: 'Calidad y evidencia', enabled: true, surface: 'accent',
      eyebrow: short('Calidad y evidencia', 'Quality and evidence'), title: short('Cada dato debe responder tres preguntas.', 'Every data point should answer three questions.'),
      body: long('TDS, SDS y CoA cumplen funciones distintas. Nuestro marco documental evita usar “certificado” como sustituto de datos verificables.', 'TDS, SDS and CoA serve different purposes. Our documentation framework avoids using “certified” as a substitute for verifiable data.'),
      action: cta('quality-link', 'Conocer el marco de calidad', 'See the quality framework', 'calidad'),
      items: [
        item('measured', { number: '01', title: ['¿Qué se midió?', 'What was measured?'], body: ['Propiedad, unidad y criterio claramente definidos.', 'Clearly defined property, unit and criterion.'] }),
        item('method', { number: '02', title: ['¿Cómo se midió?', 'How was it measured?'], body: ['Método, preparación de muestra y condiciones relevantes.', 'Method, sample preparation and relevant conditions.'] }),
        item('scope', { number: '03', title: ['¿A qué aplica?', 'What does it apply to?'], body: ['Grado, formato y lote asociados al resultado.', 'Grade, format and batch associated with the result.'] }),
      ],
    },
    {
      _key: 'final-cta', _type: 'ctaBlock', internalTitle: 'Llamada final', enabled: true, tone: 'dark',
      eyebrow: short('Su siguiente experimento', 'Your next experiment'), title: short('Cuéntenos qué quiere mejorar.', 'Tell us what you want to improve.'),
      body: long('Con la aplicación, la matriz, el proceso y una métrica objetivo podemos proponer el siguiente paso con más precisión.', 'With the application, matrix, process and a target metric, we can propose a more precise next step.'),
      primary: cta('final-primary', 'Preparar un brief técnico', 'Prepare a technical brief', 'contacto'),
      secondary: cta('final-secondary', 'Escribir directamente', 'Email us directly', 'mailto:contacto@grafeno.mx'),
    },
  ],
}

export const pageSeeds = {
  empresa: page(
    'empresa', ['Grafeno de Verdad · México', 'Grafeno de Verdad · Mexico'], ['Ciencia útil para la industria', 'Useful science for industry'],
    ['Somos una empresa mexicana enfocada en materiales grafénicos, sistemas 2D y el trabajo técnico necesario para integrarlos.', 'We are a Mexican company focused on graphene materials, 2D systems and the technical work required to integrate them.'],
    [
      {
        _key: 'thesis', _type: 'splitTextBlock', internalTitle: 'Nuestra tesis', enabled: true, surface: 'paper', layout: 'text',
        eyebrow: short('Nuestra tesis', 'Our thesis'), title: short('La oportunidad no está en agregar grafeno. Está en entender la interfaz.', 'The opportunity is not in adding graphene. It is in understanding the interface.'),
        lead: long('Un material avanzado solo crea valor cuando su identidad, dispersión, compatibilidad, proceso y efecto final se conectan. Nuestro trabajo es hacer visible esa cadena y convertirla en decisiones reproducibles.', 'An advanced material only creates value when its identity, dispersion, compatibility, process and final effect connect. Our work is to make that chain visible and turn it into reproducible decisions.'),
        body: long('El equipo reúne más de 25 años de experiencia acumulada en investigación, desarrollo e innovación en materiales avanzados. La trayectoria institucional, colaboraciones y activos verificables se incorporarán al sitio conforme se complete su documentación.', 'The team brings more than 25 years of combined experience in advanced-materials research, development and innovation. Verifiable institutional history, collaborations and assets will be added as their documentation is completed.'),
      },
      {
        _key: 'principles', _type: 'cardsBlock', internalTitle: 'Principios', enabled: true, surface: 'light', presentation: 'principles', columns: 3,
        items: [
          item('evidence', { number: '01', title: ['Evidencia antes que adjetivos', 'Evidence before adjectives'], body: ['Separamos propiedades típicas, resultados de lote y desempeño validado en aplicación.', 'We separate typical properties, batch results and application-validated performance.'] }),
          item('collaborate', { number: '02', title: ['Colaborar desde la pregunta', 'Collaborate from the question'], body: ['Industria y academia aportan capacidades distintas; el alcance identifica quién hace qué.', 'Industry and academia bring different capabilities; the scope identifies who does what.'] }),
          item('scale', { number: '03', title: ['Escalar con criterio', 'Scale with judgment'], body: ['Un resultado de laboratorio es una señal, no una garantía de producción. Diseñamos el siguiente experimento para reducir riesgo.', 'A laboratory result is a signal, not a production guarantee. We design the next experiment to reduce risk.'] }),
        ],
      },
      {
        _key: 'method-cta', _type: 'ctaBlock', internalTitle: 'Método', enabled: true, tone: 'light',
        eyebrow: short('Método', 'Method'), title: short('Material + proceso + evidencia.', 'Material + process + evidence.'),
        primary: cta('capabilities', 'Conocer nuestras capacidades', 'See our capabilities', 'capacidades'),
      },
    ],
  ),
  capacidades: page(
    'capacidades', ['De la materia prima a la decisión', 'From raw material to decision'], ['Capacidades', 'Capabilities'],
    ['Integramos formulación, caracterización y transferencia tecnológica en un solo hilo de trabajo.', 'We connect formulation, characterization and technology transfer in one continuous workflow.'],
    [
      {
        _key: 'capabilities', _type: 'cardsBlock', internalTitle: 'Capacidades', enabled: true, surface: 'paper', presentation: 'capabilities', columns: 3,
        items: [
          item('design', { number: '01', title: ['Diseño de material', 'Material design'], body: ['Selección de familia, química superficial, formato y variables críticas según el sistema objetivo.', 'Selection of family, surface chemistry, format and critical variables for the target system.'] }),
          item('formulation', { number: '02', title: ['Formulación', 'Formulation'], body: ['Dispersión, compatibilización, reología y método de incorporación para matrices líquidas o sólidas.', 'Dispersion, compatibilization, rheology and incorporation method for liquid or solid matrices.'] }),
          item('characterization', { number: '03', title: ['Caracterización dirigida', 'Targeted characterization'], body: ['Selección de técnicas como Raman, XPS, TGA, SEM, TEM, AFM o UV–Vis según la pregunta técnica.', 'Selection of techniques such as Raman, XPS, TGA, SEM, TEM, AFM or UV–Vis based on the technical question.'] }),
          item('prototype', { number: '04', title: ['Integración y prototipo', 'Integration and prototype'], body: ['Incorporación del material en tinta, recubrimiento, polímero, electrodo u otro sistema de prueba.', 'Material incorporation into an ink, coating, polymer, electrode or another test system.'] }),
          item('scale', { number: '05', title: ['Escalamiento', 'Scale-up'], body: ['Mapeo de variables, repetibilidad y transferencia de una ventana de proceso viable.', 'Variable mapping, repeatability and transfer of a viable process window.'] }),
          item('consulting', { number: '06', title: ['Consultoría científica', 'Scientific consulting'], body: ['Revisión de literatura, diagnóstico experimental, debida diligencia y hoja de ruta tecnológica.', 'Literature review, experimental diagnosis, due diligence and technology roadmapping.'] }),
        ],
      },
      {
        _key: 'scope-note', _type: 'ctaBlock', internalTitle: 'Transparencia de alcance', enabled: true, tone: 'panel',
        eyebrow: short('Transparencia de alcance', 'Scope transparency'), title: short('Capacidad no significa disponibilidad automática.', 'Capability does not mean automatic availability.'),
        body: long('Equipos, técnicas, volúmenes y tiempos se confirman en cada propuesta, ya sea con infraestructura propia o una red de colaboración. La documentación identifica el método y el responsable de cada medición.', 'Equipment, techniques, volumes and lead times are confirmed in each proposal, whether through in-house infrastructure or a collaboration network. Documentation identifies the method and the party responsible for each measurement.'),
        primary: cta('scope', 'Definir alcance', 'Define scope', 'contacto'),
      },
    ],
  ),
  calidad: page(
    'calidad', ['Evidencia y trazabilidad', 'Evidence and traceability'], ['Calidad que se puede leer', 'Quality you can read'],
    ['Una afirmación técnica es útil cuando identifica el material, el método, el resultado y su alcance.', 'A technical claim is useful when it identifies the material, method, result and scope.'],
    [
      {
        _key: 'documents', _type: 'cardsBlock', internalTitle: 'Documentación', enabled: true, surface: 'paper', presentation: 'documents', columns: 3,
        eyebrow: short('Documentación', 'Documentation'), title: short('Tres documentos, tres funciones', 'Three documents, three purposes'),
        items: [
          item('tds', { value: 'TDS', title: ['Ficha técnica', 'Technical data sheet'], body: ['Describe propiedades típicas, formatos y recomendaciones de uso. No sustituye datos específicos de lote.', 'Describes typical properties, formats and use recommendations. It does not replace batch-specific data.'] }),
          item('sds', { value: 'SDS', title: ['Hoja de seguridad', 'Safety data sheet'], body: ['Comunica peligros, manejo, almacenamiento y respuesta ante incidentes.', 'Communicates hazards, handling, storage and incident response.'] }),
          item('coa', { value: 'CoA', title: ['Certificado de análisis', 'Certificate of analysis'], body: ['Reporta resultados acordados para un lote específico y los vincula con su identificación.', 'Reports agreed results for a specific batch and links them to its identity.'] }),
        ],
      },
      {
        _key: 'evidence-chain', _type: 'processBlock', internalTitle: 'Cadena de evidencia', enabled: true, surface: 'dark',
        eyebrow: short('Trazabilidad', 'Traceability'), title: short('La cadena mínima de evidencia', 'The minimum evidence chain'),
        items: [
          item('identity', { number: '01', title: ['Identidad', 'Identity'], body: ['Código de material, grado, formato y lote.', 'Material code, grade, format and batch.'] }),
          item('method', { number: '02', title: ['Método', 'Method'], body: ['Técnica, preparación de muestra y condiciones pertinentes.', 'Technique, sample preparation and relevant conditions.'] }),
          item('result', { number: '03', title: ['Resultado', 'Result'], body: ['Valor, unidad, criterio o interpretación con límites claros.', 'Value, unit, criterion or interpretation with clear limits.'] }),
          item('scope', { number: '04', title: ['Alcance', 'Scope'], body: ['Qué demuestra el dato y qué todavía requiere validación.', 'What the data demonstrates and what still requires validation.'] }),
        ],
      },
      {
        _key: 'language-note', _type: 'ctaBlock', internalTitle: 'Lenguaje preciso', enabled: true, tone: 'panel',
        eyebrow: short('Sin ambigüedad', 'No ambiguity'), title: short('Usamos lenguaje preciso', 'We use precise language'),
        body: long('“Caracterizado” no significa “certificado”; “certificado” no significa necesariamente “acreditado”. Cualquier acreditación, norma o certificación se publicará con su alcance y evidencia verificables.', '“Characterized” does not mean “certified”; “certified” does not necessarily mean “accredited.” Any accreditation, standard or certification will be published with its verifiable evidence and scope.'),
        primary: cta('documentation', 'Solicitar documentación', 'Request documentation', 'contacto'),
      },
    ],
  ),
  recursos: page(
    'recursos', ['Biblioteca técnica', 'Technical library'], ['Recursos para decidir mejor', 'Resources for better decisions'],
    ['Guías breves para separar señal de ruido al seleccionar, caracterizar e integrar materiales grafénicos.', 'Short guides to separate signal from noise when selecting, characterizing and integrating graphene materials.'],
    [
      {
        _key: 'guides', _type: 'resourceListBlock', internalTitle: 'Guías', enabled: true, surface: 'paper',
        items: [
          item('select-graphene', { number: '01', title: ['Cómo seleccionar una familia de grafeno', 'How to select a graphene family'], body: ['Empiece por matriz, proceso y propiedad objetivo; después elija química superficial, geometría y formato.', 'Start with matrix, process and target property; then choose surface chemistry, geometry and format.'], points: [['Defina una métrica', 'Mapee restricciones del proceso', 'Seleccione una hipótesis de material'], ['Define a metric', 'Map process constraints', 'Select a material hypothesis']] }),
          item('useful-coa', { number: '02', title: ['Qué debe decir un CoA útil', 'What a useful CoA should say'], body: ['Un certificado de análisis conecta resultados acordados con un lote específico y un método identificable.', 'A certificate of analysis connects agreed results to a specific batch and an identifiable method.'], points: [['Identidad de lote', 'Resultado y unidad', 'Método o referencia'], ['Batch identity', 'Result and unit', 'Method or reference']] }),
          item('lab-pilot', { number: '03', title: ['Del laboratorio al piloto', 'From laboratory to pilot'], body: ['Escalar exige identificar variables sensibles, ventanas operativas y criterios de repetibilidad.', 'Scaling requires identifying sensitive variables, operating windows and repeatability criteria.'], points: [['Variables críticas', 'Rango de proceso', 'Decisión de avance'], ['Critical variables', 'Process range', 'Go/no-go decision']] }),
        ],
      },
      {
        _key: 'resources-note', _type: 'ctaBlock', internalTitle: 'Documentación en preparación', enabled: true, tone: 'panel',
        eyebrow: short('En preparación', 'In preparation'), title: short('Documentación ligada al contexto.', 'Documentation tied to context.'),
        body: long('Estamos convirtiendo estas guías en documentos descargables. Mientras tanto, podemos enviar una versión técnica asociada a su proyecto.', 'We are turning these guides into downloadable documents. In the meantime, we can send a technical version associated with your project.'),
        primary: cta('guide', 'Solicitar una guía', 'Request a guide', 'contacto'),
      },
    ],
  ),
  contacto: page(
    'contacto', ['Iniciar proyecto', 'Start a project'], ['Empecemos por la pregunta correcta', 'Let’s start with the right question'],
    ['Comparta el contexto técnico mínimo. Le responderemos con preguntas, opciones y un siguiente paso; no con una promesa genérica.', 'Share the minimum technical context. We will reply with questions, options and a next step—not a generic promise.'],
    [{
      _key: 'contact-form', _type: 'contactFormBlock', internalTitle: 'Formulario de proyecto', enabled: true,
      sidebarTitle: short('Qué ayuda a responder mejor', 'What helps us respond better'),
      points: list(['Aplicación y material base', 'Proceso actual y sus restricciones', 'Métrica objetivo o modo de falla', 'Escala de prueba y calendario'], ['Application and base material', 'Current process and constraints', 'Target metric or failure mode', 'Test scale and timeline']),
      directLabel: short('También puede escribir directamente a', 'You can also email us directly at'),
    }],
  ),
  materiales: page(
    'materiales', ['Catálogo técnico', 'Technical catalog'], ['Materiales grafénicos', 'Graphene materials'],
    ['Compare familias de materiales, formatos y técnicas de caracterización para seleccionar un punto de partida técnicamente defendible.', 'Compare material families, formats and characterization techniques to select a technically defensible starting point.'],
    [
      { _key: 'materials', _type: 'catalogBlock', internalTitle: 'Catálogo completo', enabled: true, surface: 'paper', catalogType: 'materials', display: 'cards', itemLabel: short('Ver perfil', 'View profile') },
      {
        _key: 'selection-note', _type: 'ctaBlock', internalTitle: 'Criterio de aplicación', enabled: true, tone: 'panel',
        eyebrow: short('Criterio de aplicación', 'Application criterion'), title: short('La selección no termina en el nombre del material.', 'Selection does not end with the material name.'),
        body: long('Matriz, método de incorporación, concentración, geometría y química superficial pueden cambiar el resultado. Por eso confirmamos cada especificación contra el uso previsto.', 'Matrix, incorporation method, concentration, geometry and surface chemistry can change the outcome. That is why every specification is confirmed against the intended use.'),
        primary: cta('select-help', 'Ayúdame a seleccionar', 'Help me select', 'contacto'),
      },
    ],
  ),
  soluciones: page(
    'soluciones', ['Integración y desempeño', 'Integration and performance'], ['Soluciones', 'Solutions'],
    ['Programas de formulación e integración construidos alrededor de su proceso y una métrica de éxito, no alrededor de una palabra de moda.', 'Formulation and integration programs built around your process and a success metric—not around a buzzword.'],
    [
      { _key: 'solutions', _type: 'catalogBlock', internalTitle: 'Catálogo completo', enabled: true, surface: 'paper', catalogType: 'solutions', display: 'cards', itemLabel: short('Ver solución', 'View solution') },
      {
        _key: 'custom-note', _type: 'ctaBlock', internalTitle: 'Desarrollo especial', enabled: true, tone: 'panel',
        eyebrow: short('Desarrollo especial', 'Special development'), title: short('¿Su reto no aparece aquí?', 'Is your challenge not listed here?'),
        body: long('La ruta a la medida empieza con un brief técnico y una hipótesis que podamos medir.', 'A custom path begins with a technical brief and a hypothesis we can measure.'),
        primary: cta('custom-development', 'Iniciar un desarrollo', 'Start a development', 'contacto'),
      },
    ],
  ),
}

export const pageSeedList = Object.values(pageSeeds)

export const materialDetailSections = [
  {
    _key: 'material-data', _type: 'tableBlock', internalTitle: 'Datos antes de cotizar', enabled: true, surface: 'light',
    eyebrow: short('Datos que confirmamos antes de cotizar', 'Data confirmed before quoting'),
    title: short('Una ficha útil distingue dato, método y alcance.', 'A useful data sheet separates data, method and scope.'),
    firstColumn: short('Campo', 'Field'), secondColumn: short('Base de entrega', 'Delivery basis'),
    rows: [
      item('identity', { title: ['Identidad y composición', 'Identity and composition'], body: ['Definidas para el grado seleccionado', 'Defined for the selected grade'] }),
      item('geometry', { title: ['Geometría y distribución', 'Geometry and distribution'], body: ['Reportadas según técnica y alcance acordados', 'Reported according to the agreed technique and scope'] }),
      item('concentration', { title: ['Concentración o contenido sólido', 'Concentration or solids content'], body: ['Específico para formato y lote', 'Specific to format and batch'] }),
      item('documentation', { title: ['Documentación', 'Documentation'], body: ['TDS, SDS y/o CoA según producto y alcance', 'TDS, SDS and/or CoA depending on product and scope'] }),
    ],
    note: long('Los valores numéricos y tolerancias se confirman en la ficha del grado o en la propuesta. Esta página no sustituye la especificación contractual.', 'Numeric values and tolerances are confirmed in the grade data sheet or proposal. This page does not replace the contractual specification.'),
  },
  {
    _key: 'material-cta', _type: 'ctaBlock', internalTitle: 'Solicitud de muestra', enabled: true, tone: 'light',
    title: short('¿Es el material adecuado para su proceso?', 'Is this the right material for your process?'),
    body: long('Comparta matriz, método de incorporación, volumen y métrica objetivo. Le ayudamos a decidir antes de comprar.', 'Share your matrix, incorporation method, volume and target metric. We can help you decide before purchasing.'),
    primary: cta('sample', 'Solicitar muestra o cotización', 'Request a sample or quote', 'contacto?tipo=muestra'),
    secondary: cta('project', 'Plantear un reto técnico', 'Describe a technical challenge', 'contacto?tipo=proyecto'),
  },
]

export const solutionDetailSections = [
  {
    _key: 'solution-process', _type: 'processBlock', internalTitle: 'Ruta de trabajo', enabled: true, surface: 'paper',
    eyebrow: short('Ruta de trabajo', 'Work path'), title: short('De la pregunta a la decisión', 'From question to decision'),
    items: [
      item('brief', { number: '01', title: ['Brief', 'Brief'], body: ['Aplicación, sustrato o matriz, proceso actual y métrica objetivo.', 'Application, substrate or matrix, current process and target metric.'] }),
      item('design', { number: '02', title: ['Diseño', 'Design'], body: ['Selección de material, formulación y plan experimental.', 'Material selection, formulation and experimental plan.'] }),
      item('test', { number: '03', title: ['Prueba', 'Test'], body: ['Muestra o prototipo y caracterización pertinente.', 'Sample or prototype and relevant characterization.'] }),
      item('decide', { number: '04', title: ['Decisión', 'Decide'], body: ['Lectura de resultados y recomendación para iterar, escalar o detener.', 'Readout and recommendation to iterate, scale or stop.'] }),
    ],
  },
  {
    _key: 'solution-deliverables', _type: 'splitTextBlock', internalTitle: 'Resultados de la etapa', enabled: true, surface: 'light', layout: 'text',
    eyebrow: short('Resultados de la etapa', 'Stage outputs'),
    title: short('Entregables definidos antes de iniciar.', 'Outputs defined before work begins.'),
    body: long('El alcance, técnicas, cantidad de muestra y entregables se acuerdan antes de iniciar. No asumimos desempeño sin validarlo en el sistema objetivo.', 'Scope, techniques, sample quantity and deliverables are agreed before starting. We do not assume performance without validating it in the target system.'),
    points: list(['Definición de alcance', 'Material o formulación experimental', 'Registro de variables críticas', 'Reporte y recomendación técnica'], ['Scope definition', 'Experimental material or formulation', 'Critical variable record', 'Technical report and recommendation']),
  },
  {
    _key: 'solution-cta', _type: 'ctaBlock', internalTitle: 'Iniciar proyecto', enabled: true, tone: 'light',
    title: short('Convierta su reto en un brief', 'Turn your challenge into a brief'),
    body: long('Cuatro datos bastan para empezar: aplicación, material base, proceso y métrica que desea mover.', 'Four data points are enough to begin: application, base material, process and the metric you need to move.'),
    primary: cta('start', 'Iniciar proyecto', 'Start a project', 'contacto?tipo=proyecto'),
  },
]
