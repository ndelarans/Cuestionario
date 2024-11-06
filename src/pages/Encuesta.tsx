import React, { useState } from 'react';
import Formulario from './Formulario';
import NivelBasico from './NivelBasico';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Usamos react-icons para los íconos

const Encuesta: React.FC = () => {
    // Estado para manejar la visibilidad de NivelBasico
    const [isNivelBasicoVisible, setNivelBasicoVisible] = useState(true);

    // Función para alternar la visibilidad
    const toggleNivelBasico = () => {
        setNivelBasicoVisible(!isNivelBasicoVisible);
    };

    return (
        <div className="encuesta p-4">
            {/* Componente Formulario */}
            <Formulario />

            {/* Título del cuestionario debajo del Formulario, con margen superior grande */}
            <h1 className="text-4xl font-bold mt-20 mb-10 text-center animate-pulse text-red-600">
                Cuestionario de Madurez Analítica
            </h1>

            {/* Sección para NivelBasico con ícono de mostrar/ocultar */}
            <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">Nivel Básico</h2>
                <button onClick={toggleNivelBasico} className="text-blue-500">
                    {isNivelBasicoVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
            
            {/* Asegurarse de que el NivelBasico esté visible en pantallas pequeñas */}
            <div className="block sm:hidden">
                {isNivelBasicoVisible && <NivelBasico />}
            </div>

            {/* Mostrar siempre el NivelBasico en pantallas grandes */}
            <div className="hidden sm:block">
                {isNivelBasicoVisible && <NivelBasico />}
            </div>
        </div>
    );
};

export default Encuesta;
