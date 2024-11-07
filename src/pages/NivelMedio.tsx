import React, { useState } from 'react';
import BotonesRespuesta from './BotonesRespuesta';
import { Radar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from 'chart.js';

// Registrar los componentes requeridos en ChartJS
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

import ComentarioIcono from '../assets/images/comentario.svg';
import ComentarioIconoEnviado from '../assets/images/comentario_enviado.svg';

const NivelMedio: React.FC = () => {
    const preguntas = [
        "¿Existen políticas y procedimientos claros de gobernanza de datos que guían el manejo de datos en la empresa?",
        "¿La empresa realiza controles regulares para asegurar la calidad y consistencia de los datos?",
        "¿Se asignan responsables específicos para supervisar el cumplimiento de las políticas de datos?",
        "¿Hay procesos establecidos para la gestión de acceso y seguridad de los datos en distintos niveles?",
        "¿La gobernanza de datos está alineada con los objetivos estratégicos de la empresa?",
    
        "¿La empresa utiliza datos de manera consistente para realizar análisis descriptivos y algunos análisis predictivos?",
        "¿Se generan reportes periódicos que ayudan a detectar patrones o tendencias en los datos?",
        "¿Existen procedimientos estructurados para la recopilación, limpieza y análisis de datos?",
        "¿La empresa utiliza herramientas que permiten realizar análisis automatizados de datos?",
        "¿Los análisis de datos se emplean para optimizar ciertos procesos o decisiones clave en la organización?",
    
        "¿La infraestructura tecnológica permite almacenar y procesar datos de manera eficiente para el volumen actual de la empresa?",
        "¿Existen sistemas que permiten a distintos departamentos compartir y acceder a datos cuando es necesario?",
        "¿La empresa cuenta con herramientas analíticas básicas y avanzadas, aunque limitadas en algunos aspectos?",
        "¿La infraestructura es suficiente para soportar reportes automatizados y almacenamiento de grandes volúmenes de datos?",
        "¿La tecnología de la empresa se actualiza periódicamente para mejorar la capacidad de análisis de datos?",
    
        "¿El personal cuenta con habilidades intermedias en análisis de datos y uso de herramientas de análisis?",
        "¿Se ofrecen programas de capacitación para mejorar las competencias analíticas y técnicas del personal?",
        "¿Hay un equipo de personas con conocimientos específicos en análisis de datos y modelado básico?",
        "¿Los empleados tienen conocimientos básicos sobre cómo interpretar y utilizar los datos en sus tareas diarias?",
        "¿La empresa fomenta el desarrollo de habilidades en análisis y manejo de datos entre su personal?",
    
        "¿La analítica y el uso de datos están integrados en las decisiones estratégicas de varias áreas de la empresa?",
        "¿Existe una cultura organizacional que incentiva el uso de datos para justificar decisiones?",
        "¿La alta dirección reconoce y promueve el valor de los datos y la analítica en la empresa?",
        "¿Hay una estrategia clara para aumentar el uso de datos y análisis en la toma de decisiones a lo largo de la organización?",
        "¿Se fomenta la colaboración entre departamentos para mejorar el uso y análisis de datos?"
    ];
    

    const secciones = [
        "Procesos de Gobernanza y Gestión",
        "Procesos Analíticos",
        "Infraestructura Tecnológica",
        "Capacidades y Competencias",
        "Estrategia y Cultura"
    ];

    const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState<number[]>(Array(preguntas.length).fill(0));
    const [comentarios, setComentarios] = useState<string[]>(Array(preguntas.length).fill(''));
    const [cuadroComentarioAbierto, setCuadroComentarioAbierto] = useState<boolean[]>(Array(preguntas.length).fill(false));
    const [iconoComentarioColor, setIconoComentarioColor] = useState<boolean[]>(Array(preguntas.length).fill(false));
    const [mostrarGrafico, setMostrarGrafico] = useState(false);

    const manejarRespuestaSeleccionada = (index: number, respuesta: number) => {
        const nuevasRespuestas = [...respuestasSeleccionadas];
        nuevasRespuestas[index] = respuesta;
        setRespuestasSeleccionadas(nuevasRespuestas);
    };

    const manejarComentarioAbierto = (index: number) => {
        const nuevoEstado = [...cuadroComentarioAbierto];
        nuevoEstado[index] = !nuevoEstado[index];
        setCuadroComentarioAbierto(nuevoEstado);
    };

    const manejarComentarioCambio = (index: number, comentario: string) => {
        const nuevosComentarios = [...comentarios];
        nuevosComentarios[index] = comentario;
        setComentarios(nuevosComentarios);
    };

    const manejarComentarioEnviar = (index: number) => {
        const nuevosIconos = [...iconoComentarioColor];
        nuevosIconos[index] = true;
        setIconoComentarioColor(nuevosIconos);
        manejarComentarioAbierto(index);
    };

    const calcularPromedioPorSeccion = (inicio: number, fin: number) => {
        const respuestasSeccion = respuestasSeleccionadas.slice(inicio, fin);
        const total = respuestasSeccion.reduce((acc, val) => acc + val, 0);
        return total / respuestasSeccion.length || 0;
    };

    const renderSeccionPreguntas = (titulo: string, preguntasSeccion: string[], offset: number) => (
        <div>
            <h2 className="text-2xl mb-6 font-bold text-black">{titulo}</h2>
            {preguntasSeccion.map((pregunta, index) => (
                <div key={index + offset} className="pregunta mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                        Pregunta {index + offset + 1}: {pregunta}
                        <img
                            src={iconoComentarioColor[index + offset] ? ComentarioIconoEnviado : ComentarioIcono}
                            alt="Comentario"
                            onClick={() => manejarComentarioAbierto(index + offset)}
                            className="h-5 w-5 ml-2 cursor-pointer"
                        />
                    </h3>
                    <BotonesRespuesta
                        respuestas={[1, 2, 3, 4, 5]}
                        respuestaSeleccionada={respuestasSeleccionadas[index + offset]}
                        onRespuestaSeleccionada={(respuesta) => manejarRespuestaSeleccionada(index + offset, respuesta)}
                    />
                    {cuadroComentarioAbierto[index + offset] && (
                        <div className="mt-4 flex flex-col items-center md:items-start">
                            <textarea
                                className="border p-2 w-full md:w-1/2"
                                placeholder="Escribe tu comentario aquí..."
                                value={comentarios[index + offset]}
                                onChange={(e) => manejarComentarioCambio(index + offset, e.target.value)}
                            />
                            <button
                                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded w-full md:w-1/2"
                                onClick={() => manejarComentarioEnviar(index + offset)}
                            >
                                Enviar
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );

    const manejarEnvioFinal = () => {
        setMostrarGrafico(true);
    };

    // Función para calcular el promedio general
    const calcularPromedioGeneral = () => {
        const totalRespuestas = [
            calcularPromedioPorSeccion(0, 5),
            calcularPromedioPorSeccion(5, 10),
            calcularPromedioPorSeccion(10, 15),
            calcularPromedioPorSeccion(15, 20),
            calcularPromedioPorSeccion(20, 25)
        ];

        const suma = totalRespuestas.reduce((acumulado, actual) => acumulado + actual, 0);
        return suma / totalRespuestas.length;
    };

    const dataGrafico = {
        labels: secciones,
        datasets: [
            {
                label: 'Promedio por Sección',
                data: [
                    calcularPromedioPorSeccion(0, 5),
                    calcularPromedioPorSeccion(5, 10),
                    calcularPromedioPorSeccion(10, 15),
                    calcularPromedioPorSeccion(15, 20),
                    calcularPromedioPorSeccion(20, 25)
                ],
                backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color actualizado
                borderColor: 'rgba(54, 162, 235, 1)', // Color actualizado
                borderWidth: 1
            }
        ]
    };

    return (
        <div className="nivel-basico container mx-auto p-6 bg-white shadow-lg rounded-lg">
            {renderSeccionPreguntas("Procesos de Gobernanza y Gestión", preguntas.slice(0, 5), 0)}
            {renderSeccionPreguntas("Procesos Analíticos", preguntas.slice(5, 10), 5)}
            {renderSeccionPreguntas("Infraestructura Tecnológica", preguntas.slice(10, 15), 10)}
            {renderSeccionPreguntas("Capacidades y Competencias", preguntas.slice(15, 20), 15)}
            {renderSeccionPreguntas("Estrategia y Cultura", preguntas.slice(20, 25), 20)}

            <div className="mt-6">
    <h2 className="text-xl font-bold">Promedio General: {calcularPromedioGeneral().toFixed(2)}</h2>
    <button
        className="mt-6 bg-[#00215B] text-white py-2 px-4 rounded w-full md:w-1/2"
        onClick={manejarEnvioFinal}
    >
        Enviar
    </button>
</div>


            {mostrarGrafico && (
                <div className="mt-8" style={{ width: '80%', height: '500px' }}>
                    <h2 className="text-2xl font-bold text-black mb-4">Promedio de Respuestas por Sección</h2>
                    <Radar data={dataGrafico} width="100%" height="100%" />
                </div>
            )}
        </div>
    );
};

export default NivelMedio;
