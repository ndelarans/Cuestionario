import React, { useState } from 'react';
import Formulario from './Formulario';
import NivelBasico from './NivelBasico';
import NivelMedio from './NivelMedio';
import NivelAlto from './NivelAlto';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Footer from './Footer';  // Importa el componente Footer

const Encuesta: React.FC = () => {
    const [isNivelBasicoVisible, setNivelBasicoVisible] = useState(true);
    const [isNivelMedioVisible, setNivelMedioVisible] = useState(true);
    const [isNivelAltoVisible, setNivelAltoVisible] = useState(true); 

    const toggleNivelBasico = () => {
        setNivelBasicoVisible(!isNivelBasicoVisible);
    };

    const toggleNivelMedio = () => {
        setNivelMedioVisible(!isNivelMedioVisible);
    };

    const toggleNivelAlto = () => {
        setNivelAltoVisible(!isNivelAltoVisible);
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
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-semibold">Nivel Básico</h2>
                <button onClick={toggleNivelBasico} className="text-blue-500">
                    {isNivelBasicoVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>

            {/* Mostrar NivelBasico en función de la visibilidad */}
            {isNivelBasicoVisible && <NivelBasico />}

            {/* Sección para NivelMedio con ícono de mostrar/ocultar */}
            <div className="flex items-center gap-2 mt-10 mb-6">
                <h2 className="text-xl font-semibold">Nivel Medio</h2>
                <button onClick={toggleNivelMedio} className="text-blue-500">
                    {isNivelMedioVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>

            {/* Mostrar NivelMedio en función de la visibilidad */}
            {isNivelMedioVisible && <NivelMedio />}

            {/* Sección para NivelAlto con ícono de mostrar/ocultar */}
            <div className="flex items-center gap-2 mt-10 mb-6">
                <h2 className="text-xl font-semibold">Nivel Alto</h2>
                <button onClick={toggleNivelAlto} className="text-blue-500">
                    {isNivelAltoVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>

            {/* Mostrar NivelAlto en función de la visibilidad */}
            {isNivelAltoVisible && <NivelAlto />}

            {/* Agregar Footer debajo del contenido */}
            <Footer />
        </div>
    );
};

export default Encuesta;
