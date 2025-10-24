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
              <p><strong>Innovación en Grafeno y Materiales van der Walls-2D:</strong> Desarrollamos materiales basados en grafeno y sistemas bidimensionales para impulsar la próxima generación de aplicaciones en electrónica, energía y electromovilidad, ingeniería avanzada y recubrimientos funcionales.</p>
              <p className="mb-2"><strong>Productos de Alto Rendimiento:</strong> Ofrecemos formulaciones, producción y caracterización de grafeno certificado de alta calidad.</p>
              <p className="mb-2"><strong>Servicios Integrales de Nanotecnología:</strong> Brindamos soluciones completas que abarcan desde el desarrollo hasta la validación industrial de materiales avanzados.</p>
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

      {/* MAIN GRID */}
      <div className="min-h-screen grid grid-cols-4 relative">
        {/* Columna izquierda: contenido principal */}
        <div className="col-span-3 bg-gray-100 p-4">
          {/* TODO tu contenido previo del page.jsx aquí, excepto la sección de noticias */}
          Menú / Logo
          {/* PRODUCTOS */}
          <section id="productos" className="py-5 bg-white rounded-2xl mx-auto max-w-6xl shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-center">Productos y Aplicaciones</h2>
            <p className="pl-7 mb-2">Ofrecemos formulaciones, producción y caracterización de grafeno certificado de alta calidad.</p>
            <p className="pl-7 mb-2">Disponemos de:</p>
            <div className="h-2" />
            <ul className="list-disc list-inside pl-10 space-y-1 text-gray-700 mb-4">
              <li><strong>Grafeno CVD</strong> monocapa y multicapa, prístino o dopado...</li>
              <li><strong>Grafeno exfoliado</strong> en hojuelas de pocas capas.</li>
              <li><strong>Óxido de grafeno</strong> y <strong>óxido de grafeno reducido</strong>.</li>
              <li><strong>Formulaciones versátiles</strong> en polvo, dispersiones acuosas o en solventes, y pasta con humedad controlada (20–50 %).</li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
              <Link href="/productos/tintas" className="block p-4 bg-white border rounded-2xl shadow hover:shadow-md">
                <h3 className="font-semibold">Tintas conductoras</h3>
                <p className="text-sm mt-2">Formulaciones conductoras listas para integración en proyectos de sensores, electrónica y textiles.</p>
              </Link>
              <article className="p-4 bg-white border rounded-2xl shadow-sm">
                <h3 className="font-semibold">Masterbatchs y polímeros</h3>
                <p className="text-sm mt-2">Soluciones de grafeno integradas en polímeros para aplicaciones industriales...</p>
              </article>
              {/* Resto de productos... */}
            </div>
          </section>

          {/* I+D+I, CONSULTORÍA, SERVICIOS, INFRA, ALIANZAS, QUIÉNES SOMOS */}
          {/* Copiar aquí todo tu contenido previo sin incluir la sección de noticias */}
        </div>

        {/* Columna derecha vacía para spacing */}
        <div className="col-span-1"></div>
      </div>

      {/* NOTICIAS CIENTÍFICAS: Fija a la derecha */}
      <div className="fixed top-[64px] right-4 h-[65vh] w-3/4 max-w-sm bg-white border rounded-xl p-4 overflow-y-auto shadow-lg z-50
                      md:static md:w-full md:mt-4">
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
    </>
  )
}

