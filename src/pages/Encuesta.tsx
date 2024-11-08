import React, { useState } from 'react';
import Formulario from './Formulario';
import NivelBasico from './NivelBasico';
import NivelMedio from './NivelMedio';
import NivelAlto from './NivelAlto';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Footer from './Footer';

const Encuesta: React.FC = () => {
    const [isNivelBasicoVisible, setNivelBasicoVisible] = useState(true);
    const [isNivelMedioVisible, setNivelMedioVisible] = useState(false); // Initially hidden until unlocked
    const [isNivelAltoVisible, setNivelAltoVisible] = useState(false);   // Initially hidden until unlocked

    const [passedNivelBasico, setPassedNivelBasico] = useState(false);
    const [passedNivelMedio, setPassedNivelMedio] = useState(false);

    const [nivelBasicoMessage, setNivelBasicoMessage] = useState('');
    const [nivelMedioMessage, setNivelMedioMessage] = useState('');

    const toggleNivelBasico = () => {
        setNivelBasicoVisible(!isNivelBasicoVisible);
    };

    const toggleNivelMedio = () => {
        setNivelMedioVisible(!isNivelMedioVisible);
    };

    const toggleNivelAlto = () => {
        setNivelAltoVisible(!isNivelAltoVisible);
    };

    const handlePassNivelBasico = (passed: boolean) => {
        setNivelBasicoMessage(''); // Reset message
        if (passed) {
            setPassedNivelBasico(true);
            setNivelMedioVisible(true);
        } else {
            setPassedNivelBasico(false);
            setNivelMedioVisible(false); // Lock Nivel Medio if No is selected
            setNivelBasicoMessage('Necesitas un promedio de 4 para continuar con la encuesta de Nivel Medio.');
        }
    };

    const handlePassNivelMedio = (passed: boolean) => {
        setNivelMedioMessage(''); // Reset message
        if (passed) {
            setPassedNivelMedio(true);
            setNivelAltoVisible(true);
        } else {
            setPassedNivelMedio(false);
            setNivelAltoVisible(false); // Lock Nivel Alto if No is selected
            setNivelMedioMessage('Necesitas un promedio de 4 para continuar con la encuesta de Nivel Alto.');
        }
    };

    return (
        <div className="encuesta p-4">
            <Formulario />

            <h1 className="text-4xl font-bold mt-20 mb-10 text-center animate-pulse text-red-600">
                Cuestionario de Madurez Analítica
            </h1>

            {/* Nivel Básico Section */}
            <div className="flex items-center gap-2 mb-6">
                <h2 className="text-xl font-semibold">Nivel Básico</h2>
                <button onClick={toggleNivelBasico} className="text-blue-500">
                    {isNivelBasicoVisible ? <FaEyeSlash /> : <FaEye />}
                </button>
            </div>
            {isNivelBasicoVisible && <NivelBasico />}

            {/* Question to unlock Nivel Medio */}
            {isNivelBasicoVisible && (
                <div className="flex gap-2 mt-4">
                    <p>¿Obtuvo más de 4 en promedio general en el Nivel Básico?</p>
                    <button onClick={() => handlePassNivelBasico(true)} className="bg-blue-500 text-white px-2 py-1 rounded">Sí</button>
                    <button onClick={() => handlePassNivelBasico(false)} className="bg-red-500 text-white px-2 py-1 rounded">No</button>
                </div>
            )}
            {/* Message if "No" is selected for Nivel Básico */}
            {nivelBasicoMessage && <p className="text-red-500 mt-2">{nivelBasicoMessage}</p>}

            {/* Nivel Medio Section */}
            {passedNivelBasico && (
                <>
                    <div className="flex items-center gap-2 mt-10 mb-6">
                        <h2 className="text-xl font-semibold">Nivel Medio</h2>
                        <button onClick={toggleNivelMedio} className="text-blue-500">
                            {isNivelMedioVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {isNivelMedioVisible && <NivelMedio />}

                    {/* Question to unlock Nivel Alto */}
                    {isNivelMedioVisible && (
                        <div className="flex gap-2 mt-4">
                            <p>¿Obtuvo más de 4 en promedio general en el Nivel Medio?</p>
                            <button onClick={() => handlePassNivelMedio(true)} className="bg-blue-500 text-white px-2 py-1 rounded">Sí</button>
                            <button onClick={() => handlePassNivelMedio(false)} className="bg-red-500 text-white px-2 py-1 rounded">No</button>
                        </div>
                    )}
                    {/* Message if "No" is selected for Nivel Medio */}
                    {nivelMedioMessage && <p className="text-red-500 mt-2">{nivelMedioMessage}</p>}
                </>
            )}

            {/* Nivel Alto Section */}
            {passedNivelMedio && (
                <>
                    <div className="flex items-center gap-2 mt-10 mb-6">
                        <h2 className="text-xl font-semibold">Nivel Alto</h2>
                        <button onClick={toggleNivelAlto} className="text-blue-500">
                            {isNivelAltoVisible ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {isNivelAltoVisible && <NivelAlto />}
                </>
            )}

            <Footer />
        </div>
    );
};

export default Encuesta;
