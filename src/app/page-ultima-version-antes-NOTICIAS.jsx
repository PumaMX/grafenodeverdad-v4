'use client'
import Link from "next/link";
export default function Home() {
  return (
    <>
      {/* HERO */}
<section id="hero" className="pt-40 min-h-[70vh] flex items-center justify-center">
  <div className="w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-lg grid md:grid-cols-2 gap-10 items-center px-8 py-5">
    
    {/* Columna de texto */}
    <div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Grafeno de Verdad</h1>
	<div className="prose max-w-none text-gray-700">
        <p><strong>Innovación en Grafeno y Materiales van der Walls-2D:</strong> Desarrollamos materiales basados en grafeno y sistemas bidimensionales para impulsar la próxima generación de aplicaciones en electrónica, energía Y electromovilidad, ingeniería avanzada y recubrimientos funcionales.</p>
        <p className="mb-2">
  <strong>Productos de Alto Rendimiento:</strong> Ofrecemos formulaciones, producción y caracterización de grafeno certificado de alta calidad. 
</p>
<p className="mb-2">
  <strong>Servicios Integrales de Nanotecnología:</strong> Brindamos soluciones completas que abarcan desde el desarrollo hasta la validación industrial de materiales avanzados. 
</p>
        <p><strong>Consultoría y Soluciones Estratégicas:</strong> Con más de 25 años de experiencia en investigación, desarrollo e innovación, nuestro equipo ofrece consultoría especializada en nanotecnología y ciencia de materiales avanzados. Brindamos soluciones personalizadas que impulsan la innovación, optimizan procesos y fortalecen la competitividad industrial.</p>
      </div>
      <div className="mt-6 flex flex-wrap gap-4">
        <a href="#iri" className="px-4 py-2 border bg-gray-100 hover:bg-gray-200 text-black rounded">Investigación + Desarrollo + Innovación</a>
                <a href="#productos" className="px-4 py-2 border bg-gray-100 hover:bg-gray-200 text-black rounded">Ver Productos</a>
        <a href="#servicios" className="px-4 py-2 border bg-gray-100 hover:bg-gray-200 text-black rounded">Ver Servicios</a>
	<a href="#consultoria" className="px-4 py-2 border bg-gray-100 hover:bg-gray-200 text-black rounded">Consultorías en Nanotecnología</a>
      </div>
    </div>

    {/* Carrusel de imágenes */}
    <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-md">
      <div className="carousel">
        <div className="absolute inset-0 animate-slide">
          <img src="/grafeno1.jpg" alt="Grafeno muestra 1" className="object-cover w-full h-full rounded-2xl" />
        </div>
        <div className="absolute inset-0 animate-slide delay-[5s]">
          <img src="/grafeno2.jpg" alt="Grafeno muestra 2" className="object-cover w-full h-full rounded-2xl" />
        </div>
        <div className="absolute inset-0 animate-slide delay-[10s]">
          <img src="/grafeno3.jpg" alt="Grafeno muestra 3" className="object-cover w-full h-full rounded-2xl" />
        </div>
      </div>
    </div>

  </div>
</section>


<div className="min-h-screen grid grid-cols-4">
  {/* Columna izquierda: menú / contenido principal */}
  <div className="col-span-3 bg-gray-100 p-4">
    Menú / Logo
  </div>

  {/* Columna derecha: Noticias Científicas */}
  <div className="col-span-1 relative pt-40">
    <div className="fixed  top-[64px] right-4 h-[65vh] w-3/4 max-w-sm bg-white border rounded-xl p-4 overflow-y-auto shadow-lg z-50">
      <h2 className="text-xl font-semibold mb-2">Noticias desde la Nanotecnología</h2>
      <p className="text-sm mb-4">
        Últimos artículos, publicaciones y eventos sobre ciencia y tecnología del grafeno.
      </p>
      <ul className="space-y-3">
        <li>Artículo 1: novedades sobre grafeno</li>
        <li>Artículo 2: publicación reciente</li>
        <li>Evento 1: congreso de nanotecnología</li>
      </ul>
    </div>
  </div>
</div>



{/* PRODUCTOS */}
<section id="productos" className="py-5 bg-white rounded-2xl mx-auto max-w-6xl shadow-md">
  <h2 className="text-2xl font-bold mb-4 text-center">    Productos y Aplicaciones</h2>
<p className="pl-7 mb-2">
Ofrecemos formulaciones, producción y caracterización de grafeno certificado de alta calidad.
</p>
<p className="pl-7 mb-2">
Disponemos de: 
</p>
<div className="h-2" /> {/* espacio vertical de 1rem ≈ 16px */}
<ul className="list-disc list-inside pl-10 space-y-1 text-gray-700 mb-4">
  <li>
    <strong>Grafeno CVD</strong> monocapa y multicapa, prístino o dopado con nitrógeno, en distintos sustratos (Cu, Ni, Si/SiO₂, PMMA, entre otros).
  </li>
  <li>
    <strong>Grafeno exfoliado</strong> en hojuelas de pocas capas.
  </li>
  <li>
    <strong>Óxido de grafeno</strong> y <strong>óxido de grafeno reducido</strong>.
  </li>
  <li>
    <strong>Formulaciones versátiles</strong> en polvo, dispersiones acuosas o en solventes, y pasta con humedad controlada (20–50 %).
  </li>
</ul>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
  <Link href="/productos/tintas" className="block p-4 bg-white border rounded-2xl shadow hover:shadow-md">      
	<h3 className="font-semibold">Tintas conductoras</h3>
      <p className="text-sm mt-2">
        Formulaciones conductoras listas para integración en proyectos de sensores, electrónica y textiles.
      </p>
	</Link>


    <article className="p-4 bg-white border rounded-2xl shadow-sm">
      <h3 className="font-semibold">Masterbatchs y polímeros</h3>
      <p className="text-sm mt-2">
        Soluciones de grafeno integradas en polímeros para aplicaciones industriales, mejorando propiedades mecánicas y funcionales.
      </p>
    </article>

    <article className="p-4 bg-white border rounded-2xl shadow-sm">
      <h3 className="font-semibold">Aditivos para concreto y asfalto</h3>
      <p className="text-sm mt-2">
        Materiales 2D que aumentan la durabilidad, resistencia y conductividad de mezclas de construcción.
      </p>
    </article>

    <article className="p-4 bg-white border rounded-2xl shadow-sm">
      <h3 className="font-semibold">Recubrimientos antifouling</h3>
      <p className="text-sm mt-2">
        Recubrimientos de alta tecnología que protegen superficies de bioincrustación y desgaste industrial.
      </p>
    </article>

    <article className="p-4 bg-white border rounded-2xl shadow-sm">
      <h3 className="font-semibold">Aplicaciones biomédicas</h3>
      <p className="text-sm mt-2">
        Grafeno funcionalizado para sensores, plataformas de diagnóstico y estudios de interacción celular.
      </p>
    </article>

    <article className="p-4 bg-white border rounded-2xl shadow-sm">
      <h3 className="font-semibold">Energía y almacenamiento</h3>
      <p className="text-sm mt-2">
        Materiales avanzados para baterías, supercondensadores y dispositivos de almacenamiento de energía de última generación.
      </p>
    </article>
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
            <h2 className="text-2xl font-bold mb-4">Investigación + Desarrollo + Innovación</h2>
            <p className="text-sm">
              <strong>Innovación en Grafeno y Materiales van der Walls-2D</strong>
		</p>
    <div className="h-4" /> {/* espacio vertical de 1rem ≈ 16px */}
		<p className="text-sm">
 Desarrollamos materiales basados en grafeno y sistemas bidimensionales para impulsar la próxima generación de aplicaciones en electrónica, energía Y electromovilidad, ingeniería avanzada y recubrimientos funcionales. Investigación de MXenes, MNPs/Gr/GrO (M=Au, Cu, Ag, Pt, Pd...), tinta conductora en textiles. 
              Proyectos y colaboraciones de transferencia tecnológica. {/* hacer una lista con bullets de estos dos renglones */}
            </p>
          </div>
        </div>
      </section>

      {/* CONSULTORÍA (imagen derecha) */}
      <section id="consultoria" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl shadow-md mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">Consultoría y Soluciones Estratégicas</h2>
            <p className="text-sm">
                Con más de 25 años de experiencia en investigación y  desarrollo, nuestro equipo ofrece consultoría especializada en nanotecnología y ciencia de materiales avanzados. Brindamos soluciones personalizadas que impulsan la innovación, optimizan procesos y fortalecen la competitividad industrial.
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

      {/* CERTIFICACIONES (imagen izquierda) */}
      <section id="servicios" className="py-16 bg-white rounded-2xl mx-auto max-w-6xl shadow-md mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6">
          <div className="flex justify-center order-1 md:order-1">
            <img
              src="/certificados.jpg"
              alt="Certificaciones"
              className="rounded-2xl shadow-md object-cover w-full h-72"
            />
          </div>
          <div className="order-2 md:order-2">
            <h2 className="text-2xl font-bold mb-4">Servicios & Certificaciones</h2>
            <p className="text-sm">Brindamos soluciones completas que abarcan desde el desarrollo hasta la validación industrial de materiales avanzados.
        </p>
        <div className="h-4" /> {/* espacio vertical de 1rem ≈ 16px */}
        <p className="text-sm">Nuestros servicios incluyen:
        </p>
<ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
  <li>
    <strong>Desarrollo de formulaciones</strong> y optimización de materiales 2D.
  </li>
  <li>
    <strong>Escalado industrial</strong> y control de procesos.
  </li>
  <li>
    <strong>Certificación y pruebas estandarizadas</strong>, incluyendo Raman, UV–Vis, SEM, HRTEM, TEM, AFM, XPS y TGA.
  </li>
  <li>
    <strong>Integración tecnológica</strong> de nuestros materiales en procesos y productos específicos de cada proyecto.
  </li>
<li>
                <strong>Caracterizaciones certificadas</strong>, estandares de calidad en protocolos y trazabilidad de lotes.
</li>
</ul>
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
            <p className="text-sm"><strong>En Grafeno de Verdad valoramos profundamente la colaboración con la academia y la industria:</strong> nuestras alianzas con universidades, centros de investigación y empresas brindan a jóvenes talentos la oportunidad de aprender, innovar y experimentar de primera mano en nuestras instalaciones, fortaleciendo la formación y el futuro de la ciencia en México y el mundo.</p>

<p className="text-sm"><strong>Además, trabajamos de la mano con el Gobierno de México</strong> en proyectos estratégicos que impulsan la innovación y el desarrollo tecnológico a nivel nacional. Nuestras colaboraciones con industrias de diversos sectores permiten trasladar la ciencia de vanguardia a aplicaciones reales, generando impacto tangible en la sociedad y fortaleciendo el ecosistema de materiales avanzados en el país.</p>
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

