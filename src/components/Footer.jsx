export default function Footer() {
  return (
    <footer className="mt-12 bg-white border-t">
      <div className="container px-6 py-6 text-center text-sm">
        Contacto: contacto@grafeno.mx · Tel: +52 55 0000 0000
        <div className="mt-2">&copy; {new Date().getFullYear()} Grafeno de Verdad. Todos los derechos reservados.</div>
      </div>
    </footer>
  )
}
