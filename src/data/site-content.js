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
    slug: 'tintas-conductoras',
    code: 'SOL-INK',
    name: { es: 'Tintas conductoras', en: 'Conductive inks' },
    summary: { es: 'Formulaciones adaptadas al sustrato, método de depósito y ventana de curado.', en: 'Formulations adapted to the substrate, deposition method and curing window.' },
    outcomes: { es: ['Dispersión estable', 'Reología compatible', 'Ruta de curado definida'], en: ['Stable dispersion', 'Compatible rheology', 'Defined curing path'] },
  },
  {
    slug: 'masterbatches-polimeros',
    code: 'SOL-POLY',
    name: { es: 'Masterbatches y polímeros', en: 'Masterbatches and polymers' },
    summary: { es: 'Concentrados y compuestos para evaluar refuerzo, conductividad o gestión térmica.', en: 'Concentrates and compounds to assess reinforcement, conductivity or thermal management.' },
    outcomes: { es: ['Compatibilización', 'Dispersión en matriz', 'Validación de proceso'], en: ['Compatibilization', 'Matrix dispersion', 'Process validation'] },
  },
  {
    slug: 'concreto-asfalto',
    code: 'SOL-CIVIL',
    name: { es: 'Concreto y asfalto', en: 'Concrete and asphalt' },
    summary: { es: 'Aditivos y protocolos de mezcla para explorar desempeño mecánico y durabilidad.', en: 'Additives and mixing protocols to explore mechanical performance and durability.' },
    outcomes: { es: ['Compatibilidad con mezcla', 'Dosificación experimental', 'Plan de validación'], en: ['Mix compatibility', 'Experimental dosage', 'Validation plan'] },
  },
  {
    slug: 'recubrimientos-funcionales',
    code: 'SOL-COAT',
    name: { es: 'Recubrimientos funcionales', en: 'Functional coatings' },
    summary: { es: 'Sistemas para barrera, disipación, conductividad o protección de superficies.', en: 'Systems for barrier performance, dissipation, conductivity or surface protection.' },
    outcomes: { es: ['Selección de matriz', 'Adherencia y curado', 'Ensayo funcional'], en: ['Matrix selection', 'Adhesion and curing', 'Functional testing'] },
  },
  {
    slug: 'energia',
    code: 'SOL-ENERGY',
    name: { es: 'Energía y almacenamiento', en: 'Energy and storage' },
    summary: { es: 'Materiales de carbono y 2D para desarrollo de electrodos y componentes electroquímicos.', en: 'Carbon and 2D materials for electrode and electrochemical component development.' },
    outcomes: { es: ['Arquitectura de material', 'Integración en electrodo', 'Caracterización dirigida'], en: ['Material architecture', 'Electrode integration', 'Targeted characterization'] },
  },
  {
    slug: 'desarrollo-a-la-medida',
    code: 'SOL-CUSTOM',
    name: { es: 'Desarrollo a la medida', en: 'Custom development' },
    summary: { es: 'Un programa de co-desarrollo cuando el reto no cabe en una solución de catálogo.', en: 'A co-development program for challenges that do not fit an off-the-shelf solution.' },
    outcomes: { es: ['Hipótesis medible', 'Muestra o prototipo', 'Decisión de escalamiento'], en: ['Measurable hypothesis', 'Sample or prototype', 'Scale-up decision'] },
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
