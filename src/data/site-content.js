import { localEditorialImage, solutionApplicationProfiles } from './application-profiles.js'

const project = (key, status, title, summary, objective, validation) => ({
  _key: key,
  _type: 'solutionProject',
  status,
  title: { _type: 'localizedString', es: title[0], en: title[1] },
  summary: { _type: 'localizedText', es: summary[0], en: summary[1] },
  objective: { _type: 'localizedText', es: objective[0], en: objective[1] },
  validation: { _type: 'localizedStringList', es: validation[0], en: validation[1] },
})

export const materials = [
  {
    slug: 'grafeno-cvd',
    code: 'GDV-CVD',
    name: { es: 'Grafeno CVD', en: 'CVD graphene' },
    eyebrow: { es: 'Películas delgadas', en: 'Thin films' },
    summary: {
      es: 'Películas de grafeno monocapa o multicapa para transferencia e integración sobre sustratos seleccionados.',
      en: 'Monolayer or multilayer graphene films for transfer and integration on selected substrates.',
    },
    formats: { es: ['Sobre cobre o níquel', 'Transferido a Si/SiO₂ o polímero', 'Prístino o dopado, según proyecto'], en: ['On copper or nickel', 'Transferred to Si/SiO₂ or polymer', 'Pristine or doped, project-dependent'] },
    applications: { es: ['Sensores', 'Electrónica', 'Óptica', 'Investigación'], en: ['Sensors', 'Electronics', 'Optics', 'Research'] },
    characterization: ['Raman', 'SEM', 'AFM', 'XPS'],
  },
  {
    slug: 'grafeno-pocas-capas',
    code: 'GDV-FLG',
    name: { es: 'Grafeno de pocas capas', en: 'Few-layer graphene' },
    eyebrow: { es: 'Hojuelas', en: 'Flakes' },
    summary: {
      es: 'Hojuelas de grafeno para formulación, refuerzo y desarrollo de materiales multifuncionales.',
      en: 'Graphene flakes for formulation, reinforcement and multifunctional material development.',
    },
    formats: { es: ['Polvo', 'Dispersión acuosa', 'Dispersión en solvente compatible'], en: ['Powder', 'Aqueous dispersion', 'Compatible-solvent dispersion'] },
    applications: { es: ['Compuestos', 'Recubrimientos', 'Gestión térmica', 'Tintas'], en: ['Composites', 'Coatings', 'Thermal management', 'Inks'] },
    characterization: ['Raman', 'TGA', 'SEM', 'Distribución de tamaño'],
  },
  {
    slug: 'oxido-de-grafeno',
    code: 'GDV-GO',
    name: { es: 'Óxido de grafeno', en: 'Graphene oxide' },
    eyebrow: { es: 'Dispersable', en: 'Dispersible' },
    summary: {
      es: 'Material oxidado y procesable en medios polares para superficies, membranas y formulaciones.',
      en: 'Oxidized material processable in polar media for surfaces, membranes and formulations.',
    },
    formats: { es: ['Dispersión acuosa', 'Pasta de humedad controlada', 'Polvo, según alcance'], en: ['Aqueous dispersion', 'Controlled-moisture paste', 'Powder, scope-dependent'] },
    applications: { es: ['Membranas', 'Recubrimientos', 'Sensores', 'Funcionalización'], en: ['Membranes', 'Coatings', 'Sensors', 'Functionalization'] },
    characterization: ['XPS', 'Raman', 'TGA', 'UV–Vis'],
  },
  {
    slug: 'oxido-de-grafeno-reducido',
    code: 'GDV-rGO',
    name: { es: 'Óxido de grafeno reducido', en: 'Reduced graphene oxide' },
    eyebrow: { es: 'Conductivo', en: 'Conductive' },
    summary: {
      es: 'Material reducido con equilibrio ajustable entre procesabilidad, superficie y respuesta eléctrica.',
      en: 'Reduced material with a tunable balance of processability, surface chemistry and electrical response.',
    },
    formats: { es: ['Polvo', 'Dispersión', 'Pasta'], en: ['Powder', 'Dispersion', 'Paste'] },
    applications: { es: ['Electrodos', 'Tintas', 'Compuestos', 'Sensores'], en: ['Electrodes', 'Inks', 'Composites', 'Sensors'] },
    characterization: ['XPS', 'Raman', 'TGA', 'Conductividad'],
  },
  {
    slug: 'grafeno-funcionalizado',
    code: 'GDV-FG',
    name: { es: 'Grafeno funcionalizado', en: 'Functionalized graphene' },
    eyebrow: { es: 'Interfaz a la medida', en: 'Tailored interface' },
    summary: {
      es: 'Química superficial diseñada para mejorar compatibilidad, dispersión o interacción con una matriz objetivo.',
      en: 'Surface chemistry designed to improve compatibility, dispersion or interaction with a target matrix.',
    },
    formats: { es: ['Polvo', 'Dispersión', 'Formulación por proyecto'], en: ['Powder', 'Dispersion', 'Project-specific formulation'] },
    applications: { es: ['Polímeros', 'Cerámicos', 'Metales', 'Catálisis'], en: ['Polymers', 'Ceramics', 'Metals', 'Catalysis'] },
    characterization: ['XPS', 'FTIR', 'TGA', 'Potencial zeta'],
  },
  {
    slug: 'hibridos-2d',
    code: 'GDV-2DH',
    name: { es: 'Híbridos y materiales 2D', en: '2D materials and hybrids' },
    eyebrow: { es: 'Desarrollo especial', en: 'Special development' },
    summary: {
      es: 'Heteroestructuras, MXenes y sistemas grafeno–nanopartícula desarrollados con objetivos funcionales definidos.',
      en: 'Heterostructures, MXenes and graphene–nanoparticle systems developed around defined functional targets.',
    },
    formats: { es: ['Muestra de I+D', 'Dispersión', 'Integrado en prototipo'], en: ['R&D sample', 'Dispersion', 'Prototype-integrated'] },
    applications: { es: ['Catálisis', 'Energía', 'Sensores', 'Electrónica avanzada'], en: ['Catalysis', 'Energy', 'Sensors', 'Advanced electronics'] },
    characterization: ['Raman', 'XPS', 'TEM', 'SEM'],
  },
]

