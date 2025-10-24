// src/components/Header.jsx
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-100">
      <img
        src="/logo_grafeno.png"
        alt="Logo Grafeno"
        style={{ width: "2.5in", height: "2.5in" }}
      />
      <nav>
        <ul className="flex gap-6 list-none">
          <li><a href="#inicio" className="font-bold text-gray-800">Inicio</a></li>
          <li><a href="#productos" className="font-bold text-gray-800">Productos</a></li>
          <li><a href="#contacto" className="font-bold text-gray-800">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

