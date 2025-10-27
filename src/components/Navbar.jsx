'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full h-30 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <nav className="flex items-center justify-between px-6 max-w-7xl mx-auto w-full">
        
        {/* LOGO + NOMBRE */}
        <div className="flex items-center  space-x-1">
          <img 
            src="/Logo_Gr-de-Verdad.png" 
            alt="Logo Grafeno de Verdad" 
            className="h5 w-auto"
       		style={{ width: "2.25in", height: "1.5in" }}
          />
        </div>

        {/* MENÚ */}
	<div className="flex-1 flex justify-center">
        <ul className="hidden md:flex space-x-6  text-base font-medium text-gray-700">
          <li><Link href="#hero" className="hover:text-black">Inicio</Link></li>
          <li><Link href="#productos" className="hover:text-black">Productos</Link></li>
          <li><Link href="#iri" className="hover:text-black">I+D+I</Link></li>
          <li><Link href="#consultoria" className="hover:text-black">Consultorías</Link></li>
	  <li><Link href="#servicios" className="hover:text-black">Servicios</Link></li>
          <li><Link href="#infra" className="hover:text-black">Infraestructura</Link></li>          
	  <li><Link href="#alianzas" className="hover:text-black">Alianzas</Link></li>
          <li><Link href="#noticias" className="hover:text-black">Noticias</Link></li>
          <li><Link href="#quienes" className="hover:text-black">Quiénes Somos</Link></li>
        </ul>
	</div>
      </nav>
    </header>
  )
}

