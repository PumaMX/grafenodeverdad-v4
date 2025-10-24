
'use client'
export default function Home() {
  return (
    <>
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

      <section id="productos" className="py-16">
        <div className="container px-6">
          <h2 className="text-2xl font-bold mb-4">Productos y Aplicaciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="p-4 bg-white border rounded-2xl">
              <h3 className="font-semibold">Tintas conductoras y sensores</h3>
              <p className="text-sm mt-2">Formulaciones conductoras para impresión y textiles.</p>
            </article>
            <article className="p-4 bg-white border rounded-2xl">
              <h3 className="font-semibold">Masterbatchs y polímeros</h3>
              <p className="text-sm mt-2">Rellenos para mejora mecánica y conductividad.</p>
            </article>
            <article className="p-4 bg-white border rounded-2xl">
              <h3 className="font-semibold">Aditivos para concreto y asfalto</h3>
              <p className="text-sm mt-2">Mejora de propiedades mecánicas y durabilidad.</p>
            </article>
            <article className="p-4 bg-white border rounded-2xl">
              <h3 className="font-semibold">Recubrimientos antifouling</h3>
              <p className="text-sm mt-2">Protección contra adhesión biológica y corrosión.</p>
            </article>
            <article className="p-4 bg-white border rounded-2xl">
              <h3 className="font-semibold">Aplicaciones biomédicas</h3>
              <p className="text-sm mt-2">Investigación en biocompatibilidad y sensores.</p>
            </article>
            <article className="p-4 bg-white border rounded-2xl">
              <h3 className="font-semibold">Energía y almacenamiento</h3>
              <p className="text-sm mt-2">Grafeno para mejora de supercapacitores y baterías.</p>
            </article>
          </div>
        </div>
      </section>

<section id="iri" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
    {/* Columna de texto */}
    <div>
      <h2 className="text-2xl font-bold mb-4">I+R+D+I</h2>
      <p className="text-sm mt-2">
        Investigación de MXenes, MNPs/Gr/GrO (M=Au, Cu, Ag, Pt, Pd...), tinta conductora en textiles. 
        Proyectos y colaboraciones de transferencia tecnológica.
      </p>
    </div>

    {/* Columna de imagen */}
    <div className="flex justify-center">
      <img 
        src="/iri_lab.jpg" 
        alt="Laboratorio de Grafeno" 
        className="rounded-2xl shadow-md object-cover w-full h-64 md:h-80"
      />
    </div>
  </div>
</section>

      <section id="infra" className="py-16">
        <div className="container px-6">
          <h2 className="text-2xl font-bold mb-4">Infraestructura y Capacidades</h2>
          <ul className="list-disc pl-6 text-sm">
            <li>Laboratorio certificado, salas limpias.</li>
            <li>Bancos de formulación y planta piloto (hasta 200 L/semana).</li>
            <li>Equipos: Aixtron CVD, Raman confocal, TEM, AFM, INSTRON, extrusoras.</li>
          </ul>
        </div>
      </section>

      <section id="certificaciones" className="py-16 bg-white">
        <div className="container px-6">
          <h2 className="text-2xl font-bold mb-4">Certificaciones</h2>
          <p className="text-sm">Panel de certificados, protocolos y trazabilidad. (Placeholder para PDFs y fichas técnicas).</p>
        </div>
      </section>

      <section id="consultoria" className="py-16">
        <div className="container px-6">
          <h2 className="text-2xl font-bold mb-4">Consultoría y Asesoría en Nanotecnología</h2>
          <p className="text-sm">Ofrecemos consultoría técnica y asesoría estratégica en nanotecnología y ciencia de materiales, enfocada en desarrollo, escalado y validación de procesos con grafeno y materiales 2D.</p>
        </div>
      </section>

      <section id="alianzas" className="py-16 bg-white">
        <div className="container px-6">
          <h2 className="text-2xl font-bold mb-4">Alianzas Estratégicas</h2>
          <p className="text-sm">Colaboraciones con centros de investigación, universidades y empresas. (Logos y detalles en despliegue).</p>
        </div>
      </section>

      <section id="noticias" className="py-16">
        <div className="container px-6">
          <h2 className="text-2xl font-bold mb-4">Noticias Científicas</h2>
          <p className="text-sm">Últimos artículos, publicaciones y eventos.</p>
        </div>
      </section>

      <section id="quienes" className="py-16 bg-white">
        <div className="container px-6">
          <h2 className="text-2xl font-bold mb-4">Quiénes Somos</h2>
          <p className="text-sm">Empresa 100% mexicana con más de 25 años en nanotecnología, investigación y desarrollo. Filosofía y valores centrados en innovación y excelencia científica.</p>
        </div>
      </section>
    </>
  )
}