export const solutions = [
  {
    slug: 'automocion-electromovilidad',
    code: 'SOL-MOB',
    name: { es: 'Automoción y electromovilidad', en: 'Automotive and e-mobility' },
    summary: { es: 'Co-desarrollo de sensado, gestión térmica, EMI/ESD y compuestos grafénicos alrededor de un componente y una métrica verificable.', en: 'Co-development of graphene sensing, thermal management, EMI/ESD and composites around one component and one verifiable metric.' },
    outcomes: { es: ['Componente y modo de falla definidos', 'Cupón comparativo con control', 'Ruta de validación automotriz'], en: ['Defined component and failure mode', 'Comparative controlled coupon', 'Automotive validation path'] },
    leadImage: localEditorialImage('/soluciones/automocion-electromovilidad-deeptech-v1.webp', ['Visualización DeepTech clara de un vehículo eléctrico con batería, sensores impresos, interfaz térmica y componentes multifuncionales.', 'Bright DeepTech visualization of an electric vehicle with a battery, printed sensors, thermal interface and multifunctional components.'], ['Visualización conceptual de oportunidades de co-desarrollo para automoción y electromovilidad; no representa un componente homologado ni resultados propios de GdV.', 'Conceptual visualization of automotive and e-mobility co-development opportunities; it does not represent a qualified component or GdV performance data.']),
    applicationProfile: solutionApplicationProfiles['automocion-electromovilidad'],
  },
  {
    slug: 'tintas-conductoras',
    code: 'SOL-INK',
    name: { es: 'Tintas conductoras de grafeno', en: 'Graphene conductive inks' },
    summary: { es: 'Patrones eléctricos flexibles formulados alrededor del sustrato, el método de impresión y la propiedad eléctrica objetivo.', en: 'Flexible electrical patterns formulated around the substrate, printing method and target electrical property.' },
    outcomes: { es: ['Dispersión estable', 'Reología compatible', 'Ruta de curado definida'], en: ['Stable dispersion', 'Compatible rheology', 'Defined curing path'] },
    leadImage: localEditorialImage('/soluciones/tintas-conductoras-deeptech-v1.webp', ['Visualización DeepTech clara de un circuito flexible impreso con tinta de grafeno y equipo de caracterización.', 'Bright DeepTech visualization of a graphene-ink printed flexible circuit and characterization equipment.'], ['Visualización conceptual de formulación, impresión y validación de tintas conductoras; no corresponde a un resultado experimental de GdV.', 'Conceptual visualization of conductive-ink formulation, printing and validation; it is not a GdV experimental result.']),
    applicationProfile: solutionApplicationProfiles['tintas-conductoras'],
  },
  {
    slug: 'funcionalizacion-interfaces',
    code: 'SOL-INT',
    name: { es: 'Funcionalización e ingeniería de interfaces', en: 'Functionalization and interface engineering' },
    summary: { es: 'Química superficial, dopaje e híbridos diseñados alrededor de una función medible en sensores, dispositivos y formulaciones.', en: 'Surface chemistry, doping and hybrids designed around a measurable function in sensors, devices and formulations.' },
    outcomes: { es: ['Interfaz y controles definidos', 'Química caracterizada', 'Función reproducible'], en: ['Defined interface and controls', 'Characterized chemistry', 'Reproducible function'] },
    leadImage: localEditorialImage('/soluciones/funcionalizacion-interfaces-deeptech-v1.webp', ['Visualización DeepTech clara de moléculas y nanopartículas de oro ancladas de manera selectiva sobre una red de grafeno.', 'Bright DeepTech visualization of molecules and gold nanoparticles selectively anchored on a graphene lattice.'], ['Visualización conceptual de funcionalización e ingeniería de interfaces; no representa un experimento ni un dispositivo validado por GdV.', 'Conceptual visualization of functionalization and interface engineering; it does not represent a GdV experiment or validated device.']),
    applicationProfile: solutionApplicationProfiles['funcionalizacion-interfaces'],
  },
  {
    slug: 'recubrimientos-gestion-termica',
    code: 'SOL-THERM',
    name: { es: 'Recubrimientos para gestión térmica HVAC', en: 'Coatings for HVAC thermal management' },
    summary: { es: 'Recubrimientos grafénicos ultradelgados para estudiar transferencia de calor, corrosión y ensuciamiento en condensadores y unidades rooftop.', en: 'Ultrathin graphene-enabled coatings for studying heat transfer, corrosion and fouling in condensers and rooftop units.' },
    outcomes: { es: ['Serpentín A/B instrumentado', 'UA y energía medidos', 'Criterio de prueba en sitio'], en: ['Instrumented A/B coil', 'Measured UA and energy', 'Field-test gate'] },
    leadImage: localEditorialImage('/soluciones/recubrimientos-gestion-termica-deeptech-v1.webp', ['Visualización DeepTech clara de un condensador con recubrimiento ultradelgado, flujo térmico y bancos de equipos HVAC en un centro de datos.', 'Bright DeepTech visualization of an ultrathin-coated condenser, heat flow and HVAC equipment banks at a data center.'], ['Visualización conceptual de una ruta de recubrimiento térmico; no representa ahorro energético, prueba de campo ni formulación validada por GdV.', 'Conceptual visualization of a thermal-coating pathway; it does not represent GdV energy savings, field testing or a validated formulation.']),
    applicationProfile: solutionApplicationProfiles['recubrimientos-gestion-termica'],
  },
  {
    slug: 'interfaces-termicas-pastas',
    code: 'SOL-TIM',
    name: { es: 'Interfaces térmicas y pastas grafénicas', en: 'Graphene thermal interfaces and pastes' },
    summary: { es: 'Formulaciones conductoras o eléctricamente aislantes orientadas a reducir la resistencia térmica real entre electrónica y disipador.', en: 'Conductive or electrically insulating formulations aimed at reducing real thermal resistance between electronics and heat sinks.' },
    outcomes: { es: ['Pasta dispensable', 'Resistencia de unión medida', 'Estabilidad tras ciclos'], en: ['Dispensable paste', 'Measured joint resistance', 'Post-cycling stability'] },
    leadImage: localEditorialImage('/soluciones/pasta-termica-grafenica-deeptech-v1.webp', ['Visualización DeepTech clara del corte de una pasta térmica grafénica entre un dispositivo electrónico y un difusor de cobre.', 'Bright DeepTech cutaway visualization of a graphene thermal paste between an electronic device and copper heat spreader.'], ['Visualización conceptual de una interfaz térmica grafénica; no representa una formulación, microestructura ni desempeño experimental de GdV.', 'Conceptual visualization of a graphene thermal interface; it does not represent a GdV formulation, microstructure or experimental performance.']),
    applicationProfile: solutionApplicationProfiles['interfaces-termicas-pastas'],
  },
  {
    slug: 'textiles-funcionales',
    code: 'SOL-TEXT',
    name: { es: 'Textiles funcionales con grafeno', en: 'Graphene-enabled functional textiles' },
    summary: { es: 'Funciones térmicas, eléctricas y de sensado integradas en textiles sin perder de vista flexibilidad, confort y durabilidad.', en: 'Thermal, electrical and sensing functions integrated into textiles while preserving flexibility, comfort and durability.' },
    outcomes: { es: ['Función prioritaria definida', 'Cupón textil comparativo', 'Validación de uso'], en: ['Defined priority function', 'Comparative textile coupon', 'Use-case validation'] },
    leadImage: localEditorialImage('/soluciones/textiles-funcionales-deeptech-v1.webp', ['Visualización DeepTech clara de una prenda técnica con zonas conductoras y mapas de respuesta térmica.', 'Bright DeepTech visualization of a technical garment with conductive zones and thermal-response maps.'], ['Visualización conceptual de textiles funcionales con grafeno; no representa una prenda validada ni un producto disponible de GdV.', 'Conceptual visualization of graphene-enabled functional textiles; it does not represent a validated garment or available GdV product.']),
    applicationProfile: solutionApplicationProfiles['textiles-funcionales'],
  },
  {
    slug: 'masterbatches-polimeros',
    code: 'SOL-POLY',
    name: { es: 'Masterbatches y polímeros', en: 'Masterbatches and polymers' },
    summary: { es: 'Concentrados y compuestos para evaluar refuerzo, conductividad o gestión térmica.', en: 'Concentrates and compounds to assess reinforcement, conductivity or thermal management.' },
    outcomes: { es: ['Compatibilización', 'Dispersión en matriz', 'Validación de proceso'], en: ['Compatibilization', 'Matrix dispersion', 'Process validation'] },
    projects: [
      project('poly-masterbatch', 'evaluation', ['Masterbatch conductor o antiestático', 'Conductive or antistatic masterbatch'], ['Concentrado grafénico diseñado para una matriz y una ruta de transformación específicas.', 'Graphene concentrate designed for a specific matrix and transformation route.'], ['Alcanzar la respuesta eléctrica buscada sin comprometer innecesariamente la procesabilidad o las propiedades mecánicas.', 'Reach the target electrical response without unnecessarily compromising processability or mechanical properties.'], [['Resistividad', 'Dispersión', 'Reología de proceso', 'Propiedades mecánicas'], ['Resistivity', 'Dispersion', 'Process rheology', 'Mechanical properties']]),
      project('poly-light-composite', 'coDevelopment', ['Compuesto ligero multifuncional', 'Lightweight multifunctional composite'], ['Integración de materiales grafénicos para explorar refuerzo, disipación térmica o apantallamiento electromagnético.', 'Integration of graphene materials to explore reinforcement, thermal dissipation or electromagnetic shielding.'], ['Definir una ventana de carga y compatibilización que produzca una mejora medible en la función prioritaria.', 'Define a loading and compatibilization window that produces a measurable improvement in the priority function.'], [['Tracción o impacto', 'Conductividad térmica o eléctrica', 'Microscopía de dispersión', 'Procesabilidad'], ['Tensile or impact response', 'Thermal or electrical conductivity', 'Dispersion microscopy', 'Processability']]),
      project('poly-3d-filament', 'concept', ['Filamento funcional para impresión 3D', 'Functional 3D-printing filament'], ['Ruta de formulación para filamentos con respuesta mecánica, eléctrica o térmica ajustable.', 'Formulation route for filaments with tunable mechanical, electrical or thermal response.'], ['Evaluar si el material conserva dispersión y desempeño después de extrusión e impresión.', 'Assess whether the material preserves dispersion and performance after extrusion and printing.'], [['Estabilidad dimensional', 'Imprimibilidad', 'Anisotropía', 'Función objetivo'], ['Dimensional stability', 'Printability', 'Anisotropy', 'Target function']]),
    ],
  },
  {
    slug: 'concreto-asfalto',
    code: 'SOL-CIVIL',
    name: { es: 'Concreto y asfalto', en: 'Concrete and asphalt' },
    summary: { es: 'Aditivos y protocolos de mezcla para explorar desempeño mecánico y durabilidad.', en: 'Additives and mixing protocols to explore mechanical performance and durability.' },
    outcomes: { es: ['Compatibilidad con mezcla', 'Dosificación experimental', 'Plan de validación'], en: ['Mix compatibility', 'Experimental dosage', 'Validation plan'] },
    projects: [
      project('civil-asphalt', 'coDevelopment', ['Mezcla asfáltica modificada', 'Modified asphalt mix'], ['Programa experimental para estudiar dispersión, dosificación y durabilidad en una formulación asfáltica de referencia.', 'Experimental program to study dispersion, dosage and durability in a reference asphalt formulation.'], ['Determinar si el aditivo grafénico modifica de manera reproducible la respuesta mecánica o el envejecimiento del sistema.', 'Determine whether the graphene additive reproducibly changes the mechanical response or aging of the system.'], [['Estabilidad y flujo', 'Fatiga', 'Envejecimiento', 'Comparativo contra control'], ['Stability and flow', 'Fatigue', 'Aging', 'Control comparison']]),
      project('civil-conductive-concrete', 'concept', ['Concreto conductivo para calentamiento', 'Conductive concrete for heating'], ['Exploración de redes conductoras en matrices cementicias para calentamiento resistivo o deshielo.', 'Exploration of conductive networks in cementitious matrices for resistive heating or de-icing.'], ['Balancear conductividad, trabajabilidad y resistencia mecánica en una dosificación viable.', 'Balance conductivity, workability and mechanical strength in a viable formulation.'], [['Resistividad volumétrica', 'Mapa térmico', 'Compresión', 'Ciclos ambientales'], ['Volume resistivity', 'Thermal map', 'Compression', 'Environmental cycling']]),
      project('civil-structural-sensing', 'concept', ['Monitoreo estructural embebido', 'Embedded structural monitoring'], ['Concepto de material cementicio sensible a deformación o daño mediante cambios en su respuesta eléctrica.', 'Concept for a cementitious material responsive to strain or damage through changes in electrical response.'], ['Establecer sensibilidad, repetibilidad y estabilidad de la señal antes de plantear una prueba de campo.', 'Establish sensitivity, repeatability and signal stability before proposing a field test.'], [['Factor de galga', 'Histéresis', 'Deriva', 'Correlación con daño'], ['Gauge factor', 'Hysteresis', 'Drift', 'Damage correlation']]),
    ],
  },
  {
    slug: 'recubrimientos-funcionales',
    code: 'SOL-COAT',
    name: { es: 'Recubrimientos marinos de grafeno', en: 'Graphene-enabled marine coatings' },
    summary: { es: 'Sistemas multicapa para explorar barrera anticorrosiva, foul-release y control de biofouling con validación por etapas.', en: 'Multilayer systems exploring anticorrosion barriers, foul-release and biofouling control through staged validation.' },
    outcomes: { es: ['Barrera e integridad', 'Adherencia y desgaste', 'Control de biofouling'], en: ['Barrier integrity', 'Adhesion and wear', 'Biofouling control'] },
    leadImage: localEditorialImage('/soluciones/recubrimientos-marinos-deeptech-v1.webp', ['Visualización DeepTech clara de un recubrimiento multicapa sobre acero expuesto al ambiente marino.', 'Bright DeepTech visualization of a multilayer coating on steel exposed to a marine environment.'], ['Visualización conceptual de una arquitectura de recubrimiento marino; no representa una formulación validada ni una prueba de campo de GdV.', 'Conceptual visualization of a marine-coating architecture; it does not represent a validated formulation or GdV field test.']),
    applicationProfile: solutionApplicationProfiles['recubrimientos-funcionales'],
  },
  {
    slug: 'energia',
    code: 'SOL-ENERGY',
    name: { es: 'Energía y almacenamiento', en: 'Energy and storage' },
    summary: { es: 'Materiales de carbono y 2D para desarrollo de electrodos y componentes electroquímicos.', en: 'Carbon and 2D materials for electrode and electrochemical component development.' },
    outcomes: { es: ['Arquitectura de material', 'Integración en electrodo', 'Caracterización dirigida'], en: ['Material architecture', 'Electrode integration', 'Targeted characterization'] },
    projects: [
      project('energy-conductive-additive', 'coDevelopment', ['Aditivo conductor para electrodos', 'Conductive additive for electrodes'], ['Evaluación de grafeno o rGO como red conductora en formulaciones de electrodo definidas con el socio.', 'Evaluation of graphene or rGO as a conductive network in electrode formulations defined with the partner.'], ['Reducir limitaciones de transporte electrónico sin penalizar densidad, adhesión o procesabilidad.', 'Reduce electronic transport limitations without penalizing density, adhesion or processability.'], [['Impedancia', 'Capacidad y tasa', 'Ciclado', 'Integridad del electrodo'], ['Impedance', 'Capacity and rate', 'Cycling', 'Electrode integrity']]),
      project('energy-supercapacitor', 'concept', ['Electrodo para supercapacitor', 'Supercapacitor electrode'], ['Arquitecturas porosas de rGO, grafeno dopado o híbridos para explorar almacenamiento capacitivo.', 'Porous rGO, doped graphene or hybrid architectures to explore capacitive storage.'], ['Relacionar química superficial, porosidad y transporte iónico con el desempeño electroquímico.', 'Relate surface chemistry, porosity and ion transport to electrochemical performance.'], [['Capacitancia', 'Resistencia interna', 'Retención cíclica', 'Ventana de potencial'], ['Capacitance', 'Internal resistance', 'Cycle retention', 'Potential window']]),
      project('energy-thermal-pack', 'concept', ['Gestión térmica de baterías', 'Battery thermal management'], ['Materiales compuestos y recubrimientos orientados a distribuir calor en módulos o interfaces.', 'Composite materials and coatings aimed at spreading heat in modules or interfaces.'], ['Cuantificar la mejora térmica bajo una geometría y condiciones de operación representativas.', 'Quantify thermal improvement under representative geometry and operating conditions.'], [['Conductividad térmica', 'Mapa de temperatura', 'Ciclos', 'Aislamiento eléctrico'], ['Thermal conductivity', 'Temperature map', 'Cycling', 'Electrical insulation']]),
    ],
  },
  {
    slug: 'electronica-sensores',
    code: 'SOL-ELEC',
    name: { es: 'Electrónica y sensores', en: 'Electronics and sensors' },
    summary: { es: 'Grafeno CVD, materiales dopados e interfaces 2D para proyectos de detección, optoelectrónica y dispositivos funcionales.', en: 'CVD graphene, doped materials and 2D interfaces for sensing, optoelectronic and functional-device projects.' },
    outcomes: { es: ['Arquitectura del dispositivo', 'Integración de material', 'Respuesta funcional medida'], en: ['Device architecture', 'Material integration', 'Measured functional response'] },
    projects: [
      project('electronics-transparent-electrode', 'coDevelopment', ['Electrodo transparente', 'Transparent electrode'], ['Películas de grafeno CVD transferidas e integradas para evaluar transparencia, resistencia de hoja y estabilidad.', 'Transferred and integrated CVD graphene films to evaluate transparency, sheet resistance and stability.'], ['Adecuar sustrato, transferencia y contacto eléctrico a la arquitectura del dispositivo.', 'Match substrate, transfer and electrical contact to the device architecture.'], [['Transmitancia', 'Resistencia de hoja', 'Uniformidad', 'Ciclos mecánicos'], ['Transmittance', 'Sheet resistance', 'Uniformity', 'Mechanical cycling']]),
      project('electronics-gas-sensor', 'concept', ['Sensor químico o de gases', 'Chemical or gas sensor'], ['Línea de proyecto con grafeno prístino, funcionalizado o dopado para detectar analitos definidos.', 'Project line using pristine, functionalized or doped graphene to detect defined analytes.'], ['Diseñar la interfaz de reconocimiento y separar sensibilidad, selectividad, humedad y deriva.', 'Design the recognition interface and separate sensitivity, selectivity, humidity and drift.'], [['Límite de detección', 'Selectividad', 'Tiempo de respuesta', 'Estabilidad'], ['Detection limit', 'Selectivity', 'Response time', 'Stability']]),
      project('electronics-rf-photo', 'concept', ['Dispositivo RF o fotodetector', 'RF device or photodetector'], ['Exploración académica-industrial de grafeno monocapa para transporte de alta movilidad o detección de banda ancha.', 'Academic-industry exploration of monolayer graphene for high-mobility transport or broadband detection.'], ['Vincular calidad de película, transferencia y contactos con una métrica real del dispositivo.', 'Connect film quality, transfer and contacts with a real device metric.'], [['Movilidad', 'Resistencia de contacto', 'Responsividad', 'Ruido'], ['Mobility', 'Contact resistance', 'Responsivity', 'Noise']]),
    ],
  },
  {
    slug: 'membranas-separacion',
    code: 'SOL-MEM',
    name: { es: 'Membranas y separación', en: 'Membranes and separation' },
    summary: { es: 'Óxido de grafeno, rGO y arquitecturas porosas para explorar transporte selectivo, adsorción y tratamiento de corrientes acuosas.', en: 'Graphene oxide, rGO and porous architectures to explore selective transport, adsorption and treatment of aqueous streams.' },
    outcomes: { es: ['Química de superficie', 'Arquitectura de transporte', 'Ensayo con corriente realista'], en: ['Surface chemistry', 'Transport architecture', 'Realistic-stream testing'] },
    projects: [
      project('mem-selective-water', 'concept', ['Membrana para tratamiento de agua', 'Water-treatment membrane'], ['Láminas o compuestos basados en GO para estudiar permeación y rechazo de especies objetivo.', 'GO-based laminates or composites to study permeation and rejection of target species.'], ['Definir el analito, la matriz acuosa y las condiciones de operación antes de seleccionar la arquitectura.', 'Define analyte, aqueous matrix and operating conditions before selecting the architecture.'], [['Flujo', 'Rechazo', 'Ensuciamiento', 'Estabilidad química'], ['Flux', 'Rejection', 'Fouling', 'Chemical stability']]),
      project('mem-adsorbent', 'concept', ['Captura de contaminantes', 'Contaminant capture'], ['Materiales grafénicos funcionalizados o estructuras 3D para adsorción de especies seleccionadas.', 'Functionalized graphene materials or 3D structures for adsorption of selected species.'], ['Relacionar química superficial y porosidad con capacidad, selectividad y regeneración.', 'Relate surface chemistry and porosity to capacity, selectivity and regeneration.'], [['Isoterma y cinética', 'Selectividad', 'Regeneración', 'Lixiviación'], ['Isotherm and kinetics', 'Selectivity', 'Regeneration', 'Leaching']]),
    ],
  },
  {
    slug: 'catalisis-hidrogeno',
    code: 'SOL-CAT',
    name: { es: 'Catálisis e hidrógeno', en: 'Catalysis and hydrogen' },
    summary: { es: 'Grafeno dopado e híbridos grafeno–nanopartícula para soportes catalíticos y estudios de conversión electroquímica o termoquímica.', en: 'Doped graphene and graphene–nanoparticle hybrids for catalyst supports and electrochemical or thermochemical conversion studies.' },
    outcomes: { es: ['Sitio activo definido', 'Interfaz catalítica controlada', 'Actividad y estabilidad medidas'], en: ['Defined active site', 'Controlled catalytic interface', 'Measured activity and stability'] },
    projects: [
      project('cat-orr', 'concept', ['Catalizador para reducción de oxígeno', 'Oxygen-reduction catalyst'], ['Grafeno dopado con nitrógeno e híbridos como soportes o componentes activos para estudiar ORR.', 'Nitrogen-doped graphene and hybrids as supports or active components for ORR studies.'], ['Separar el efecto del dopaje, la carga catalítica y el transporte de masa sobre la respuesta observada.', 'Separate the effects of doping, catalyst loading and mass transport on the observed response.'], [['Potencial de inicio', 'Cinética', 'Selectividad', 'Durabilidad'], ['Onset potential', 'Kinetics', 'Selectivity', 'Durability']]),
      project('cat-green-hydrogen', 'concept', ['Material catalítico para hidrógeno', 'Catalytic material for hydrogen'], ['Híbridos grafénicos para explorar reacciones de producción de hidrógeno en condiciones definidas con el socio.', 'Graphene hybrids to explore hydrogen-production reactions under conditions defined with the partner.'], ['Diseñar una interfaz que mejore utilización del catalizador, transferencia de carga o estabilidad.', 'Design an interface that improves catalyst utilization, charge transfer or stability.'], [['Sobrepotencial', 'Pendiente de Tafel', 'Eficiencia farádica', 'Estabilidad'], ['Overpotential', 'Tafel slope', 'Faradaic efficiency', 'Stability']]),
      project('cat-co2', 'concept', ['Conversión de CO₂', 'CO₂ conversion'], ['Proyecto exploratorio de soportes e interfaces grafénicas para rutas electroquímicas o termoquímicas de conversión.', 'Exploratory project on graphene supports and interfaces for electrochemical or thermochemical conversion routes.'], ['Seleccionar producto objetivo, catalizador y reactor antes de formular el material.', 'Select target product, catalyst and reactor before formulating the material.'], [['Conversión', 'Selectividad', 'Balance de carbono', 'Desactivación'], ['Conversion', 'Selectivity', 'Carbon balance', 'Deactivation']]),
    ],
  },
  {
    slug: 'desarrollo-a-la-medida',
    code: 'SOL-CUSTOM',
    name: { es: 'Desarrollo a la medida', en: 'Custom development' },
    summary: { es: 'Un programa de co-desarrollo cuando el reto no cabe en una solución de catálogo.', en: 'A co-development program for challenges that do not fit an off-the-shelf solution.' },
    outcomes: { es: ['Hipótesis medible', 'Muestra o prototipo', 'Decisión de escalamiento'], en: ['Measurable hypothesis', 'Sample or prototype', 'Scale-up decision'] },
    projects: [
      project('custom-feasibility', 'evaluation', ['Estudio de factibilidad', 'Feasibility study'], ['Etapa breve para traducir un problema industrial en hipótesis, material candidato y criterio de decisión.', 'A short stage to translate an industrial problem into a hypothesis, candidate material and decision criterion.'], ['Determinar con el menor experimento útil si conviene detener, iterar o avanzar.', 'Use the smallest useful experiment to determine whether to stop, iterate or proceed.'], [['Control y muestra', 'Métrica primaria', 'Variables críticas', 'Recomendación técnica'], ['Control and sample', 'Primary metric', 'Critical variables', 'Technical recommendation']]),
      project('custom-pilot-transfer', 'coDevelopment', ['Transferencia a escala piloto', 'Pilot-scale transfer'], ['Programa para adaptar una formulación o procedimiento validado en laboratorio a equipos y lotes mayores.', 'Program to adapt a laboratory-validated formulation or procedure to larger equipment and batches.'], ['Conservar atributos críticos mientras cambian mezcla, energía específica, tiempos y manejo del material.', 'Preserve critical attributes as mixing, specific energy, times and material handling change.'], [['Reproducibilidad de lote', 'Balance de masa', 'Atributos críticos', 'Costo preliminar'], ['Batch reproducibility', 'Mass balance', 'Critical attributes', 'Preliminary cost']]),
    ],
  },
]

export const ui = {
  es: {
    localeName: 'ES', languageLabel: 'English', nav: { materials: 'Materiales', solutions: 'Soluciones', capabilities: 'Capacidades', academia: 'Academia–Industria', quality: 'Calidad', company: 'Empresa', resources: 'Recursos', contact: 'Iniciar proyecto' },
    menu: 'Menú', close: 'Cerrar', skip: 'Saltar al contenido', home: 'Inicio', explore: 'Explorar', contact: 'Iniciar proyecto', viewAll: 'Ver todos', back: 'Volver',
  },
  en: {
    localeName: 'EN', languageLabel: 'Español', nav: { materials: 'Materials', solutions: 'Solutions', capabilities: 'Capabilities', academia: 'Academia–Industry', quality: 'Quality', company: 'Company', resources: 'Resources', contact: 'Start a project' },
    menu: 'Menu', close: 'Close', skip: 'Skip to content', home: 'Home', explore: 'Explore', contact: 'Start a project', viewAll: 'View all', back: 'Back',
  },
}

export function itemText(item, field, locale) {
  return item[field]?.[locale] ?? item[field]
}
