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

// Register required components globally with ChartJS
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

import ComentarioIcono from '../assets/images/comentario.svg';
import ComentarioIconoEnviado from '../assets/images/comentario_enviado.svg';

const NivelAlto: React.FC = () => {
    const preguntas = [
        "¿La empresa cuenta con políticas avanzadas de gobernanza de datos que están alineadas y se actualizan regularmente con las mejores prácticas de la industria?",
        "¿Existen procesos rigurosos y automatizados para asegurar la calidad y exactitud de los datos en toda la organización?",
        "¿La gestión de datos incluye protocolos de seguridad avanzados, y los roles y accesos están definidos de manera granular y dinámica?",
        "¿Los estándares de gobernanza de datos son revisados y mejorados de forma continua para adaptarse a nuevos desafíos y regulaciones?",
        "¿La gobernanza de datos está integrada en todas las áreas de la empresa y respalda los objetivos estratégicos de manera efectiva?",
    
        "¿La empresa utiliza análisis predictivo y prescriptivo avanzado para la toma de decisiones en todas las áreas estratégicas?",
        "¿Los procesos analíticos están automatizados y permiten generar insights en tiempo real para diferentes departamentos?",
        "¿Se utilizan técnicas avanzadas de modelado y análisis de datos, incluyendo machine learning e inteligencia artificial?",
        "¿Los datos se emplean de manera proactiva para identificar y mitigar riesgos, optimizar procesos y descubrir oportunidades de negocio?",
        "¿Existe una sólida infraestructura que soporta modelos analíticos avanzados y facilita la experimentación y mejora continua de los procesos?",
    
        "¿La empresa cuenta con una infraestructura tecnológica escalable que permite manejar grandes volúmenes de datos en tiempo real?",
        "¿Existen herramientas y plataformas avanzadas que permiten la integración y acceso seguro a datos de múltiples fuentes en toda la organización?",
        "¿La infraestructura permite el uso de herramientas avanzadas de analítica y modelos de machine learning e inteligencia artificial?",
        "¿Los sistemas están diseñados para adaptarse a cambios y crecer según la demanda de datos, con mínima intervención manual?",
        "¿La empresa invierte de forma continua en nuevas tecnologías y mejoras que optimizan el procesamiento y análisis de datos?",
    
        "¿El equipo tiene un nivel avanzado de competencia en ciencia de datos, estadística y técnicas de análisis de datos?",
        "¿La empresa fomenta una cultura de aprendizaje continuo, proporcionando capacitación avanzada y certificaciones en áreas de análisis de datos y tecnología?",
        "¿Existe un equipo especializado en análisis de datos que colabora con todas las áreas de la empresa para apoyar la toma de decisiones basada en datos?",
        "¿Los empleados a todos los niveles comprenden el valor estratégico de los datos y son capaces de interpretar y aplicar insights en su trabajo diario?",
        "¿La empresa promueve la experimentación y la innovación en el análisis de datos, incentivando el desarrollo de nuevas soluciones y modelos?",
    
        "¿La empresa tiene una estrategia bien definida y alineada que prioriza el uso de datos y la analítica para alcanzar sus objetivos estratégicos?",
        "¿La alta dirección lidera y promueve activamente una cultura de toma de decisiones basada en datos en toda la organización?",
        "¿La organización está comprometida con la innovación y la transformación digital, utilizando datos como un activo central en todas las áreas?",
        "¿Existe una cultura organizacional donde cada área colabora y comparte datos para maximizar el valor de los insights?",
        "¿Los datos son vistos como un activo fundamental, y todos los colaboradores están alineados con la visión de ser una empresa orientada al análisis y manejo de datos?"
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
                                className="mt-2 bg-red-600 text-white py-2 px-4 rounded w-full md:w-1/2"
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
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    };

    return (
        <div className="nivel-alto container mx-auto p-6 bg-white shadow-lg rounded-lg">
            {renderSeccionPreguntas("Procesos de Gobernanza y Gestión", preguntas.slice(0, 5), 0)}
            {renderSeccionPreguntas("Procesos Analíticos", preguntas.slice(5, 10), 5)}
            {renderSeccionPreguntas("Infraestructura Tecnológica", preguntas.slice(10, 15), 10)}
            {renderSeccionPreguntas("Capacidades y Competencias", preguntas.slice(15, 20), 15)}
            {renderSeccionPreguntas("Estrategia y Cultura", preguntas.slice(20, 25), 20)}

            <div className="mt-6">
                <h3 className="text-xl font-bold">Promedio General: {calcularPromedioGeneral().toFixed(2)}</h3>
            </div>

            <button
                className="mt-6 bg-red-600 text-white py-2 px-4 rounded w-full md:w-1/2"
                onClick={manejarEnvioFinal}
            >
                Enviar
            </button>

            {mostrarGrafico && (
                <div className="mt-8" style={{ width: '80%', height: '500px' }}>
                    <h2 className="text-2xl font-bold text-black mb-4">Promedio de Respuestas por Sección</h2>
                    <Radar data={dataGrafico} width="100%" height="100%" />
                </div>
            )}
        </div>
    );
};

export default NivelAlto;
