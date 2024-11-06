import React from 'react';

interface PreguntaProps {
    texto: string;
}

const Pregunta: React.FC<PreguntaProps> = ({ texto }) => {
    return (
        <div className="pregunta">
            <h2 className="text-xl font-bold">{texto}</h2>
        </div>
    );
};

export default Pregunta;
