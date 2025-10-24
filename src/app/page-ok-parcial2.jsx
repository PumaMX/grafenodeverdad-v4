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
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#productos" className="px-4 py-2 border bg-white text-black rounded">Ver Productos</a>
            <a href="#iri" className="px-4 py-2 border bg-white text-black rounded">Investigación, Desarrollo e Innovación</a>
            <a href="#consultoria" className="px-4 py-2 border bg-white text-black rounded">Consultorías</a>
          </div>
        </div>
      </section> 

      {/* PRODUCTOS */}
      <section id="productos" className="py-16">
        <div className="container px-6">
          <h2 className="text-2xl font-bold mb-4">Productos y Aplicaciones</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tintas conductoras y sensores", desc: "Formulaciones conductoras para impresión y textiles." },
              { title: "Masterbatchs y polímeros", desc: "Rellenos para mejora mecánica y conductividad." },
              { title: "Aditivos para concreto y asfalto", desc: "Mejora de propiedades mecánicas y durabilidad." },
              { title: "Recubrimientos antifouling", desc: "Protección contra adhesión biológica y corrosión." },
              { title: "Aplicaciones biomédicas", desc: "Investigación en biocompatibilidad y sensores." },
              { title: "Energía y almacenamiento", desc: "Grafeno para mejora de supercapacitores y baterías." }
            ].map((item, index) => (
              <article key={index} className="p-4 bg-white border rounded-2xl shadow-sm">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm mt-2">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* I+R+D+I */}
      <section id="iri" className="py-16">
        <div className="bg-white rounded-2xl shadow-md mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">I+R+D+I</h2>
              <p className="text-sm mt-2">
                Investigación de MXenes, MNPs/Gr/GrO (M=Au, Cu, Ag, Pt, Pd...), tinta conductora en textiles. 
                Proyectos y colaboraciones de transferencia tecnológica.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/iri_lab.jpg" 
                alt="Laboratorio de Grafeno" 
                className="rounded-2xl shadow-md object-cover w-full h-64 md:h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* INFRAESTRUCTURA */}
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

      {/* CERTIFICACIONES */}
      <section id="certificaciones" className="py-16">
        <div className="bg-white rounded-2xl shadow-md mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-2xl font-bold mb-4">Certificaciones</h2>
          <p className="text-sm">Panel de certificados, protocolos y trazabilidad. (Placeholder para PDFs y fichas técnicas).</p>
        </div>
      </section>

      {/* CONSULTORÍA */}
      <section id="consultoria" className="py-16">
        <div className="bg-white rounded-2xl shadow-md mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-2xl font-bold mb-4">Consultoría y Asesoría en Nanotecnología</h2>
          <p className="text-sm">
            Ofrecemos consultoría técnica y asesoría estratégica en nanotecnología y ciencia de materiales, 
            enfocada en desarrollo, escalado y validación de procesos con grafeno y materiales 2D.
          </p>
        </div>
      </section>

      {/* ALIANZAS */}
      <section id="alianzas" className="py-16">
        <div className="bg-white rounded-2xl shadow-md mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-2xl font-bold mb-4">Alianzas Estratégicas</h2>
          <p className="text-sm">Colaboraciones con centros de investigación, universidades y empresas. (Logos y detalles en despliegue).</p>
        </div>
      </section>

      {/* NOTICIAS */}
      <section id="noticias" className="py-16">
        <div className="bg-white rounded-2xl shadow-md mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-2xl font-bold mb-4">Noticias Científicas</h2>
          <p className="text-sm">Últimos artículos, publicaciones y eventos.</p>
        </div>
      </section>

      {/* QUIÉNES SOMOS */}
      <section id="quienes" className="py-16">
        <div className="bg-white rounded-2xl shadow-md mx-auto max-w-6xl px-6 py-10">
          <h2 className="text-2xl font-bold mb-4">Quiénes Somos</h2>
          <p className="text-sm">
            Empresa 100% mexicana con más de 25 años en nanotecnología, investigación y desarrollo. 
            Filosofía y valores centrados en innovación y excelencia científica.
          </p>
        </div>
      </section>
    </>
  )
}

