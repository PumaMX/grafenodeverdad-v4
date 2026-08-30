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

const impactFact = (key, value, label, context, url) => ({
  _key: key,
  _type: 'impactFact',
  value,
  label: short(...label),
  context: long(...context),
  url,
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

  'funcionalizacion-interfaces': {
    _type: 'solutionApplicationProfile',
    publicStatus: commonStatus,
    trl: 2,
    technicalName: long(
      'Funcionalización química, dopaje electrónico e ingeniería de interfaces en grafeno, GO, rGO, materiales de pocas capas e híbridos 2D.',
      'Chemical functionalization, electronic doping and interface engineering across graphene, GO, rGO, few-layer materials and 2D hybrids.',
    ),
    industrialProblem: long(
      'Una misma hojuela no puede resolver por sí sola dispersión, afinidad química, transferencia de carga, anclaje molecular y contacto con una matriz o dispositivo. Sin una interfaz diseñada, el material puede aglomerarse, perder movilidad, generar respuestas no selectivas o fallar al integrarse.',
      'A single flake cannot, by itself, solve dispersion, chemical affinity, charge transfer, molecular anchoring and contact with a matrix or device. Without a designed interface, the material may agglomerate, lose mobility, respond non-selectively or fail during integration.',
    ),
    grapheneSolution: long(
      'Elegir el material de partida y una de cuatro rutas según la función: dopaje electrónico por sustitución o transferencia de carga; funcionalización covalente; funcionalización no covalente; o construcción de híbridos con nanopartículas y otros materiales 2D. “Dopado”, “funcionalizado” y “decorado” describen fenómenos distintos y solo se usan cuando la caracterización correspondiente los sustenta.',
      'Select the starting material and one of four routes according to function: electronic doping by substitution or charge transfer; covalent functionalization; non-covalent functionalization; or hybrid construction with nanoparticles and other 2D materials. “Doped,” “functionalized” and “decorated” describe different phenomena and are used only when the corresponding characterization supports them.',
    ),
    expectedAdvantages: long(
      'Compatibilidad dirigida con matrices y solventes, densidad de carga ajustable, sitios de reconocimiento para sensores, anclaje reproducible de nanopartículas, control de dispersión y una interfaz diseñada alrededor de la métrica del dispositivo. Cada intervención también puede introducir defectos, residuos, deriva o resistencia de contacto; por eso se compara contra el material sin modificar.',
      'Targeted compatibility with matrices and solvents, tunable carrier density, recognition sites for sensors, reproducible nanoparticle anchoring, dispersion control and an interface designed around the device metric. Each intervention may also introduce defects, residues, drift or contact resistance, so it must be compared against the unmodified material.',
    ),
    maturity: long(
      'Plataforma de I+D definida a partir de materiales y capacidades de caracterización disponibles; todavía sin una química universal ni un dispositivo GdV validado que permita atribuir desempeño a una ruta específica.',
      'R&D platform defined around available materials and characterization capabilities; there is not yet a universal chemistry or a validated GdV device that attributes performance to a specific route.',
    ),
    evidence: long(
      'Interna: acceso a grafeno CVD, GO, rGO, hojuelas, rutas de dopaje y funcionalización exploratorias, Raman, XPS, FTIR, UV–Vis, SEM/TEM y potencial zeta según el proyecto. Externa: literatura revisada por pares demuestra principios de dopaje, bioconjugación, plataformas SERS, GrFET e interfaces 2D. Esos resultados orientan el diseño; no son datos propios de GdV.',
      'Internal: access to CVD graphene, GO, rGO, flakes, exploratory doping and functionalization routes, and Raman, XPS, FTIR, UV–Vis, SEM/TEM and zeta-potential analysis as required. External: peer-reviewed literature demonstrates principles for doping, bioconjugation, SERS platforms, GrFETs and 2D interfaces. Those results inform design; they are not GdV data.',
    ),
    nextMilestone: long(
      'Seleccionar una sola aplicación, fabricar controles funcionalizados y no funcionalizados, y demostrar una relación reproducible entre química superficial, estructura y la métrica funcional elegida.',
      'Select one application, fabricate functionalized and unfunctionalized controls, and demonstrate a reproducible relationship between surface chemistry, structure and the chosen functional metric.',
    ),
    targetFunctions: list(
      ['Dopaje electrónico', 'Reconocimiento molecular', 'Dispersión y compatibilización', 'Híbridos grafeno–nanopartícula'],
      ['Electronic doping', 'Molecular recognition', 'Dispersion and compatibilization', 'Graphene–nanoparticle hybrids'],
    ),
    sectors: list(
      ['Sensores y biosensores', 'SERS y fotónica', 'GrFET y electrónica 2D', 'Memristores y memoria', 'Electrodos y catálisis', 'Compuestos y formulaciones avanzadas'],
      ['Sensors and biosensors', 'SERS and photonics', 'GrFETs and 2D electronics', 'Memristors and memory', 'Electrodes and catalysis', 'Composites and advanced formulations'],
    ),
    modality: long(
      'Proyecto de I+D y co-desarrollo. El socio define analito, sustrato, matriz o arquitectura del dispositivo; GdV selecciona el material, diseña la interfaz, prepara controles y coordina la caracterización necesaria para tomar una decisión.',
      'R&D and co-development project. The partner defines the analyte, substrate, matrix or device architecture; GdV selects the material, designs the interface, prepares controls and coordinates the characterization needed for a decision.',
    ),
    websiteCopy: list(
      [
        'El grafeno no adquiere selectividad, compatibilidad o una respuesta electrónica útil solo por estar presente. La interfaz determina cómo se dispersa, a qué se une, qué carga transfiere y cómo se integra con un dispositivo. En Grafeno de Verdad diseñamos esa interfaz con una hipótesis medible.',
        'Separamos cuatro rutas —dopaje, funcionalización covalente, funcionalización no covalente e híbridos— porque no son intercambiables. El punto de partida puede ser grafeno CVD, GO, rGO, grafeno exfoliado, una arquitectura 3D o una heteroestructura 2D. La selección depende de la función y del daño estructural tolerable.',
      ],
      [
        'Graphene does not become selective, compatible or electronically useful merely by being present. The interface determines how it disperses, what it binds to, how much charge it transfers and how it integrates with a device. Grafeno de Verdad designs that interface around a measurable hypothesis.',
        'We separate four routes—doping, covalent functionalization, non-covalent functionalization and hybrids—because they are not interchangeable. The starting point may be CVD graphene, GO, rGO, exfoliated graphene, a 3D architecture or a 2D heterostructure. Selection depends on function and tolerable structural damage.',
      ],
    ),
    pilotScope: long(
      'Definir una función primaria —por ejemplo, respuesta de un GrFET a un analito o realce SERS—, seleccionar material y ruta química, y preparar una matriz pequeña con material base, blanco de proceso y dos o tres variantes de interfaz.',
      'Define one primary function—for example, a GrFET response to an analyte or SERS enhancement—select the material and chemical route, and prepare a focused matrix with base material, process blank and two or three interface variants.',
    ),
    pilotValidation: long(
      'Verificar composición y enlace por XPS/FTIR/Raman; evaluar dispersión, potencial zeta, morfología y estabilidad; después medir la respuesta funcional del dispositivo, selectividad, deriva, repetibilidad y efecto del ambiente.',
      'Verify composition and bonding by XPS/FTIR/Raman; assess dispersion, zeta potential, morphology and stability; then measure device function, selectivity, drift, repeatability and environmental effects.',
    ),
    pilotGate: long(
      'La química avanza solo si mejora la métrica primaria frente al material sin modificar sin introducir una penalización crítica en movilidad, ruido, estabilidad, procesabilidad o seguridad.',
      'The chemistry advances only if it improves the primary metric versus the unmodified material without introducing a critical penalty in mobility, noise, stability, processability or safety.',
    ),
    contactPrompt: long(
      '¿Necesitas que el grafeno reconozca, se disperse, transfiera carga o se ancle de forma controlada? Comparte la arquitectura, el medio y la métrica. Diseñemos la interfaz y sus controles.',
      'Need graphene to recognize, disperse, transfer charge or anchor in a controlled way? Share the architecture, medium and metric. Let us design the interface and its controls.',
    ),
    scientificContext: long(
      'Los precedentes describen mecanismos y plataformas externas. Su desempeño depende de material, proceso y dispositivo; no representa resultados de GdV ni una transferencia tecnológica.',
      'The precedents describe external mechanisms and platforms. Their performance depends on material, process and device; it does not represent GdV results or technology transfer.',
    ),
    precedents: [
      precedent('func-doping-review', 'Lee et al., 2018', ['Revisión de dopaje molecular y sustitucional para ajustar el nivel de Fermi y el tipo de portador en grafeno.', 'Review of molecular and substitutional doping used to tune graphene Fermi level and carrier type.'], ['Marco para separar transferencia de carga de una simple modificación superficial.', 'Framework for separating charge transfer from simple surface modification.'], ['Una señal espectroscópica aislada no prueba por sí sola estabilidad ni desempeño de dispositivo.', 'A single spectroscopic signal does not by itself prove stability or device performance.'], 'https://doi.org/10.3390/nano8060412'),
      precedent('func-sers-review', 'Zhang et al., 2022', ['Síntesis de plataformas plasmónicas basadas en grafeno e híbridos con nanopartículas para detección SERS.', 'Review of graphene-based plasmonic platforms and nanoparticle hybrids for SERS detection.'], ['Orienta el control de distancia, densidad de nanopartícula y química de reconocimiento.', 'Informs control of spacing, nanoparticle density and recognition chemistry.'], ['Los factores de realce dependen de analito, láser, sustrato y protocolo; no son transferibles de forma directa.', 'Enhancement factors depend on analyte, laser, substrate and protocol and do not transfer directly.'], 'https://doi.org/10.3390/bios12040220'),
      precedent('func-transistors', 'Liu et al., 2021', ['Demostración del papel decisivo de interfaces y contactos en transistores basados en materiales 2D.', 'Demonstration of the decisive role of interfaces and contacts in 2D-material transistors.'], ['Refuerza que el material debe evaluarse dentro de la arquitectura real del dispositivo.', 'Reinforces that the material must be evaluated inside the real device architecture.'], ['No implica que una ruta de funcionalización determinada produzca el mismo transporte.', 'It does not imply that a specific functionalization route produces the same transport.'], 'https://doi.org/10.1038/s41586-021-03323-7'),
    ],
    references: [
      reference('func-lee', 'Lee, H. C. et al. Review of the synthesis, transfer, characterization and growth mechanisms of single and multilayer graphene. RSC Advances 7, 15644–15693 (2017).', 'https://doi.org/10.1039/C7RA00392G'),
      reference('func-doping', 'Lee, J. et al. Doping of Graphene: A Review. Nanomaterials 8, 412 (2018).', 'https://doi.org/10.3390/nano8060412'),
      reference('func-zhao', 'Zhang, Y. et al. Graphene-Based Plasmonic Biosensors. Biosensors 12, 220 (2022).', 'https://doi.org/10.3390/bios12040220'),
      reference('func-liu', 'Liu, Y. et al. Promises and prospects of two-dimensional transistors. Nature 591, 43–53 (2021).', 'https://doi.org/10.1038/s41586-021-03323-7'),
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

  'recubrimientos-gestion-termica': {
    _type: 'solutionApplicationProfile',
    publicStatus: commonStatus,
    trl: 2,
    technicalName: long(
      'Recubrimientos grafénicos ultradelgados para estudiar transferencia de calor, ensuciamiento y protección en serpentines y condensadores HVAC.',
      'Ultrathin graphene-enabled coatings for studying heat transfer, fouling and protection in HVAC coils and condensers.',
    ),
    industrialProblem: long(
      'Centros de datos, plantas, hospitales, comercios, almacenes y procesos pesados rechazan grandes cantidades de calor mediante bancos de condensadores y unidades de techo. Corrosión, suciedad, daño de aletas y operación a alta temperatura exterior pueden elevar la presión de condensación, el consumo de compresores y ventiladores y el mantenimiento.',
      'Data centers, plants, hospitals, retail, warehouses and heavy processes reject large heat loads through condenser banks and rooftop units. Corrosion, dirt, fin damage and high outdoor temperatures can increase condensing pressure, compressor and fan energy, and maintenance.',
    ),
    grapheneSolution: long(
      'Desarrollar y probar un recubrimiento muy delgado y adherente con material grafénico exfoliado, ajustando espesor, dispersión, mojabilidad y compatibilidad con aluminio o cobre. La hipótesis es mejorar o conservar la conductancia global y proteger la superficie sin bloquear aletas ni penalizar el flujo de aire. El sistema se evalúa primero en cupones y un serpentín A/B antes de cualquier prueba en sitio.',
      'Develop and test a very thin, adherent coating containing exfoliated graphene material, tuning thickness, dispersion, wettability and compatibility with aluminum or copper. The hypothesis is to improve or preserve overall conductance and protect the surface without blocking fins or penalizing airflow. The system is first evaluated on coupons and an A/B coil before any site trial.',
    ),
    expectedAdvantages: long(
      'Si el balance térmico completo resulta favorable: menor aproximación térmica o presión de condensación, menor consumo auxiliar, estabilidad frente a corrosión y ensuciamiento y mantenimiento más predecible. Un recubrimiento mal diseñado agrega resistencia térmica, reduce paso de aire o se desprende; esos son criterios de descarte. El calor del equipo TI no desaparece: solo puede reducirse la fracción eléctrica auxiliar que también termina como calor.',
      'If the complete thermal balance is favorable: lower approach temperature or condensing pressure, lower auxiliary energy, stability against corrosion and fouling, and more predictable maintenance. A poorly designed coating adds thermal resistance, restricts airflow or delaminates; these are rejection criteria. IT heat does not disappear: only the auxiliary electrical fraction, which also becomes heat, can be reduced.',
    ),
    maturity: long(
      'Anteproyecto, problema industrial y plan de validación definidos. GdV aún no cuenta con una formulación optimizada, serpentín comparativo, ahorro energético medido ni validación de campo. Las cifras de ahorro publicadas abajo son escenarios o antecedentes externos, no promesas de desempeño.',
      'Concept, industrial problem and validation plan defined. GdV does not yet have an optimized formulation, comparative coil, measured energy savings or field validation. Savings figures below are scenarios or external precedents, not performance promises.',
    ),
    evidence: long(
      'Interna: concepto de formulación bajo revisión de propiedad intelectual, acceso a materiales grafénicos y capacidades de dispersión y caracterización. Externa: datos de IEA, DOE/LBNL, EPA y un primer estudio de campo urbano cuantifican la escala energética y térmica; publicaciones sobre grafeno demuestran mecanismos de condensación y transferencia de calor en geometrías distintas. Ninguna valida todavía el sistema GdV en un condensador de centro de datos.',
      'Internal: a formulation concept under intellectual-property review, access to graphene materials and dispersion/characterization capabilities. External: IEA, DOE/LBNL and EPA data plus an initial urban field study quantify the energy and heat scale; graphene publications demonstrate condensation and heat-transfer mechanisms in different geometries. None yet validates the GdV system on a data-center condenser.',
    ),
    nextMilestone: long(
      'Demostrar en un banco A/B que un serpentín recubierto iguala o mejora UA y caída de presión, resiste ciclos y corrosión, y produce una diferencia energética estadísticamente defendible frente al mismo serpentín sin recubrimiento.',
      'Demonstrate in an A/B rig that a coated coil matches or improves UA and pressure drop, withstands cycling and corrosion, and produces a statistically defensible energy difference versus the same uncoated coil.',
    ),
    targetFunctions: list(
      ['Transferencia de calor en serpentín', 'Protección contra corrosión y ensuciamiento', 'Reducción verificable de energía auxiliar'],
      ['Coil heat transfer', 'Corrosion and fouling protection', 'Verifiable auxiliary-energy reduction'],
    ),
    sectors: list(
      ['Centros de datos', 'Manufactura y proceso pesado', 'Alimentos y cadena de frío', 'Hospitales y laboratorios', 'Retail, logística y almacenes', 'Edificios con grandes bancos de unidades rooftop'],
      ['Data centers', 'Manufacturing and heavy process', 'Food and cold chain', 'Hospitals and laboratories', 'Retail, logistics and warehouses', 'Buildings with large rooftop-unit banks'],
    ),
    modality: long(
      'Co-desarrollo por etapas con operador, fabricante de serpentines, integrador HVAC o laboratorio térmico. El socio aporta geometría, refrigerante, ciclo operativo, condiciones ambientales, datos de energía y acceso a equipo; GdV aporta material, formulación, aplicación, controles y diseño experimental.',
      'Stage-gated co-development with an operator, coil manufacturer, HVAC integrator or thermal laboratory. The partner provides geometry, refrigerant, operating cycle, environment, energy data and equipment access; GdV provides the material, formulation, application, controls and experimental design.',
    ),
    websiteCopy: list(
      [
        'Un centro de datos convierte prácticamente toda su electricidad en calor que debe rechazarse al ambiente. El reto no es “hacer desaparecer” ese calor, sino moverlo con menos energía auxiliar y con intercambiadores que conserven desempeño bajo polvo, corrosión, humedad y operación continua.',
        'Grafeno de Verdad explora recubrimientos ultradelgados para aletas y tubos de condensador. El proyecto está en fase temprana: antes de hablar de ahorro se medirán coeficiente global UA, temperaturas y presiones, potencia de compresores y ventiladores, caída de presión, espesor, adherencia, corrosión, ensuciamiento y limpieza frente a un control sin recubrimiento.',
      ],
      [
        'A data center converts virtually all of its electricity into heat that must be rejected to the environment. The challenge is not to make that heat disappear, but to move it using less auxiliary energy and heat exchangers that preserve performance under dust, corrosion, humidity and continuous operation.',
        'Grafeno de Verdad is exploring ultrathin coatings for condenser fins and tubes. The project is early-stage: before claiming savings, it will measure overall UA, temperatures and pressures, compressor and fan power, pressure drop, thickness, adhesion, corrosion, fouling and cleanability against an uncoated control.',
      ],
    ),
    impactContext: long(
      'Las cuatro primeras cifras describen el problema público. La quinta es un cálculo paramétrico: 1 MW eléctrico de refrigeración operando 8,760 h/año, tarifa de USD 0.08–0.15/kWh y una reducción hipotética del 5%. No pronostica el desempeño de GdV. Las emisiones usan el promedio estadounidense de electricidad entregada de EPA; cada sitio debe sustituir su tarifa, horas, carga y factor de red.',
      'The first four figures describe the public problem. The fifth is a parametric calculation: 1 MW of cooling electricity operating 8,760 h/year, an electricity price of USD 0.08–0.15/kWh and a hypothetical 5% reduction. It does not forecast GdV performance. Emissions use EPA’s U.S. delivered-electricity average; each site must substitute its tariff, hours, load and grid factor.',
    ),
    impactFacts: [
      impactFact('thermal-global-energy', '415 TWh', ['Electricidad mundial de centros de datos en 2024', 'Global data-center electricity in 2024'], ['La IEA proyecta aproximadamente 945 TWh para 2030; es demanda total, no solo refrigeración.', 'The IEA projects about 945 TWh by 2030; this is total demand, not cooling alone.'], 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai'),
      impactFact('thermal-cooling-share', '7%–>30%', ['Fracción de electricidad destinada a refrigeración', 'Share of electricity used for cooling'], ['Rango IEA desde centros hyperscale eficientes hasta centros empresariales menos eficientes.', 'IEA range from efficient hyperscale facilities to less-efficient enterprise data centers.'], 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai'),
      impactFact('thermal-flux', '2–6 kW/m²', ['Flujo térmico observado en cuatro centros de datos', 'Heat flux observed at four data centers'], ['Primer estudio de campo a escala vecinal; muestra pequeña y periodos limitados, por lo que requiere campañas adicionales.', 'Initial neighborhood-scale field study; the sample and observation periods were limited and need additional campaigns.'], 'https://doi.org/10.1115/1.4071922'),
      impactFact('thermal-warming', 'hasta 2.2 °C', ['Calentamiento del aire a sotavento observado', 'Observed downwind air warming'], ['Promedios reportados de 0.7–0.9 °C a 100–500 m; no es un valor universal para todos los centros.', 'Reported averages of 0.7–0.9 °C at 100–500 m; this is not a universal value for every facility.'], 'https://doi.org/10.1115/1.4071922'),
      impactFact('thermal-scenario', 'USD 35k–65.7k/año', ['Valor de una mejora hipotética del 5% por cada MW eléctrico de refrigeración continua', 'Value of a hypothetical 5% improvement per MW of continuous cooling electricity'], ['Equivale a 438 MWh/año y, con el factor EPA indicado, cerca de 172 t de CO₂/año evitadas. Escenario transparente, no garantía.', 'Equivalent to 438 MWh/year and, using the stated EPA factor, about 172 t CO₂/year avoided. Transparent scenario, not a guarantee.'], 'https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator-calculations-and-references'),
      impactFact('thermal-rtu-scale', '>160,000 RTUs', ['Escala de una campaña pública de modernización', 'Scale of a public rooftop-unit upgrade campaign'], ['DOE reportó más de 1,100 millones de kWh y USD 110 millones de ahorro anual agregado. Demuestra escala de mercado; no es evidencia de recubrimientos grafénicos.', 'DOE reported more than 1.1 billion kWh and USD 110 million in aggregate annual savings. This demonstrates market scale, not graphene-coating evidence.'], 'https://betterbuildingssolutioncenter.energy.gov/sites/default/files/program/DOE_BBI_2019_Progress_Report.pdf'),
    ],
    pilotScope: long(
      'Seleccionar un serpentín representativo y preparar cupones y secciones de aleta con control sin recubrimiento, control de resina y dos cargas grafénicas a espesor seco controlado. Registrar composición y proceso sin divulgar formulación confidencial.',
      'Select a representative coil and prepare coupons and fin sections with an uncoated control, a resin-only control and two graphene loadings at controlled dry-film thickness. Record composition and process without disclosing confidential formulation details.',
    ),
    pilotValidation: long(
      'Medir espesor, cobertura, adherencia, resistencia de contacto, conductividad efectiva, ángulo de contacto, corrosión, ciclos térmicos y limpieza. En banco: flujo de aire y refrigerante, caída de presión, UA, aproximación térmica, presión de condensación y potencia de compresor y ventilador bajo condiciones repetidas.',
      'Measure thickness, coverage, adhesion, contact resistance, effective conductivity, contact angle, corrosion, thermal cycling and cleanability. In the rig: air and refrigerant flow, pressure drop, UA, approach temperature, condensing pressure, and compressor and fan power under repeated conditions.',
    ),
    pilotGate: long(
      'No avanzar a sitio si el recubrimiento reduce UA, aumenta caída de presión, se desprende o induce corrosión. Avanzar solo con una mejora repetible frente a ambos controles, incertidumbre cuantificada y protocolo de seguridad y aplicación acordado.',
      'Do not proceed to site if the coating reduces UA, increases pressure drop, delaminates or induces corrosion. Advance only with a repeatable improvement versus both controls, quantified uncertainty and an agreed application and safety protocol.',
    ),
    contactPrompt: long(
      '¿Operas decenas o cientos de condensadores o unidades de techo? Comparte geometría, carga, refrigerante, historial de limpieza y datos horarios de energía. Diseñemos primero un banco A/B y un caso económico con tus números.',
      'Do you operate dozens or hundreds of condensers or rooftop units? Share geometry, load, refrigerant, cleaning history and interval energy data. Let us first design an A/B rig and a business case using your numbers.',
    ),
    scientificContext: long(
      'Los estudios de superficie muestran mecanismos posibles, no una receta transferible. Un recubrimiento debe validarse en la geometría, régimen de transferencia, ambiente y ciclo de limpieza reales.',
      'Surface studies demonstrate possible mechanisms, not a transferable recipe. A coating must be validated in the actual geometry, heat-transfer regime, environment and cleaning cycle.',
    ),
    precedents: [
      precedent('thermal-preston', 'Preston et al., 2015', ['Un recubrimiento CVD de grafeno promovió condensación gota a gota y reportó un coeficiente de transferencia hasta cuatro veces mayor que condensación en película en su plataforma experimental.', 'A CVD-graphene coating promoted dropwise condensation and reported up to fourfold heat-transfer coefficient versus filmwise condensation in its experimental platform.'], ['Demuestra que una capa ultradelgada puede modificar mojabilidad y transferencia de fase.', 'Shows that an ultrathin layer can modify wettability and phase-change heat transfer.'], ['No fue una pintura de grafeno exfoliado, ni un serpentín de aire acondicionado, ni una prueba de consumo energético.', 'It was not an exfoliated-graphene paint, an air-conditioning coil or an energy-consumption test.'], 'https://doi.org/10.1021/nl504628s'),
      precedent('thermal-sailor', 'Sailor et al., 2026', ['Primeras mediciones de campo de plumas térmicas de cuatro centros de datos y su impacto de temperatura a escala vecinal.', 'First field measurements of thermal plumes from four data centers and neighborhood-scale air-temperature impacts.'], ['Cuantifica el flujo térmico y obliga a considerar el entorno urbano dentro del caso de sostenibilidad.', 'Quantifies heat flux and brings the urban environment into the sustainability case.'], ['El estudio advierte que la muestra y las ventanas de medición son limitadas; no evalúa recubrimientos.', 'The study cautions that sample size and measurement windows are limited; it does not evaluate coatings.'], 'https://doi.org/10.1115/1.4071922'),
      precedent('thermal-kim', 'Kim et al., 2018', ['Revisión de parámetros físicos y estructurales que controlan la conductividad en compuestos polímero–relleno.', 'Review of physical and structural parameters controlling conductivity in polymer–filler composites.'], ['Orienta tamaño de hojuela, contactos, red, orientación y resistencia interfacial.', 'Informs flake size, contacts, network, orientation and interfacial resistance.'], ['La alta conductividad intrínseca del grafeno no se traduce automáticamente a una película compuesta.', 'Graphene’s high intrinsic conductivity does not automatically transfer to a composite film.'], 'https://doi.org/10.1002/adem.201800204'),
    ],
    references: [
      reference('thermal-iea', 'International Energy Agency. Energy and AI: Energy demand from AI (2025).', 'https://www.iea.org/reports/energy-and-ai/energy-demand-from-ai'),
      reference('thermal-lbnl', 'Shehabi, A. et al. 2024 United States Data Center Energy Usage Report. Lawrence Berkeley National Laboratory (2024).', 'https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report'),
      reference('thermal-sailor-ref', 'Sailor, D. J.; Samareh Abolhassani, S.; Martin, E. P. Data Center Waste Heat as an Emerging Urban Thermal Hazard. Journal of Engineering for Sustainable Buildings and Cities 7, 024501 (2026).', 'https://doi.org/10.1115/1.4071922'),
      reference('thermal-preston-ref', 'Preston, D. J. et al. Scalable Graphene Coatings for Enhanced Condensation Heat Transfer. Nano Letters 15, 2902–2909 (2015).', 'https://doi.org/10.1021/nl504628s'),
      reference('thermal-kim-ref', 'Kim, H. S. et al. Thermal Management in Polymer Composites: A Review of Physical and Structural Parameters. Advanced Engineering Materials 20, 1800204 (2018).', 'https://doi.org/10.1002/adem.201800204'),
      reference('thermal-epa', 'U.S. EPA. Greenhouse Gas Equivalencies Calculator: Calculations and References.', 'https://www.epa.gov/energy/greenhouse-gas-equivalencies-calculator-calculations-and-references'),
    ],
  },

  'interfaces-termicas-pastas': {
    _type: 'solutionApplicationProfile',
    publicStatus: commonStatus,
    trl: 2,
    technicalName: long(
      'Pastas y materiales de interfaz térmica con grafeno o híbridos grafeno–cerámico para electrónica de potencia y cómputo.',
      'Thermal-interface pastes and materials using graphene or graphene–ceramic hybrids for power electronics and computing.',
    ),
    industrialProblem: long(
      'Dos superficies metálicas aparentemente planas solo se tocan en una fracción de su área microscópica. El aire atrapado y la rugosidad elevan la resistencia térmica entre chip, encapsulado, difusor y disipador. Una pasta debe llenar ese espacio a bajo espesor sin escurrir, bombearse fuera, secarse o provocar cortocircuitos.',
      'Two apparently flat metal surfaces touch over only a fraction of their microscopic area. Trapped air and roughness increase thermal resistance between chip, package, spreader and heat sink. A paste must fill that gap at low bond-line thickness without bleeding, pumping out, drying or causing electrical shorts.',
    ),
    grapheneSolution: long(
      'Formular una matriz fluida con distribución controlada de hojuelas de grafeno o grafito multicapa para crear rutas térmicas a baja carga y buena humectación. La línea se divide desde el inicio: una pasta eléctricamente conductora para interfaces permitidas y una variante aislante con GO, grafeno encapsulado o híbridos de nitruro de boro/alúmina para electrónica sensible.',
      'Formulate a flowable matrix with a controlled distribution of graphene or multilayer-graphite flakes to create thermal pathways at low loading and good wetting. The program splits from the outset: an electrically conductive paste for permitted interfaces and an insulating variant using GO, encapsulated graphene or boron-nitride/alumina hybrids for sensitive electronics.',
    ),
    expectedAdvantages: long(
      'Menor resistencia térmica de unión a un espesor reproducible, menor temperatura de operación o mayor margen de potencia, aplicación dispensable y posibilidad de ajustar aislamiento eléctrico. La conductividad volumétrica por sí sola no decide el desempeño: importan contacto, presión, espesor, viscosidad, orientación de hojuelas y envejecimiento.',
      'Lower bond-line thermal resistance at a reproducible thickness, lower operating temperature or greater power margin, dispensability and an option to tailor electrical insulation. Bulk conductivity alone does not determine performance: contact, pressure, thickness, viscosity, flake orientation and aging matter.',
    ),
    maturity: long(
      'Concepto y arquitectura de formulación definidos a partir de literatura y documentos internos; todavía sin pasta GdV formulada, curva ASTM D5470, datos de bombeo o comparación con un producto comercial.',
      'Formulation concept and architecture defined from literature and internal documents; no GdV paste, ASTM D5470 curve, pump-out data or commercial-product comparison yet.',
    ),
    evidence: long(
      'Interna: materiales grafénicos, propuesta de compuesto térmicamente conductor y eléctricamente aislante, y capacidades de dispersión y caracterización. Externa: mediciones fundamentales de grafeno suspendido y un estudio de 2012 sobre grasa comercial con grafeno/MLG demuestran potencial, pero no predicen el comportamiento de una formulación GdV.',
      'Internal: graphene materials, a thermally conductive/electrically insulating composite concept, and dispersion/characterization capabilities. External: fundamental measurements on suspended graphene and a 2012 study of a commercial grease with graphene/MLG demonstrate potential but do not predict a GdV formulation.',
    ),
    nextMilestone: long(
      'Formular candidatos conductores y aislantes, medir resistencia térmica de unión con ASTM D5470 o método equivalente y compararlos a igual presión y espesor contra la matriz base y una pasta comercial.',
      'Formulate conductive and insulating candidates, measure bond-line thermal resistance using ASTM D5470 or an equivalent method, and compare them at equal pressure and thickness against the base matrix and a commercial paste.',
    ),
    targetFunctions: list(
      ['Baja resistencia térmica de unión', 'Control de espesor y bombeo', 'Aislamiento eléctrico opcional'],
      ['Low bond-line thermal resistance', 'Thickness and pump-out control', 'Optional electrical insulation'],
    ),
    sectors: list(
      ['CPU, GPU y aceleradores de IA', 'Electrónica de potencia e inversores', 'LED y fotónica', 'Controles industriales', 'Baterías y movilidad eléctrica', 'Telecomunicaciones y fuentes de poder'],
      ['CPUs, GPUs and AI accelerators', 'Power electronics and inverters', 'LEDs and photonics', 'Industrial controls', 'Batteries and e-mobility', 'Telecommunications and power supplies'],
    ),
    modality: long(
      'Co-desarrollo con fabricante de electrónica, integrador térmico o laboratorio de encapsulado. El socio aporta geometría, presión, temperatura, sustratos, requisitos dieléctricos y ciclo de vida; GdV desarrolla la dispersión y ejecuta la comparación con controles.',
      'Co-development with an electronics manufacturer, thermal integrator or packaging laboratory. The partner provides geometry, pressure, temperature, substrates, dielectric requirements and life cycle; GdV develops the dispersion and runs the controlled comparison.',
    ),
    websiteCopy: list(
      [
        'La pasta térmica no enfría por sí sola: reduce la barrera entre una fuente caliente y su disipador. Por eso una cifra de conductividad sin espesor, presión y resistencia de contacto puede ser engañosa. Grafeno de Verdad plantea esta línea alrededor de la resistencia térmica total de la unión.',
        'El programa contempla dos familias: formulaciones conductoras para arquitecturas donde no existe riesgo eléctrico y formulaciones aislantes que combinan materiales grafénicos protegidos con cargas cerámicas. Ambas deberán demostrar dispensabilidad, estabilidad y desempeño después de ciclos, no solo una medición inicial.',
      ],
      [
        'Thermal paste does not cool by itself: it reduces the barrier between a hot source and its heat sink. A conductivity number without bond-line thickness, pressure and contact resistance can therefore mislead. Grafeno de Verdad frames this program around total joint thermal resistance.',
        'The program includes two families: conductive formulations for architectures with no electrical risk and insulating formulations combining protected graphene materials with ceramic fillers. Both must demonstrate dispensability, stability and post-cycling performance, not just an initial measurement.',
      ],
    ),
    impactContext: long(
      'Estas cifras son precedentes externos, no resultados ni especificaciones de GdV. La conductividad extraordinaria de una lámina suspendida no se conserva automáticamente en una pasta; interfaces, orientación, matriz y contactos dominan el compuesto real.',
      'These figures are external precedents, not GdV results or specifications. The extraordinary conductivity of a suspended sheet does not automatically survive in a paste; interfaces, orientation, matrix and contacts dominate the real composite.',
    ),
    impactFacts: [
      impactFact('tim-graphene-k', '>4,000 W/m·K', ['Conductividad térmica de grafeno monocapa suspendido', 'Thermal conductivity of suspended monolayer graphene'], ['Chen et al. midieron grafeno CVD isotópicamente puro cerca de 320 K. No es la conductividad de una pasta ni de grafeno soportado.', 'Chen et al. measured isotopically pure CVD graphene near 320 K. This is not the conductivity of a paste or supported graphene.'], 'https://doi.org/10.1038/nmat3207'),
      impactFact('tim-grease', '5.8 → 14 W/m·K', ['Resultado externo en una grasa comercial con 2% vol. de grafeno/MLG', 'External result in a commercial grease with 2 vol% graphene/MLG'], ['Shahil y Balandin reportaron esta mejora en 2012 para su material, procedimiento y medición específicos.', 'Shahil and Balandin reported this improvement in 2012 for their specific material, process and measurement.'], 'https://doi.org/10.1021/nl203906r'),
      impactFact('tim-metric', 'ASTM D5470', ['Método de referencia para transmisión térmica de materiales de interfaz', 'Reference method for thermal transmission of interface materials'], ['Permite relacionar impedancia, espesor y resistencia de contacto bajo condiciones controladas; se complementará con envejecimiento y pruebas de aplicación.', 'Relates impedance, thickness and contact resistance under controlled conditions; it will be complemented by aging and application tests.'], 'https://www.astm.org/d5470-17.html'),
    ],
    pilotScope: long(
      'Seleccionar una geometría y separar requisitos conductores y aislantes. Preparar matriz base, referencia comercial y una matriz corta de tamaños de hojuela, cargas y sistemas híbridos; controlar desgasificado, espesor y presión de montaje.',
      'Select one geometry and separate conductive and insulating requirements. Prepare a base matrix, commercial reference and focused matrix of flake sizes, loadings and hybrid systems; control degassing, bond-line thickness and mounting pressure.',
    ),
    pilotValidation: long(
      'Medir reología, dispensabilidad, sangrado, asentamiento, densidad, conductividad aparente, resistencia térmica de unión, resistividad eléctrica y rigidez dieléctrica cuando aplique. Someter a ciclos térmicos, almacenamiento, vibración o bombeo y repetir la medición.',
      'Measure rheology, dispensability, bleed, settling, density, apparent conductivity, bond-line thermal resistance, electrical resistivity and dielectric strength where required. Apply thermal cycling, storage, vibration or pump-out testing and repeat the measurement.',
    ),
    pilotGate: long(
      'Avanzar únicamente si la formulación reduce la resistencia total frente a la matriz y la referencia a igual presión y espesor, conserva estabilidad de aplicación y cumple el límite eléctrico del equipo. Una conductividad alta con mal contacto no supera el criterio.',
      'Advance only if the formulation reduces total resistance versus the matrix and reference at equal pressure and thickness, preserves application stability and meets the equipment’s electrical limit. High conductivity with poor contact does not pass.',
    ),
    contactPrompt: long(
      '¿Tienes un hotspot, un límite de temperatura o una interfaz difícil de ensamblar? Comparte potencia, área, superficies, presión, espesor y requisitos eléctricos. Definamos el ensayo que puede descartar o validar la formulación.',
      'Do you have a hotspot, temperature limit or difficult assembly interface? Share power, area, surfaces, pressure, thickness and electrical requirements. Let us define the test that can reject or validate the formulation.',
    ),
    scientificContext: long(
      'Los precedentes sirven como techo físico y prueba de concepto. El programa GdV se evaluará como unión completa y bajo envejecimiento, no por extrapolación de una propiedad intrínseca.',
      'The precedents serve as a physical ceiling and proof of concept. The GdV program will be evaluated as a complete joint under aging, not by extrapolating an intrinsic property.',
    ),
    precedents: [
      precedent('tim-chen', 'Chen et al., 2012', ['Medición óptica de conductividad térmica en grafeno CVD suspendido con control isotópico; valores superiores a 4,000 W/m·K cerca de 320 K.', 'Optical measurement of thermal conductivity in suspended, isotopically controlled CVD graphene; values above 4,000 W/m·K near 320 K.'], ['Establece el potencial intrínseco y la sensibilidad a isótopos, defectos y condiciones de medición.', 'Establishes intrinsic potential and sensitivity to isotopes, defects and measurement conditions.'], ['No mide una interfaz, una pasta, grafeno soportado ni un compuesto.', 'It does not measure an interface, paste, supported graphene or composite.'], 'https://doi.org/10.1038/nmat3207'),
      precedent('tim-shahil', 'Shahil y Balandin, 2012', ['Una mezcla de grafeno y grafito multicapa elevó de aproximadamente 5.8 a 14 W/m·K la conductividad de una grasa comercial a 2% vol.', 'A graphene and multilayer-graphite mixture increased commercial-grease conductivity from about 5.8 to 14 W/m·K at 2 vol%.'], ['Justifica estudiar tamaño, proporción de capas y contacto entre hojuelas a cargas moderadas.', 'Supports studying flake size, layer distribution and interflake contact at moderate loading.'], ['Es un resultado de una formulación externa; no incluye la ventana dieléctrica ni la durabilidad requeridas aquí.', 'It is an external formulation result and does not include the dielectric or durability window required here.'], 'https://doi.org/10.1021/nl203906r'),
      precedent('tim-kim', 'Kim et al., 2018', ['La revisión muestra que la resistencia interfacial y de contacto puede mantener a los compuestos cerca del límite inferior aun con cargas de alta conductividad.', 'The review shows that interface and contact resistance can keep composites near the lower bound even with high-conductivity fillers.'], ['Sustenta una ruta de redes 3D, tamaños híbridos y medición a través del espesor.', 'Supports a route involving 3D networks, hybrid sizes and through-plane measurement.'], ['Una red muy cargada puede elevar viscosidad y conductividad eléctrica; el diseño debe equilibrar funciones.', 'A highly loaded network may raise viscosity and electrical conductivity; the design must balance functions.'], 'https://doi.org/10.1002/adem.201800204'),
    ],
    references: [
      reference('tim-chen-ref', 'Chen, S. et al. Thermal conductivity of isotopically modified graphene. Nature Materials 11, 203–207 (2012).', 'https://doi.org/10.1038/nmat3207'),
      reference('tim-shahil-ref', 'Shahil, K. M. F.; Balandin, A. A. Graphene–Multilayer Graphene Nanocomposites as Highly Efficient Thermal Interface Materials. Nano Letters 12, 861–867 (2012).', 'https://doi.org/10.1021/nl203906r'),
      reference('tim-kim-ref', 'Kim, H. S. et al. Thermal Management in Polymer Composites: A Review of Physical and Structural Parameters. Advanced Engineering Materials 20, 1800204 (2018).', 'https://doi.org/10.1002/adem.201800204'),
      reference('tim-astm-ref', 'ASTM D5470-17. Standard Test Method for Thermal Transmission Properties of Thermally Conductive Electrical Insulation Materials.', 'https://www.astm.org/d5470-17.html'),
    ],
  },
}
