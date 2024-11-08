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


const NivelBasico: React.FC = () => {
    const preguntas = [
        // Procesos de Gobernanza y Gestión
        "¿Existe una política formal de gobernanza de datos en la empresa?",
        "¿Los datos se manejan con prácticas estandarizadas y consistentes?",
        "¿La empresa cuenta con medidas básicas para asegurar la privacidad y seguridad de los datos?",
        "¿Hay roles y responsabilidades claros para la gestión de los datos?",
        "¿Las políticas de manejo de datos están documentadas y accesibles para todos?",

        // Procesos Analíticos
        "¿Se generan reportes básicos regularmente para apoyar la toma de decisiones?",
        "¿Los análisis de datos suelen realizarse de manera estructurada y consistente?",
        "¿La empresa utiliza herramientas básicas para el análisis de datos, como hojas de cálculo?",
        "¿Los datos se emplean en algunos procesos de toma de decisiones?",
        "¿Existen procedimientos mínimos para la recopilación y verificación de datos?",

        // Infraestructura Tecnológica
        "¿La empresa cuenta con un sistema básico para almacenar sus datos?",
        "¿Los datos pueden ser accesibles para los empleados que los necesitan, aunque sea de manera limitada?",
        "¿Existen herramientas básicas para realizar análisis de datos, aunque sea manualmente?",
        "¿La infraestructura tecnológica permite el manejo de datos esenciales, aunque sin automatización?",
        "¿Los sistemas de almacenamiento y procesamiento de datos son suficientes para el volumen de datos actual?",

        // Capacidades y Competencias
        "¿El equipo tiene competencias básicas para trabajar con datos, como conocimientos de hojas de cálculo?",
        "¿Los empleados están familiarizados con los conceptos básicos de análisis de datos?",
        "¿Existen capacitaciones o recursos para mejorar las habilidades en el manejo de datos?",
        "¿La empresa reconoce la importancia de contar con habilidades de análisis de datos?",
        "¿Hay colaboradores asignados que poseen experiencia básica en gestión de datos?",

        // Estrategia y Cultura
        "¿La analítica y el uso de datos se consideran al tomar decisiones estratégicas, aunque de forma limitada?",
        "¿La empresa valora los datos, aunque no son un elemento fundamental en todas las decisiones?",
        "¿Se reconoce en algunos niveles de la empresa la importancia de una cultura basada en datos?",
        "¿La organización está comenzando a crear conciencia sobre el valor de los datos?",
        "¿Existen esfuerzos iniciales para integrar el uso de datos en la cultura de la empresa?"
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

    // Función para calcular el promedio general
    const calcularPromedioGeneral = () => {
        // Calculamos el promedio general sumando los promedios de cada sección
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
        <div className="nivel-basico container mx-auto p-6 bg-white shadow-lg rounded-lg">
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

export default NivelBasico;