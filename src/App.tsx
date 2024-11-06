// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header'; // Asegúrate de que la ruta sea correcta
import Home from './pages/Home'; // Importa el componente Home
import Encuesta from './pages/Encuesta'; // Importa el componente Encuesta

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Agrega Home como la ruta para el inicio */}
            <Route path="/encuesta" element={<Encuesta />} /> {/* Usa el componente Encuesta aquí */}
            <Route path="/contacto" element={<h1>Contáctanos</h1>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
