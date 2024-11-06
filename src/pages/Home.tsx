// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom'; 
import homeImage from '../assets/images/home.jpg';

const Home: React.FC = () => {
  return (
    <div>
      <div className="relative w-full h-auto m-0 p-0"> {/* Contenedor relativo para la imagen */}
        <img 
          src={homeImage} 
          alt="Home" 
          className="w-full h-[750px] object-cover" 
        />
        <div className="absolute inset-0 flex flex-col items-start justify-start pl-48 pt-48"> {/* Contenedor para los textos */}
          <h1 className="text-white" style={{ fontSize: '60px', fontWeight: 'bold' }} >
            Lorem ipsum
          </h1>
          <p className="text-white" style={{ fontSize: '60px', fontWeight: 'normal' }} >
            dolor sit
          </p>
          <div className="pt-5 w-[50%]"> {/* Ancho limitado solo para el último párrafo */}
            <p className="text-white" style={{ fontSize: '15px', fontWeight: 'bold' }} >
              In id enim odio. Nunc aliquet diam tortor, at venenatis urna sagittis non. Suspendisse sodales nulla sit amet sem condimentum, ac euismod nibh elementum. Praesent eu urna at sem sodales venenatis. Mauris efficitur dapibus enim in posuere.
            </p>
          </div>
          <div className="pt-5"> {/* Espacio arriba del botón */}
            <Link to="/encuesta"> {/* Enlace a la página Encuesta */}
              <button 
                className="bg-[#D2153D] text-white font-normal text-[17px] py-2 px-10" // Estilo del botón
                style={{ borderRadius: '0', width: 'auto' }}
              >
                Encuesta
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Contenedor para los cuadros alineados con el botón */}
      <div className="flex justify-start mt-0 py-0 pl-[20%]"> {/* Desplazado a la derecha del botón */}
        {/* Cuadrado azul */}
        <div className="w-[200px] h-[150px] bg-[#00215B] flex flex-col justify-center items-center mr-0">
          <h1 className="text-white font-semibold text-[85px]">5</h1>
          <p className="text-white text-[18px] font-normal">Dimensiones</p>
        </div>

        {/* Cuadrado rojo */}
        <div className="w-[200px] h-[150px] bg-[#D2153D] flex flex-col justify-center items-center ml-0">
          <h1 className="text-white font-semibold text-[85px]">3</h1>
          <p className="text-white text-[19px] font-normal">Encuestas</p>
        </div>
        
        {/* Cuadro blanco al lado del cuadro rojo, mitad sobre la imagen, mitad fuera */}
        <div className="absolute left-[47%] top-[90%] w-[330px] h-[400px] bg-white p-6 border-t-4 border-[#001ED3] shadow-[0px_4px_10px_rgba(0,30,211,0.3)]"> {/* Borde superior azul y sombra */}
          {/* Título */}
          <h2 className="text-[#00215B] font-medium text-[30px]"> {/* Reducido proporcionalmente */}
            Lorem Ipsum Title
          </h2>

          {/* Subtítulos */}
          <div className="pt-5">
            <h3 className="text-[#00215B] font-medium text-[16px]"> {/* Cambié el color aquí */}
              Subtítulo 1
            </h3>
            <p className="text-black text-[14px]"> {/* Reducido proporcionalmente */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="pt-5">
            <h3 className="text-[#00215B] font-medium text-[16px]"> {/* Cambié el color aquí */}
              Subtítulo 2
            </h3>
            <p className="text-black text-[14px]"> {/* Reducido proporcionalmente */}
              Curabitur lobortis euismod eros, vel vehicula nunc sollicitudin nec.
            </p>
          </div>

          <div className="pt-5">
            <h3 className="text-[#00215B] font-medium text-[16px]"> {/* Cambié el color aquí */}
              Subtítulo 3
            </h3>
            <p className="text-black text-[14px]"> {/* Reducido proporcionalmente */}
              Sed posuere urna id libero gravida, nec ultricies ligula tempor.
            </p>
          </div>
        </div>
      </div>

      {/* Contenedor para el texto de las dimensiones debajo de los cuadros */}
      <div className="bg-[#f3f3f3] p-8 mt-10 mx-20 rounded-lg shadow-lg">
        <h2 className="text-[#00215B] font-semibold text-[24px] mb-6">Dimensiones</h2>
        <div className="space-y-4 text-[#00215B] text-[16px]">
          <p><strong>Procesos de Gobernanza y Gestión:</strong> Esta dimensión evalúa la calidad y consistencia en la administración de datos a través de políticas de gobernanza que garantizan seguridad, privacidad, y control. Abarca la creación de lineamientos, estándares y responsabilidades claras sobre el manejo de datos, asegurando que estos sean confiables, accesibles y que cumplan con normativas y regulaciones vigentes.</p>
          <p><strong>Procesos Analíticos:</strong> En esta dimensión se analiza el nivel de sofisticación y consistencia en los procesos analíticos de la organización, desde la recopilación y análisis descriptivo hasta modelos predictivos avanzados. Su objetivo es evaluar cómo los datos se transforman en conocimientos útiles y cómo estos insights impactan en la toma de decisiones estratégicas y operativas.</p>
          <p><strong>Infraestructura Tecnológica:</strong> Esta dimensión se centra en la solidez y escalabilidad de la infraestructura tecnológica para el almacenamiento, procesamiento y análisis de datos. Incluye la evaluación de sistemas, software y herramientas utilizadas para manejar grandes volúmenes de datos, asegurando que la tecnología sea capaz de soportar necesidades actuales y futuras de la organización.</p>
          <p><strong>Capacidades y Competencias:</strong> Evalúa las habilidades y competencias del personal en relación con la analítica y el manejo de datos. Esta dimensión observa el nivel de capacitación y especialización de los empleados, así como la disponibilidad de talento con habilidades en análisis de datos, programación y visualización de datos, necesarias para transformar la información en insights accionables.</p>
          <p><strong>Estrategia y Cultura:</strong> Examina la integración de la analítica y el uso de datos dentro de la visión y misión de la organización. Esta dimensión considera el compromiso de la dirección para fomentar una cultura basada en datos, asegurando que las decisiones estén alineadas con una estrategia clara que valore la analítica como una ventaja competitiva y un motor de crecimiento.</p>
        </div>
      </div>

      {/* Contenedor para el "Valor del Modelo de Madurez" debajo de las dimensiones */}
      <div className="bg-[#f3f3f3] p-8 mt-10 mx-20 rounded-lg shadow-lg">
        <h2 className="text-[#00215B] font-semibold text-[24px] mb-6">VALOR DEL MODELO DE MADUREZ</h2>
        <p className="text-[#00215B] text-[16px]">
          Esta herramienta permite a una empresa identificar su posición actual en cuanto a la capacidad de transformar datos en decisiones estratégicas. Este modelo ayuda a reconocer fortalezas y áreas de mejora, proporcionando una hoja de ruta para avanzar en la gestión y el análisis de datos de manera más efectiva. Además, permite alinear la inversión en infraestructura, capacitación y procesos de gobernanza con el objetivo de alcanzar un nivel de madurez donde los datos se utilicen de forma integral para optimizar operaciones, mejorar la competitividad y tomar decisiones basadas en evidencias. Al adoptar este enfoque, la empresa puede maximizar el valor de sus datos, mejorar su agilidad y construir una cultura orientada a la analítica como pilar estratégico.
        </p>
      </div>
    </div>
  );
};

export default Home;
