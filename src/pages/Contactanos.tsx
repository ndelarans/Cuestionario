import React, { useState } from "react";
import emailjs from "emailjs-com";
import Footer from './Footer';

const Contactanos: React.FC = () => {
  const [selectedEmail, setSelectedEmail] = useState("");
  const [message, setMessage] = useState("");
  const [fromName, setFromName] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedEmail || !message || !fromName) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    setIsSending(true);
    const templateParams = {
      from_name: fromName,
      to_email: selectedEmail, // Usa el campo correcto según tu plantilla en EmailJS
      message: message,
    };

    emailjs
      .send(
        "service_avxlqxp", // Service ID
        "template_i532dij", // Template ID
        templateParams, // Parámetros de la plantilla
        "A02GEh2IU9aNrPbRb" // User ID (ID público)
      )
      .then(
        (response) => {
          console.log("Mensaje enviado exitosamente!", response.status, response.text);
          alert("¡Mensaje enviado con éxito!");
        },
        (error) => {
          console.error("Error al enviar el mensaje:", error);
          alert("Hubo un error al enviar el mensaje. Por favor, verifica tus datos.");
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div>
      <div className="max-w-3xl mx-auto p-8 bg-white shadow-md rounded-md mt-10">
        <h1 className="text-4xl font-bold mt-5 mb-10 text-center animate-pulse text-red-600">
          Grupo Uninorte
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-red-50 border border-red-200 rounded-lg">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-red-600 font-semibold border-b border-red-300">
                  Integrante
                </th>
                <th className="px-4 py-2 text-left text-red-600 font-semibold border-b border-red-300">
                  Teléfono
                </th>
                <th className="px-4 py-2 text-left text-red-600 font-semibold border-b border-red-300">
                  Correo Electrónico
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-3 border-b border-red-300">Camila Churio Celedón</td>
                <td className="px-4 py-3 border-b border-red-300">3002038178</td>
                <td className="px-4 py-3 border-b border-red-300">cchurio@uninorte.edu.co</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-red-300">Sofía Gamero Pardo</td>
                <td className="px-4 py-3 border-b border-red-300">3215402785</td>
                <td className="px-4 py-3 border-b border-red-300">gameros@uninorte.edu.co</td>
              </tr>
              <tr>
                <td className="px-4 py-3 border-b border-red-300">Miguel Angel Garcerant Varon</td>
                <td className="px-4 py-3 border-b border-red-300">3042093399</td>
                <td className="px-4 py-3 border-b border-red-300">garcerantm@uninorte.edu.co</td>
              </tr>
            </tbody>
          </table>
        </div>
        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold">
              Tu Nombre:
            </label>
            <input
              type="text"
              id="name"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Escribe tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Tu Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              value={selectedEmail}
              onChange={(e) => setSelectedEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              placeholder="Escribe tu correo electrónico"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 font-semibold">
              Escribe tu mensaje:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm"
              rows={4}
              placeholder="Escribe aquí tu mensaje..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-red-600 text-white font-bold rounded-md shadow hover:bg-red-700 focus:outline-none"
            disabled={isSending}
          >
            {isSending ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>

      {/* El Footer fuera del contenedor principal */}
      <Footer />
    </div>
  );
};

export default Contactanos;
