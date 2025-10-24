'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="fixed w-full z-50 bg-white border-b">
      <div className="container px-6 py-4 flex items-center justify-between">
        <Link href='/' className="text-xl font-bold">Grafeno de Verdad</Link>
        <div className="hidden md:flex gap-6 items-center">
          <a href="#productos" className="text-black hover:underline">Productos</a>
          <a href="#iri" className="text-black hover:underline">I+R+D+I</a>
          <a href="#infra" className="text-black hover:underline">Infraestructura</a>
          <a href="#certificaciones" className="text-black hover:underline">Certificaciones</a>
          <a href="#consultoria" className="text-black hover:underline">Consultoría</a>
          <a href="#alianzas" className="text-black hover:underline">Alianzas</a>
          <a href="#noticias" className="text-black hover:underline">Noticias</a>
          <a href="#quienes" className="text-black hover:underline">Quiénes Somos</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu">☰</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col px-6 py-4 gap-3">
            <a href="#productos" className="text-black">Productos</a>
            <a href="#iri" className="text-black">I+R+D+I</a>
            <a href="#infra" className="text-black">Infraestructura</a>
            <a href="#certificaciones" className="text-black">Certificaciones</a>
            <a href="#consultoria" className="text-black">Consultoría</a>
            <a href="#alianzas" className="text-black">Alianzas</a>
            <a href="#noticias" className="text-black">Noticias</a>
            <a href="#quienes" className="text-black">Quiénes Somos</a>
          </div>
        </div>
      )}
    </nav>
  )
}
