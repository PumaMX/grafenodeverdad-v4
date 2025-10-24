'use client'
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="hero" className="min-h-[70vh] flex items-center">
        <div className="container px-6 py-20">
          <h1 className="text-4xl font-extrabold mb-4">Grafeno de Verdad</h1>
          <div className="prose max-w-none text-black">
            <p><strong>Formulación, producción y caracterización:</strong> Grafeno CVD pristino y dopado con nitrógeno; exfoliado en hojuelas de pocas capas (FGr); óxido de grafeno (GO) y reducido (rGO), para aplicaciones en desarrollos de frontera y aplicaciones industriales diversas (masterbatchs, fillers y aditivos para concreto y asfalto, tintas, sensores, recubrimientos antifouling).</p>
            <p><strong>Productos:</strong> Monocapas y multicapas de grafeno pristino y dopado con nitrógeno en diversos sustratos (Cu, Ni, Si/SiO2, PMMA, etc); formulaciones en polvo; dispersiones en agua, solventes o mixtas; en pasta (20%-50% humedad).</p>
            <p><strong>Servicios:</strong> Desarrollo de formulaciones, escalado, certificación y pruebas estandarizadas (Raman, TEM, AFM, XPS), integración industrial.</p>
            <p><strong>Consultoría & Soluciones:</strong> Consultoría y soluciones desde la Nanotecnología y la Ciencia de Materiales.</p>
          </div>
          <div className="mt-6 flex gap-4">
            <a href="#productos" className="px-4 py-2 border bg-white text-black rounded">Ver Productos</a>
            <a href="#Proyectos" className="px-4 py-2 border bg-white text-black rounded">iInvestigación, Desarrollo e Innovación</a>
            <a href="#Consultoría" className="px-4 py-2 border bg-white text-black rounded">Consultorías</a>
          </div>
        </div>
      </section> 

      {/* PRODUCTOS */}
      <section id="productos" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl shadow-md mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          {/* Texto */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Productos y Aplicaciones</h2>
            <ul className="list-disc pl-6 text-sm">
              <li>Tintas conductoras y sensores.</li>
              <li>Masterbatchs y polímeros.</li>
              <li>Aditivos para concreto y asfalto.</li>
              <li>Recubrimientos antifouling.</li>
              <li>Aplicaciones biomédicas.</li>
              <li>Energía y almacenamiento.</li>
            </ul>
          </div>
          {/* Imagen */}
          <div className="flex justify-center">
            <img 
              src="/productos_lab.jpg" 
              alt="Productos de Grafeno" 
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      {/* I+D+I (imagen izquierda) */}
      <section id="iri" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl shadow-md mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          {/* Imagen */}
          <div className="flex justify-center order-1 md:order-1">
            <img 
              src="/iri_lab.jpg" 
              alt="Laboratorio de Grafeno" 
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
          {/* Texto */}
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">I+D+I</h2>
            <p className="text-sm">
              Investigación de MXenes, MNPs/Gr/GrO (M=Au, Cu, Ag, Pt, Pd...), tinta conductora en textiles. 
              Proyectos y colaboraciones de transferencia tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* INFRA (imagen derecha) */}
      <section id="infra" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl shadow-md mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Infraestructura y Capacidades</h2>
            <ul className="list-disc pl-6 text-sm">
              <li>Laboratorio certificado, salas limpias.</li>
              <li>Bancos de formulación y planta piloto (hasta 200 L/semana).</li>
              <li>Equipos: Aixtron CVD, Raman confocal, TEM, AFM, INSTRON, extrusoras.</li>
            </ul>
          </div>
          <div className="flex justify-center">
            <img 
              src="/infra_lab.jpg" 
              alt="Infraestructura" 
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      {/* CERTIFICACIONES (imagen izquierda) */}
      <section id="certificaciones" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl shadow-md mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div className="flex justify-center order-1 md:order-1">
            <img 
              src="/certificados.jpg" 
              alt="Certificaciones" 
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Certificaciones</h2>
            <p className="text-sm">Panel de certificados, protocolos y trazabilidad. (Placeholder para PDFs y fichas técnicas).</p>
          </div>
        </div>
      </section>

      {/* CONSULTORÍA (imagen derecha) */}
      <section id="consultoria" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl shadow-md mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Consultoría y Asesoría</h2>
            <p className="text-sm">
              Ofrecemos consultoría técnica y asesoría estratégica en nanotecnología y ciencia de materiales, 
              enfocada en desarrollo, escalado y validación de procesos con grafeno y materiales 2D.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/consultoria.jpg" 
              alt="Consultoría" 
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      {/* ALIANZAS (imagen izquierda) */}
      <section id="alianzas" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl shadow-md mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div className="flex justify-center order-1 md:order-1">
            <img 
              src="/alianzas.jpg" 
              alt="Alianzas estratégicas" 
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Alianzas Estratégicas</h2>
            <p className="text-sm">Colaboraciones con centros de investigación, universidades y empresas. (Logos y detalles en despliegue).</p>
          </div>
        </div>
      </section>

      {/* NOTICIAS (imagen derecha) */}
      <section id="noticias" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl shadow-md mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Noticias Científicas</h2>
            <p className="text-sm">Últimos artículos, publicaciones y eventos sobre ciencia y tecnología del grafeno.</p>
          </div>
          <div className="flex justify-center">
            <img 
              src="/noticias.jpg" 
              alt="Noticias científicas" 
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS (imagen izquierda) */}
      <section id="quienes" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl shadow-md mt-12 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div className="flex justify-center order-1 md:order-1">
            <img 
              src="/quienes.jpg" 
              alt="Equipo Grafeno de Verdad" 
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Quiénes Somos</h2>
            <p className="text-sm">
              Empresa 100% mexicana con más de 25 años en nanotecnología, investigación y desarrollo. 
              Filosofía y valores centrados en innovación, sostenibilidad y excelencia científica.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

