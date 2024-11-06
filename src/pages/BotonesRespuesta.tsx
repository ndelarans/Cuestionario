import React from 'react';

interface BotonesRespuestaProps {
    respuestas: number[]; 
    respuestaSeleccionada: number; 
    onRespuestaSeleccionada: (respuesta: number) => void;
}

const BotonesRespuesta: React.FC<BotonesRespuestaProps> = ({ respuestas, respuestaSeleccionada, onRespuestaSeleccionada }) => {
    return (
        <div className="botones-respuesta flex flex-wrap">
            {respuestas.map((respuesta) => (
                <button 
                    key={respuesta} 
                    className={`m-3 p-3 border-2 rounded-lg transition-colors duration-200 
                                ${respuestaSeleccionada === respuesta ? 'bg-red-600 text-white border-red-600' : 'bg-white text-red-600 border-red-500 hover:bg-red-500 hover:text-white'}`}
                    onClick={() => onRespuestaSeleccionada(respuesta)} 
                >
                    {respuesta}
                </button>
            ))}
        </div>
    );
};

export default BotonesRespuesta;
