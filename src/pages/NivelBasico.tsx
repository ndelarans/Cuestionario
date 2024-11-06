import React, { useState } from 'react';
import BotonesRespuesta from './BotonesRespuesta';
import ComentarioIcono from '../assets/images/comentario.svg';
import ComentarioIconoEnviado from '../assets/images/comentario_enviado.svg';

const NivelBasico: React.FC = () => {
    const preguntas = [
        "La gestión básica de datos está alineada con los objetivos principales de la empresa",
        "Los directivos responden rápidamente a las necesidades básicas de datos y su gestión",
        "¿La organización tiene algún nivel de control centralizado para la gestión de datos?",
        "¿Existen métodos simples para revisar cómo se están usando y gestionando los datos?",
        "Los datos disponibles son fáciles de acceder y gestionar para las operaciones diarias",
        "Hay alguna política básica para proteger la privacidad y seguridad de los datos",
        "Los roles y responsabilidades de los empleados en el manejo de datos están claros",
        "Las herramientas o permisos de acceso a los datos son sencillos y fáciles de gestionar",
        // Nueva sección
        "¿La organización tiene procesos básicos para crear informes o analizar datos?",
        "Los errores en los informes o análisis de datos afectan el trabajo diario",
        "¿La organización tiene algún sistema automatizado (básico) para sugerir análisis o modelos?",
        "¿Recibe la organización soporte externo para manejar sus datos?",
        "¿Se pueden consultar y combinar fuentes básicas de datos para crear informes simples?",
        "Las actividades básicas de análisis de datos se ajustan a las necesidades del cliente",
        "¿Existen formas de medir cómo los análisis de datos ayudan a la empresa?",
        "¿Los gerentes conocen los datos disponibles para tomar decisiones?",
        "Las decisiones empresariales se basan en datos, aunque sean de manera sencilla",
        "¿Los indicadores clave del desempeño de la empresa se revisan regularmente?",
        //Nueva sección
        "¿La organización ha empezado a implementar alguna herramienta para hacer análisis de datos predictivo?",
        "¿La empresa realiza análisis básicos de sus procesos internos?",
        "Se han comenzado a usar técnicas simples como la minería web o minería de textos en sus análisis",
        "Las herramientas tecnológicas para analizar datos son suficientes para las necesidades actuales",
        "La infraestructura de datos puede manejar las operaciones diarias y algunos análisis simples",
        "La empresa tiene una base tecnológica para hacer análisis de datos avanzados en el futuro",
        "Se está trabajando en integrar herramientas de datos con otros sistemas de la empresa",
        "Se usa algún/algunos software básico para el análisis de datos",
        //Nueva seccón
        "El personal tiene conocimientos básicos sobre cómo manejar datos",
        "Los analistas utilizan herramientas simples para responder a las preguntas empresariales",
        "La organización puede manejar y analizar pequeños volúmenes de datos",
        "La gestión del personal está preparada para comenzar con proyectos de análisis de datos",
        "El equipo utiliza el pensamiento crítico y la innovación para resolver problemas sencillos",
        "Los empleados pueden colaborar eficazmente para alcanzar metas comunes",
        "El personal tiene habilidades básicas en herramientas de análisis de datos",
        "La empresa se adapta bien a nuevas herramientas y metodologías simples",
        //Nuevasección
        "La gestión básica de datos está alineada con los objetivos principales de la empresa",
        "Los datos son integrados de forma efectiva en algunas decisiones estratégicas",
        "Los proyectos relacionados con los datos están alineados con las metas de la empresa",
        "Los equipos de datos están comenzando a participar en las decisiones importantes de la empresa",
        "La organización gestiona y comparte conocimientos básicos a través de herramientas simples",
        "La gestión básica de datos está alineada con los objetivos principales de la empresa"

    ];

    const [respuestasSeleccionadas, setRespuestasSeleccionadas] = useState<number[]>(Array(preguntas.length).fill(0));
    const [comentarios, setComentarios] = useState<string[]>(Array(preguntas.length).fill(''));
    const [cuadroComentarioAbierto, setCuadroComentarioAbierto] = useState<boolean[]>(Array(preguntas.length).fill(false));
    const [iconoComentarioColor, setIconoComentarioColor] = useState<boolean[]>(Array(preguntas.length).fill(false));

    const manejarRespuestaSeleccionada = (indice: number, respuesta: number) => {
        const nuevasRespuestas = [...respuestasSeleccionadas];
        nuevasRespuestas[indice] = respuesta;
        setRespuestasSeleccionadas(nuevasRespuestas);
    };

    const manejarComentarioAbierto = (indice: number) => {
        const nuevoEstado = [...cuadroComentarioAbierto];
        nuevoEstado[indice] = !nuevoEstado[indice];
        setCuadroComentarioAbierto(nuevoEstado);
    };

    const manejarComentarioCambio = (indice: number, valor: string) => {
        const nuevosComentarios = [...comentarios];
        nuevosComentarios[indice] = valor;
        setComentarios(nuevosComentarios);
    };

    const manejarComentarioEnviar = (indice: number) => {
        console.log(`Comentario para la pregunta ${indice + 1}: ${comentarios[indice]}`);

        const nuevosIconos = [...iconoComentarioColor];
        nuevosIconos[indice] = true;
        setIconoComentarioColor(nuevosIconos);

        manejarComentarioCambio(indice, '');
        manejarComentarioAbierto(indice);
    };

    return (
        <div className="encuesta p-4">
            {/* Procesos de Gobernanza y Gestión */}
            <h2 className="text-2xl mb-6 font-bold text-black">Procesos de Gobernanza y Gestión</h2>
            {preguntas.slice(0, 8).map((pregunta, index) => (
                <div key={index} className="pregunta mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                        Pregunta {index + 1}: {pregunta}
                        <img
                            src={iconoComentarioColor[index] ? ComentarioIconoEnviado : ComentarioIcono}
                            alt="Comentario"
                            onClick={() => manejarComentarioAbierto(index)}
                            className="h-5 w-5 ml-2 cursor-pointer"
                        />
                    </h3>
                    <BotonesRespuesta
                        respuestas={[1, 2, 3, 4, 5]}
                        respuestaSeleccionada={respuestasSeleccionadas[index]}
                        onRespuestaSeleccionada={(respuesta) => manejarRespuestaSeleccionada(index, respuesta)}
                    />
                    {cuadroComentarioAbierto[index] && (
                        <div className="mt-4 flex flex-col items-center md:items-start">
                            <textarea
                                className="border p-2 w-full md:w-1/2"
                                placeholder="Escribe tu comentario aquí..."
                                value={comentarios[index]}
                                onChange={(e) => manejarComentarioCambio(index, e.target.value)}
                            />
                            <button
                                className="mt-2 bg-red-600 text-white py-2 px-4 rounded w-full md:w-1/2"
                                onClick={() => manejarComentarioEnviar(index)}
                            >
                                Enviar
                            </button>
                        </div>
                    )}
                </div>
            ))}

            {/* Procesos Analíticos */}
            <h2 className="text-2xl mb-8 font-bold text-black mt-10">Procesos Analíticos</h2>
            {preguntas.slice(8, 18).map((pregunta, index) => (
                <div key={index + 8} className="pregunta mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                        Pregunta {index + 9}: {pregunta}
                        <img
                            src={iconoComentarioColor[index + 8] ? ComentarioIconoEnviado : ComentarioIcono}
                            alt="Comentario"
                            onClick={() => manejarComentarioAbierto(index + 8)}
                            className="h-5 w-5 ml-2 cursor-pointer"
                        />
                    </h3>
                    <BotonesRespuesta
                        respuestas={[1, 2, 3, 4, 5]}
                        respuestaSeleccionada={respuestasSeleccionadas[index + 8]}
                        onRespuestaSeleccionada={(respuesta) => manejarRespuestaSeleccionada(index + 8, respuesta)}
                    />
                    {cuadroComentarioAbierto[index + 8] && (
                        <div className="mt-4 flex flex-col items-center md:items-start">
                            <textarea
                                className="border p-2 w-full md:w-1/2"
                                placeholder="Escribe tu comentario aquí..."
                                value={comentarios[index + 8]}
                                onChange={(e) => manejarComentarioCambio(index + 8, e.target.value)}
                            />
                            <button
                                className="mt-2 bg-red-600 text-white py-2 px-4 rounded w-full md:w-1/2"
                                onClick={() => manejarComentarioEnviar(index + 8)}
                            >
                                Enviar
                            </button>
                        </div>
                    )}
                </div>
            ))}

            {/* Infraestructura Tecnológica */}
            <h2 className="text-2xl mb-8 font-bold text-black mt-10">Infraestructura Tecnológica</h2>
            {preguntas.slice(18, 26).map((pregunta, index) => (
                <div key={index + 18} className="pregunta mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                        Pregunta {index + 19}: {pregunta}
                        <img
                            src={iconoComentarioColor[index + 18] ? ComentarioIconoEnviado : ComentarioIcono}
                            alt="Comentario"
                            onClick={() => manejarComentarioAbierto(index + 18)}
                            className="h-5 w-5 ml-2 cursor-pointer"
                        />
                    </h3>
                    <BotonesRespuesta
                        respuestas={[1, 2, 3, 4, 5]}
                        respuestaSeleccionada={respuestasSeleccionadas[index + 18]}
                        onRespuestaSeleccionada={(respuesta) => manejarRespuestaSeleccionada(index + 18, respuesta)}
                    />
                    {cuadroComentarioAbierto[index + 18] && (
                        <div className="mt-4 flex flex-col items-center md:items-start">
                            <textarea
                                className="border p-2 w-full md:w-1/2"
                                placeholder="Escribe tu comentario aquí..."
                                value={comentarios[index + 18]}
                                onChange={(e) => manejarComentarioCambio(index + 18, e.target.value)}
                            />
                            <button
                                className="mt-2 bg-red-600 text-white py-2 px-4 rounded w-full md:w-1/2"
                                onClick={() => manejarComentarioEnviar(index + 18)}
                            >
                                Enviar
                            </button>
                        </div>
                    )}
                </div>
            ))}

            {/* Capacidades y Competencias */}
            <h2 className="text-2xl mb-8 font-bold text-black mt-10">Capacidades y Competencias</h2>
            {preguntas.slice(26, 34).map((pregunta, index) => (
                <div key={index + 26} className="pregunta mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                        Pregunta {index + 27}: {pregunta}
                        <img
                            src={iconoComentarioColor[index + 26] ? ComentarioIconoEnviado : ComentarioIcono}
                            alt="Comentario"
                            onClick={() => manejarComentarioAbierto(index + 26)}
                            className="h-5 w-5 ml-2 cursor-pointer"
                        />
                    </h3>
                    <BotonesRespuesta
                        respuestas={[1, 2, 3, 4, 5]}
                        respuestaSeleccionada={respuestasSeleccionadas[index + 26]}
                        onRespuestaSeleccionada={(respuesta) => manejarRespuestaSeleccionada(index + 26, respuesta)}
                    />
                    {cuadroComentarioAbierto[index + 26] && (
                        <div className="mt-4 flex flex-col items-center md:items-start">
                            <textarea
                                className="border p-2 w-full md:w-1/2"
                                placeholder="Escribe tu comentario aquí..."
                                value={comentarios[index + 26]}
                                onChange={(e) => manejarComentarioCambio(index + 26, e.target.value)}
                            />
                            <button
                                className="mt-2 bg-red-600 text-white py-2 px-4 rounded w-full md:w-1/2"
                                onClick={() => manejarComentarioEnviar(index + 26)}
                            >
                                Enviar
                            </button>
                        </div>
                    )}
                </div>
            ))}

            {/* Estrategia y Cultura */}
            <h2 className="text-2xl mb-8 font-bold text-black mt-10">Estrategia y Cultura</h2>
            {preguntas.slice(34, 40).map((pregunta, index) => (
                <div key={index + 34} className="pregunta mb-4">
                    <h3 className="text-lg font-semibold flex items-center">
                        Pregunta {index + 35}: {pregunta}
                        <img
                            src={iconoComentarioColor[index + 34] ? ComentarioIconoEnviado : ComentarioIcono}
                            alt="Comentario"
                            onClick={() => manejarComentarioAbierto(index + 34)}
                            className="h-5 w-5 ml-2 cursor-pointer"
                        />
                    </h3>
                    <BotonesRespuesta
                        respuestas={[1, 2, 3, 4, 5]}
                        respuestaSeleccionada={respuestasSeleccionadas[index + 34]}
                        onRespuestaSeleccionada={(respuesta) => manejarRespuestaSeleccionada(index + 34, respuesta)}
                    />
                    {cuadroComentarioAbierto[index + 34] && (
                        <div className="mt-4 flex flex-col items-center md:items-start">
                            <textarea
                                className="border p-2 w-full md:w-1/2"
                                placeholder="Escribe tu comentario aquí..."
                                value={comentarios[index + 34]}
                                onChange={(e) => manejarComentarioCambio(index + 34, e.target.value)}
                            />
                            <button
                                className="mt-2 bg-red-600 text-white py-2 px-4 rounded w-full md:w-1/2"
                                onClick={() => manejarComentarioEnviar(index + 34)}
                            >
                                Enviar
                            </button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default NivelBasico;
