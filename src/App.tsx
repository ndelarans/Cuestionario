// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import Encuesta from './pages/Encuesta';
import Contactanos from './pages/Contactanos';

const App: React.FC = () => {
  return (
    <Router basename="/Cuestionario"> {/* Establece el basename para las rutas */}
      <div>
        <Header />
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Ruta para el inicio */}
            <Route path="/encuesta" element={<Encuesta />} /> {/* Ruta para encuesta */}
            <Route path="/contacto" element={<Contactanos />} /> {/* Ruta para contacto */}
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
