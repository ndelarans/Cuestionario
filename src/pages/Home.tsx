import React from 'react';
import { Link } from 'react-router-dom';
import homeImage from '../assets/images/home.jpg';
import Footer from './Footer'; // Importa el Footer

const Home: React.FC = () => {
  return (
    <div className="m-0 p-0">
      {/* Contenedor de la imagen y el texto */}
      <div className="relative w-full h-auto m-0 p-0">
        <img 
          src={homeImage} 
          alt="Home" 
          className="w-full h-[750px] object-cover" 
        />
        <div className="absolute inset-0 flex flex-col items-start justify-start pl-10 pt-20 md:pl-48 md:pt-48">
          <h1 className="text-white text-4xl md:text-6xl font-bold">
            Construyendo la base
          </h1>
          <p className="text-white text-4xl md:text-6xl font-normal">
            de una cultura de datos efectiva
          </p>
          <div className="pt-5 w-full md:w-[50%]">
            <p className="text-white text-sm md:text-base font-bold">
              La analítica de datos no solo transforma la información en decisiones, sino que convierte los retos en oportunidades para un futuro más inteligente y competitivo.
            </p>
          </div>
          <div className="pt-5">
            <Link to="/encuesta">
              <button 
                className="bg-[#D2153D] text-white font-normal text-[17px] py-2 px-10 w-full sm:w-auto"
                style={{ borderRadius: '0', width: 'auto' }}
              >
                Encuesta
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Cuadrados de dimensiones y encuesta alineados en el centro del lado izquierdo */}
      <div className="flex justify-start ml-[10%] sm:ml-[15%] mt-0 space-x-0"> {/* Ajuste de margen izquierdo */}
        {/* Cuadrado azul */}
        <div className="w-[50%] sm:w-[200px] h-[150px] bg-[#00215B] flex flex-col justify-center items-center mb-0">
          <h1 className="text-white font-semibold text-4xl sm:text-[85px]">5</h1>
          <p className="text-white text-[18px] font-normal mt-2">Dimensiones</p>
        </div>

        {/* Cuadrado rojo */}
        <div className="w-[50%] sm:w-[200px] h-[150px] bg-[#D2153D] flex flex-col justify-center items-center mb-0">
          <h1 className="text-white font-semibold text-4xl sm:text-[85px]">3</h1>
          <p className="text-white text-[19px] font-normal mt-2">Encuestas</p>
        </div>
      </div>

      {/* Dimensiones con más espacio y separación */}
      <div className="bg-[#f3f3f3] p-8 mx-4 sm:mx-20 rounded-lg shadow-lg mt-4">
        <h2 className="text-[#00215B] font-semibold text-[24px] mb-6">Dimensiones</h2>
        <div className="space-y-4 text-[#00215B] text-[16px]">
          <p><strong>Procesos de Gobernanza y Gestión:</strong> Esta dimensión evalúa la calidad y consistencia en la administración de datos a través de políticas de gobernanza que garantizan seguridad, privacidad, y control. Abarca la creación de lineamientos, estándares y responsabilidades claras sobre el manejo de datos, asegurando que estos sean confiables, accesibles y que cumplan con normativas y regulaciones vigentes.</p>
          <p><strong>Procesos Analíticos:</strong> En esta dimensión se analiza el nivel de sofisticación y consistencia en los procesos analíticos de la organización, desde la recopilación y análisis descriptivo hasta modelos predictivos avanzados. Su objetivo es evaluar cómo los datos se transforman en conocimientos útiles y cómo estos insights impactan en la toma de decisiones estratégicas y operativas.</p>
          <p><strong>Infraestructura Tecnológica:</strong> Esta dimensión se centra en la solidez y escalabilidad de la infraestructura tecnológica para el almacenamiento, procesamiento y análisis de datos. Incluye la evaluación de sistemas, software y herramientas utilizadas para manejar grandes volúmenes de datos, asegurando que la tecnología sea capaz de soportar necesidades actuales y futuras de la organización.</p>
          <p><strong>Capacidades y Competencias:</strong> Evalúa las habilidades y competencias del personal en relación con la analítica y el manejo de datos. Esta dimensión observa el nivel de capacitación y especialización de los empleados, así como la disponibilidad de talento con habilidades en análisis de datos, programación y visualización de datos, necesarias para transformar la información en insights accionables.</p>
          <p><strong>Estrategia y Cultura:</strong> Examina la integración de la analítica y el uso de datos dentro de la visión y misión de la organización. Esta dimensión considera el compromiso de la dirección para fomentar una cultura basada en datos, asegurando que las decisiones estén alineadas con una estrategia clara que valore la analítica como una ventaja competitiva y un motor de crecimiento.</p>
        </div>
      </div>

      {/* Valor del Modelo de Madurez */}
      <div className="bg-[#f3f3f3] p-8 mx-4 sm:mx-20 rounded-lg shadow-lg mt-8">
        <h2 className="text-[#00215B] font-semibold text-[24px] mb-6">VALOR DEL MODELO DE MADUREZ</h2>
        <p className="text-[#00215B] text-[16px]">
          Esta herramienta permite a una empresa identificar su posición actual en cuanto a la capacidad de transformar datos en decisiones estratégicas. Este modelo ayuda a reconocer fortalezas y áreas de mejora, proporcionando una hoja de ruta para avanzar en la gestión y el análisis de datos de manera más efectiva. Además, permite alinear la inversión en infraestructura, capacitación y procesos de gobernanza con el objetivo de alcanzar un nivel de madurez donde los datos se utilicen de forma integral para optimizar operaciones, mejorar la competitividad y tomar decisiones basadas en evidencias. Al adoptar este enfoque, la empresa puede maximizar el valor de sus activos de datos y aprovechar las oportunidades de crecimiento e innovación que brindan los datos.
        </p>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
