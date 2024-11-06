// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link
import { FaInstagram, FaTimes } from 'react-icons/fa'; // Iconos de Instagram y X

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#00215B] text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Menú */}
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <Link to="/" className="text-white text-lg mx-2 hover:underline">
            Inicio
          </Link>
          <Link to="/encuesta" className="text-white text-lg mx-2 hover:underline">
            Encuesta
          </Link>
          <Link to="/contactanos" className="text-white text-lg mx-2 hover:underline">
            Contáctanos
          </Link>
        </div>

        {/* Iconos de X e Instagram */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white text-2xl hover:text-[#D2153D]" />
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <FaTimes className="text-white text-2xl hover:text-[#D2153D]" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-4">
        <p>&copy; {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
