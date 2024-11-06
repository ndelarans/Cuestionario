// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg'; // Importa el logo

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-6 px-4 flex flex-col md:flex-row justify-between items-center"> {/* Cambia a flex-col en pantallas pequeñas */}
      <div className="flex items-center justify-center md:ml-48"> {/* Justifica al centro en pantallas pequeñas */}
        <Link to="/"> {/* Enlace a la página de inicio */}
          <img src={logo} alt="Logo" className="h-8 cursor-pointer" /> {/* Agrega un cursor de puntero */}
        </Link>
      </div>
      <nav className="flex-grow text-center space-x-4 text-[#00215B] font-medium mt-4 md:mt-0 md:flex md:justify-center md:ml-96"> {/* Alinea y ajusta el margen en pantallas pequeñas */}
        <Link to="/" className="mr-4">Inicio</Link>
        <Link to="/encuesta" className="mr-4">Encuesta</Link>
        <Link to="/contacto">Contactanos</Link>
      </nav>
    </header>
  );
};

export default Header;
