const short = (es, en) => ({ _type: 'localizedString', es, en })
const long = (es, en) => ({ _type: 'localizedText', es, en })
const list = (es, en) => ({ _type: 'localizedStringList', es, en })

const precedent = (key, milestone, contribution, implication, boundary, url) => ({
  _key: key,
  _type: 'scientificPrecedent',
  milestone,
  contribution: long(...contribution),
  implication: long(...implication),
  boundary: long(...boundary),
  url,
})

const reference = (key, citation, url, context) => ({
  _key: key,
  _type: 'scientificReference',
  citation,
  url,
  ...(context ? { context: long(...context) } : {}),
})

export const localEditorialImage = (fallbackPath, alt, caption, extra = {}) => ({
  _type: 'image',
  fallbackPath,
  url: fallbackPath,
  alt: short(...alt),
  caption: long(...caption),
  fit: extra.fit || 'cover',
  provenance: extra.provenance || 'conceptual',
  ...(extra.credit ? { credit: extra.credit } : {}),
  ...(extra.rights ? { rights: extra.rights } : {}),
  ...(extra.sourceUrl ? { sourceUrl: extra.sourceUrl } : {}),
})

const commonStatus = short('Aplicación en desarrollo', 'Application in development')

export const solutionApplicationProfiles = {
  'textiles-funcionales': {
    _type: 'solutionApplicationProfile',
    publicStatus: commonStatus,
    trl: 2,
    technicalName: long(
      'Recubrimientos e impresiones de grafeno exfoliado sobre sustratos textiles para gestión térmica, conductividad y sensado.',
      'Exfoliated-graphene coatings and printed structures on textile substrates for thermal management, conductivity and sensing.',
    ),
    industrialProblem: long(
      'Las prendas deportivas, uniformes institucionales y textiles técnicos deben incorporar funciones térmicas, eléctricas o de sensado sin perder flexibilidad, transpirabilidad, comodidad ni durabilidad frente al uso, la abrasión y el lavado.',
      'Sportswear, institutional uniforms and technical textiles are expected to add thermal, electrical or sensing functions without sacrificing flexibility, breathability, comfort or durability under use, abrasion and laundering.',
    ),
    grapheneSolution: long(
      'Desarrollar dispersiones acuosas y sistemas de impresión o recubrimiento adaptados al tejido y a una función prioritaria. El grafeno exfoliado puede integrarse mediante serigrafía, impresión rotativa, recubrimiento localizado o impregnación, utilizando un aglutinante compatible con la fibra. No se propone una tinta universal: poliéster/elastano, algodón, poliamida y mezclas requieren formulaciones y curados distintos.',
      'Develop water-based dispersions and printing or coating systems tailored to the textile and to one priority function. Exfoliated graphene may be applied by screen printing, rotary printing, localized coating or impregnation with a fiber-compatible binder. There is no universal textile ink: polyester/elastane, cotton, polyamide and blended fabrics require different formulations and curing conditions.',
    ),
    expectedAdvantages: long(
      'Según la formulación: distribución térmica, pistas flexibles para calentamiento Joule o sensores, comportamiento antiestático, gestión de humedad y barrera UV. Son funciones objetivo, no resultados propios demostrados. La actividad antimicrobiana no se publicitará hasta completar ensayos de eficacia, liberación de partículas y seguridad de contacto.',
      'Depending on formulation: thermal spreading, flexible tracks for Joule heating or sensors, antistatic behavior, moisture management and UV shielding. These are target functions, not demonstrated GdV results. Antimicrobial claims will wait for efficacy, particle-release and skin-contact safety testing.',
    ),
    maturity: long(
      'Concepto y ruta de formulación definidos; infraestructura de dispersión y caracterización disponible; aún sin prototipo textil GdV con resultados reproducibles de lavado, flexión, conductividad o confort.',
      'Concept and formulation route defined; dispersion and basic characterization infrastructure available; no GdV textile prototype has yet produced reproducible laundering, bending, conductivity or comfort data.',
    ),
    evidence: long(
      'Interna: anteproyectos de textiles inteligentes, formulaciones exploratorias y capacidades de mezcla de alta cizalla Silverson SM5-A, ultrasonido Hielscher UP200St, Raman y UV–Vis. Externa: estudios revisados por pares demuestran dispositivos de grafeno impresos y lavables sobre poliéster; esas cifras no son resultados de GdV.',
      'Internal: exploratory smart-textile reports, formulation concepts and access to Silverson SM5-A high-shear mixing, Hielscher UP200St ultrasonication, Raman and UV–Vis. External: peer-reviewed studies demonstrate washable printed graphene devices on polyester; those figures are not GdV results.',
    ),
    nextMilestone: long(
      'Obtener un cupón textil funcional validado en laboratorio, con control sin grafeno y criterios de avance acordados antes del ensayo.',
      'Produce a laboratory-validated functional textile coupon, with a graphene-free control and predefined advancement criteria.',
    ),
    targetFunctions: list(
      ['Gestión térmica', 'Pistas conductoras y sensado'],
      ['Thermal management', 'Conductive tracks and sensing'],
    ),
    sectors: list(
      ['Ropa deportiva', 'Uniformes institucionales y de campo', 'Protección civil y seguridad industrial', 'Salud y rehabilitación', 'Wearables', 'Textiles automotrices y técnicos'],
      ['Sportswear', 'Institutional and field uniforms', 'Civil protection and industrial safety', 'Health and rehabilitation', 'Wearables', 'Automotive and technical textiles'],
    ),
    modality: long(
      'Proyecto de I+D y co-desarrollo. GdV aporta selección del material grafénico, dispersión, formulación, caracterización y diseño de pruebas; el socio aporta tejido, proceso de acabado, requisitos de prenda y acceso a validación de usuario o campo.',
      'R&D and co-development. GdV contributes graphene selection, dispersion, formulation, characterization and test design. The partner contributes the textile, finishing process, garment requirements and access to user or field validation.',
    ),
    websiteCopy: list(
      [
        'Una prenda funcional no comienza con una promesa, sino con una especificación: qué debe medir, conducir, calentar, disipar o resistir, sobre qué tejido y después de cuántos ciclos de uso. En Grafeno de Verdad desarrollamos formulaciones de grafeno exfoliado para integrar funciones térmicas y eléctricas en textiles mediante procesos compatibles con la manufactura del socio.',
        'En esta línea exploramos desde patrones conductores y zonas de calentamiento hasta textiles para sensado y gestión térmica. Cada aplicación se formula y valida por separado. Evaluamos dispersión, reología, adherencia, resistencia eléctrica, flexión, estiramiento, abrasión, lavado y efecto sobre la transpirabilidad antes de hablar de desempeño.',
      ],
      [
        'A functional garment starts with a specification, not a promise: what it must measure, conduct, heat, dissipate or withstand; on which textile; and after how many use cycles. Grafeno de Verdad develops exfoliated-graphene formulations for integrating thermal and electrical functions into textiles through processes compatible with the partner’s manufacturing route.',
        'Our work ranges from conductive patterns and localized heating zones to sensing and thermal-management textiles. Each application is formulated and validated separately. We evaluate dispersion, rheology, adhesion, electrical resistance, bending, stretching, abrasion, laundering and breathability before making performance claims.',
      ],
    ),
    pilotScope: long(
      'Elegir una sola función inicial —por ejemplo, calentamiento Joule o un patrón conductor— y dos sustratos proporcionados por el socio. Preparar controles sin grafeno y una matriz pequeña de formulaciones con distintos aglutinantes o contenidos de sólidos.',
      'Select one initial function—for example, Joule heating or a conductive pattern—and two partner-supplied substrates. Prepare graphene-free controls and a focused matrix of binder or solids-content variants.',
    ),
    pilotValidation: long(
      'Caracterizar estabilidad, reología y uniformidad; medir resistencia de hoja y respuesta electrotérmica; someter los cupones a flexión, estiramiento, abrasión Martindale y lavado; repetir las mediciones y evaluar cambios de tacto, masa y permeabilidad.',
      'Characterize stability, rheology and print uniformity; measure sheet resistance and electrothermal response; expose coupons to bending, stretching, Martindale abrasion and laundering; repeat measurements and assess changes in hand feel, mass and permeability.',
    ),
    pilotGate: long(
      'El socio y GdV fijan antes del ensayo los límites aceptables de desempeño eléctrico, estabilidad mecánica, lavabilidad y confort. Solo las formulaciones que superen esos criterios pasan a prototipo de prenda.',
      'The partner and GdV agree on electrical, mechanical, laundering and comfort thresholds before testing. Only formulations that meet them advance to a garment prototype.',
    ),
    contactPrompt: long(
      '¿Buscas dotar a un textil de una función concreta? Comparte el tejido, el proceso de aplicación, las condiciones de uso y la métrica que necesitas mejorar. Diseñemos un piloto.',
      'Need a textile to perform a specific function? Share the fabric, application process, use conditions and metric you need to improve. Let us design a pilot.',
    ),
    references: [
      reference('textile-chen', 'Chen, F. et al. Interface-exfoliated graphene-based conductive screen-printing inks. Scientific Reports 10, 18047 (2020).', 'https://doi.org/10.1038/s41598-020-74821-3'),
      reference('textile-karagiannidis', 'Karagiannidis, P. G. et al. Microfluidization of Graphite and Formulation of Graphene-Based Conductive Inks. ACS Nano 11, 2742–2755 (2017).', 'https://doi.org/10.1021/acsnano.6b07735'),
      reference('textile-carey', 'Carey, T. et al. Fully inkjet-printed two-dimensional material field-effect heterojunctions for wearable and textile electronics. Nature Communications 8, 1202 (2017).', 'https://doi.org/10.1038/s41467-017-01210-2'),
      reference('textile-iso', 'ISO 12947-2:2016. Textiles — Determination of abrasion resistance by the Martindale method — Part 2.', 'https://www.iso.org/standard/61058.html'),
      reference('textile-oeko', 'OEKO-TEX STANDARD 100. Official overview.', 'https://www.oeko-tex.com/en/our-standards/oeko-tex-standard-100/'),
    ],
  },

  'recubrimientos-funcionales': {
    _type: 'solutionApplicationProfile',
    publicStatus: commonStatus,
    trl: 2,
    technicalName: long(
      'Sistemas multicapa anticorrosivos y de control de biofouling modificados con GO, rGO o hojuelas de grafeno.',
      'Multilayer anticorrosion and biofouling-control systems modified with GO, rGO or graphene flakes.',
    ),
    industrialProblem: long(
      'El biofouling y la corrosión degradan cascos, estructuras portuarias, equipos offshore, redes de acuicultura y sistemas de agua de mar. Aumentan rugosidad, arrastre, consumo energético, limpieza, paros de mantenimiento y riesgo de transferencia de especies invasoras.',
      'Biofouling and corrosion degrade hulls, port infrastructure, offshore equipment, aquaculture nets and seawater systems. They increase roughness, drag, energy use, cleaning, downtime and the risk of transferring invasive species.',
    ),
    grapheneSolution: long(
      'Desarrollar un sistema por capas en el que el material grafénico cumpla una función definida. La ruta inicial más prudente es incorporar GO funcionalizado o hojuelas bien dispersas en un primer epóxico para aumentar la tortuosidad de difusión y reforzar la matriz, combinado con un acabado foul-release o de baja adhesión. Una segunda ruta estudia copolímeros autopulimentables con cargas bajas, cuidando no alterar su cinética. No se propone copiar formulaciones comerciales ni exponer grafeno conductor directamente sobre metal sin evaluar corrosión microgalvánica.',
      'Develop a multilayer system in which each graphene material has a defined role. The most prudent starting route is a functionalized-GO or well-dispersed-flake epoxy primer designed to increase diffusion tortuosity and reinforce the matrix, combined with a foul-release or low-adhesion finish. A second route studies low-load graphene additives in self-polishing copolymers without disturbing polishing kinetics. The project does not copy commercial formulations or place conductive graphene directly on metal without assessing microgalvanic corrosion.',
    ),
    expectedAdvantages: long(
      'Mayor efecto barrera frente a agua, oxígeno y cloruros; mejor resistencia mecánica y a abrasión; menor adhesión de organismos o limpieza más fácil cuando el acabado superficial está bien diseñado; y una ruta futura hacia monitoreo electroquímico. El resultado depende de dispersión, orientación, carga, matriz, adherencia entre capas, rugosidad y ambiente de servicio.',
      'Improved barrier performance against water, oxygen and chlorides; higher mechanical and abrasion resistance; lower organism adhesion or easier cleaning when the finish is properly designed; and a future route toward electrochemical monitoring. Performance depends on dispersion, orientation, loading, matrix, interlayer adhesion, roughness and service environment.',
    ),
    maturity: long(
      'Anteproyecto y arquitectura de recubrimiento definidos; literatura y plan de validación disponibles; todavía sin formulación GdV optimizada, cupón propio comparativo ni inmersión marina.',
      'Coating architecture and research plan defined; literature and validation pathway available; no optimized GdV formulation, comparative coupon or marine immersion dataset yet.',
    ),
    evidence: long(
      'Interna: dos conceptos de formulación —sistema autopulimentable modificado y sistema primer más acabado foul-release— junto con infraestructura para dispersión, ultrasonido, mezcla, Raman, UV–Vis y pruebas mecánicas. Externa: revisiones y estudios reportan mecanismos de barrera, refuerzo y reducción de adhesión, pero también aglomeración, compatibilidad deficiente, riesgo microgalvánico, ecotoxicidad y necesidad de pruebas marinas prolongadas.',
      'Internal: two formulation concepts—a modified self-polishing system and a primer plus foul-release finish—supported by dispersion, ultrasonication, mixing, Raman, UV–Vis and mechanical-test capabilities. External: reviews and studies support barrier, reinforcement and adhesion-reduction mechanisms, while also documenting agglomeration, poor compatibility, microgalvanic risk, ecotoxicity and the need for long marine trials.',
    ),
    nextMilestone: long(
      'Demostrar barrera, integridad y adherencia en cupones comparativos antes de atribuir función antifouling.',
      'Demonstrate barrier integrity and adhesion on comparative coupons before making any antifouling claim.',
    ),
    targetFunctions: list(
      ['Barrera anticorrosiva', 'Foul-release y control de biofouling'],
      ['Anticorrosion barrier', 'Foul-release and biofouling control'],
    ),
    sectors: list(
      ['Transporte marítimo comercial y naval', 'Puertos y marinas', 'Energía offshore', 'Acuicultura', 'Desalinización e intercambiadores de calor', 'Infraestructura costera y equipos sumergidos'],
      ['Commercial and naval shipping', 'Ports and marinas', 'Offshore energy', 'Aquaculture', 'Desalination and heat exchangers', 'Coastal infrastructure and immersed equipment'],
    ),
    modality: long(
      'Proyecto de I+D y co-desarrollo con fabricante de recubrimientos, astillero, operador portuario o propietario de activo. GdV desarrolla el aditivo y la dispersión; el socio aporta resina o sistema comercial, sustratos, especificación de servicio y acceso a pruebas de campo.',
      'R&D and co-development with a coating manufacturer, shipyard, port operator or asset owner. GdV develops the additive and dispersion; the partner contributes the resin or coating system, substrates, service specification and field access.',
    ),
    websiteCopy: list(
      [
        'El mar no ataca una superficie de una sola manera. Agua, oxígeno, cloruros, abrasión y organismos actúan simultáneamente; por eso un recubrimiento eficaz debe diseñarse como sistema. En Grafeno de Verdad exploramos materiales grafénicos como aditivos de barrera y refuerzo dentro de primers y acabados marinos, con especial atención a la dispersión, la compatibilidad y la seguridad ambiental.',
        'Nuestro objetivo es formular y comparar cupones con y sin grafeno, medir corrosión, adherencia, desgaste y ensuciamiento, y avanzar solo cuando los datos demuestren una mejora. La línea incluye recubrimientos anticorrosivos, acabados foul-release y, a mayor plazo, superficies con capacidad de monitoreo.',
      ],
      [
        'The marine environment does not attack a surface in only one way. Water, oxygen, chlorides, abrasion and organisms act together, so an effective coating must be designed as a system. Grafeno de Verdad explores graphene materials as barrier and reinforcement additives for marine primers and finishes, with particular attention to dispersion, compatibility and environmental safety.',
        'Our objective is to formulate and compare graphene and graphene-free coupons, measure corrosion, adhesion, wear and fouling, and advance only when the data demonstrate improvement. The program covers anticorrosion primers, foul-release finishes and, in the longer term, surfaces with monitoring capability.',
      ],
    ),
    pilotScope: long(
      'Definir sustrato y ambiente —por ejemplo, acero al carbono en agua de mar tropical— y comparar un primer control frente a una matriz pequeña de materiales grafénicos y cargas. Incorporar un acabado compatible y controles sin aditivo.',
      'Define the substrate and environment—for example, carbon steel in tropical seawater—and compare a control primer with a focused matrix of graphene materials and loadings. Add a compatible finish and graphene-free controls.',
    ),
    pilotValidation: long(
      'Medir dispersión, espesor seco, rugosidad, pull-off, abrasión, absorción de agua, EIS e inmersión o niebla salina. Después evaluar adhesión de biofilm y organismos modelo, facilidad de limpieza, liberación de partículas y paneles en mar bajo condiciones estáticas y dinámicas.',
      'Measure dispersion, dry-film thickness, roughness, pull-off adhesion, abrasion, water uptake, EIS and immersion or salt-spray performance. Then assess biofilm and model-organism attachment, cleanability, particle release and marine panels under static and dynamic conditions.',
    ),
    pilotGate: long(
      'Primero demostrar barrera, integridad y adherencia sin inducir corrosión localizada. Después demostrar una ventaja antifouling o foul-release en pruebas biológicas y de campo. La ecotoxicidad y el desprendimiento de material son criterios de descarte, no tareas posteriores.',
      'First demonstrate barrier integrity and adhesion without inducing localized corrosion. Then demonstrate an antifouling or foul-release advantage in biological and field tests. Ecotoxicity and material release are go/no-go criteria, not deferred tasks.',
    ),
    contactPrompt: long(
      '¿Operas un activo expuesto al agua de mar o desarrollas recubrimientos? Comparte el sustrato, sistema actual, ambiente, ciclo de mantenimiento y modo de falla. Diseñemos una matriz de cupones y un piloto verificable.',
      'Do you operate a seawater-exposed asset or formulate marine coatings? Share the substrate, current system, environment, maintenance cycle and failure mode. Let us design a coupon matrix and a verifiable pilot.',
    ),
    technicalFigure: localEditorialImage(
      '/soluciones/biofouling-pistone-2021.webp',
      ['Diagrama de un barco y una línea temporal que muestra la formación de película condicionante, biofilm y macrofouling desde minutos hasta meses.', 'Diagram of a vessel and timeline showing conditioning-film, biofilm and macrofouling development from minutes to months.'],
      ['Secuencia típica y simplificada del biofouling marino. La progresión real depende del ambiente y no siempre es lineal. Fuente: Pistone et al. (2021), Scheme 1, CC BY 4.0.', 'Typical, simplified sequence of marine biofouling. Actual progression depends on the environment and is not always linear. Source: Pistone et al. (2021), Scheme 1, CC BY 4.0.'],
      { fit: 'contain', provenance: 'thirdParty', credit: 'Pistone, Scolaro y Visco (2021)', rights: 'CC BY 4.0', sourceUrl: 'https://doi.org/10.3390/polym13020173' },
    ),
    references: [
      reference('marine-pistone', 'Pistone, A.; Scolaro, C.; Visco, A. Mechanical Properties of Protective Coatings against Marine Fouling: A Review. Polymers 13, 173 (2021). CC BY 4.0.', 'https://doi.org/10.3390/polym13020173'),
      reference('marine-jin', 'Jin, H. et al. Toward the Application of Graphene for Combating Marine Biofouling. Advanced Sustainable Systems, 2000076 (2020).', 'https://doi.org/10.1002/adsu.202000076'),
      reference('marine-zhang', 'Zhang, Q. et al. Graphene Research Progress in the Application of Anticorrosion and Antifouling Coatings. Crystals 15, 541 (2025).', 'https://doi.org/10.3390/cryst15050541'),
      reference('marine-xu', 'Xu, X.; Guo, S.; Vancso, G. J. Perceiving and Countering Marine Biofouling. Langmuir 41, 7996–8018 (2025). CC BY 4.0.', 'https://doi.org/10.1021/acs.langmuir.5c00450'),
      reference('marine-imo', 'International Maritime Organization. 2023 Biofouling Guidelines, resolution MEPC.378(80).', 'https://www.imo.org/en/ourwork/environment/pages/biofouling.aspx'),
    ],
  },

  'tintas-conductoras': {
    _type: 'solutionApplicationProfile',
    publicStatus: commonStatus,
    trl: 2,
    technicalName: long(
      'Formulaciones reológicas de grafeno exfoliado para impresión de patrones eléctricos sobre papel, polímeros y textiles.',
      'Rheology-tailored exfoliated-graphene formulations for printing electrical patterns on paper, polymers and textiles.',
    ),
    industrialProblem: long(
      'La electrónica impresa requiere conductores flexibles, procesables y compatibles con sustratos sensibles a temperatura. Las tintas metálicas pueden ser costosas, requerir sinterizado o perder desempeño bajo flexión; las tintas de carbono deben resolver dispersión, reología, adhesión y conductividad de manera conjunta.',
      'Printed electronics need flexible, processable conductors compatible with temperature-sensitive substrates. Metal inks may be expensive, require sintering or lose performance under flexing; carbon inks must solve dispersion, rheology, adhesion and conductivity together.',
    ),
    grapheneSolution: long(
      'Desarrollar formulaciones específicas para serigrafía, recubrimiento o impresión de detalle a partir de hojuelas de grafeno exfoliado con baja oxidación. Se exploran dispersiones acuosas con aglutinantes seleccionados, sistemas orgánicos estabilizados con derivados de celulosa y una ruta de emulsión interfacial de baja carga. Inkjet, serigrafía y aerosol no comparten una receta: cada proceso impone ventanas distintas de tamaño de hojuela, viscosidad, tensión superficial, secado y postratamiento.',
      'Develop process-specific formulations for screen printing, coating or fine-pattern deposition from low-oxidation exfoliated graphene flakes. Research routes include water-based dispersions with selected binders, organic systems stabilized with cellulose derivatives and a low-loading interfacial-emulsion route. Inkjet, screen and aerosol printing do not share one recipe: each requires a different flake-size, viscosity, surface-tension, drying and post-treatment window.',
    ),
    expectedAdvantages: long(
      'Patrones ligeros y flexibles, procesamiento potencial a temperaturas menores que varias tintas metálicas, ajuste de reología y formulación por sustrato, y posibilidad de producción escalable con mezcla y ultrasonido. La conductividad final depende del contacto entre hojuelas, contenido de sólidos, aglutinante, espesor, secado y postratamiento.',
      'Lightweight and flexible patterns, potential processing at lower temperature than several metal inks, substrate-specific rheology and formulation, and scalable production using mixing and ultrasonication. Final conductivity depends on flake contact, solids content, binder, thickness, drying and post-treatment.',
    ),
    maturity: long(
      'Fundamento científico y rutas de formulación identificados; materia prima e infraestructura de dispersión y caracterización disponibles; aún sin una tinta GdV caracterizada de forma integral por reología, estabilidad, resolución de impresión, adhesión y resistencia de hoja.',
      'Scientific basis and formulation routes identified; material and dispersion/characterization capabilities available; no GdV ink has yet been comprehensively characterized for rheology, stability, print resolution, adhesion and sheet resistance.',
    ),
    evidence: long(
      'Interna: cartera de nichos y formulaciones exploratorias; capacidades de mezcla Silverson, ultrasonido Hielscher, Raman, UV–Vis y preparación de materiales. Externa: literatura revisada por pares sobre exfoliación sin oxidación, estabilización con etilcelulosa, impresión, curado fotónico y diseño sistemático para aerosol jet. Son benchmarks externos: no constituyen desempeño de GdV ni implican colaboración, licencia o transferencia tecnológica.',
      'Internal: a market-niche portfolio and exploratory formulations; Silverson mixing, Hielscher ultrasonication, Raman, UV–Vis and materials preparation. External: peer-reviewed literature on non-oxidizing exfoliation, ethyl-cellulose stabilization, printing, photonic annealing and systematic aerosol-jet design. These are external benchmarks, not GdV performance, collaboration, licensing or technology transfer.',
    ),
    nextMilestone: long(
      'Caracterizar una formulación candidata frente a un control mediante reología, estabilidad, resolución, espesor, resistencia de hoja, adhesión y ciclos de flexión.',
      'Characterize a candidate formulation against a control through rheology, stability, resolution, thickness, sheet resistance, adhesion and bending cycles.',
    ),
    targetFunctions: list(
      ['Patrones eléctricos flexibles', 'Formulación por proceso y sustrato'],
      ['Flexible electrical patterns', 'Process- and substrate-specific formulation'],
    ),
    sectors: list(
      ['Sensores y calefactores impresos', 'Electrodos y papel diagnóstico', 'Wearables, RFID y antenas', 'Empaques inteligentes', 'Educación y prototipado', 'Dispositivos electroquímicos e interconexiones de baja potencia'],
      ['Printed sensors and heaters', 'Electrodes and paper diagnostics', 'Wearables, RFID and antennas', 'Smart packaging', 'Education and prototyping', 'Electrochemical devices and low-power interconnects'],
    ),
    modality: long(
      'Formulación a la medida, suministro de material para I+D y co-desarrollo de un proceso de impresión. Una oferta comercial debe especificar método de impresión, sustrato, ventana reológica, curado y propiedad eléctrica objetivo; no basta llamarla “tinta de grafeno”.',
      'Custom formulation, research-material supply and printing-process co-development. A commercial offer must specify print method, substrate, rheology window, curing and target electrical property; calling it “graphene ink” is not enough.',
    ),
    websiteCopy: list(
      [
        'Una tinta conductora no es solamente grafeno disperso. Debe fluir durante la impresión, conservar el patrón, adherirse al sustrato, secar bajo condiciones compatibles y mantener una ruta eléctrica después de doblarse o usarse. En Grafeno de Verdad desarrollamos formulaciones de grafeno exfoliado alrededor del proceso y de la aplicación del cliente.',
        'Exploramos tintas y pastas para serigrafía, recubrimiento y electrónica flexible. Cada desarrollo se documenta mediante composición, tamaño de hojuela, estabilidad, reología, resolución, espesor, resistencia de hoja, adhesión y durabilidad mecánica. El objetivo no es competir con todos los metales en conductividad, sino ofrecer una plataforma de carbono flexible y ajustable donde sus ventajas sean relevantes.',
      ],
      [
        'A conductive ink is more than dispersed graphene. It must flow during printing, retain the pattern, adhere to the substrate, dry under compatible conditions and preserve an electrical pathway after bending or use. Grafeno de Verdad develops exfoliated-graphene formulations around the customer’s process and application.',
        'We explore inks and pastes for screen printing, coating and flexible electronics. Each development is documented through composition, flake size, stability, rheology, resolution, thickness, sheet resistance, adhesion and mechanical durability. The objective is not to outperform every metal in conductivity, but to offer a flexible and tunable carbon platform where its advantages matter.',
      ],
    ),
    pilotScope: long(
      'El socio define sustrato, método de impresión, geometría, temperatura máxima y resistencia objetivo. GdV formula tres candidatos y un control, imprime patrones de prueba y documenta la ventana de proceso.',
      'The partner defines the substrate, print process, geometry, maximum temperature and resistance target. GdV prepares three candidates and a control, prints test patterns and documents the process window.',
    ),
    pilotValidation: long(
      'Medir estabilidad, tamaño de partícula, contenido de sólidos, viscosidad y comportamiento de cizalla, tensión superficial, uniformidad, ancho de línea, espesor, resistencia de hoja, adhesión y cambio de resistencia bajo flexión o ciclos de uso.',
      'Measure stability, particle size, solids content, viscosity and shear behavior, surface tension, uniformity, line width, thickness, sheet resistance, adhesion and resistance change under bending or use cycles.',
    ),
    pilotGate: long(
      'Seleccionar la formulación que cumpla simultáneamente procesabilidad, adhesión, propiedad eléctrica y durabilidad. Si ninguna lo hace, el piloto debe identificar el cuello de botella y la siguiente iteración, no convertirse en una promesa comercial.',
      'Select the formulation that simultaneously meets processability, adhesion, electrical and durability requirements. If none does, the pilot should identify the bottleneck and next iteration rather than become a commercial promise.',
    ),
    contactPrompt: long(
      '¿Necesitas imprimir una pista, electrodo, calefactor o sensor sobre un sustrato concreto? Comparte el proceso y la especificación eléctrica. Desarrollemos la tinta alrededor de tu aplicación.',
      'Need to print a track, electrode, heater or sensor on a specific substrate? Share the process and electrical specification. Let us develop the ink around your application.',
    ),
    scientificContext: long(
      'El Hersam Research Group se cita como precedente científico internacional en manufactura imprimible con materiales 2D. No se presenta como aval, alianza o credencial de GdV.',
      'The Hersam Research Group is cited as an international scientific precedent in printable manufacturing with 2D materials. It is not presented as a GdV endorsement, alliance or credential.',
    ),
    precedents: [
      precedent('ink-secor-2013', 'Secor et al., 2013', ['Exfoliación directa de grafito con etanol y etilcelulosa; patrones flexibles por inkjet. Northwestern reportó conductividad 250 veces mayor que intentos previos de impresión de grafeno.', 'Direct graphite exfoliation with ethanol and ethyl cellulose; flexible inkjet patterns. Northwestern reported conductivity 250 times higher than earlier graphene-printing attempts.'], ['Referencia para preservar baja oxidación y controlar estabilizante, residuo y contacto entre hojuelas.', 'A reference for preserving low oxidation and controlling stabilizer, residue and interflake contact.'], ['La comparación 250× pertenece a ese estudio; no es una cifra de GdV ni un valor universal.', 'The 250× comparison belongs to that study; it is neither a GdV figure nor a universal value.'], 'https://doi.org/10.1021/jz400644c'),
      precedent('ink-jakus-2015', 'Jakus et al., 2015', ['Estructuras 3D robustas con aproximadamente 60–70% en volumen de grafeno, usando un elastómero biocompatible y solventes de evaporación rápida.', 'Robust 3D structures containing approximately 60–70 vol% graphene, using a biocompatible elastomer and rapidly evaporating solvents.'], ['Demuestra que la reología puede habilitar manufactura aditiva de alto contenido, más allá de películas 2D.', 'Shows how rheology can enable high-content additive manufacturing beyond 2D films.'], ['No es una formulación para inkjet o serigrafía y el desempeño biomédico no se transfiere automáticamente.', 'It is not an inkjet or screen-printing formulation, and biomedical performance does not transfer automatically.'], 'https://doi.org/10.1021/acsnano.5b01179'),
      precedent('ink-secor-2015', 'Secor et al., 2015', ['Curado fotónico con pulsos intensos para procesar rápidamente tintas de grafeno sobre sustratos sensibles al calor.', 'Intense-pulse photonic annealing for rapidly processing graphene inks on heat-sensitive substrates.'], ['Ruta futura para reducir la carga térmica si un socio dispone de equipo de curado fotónico.', 'A future route for reducing thermal load if a partner provides photonic-curing equipment.'], ['GdV no cuenta aún con datos propios ni promete procesamiento en milisegundos.', 'GdV has no internal data yet and does not promise millisecond processing.'], 'https://doi.org/10.1002/adma.201502866'),
      precedent('ink-hyun-2018', 'Hyun, Secor y Hersam, 2018', ['Síntesis técnica de principios para tintas imprimibles estabilizadas con polímeros celulósicos.', 'A technical synthesis of printable graphene inks stabilized with cellulosic polymers.'], ['Marco para estudiar estabilidad, reología, residuo del aglutinante y recuperación de conductividad.', 'Framework for studying stability, rheology, binder residue and conductivity recovery.'], ['Es una referencia metodológica, no una receta comercial cedida a GdV.', 'It is a methodological reference, not a commercial recipe transferred to GdV.'], 'https://doi.org/10.1557/mrs.2018.241'),
      precedent('ink-gamba-2023', 'Gamba et al., 2023', ['Diseño sistemático de solventes y propiedades de tinta para aerosol jet.', 'Systematic solvent and ink-property design for aerosol jet printing.'], ['Ejemplo de desarrollo guiado por ventana de proceso, atomización y calidad del depósito.', 'Example of development guided by process window, atomization and deposit quality.'], ['No prueba que una formulación de GdV sea apta para aerosol jet ni para detectar pesticidas.', 'It does not establish aerosol-jet suitability or pesticide sensing for a GdV formulation.'], 'https://doi.org/10.1021/acsami.2c18838'),
    ],
    references: [
      reference('ink-secor-2013-ref', 'Secor, E. B. et al. Inkjet Printing of High Conductivity, Flexible Graphene Patterns. Journal of Physical Chemistry Letters 4, 1347–1351 (2013).', 'https://doi.org/10.1021/jz400644c'),
      reference('ink-jakus-ref', 'Jakus, A. E. et al. Three-Dimensional Printing of High-Content Graphene Scaffolds for Electronic and Biomedical Applications. ACS Nano 9, 4636–4648 (2015).', 'https://doi.org/10.1021/acsnano.5b01179'),
      reference('ink-secor-2015-ref', 'Secor, E. B. et al. Rapid and Versatile Photonic Annealing of Graphene Inks for Flexible Printed Electronics. Advanced Materials 27, 6683–6688 (2015).', 'https://doi.org/10.1002/adma.201502866'),
      reference('ink-hyun-ref', 'Hyun, W. J.; Secor, E. B.; Hersam, M. C. Printable graphene inks stabilized with cellulosic polymers. MRS Bulletin 43, 730–733 (2018).', 'https://doi.org/10.1557/mrs.2018.241'),
      reference('ink-gamba-ref', 'Gamba, L. et al. Systematic Design of a Graphene Ink Formulation for Aerosol Jet Printing. ACS Applied Materials & Interfaces 15, 3325–3335 (2023).', 'https://doi.org/10.1021/acsami.2c18838'),
      reference('ink-chen-ref', 'Chen, F. et al. Interface-exfoliated graphene-based conductive screen-printing inks. Scientific Reports 10, 18047 (2020).', 'https://doi.org/10.1038/s41598-020-74821-3'),
      reference('ink-karagiannidis-ref', 'Karagiannidis, P. G. et al. Microfluidization of Graphite and Formulation of Graphene-Based Conductive Inks. ACS Nano 11, 2742–2755 (2017).', 'https://doi.org/10.1021/acsnano.6b07735'),
    ],
  },
}
