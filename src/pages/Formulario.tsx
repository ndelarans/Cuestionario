import React, { useState } from 'react';

const Formulario: React.FC = () => {
    const [verMas, setVerMas] = useState(false);
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [errores, setErrores] = useState({
        nombre: '',
        apellido: '',
        empresa: '',
        descripcion: ''
    });

    const toggleVerMas = () => {
        setVerMas(!verMas);
    };

    const validarCampos = () => {
        const nuevosErrores = {
            nombre: nombre ? '' : 'Este campo es obligatorio',
            apellido: apellido ? '' : 'Este campo es obligatorio',
            empresa: empresa ? '' : 'Este campo es obligatorio',
            descripcion: descripcion ? '' : 'Este campo es obligatorio'
        };
        setErrores(nuevosErrores);

        // Si no hay errores, los valores son válidos
        return !Object.values(nuevosErrores).some(error => error !== '');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validarCampos()) {
            // Procesa el formulario si todos los campos son válidos
            console.log("Formulario enviado");
        }
    };

    return (
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-6 border rounded-lg shadow-lg bg-white">
            {/* Primera mitad: Información de la persona */}
            <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-xl font-semibold mb-2">Información Personal</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">
                            Nombre:<span className="text-red-500"> *</span>
                        </label>
                        <input
                            type="text"
                            className={`w-full p-2 border ${errores.nombre ? 'border-red-500' : 'border-gray-300'} rounded`}
                            placeholder="Ingresa tu nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        {errores.nombre && <p className="text-red-500 text-sm">{errores.nombre}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Apellido:<span className="text-red-500"> *</span>
                        </label>
                        <input
                            type="text"
                            className={`w-full p-2 border ${errores.apellido ? 'border-red-500' : 'border-gray-300'} rounded`}
                            placeholder="Ingresa tu apellido"
                            value={apellido}
                            onChange={(e) => setApellido(e.target.value)}
                        />
                        {errores.apellido && <p className="text-red-500 text-sm">{errores.apellido}</p>}
                    </div>
                    <div>
                        <label className="block text-gray-700">
                            Empresa:<span className="text-red-500"> *</span>
                        </label>
                        <input
                            type="text"
                            className={`w-full p-2 border ${errores.empresa ? 'border-red-500' : 'border-gray-300'} rounded`}
                            placeholder="Ingresa el nombre de la empresa"
                            value={empresa}
                            onChange={(e) => setEmpresa(e.target.value)}
                        />
                        {errores.empresa && <p className="text-red-500 text-sm">{errores.empresa}</p>}
                    </div>
                </form>
            </div>

            {/* Segunda mitad: Descripción de la empresa */}
            <div className="w-full md:w-1/2 space-y-4">
                <h2 className="text-xl font-semibold mb-2">Descripción de la Empresa</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700 flex items-center">
                            <span
                                onClick={toggleVerMas}
                                className="text-red-500 ml-2 cursor-pointer hover:underline"
                            >
                                {verMas ? 'Ver menos' : 'Ver más'}
                            </span>
                        </label>
                        
                        {/* Texto adicional desplegable */}
                        {verMas && (
                            <p className="text-gray-600 mt-2">
                                Breve descripción de la estructura de negocio de la empresa, 
                                los procesos que maneja y los servicios o productos que ofrece.
                            </p>
                        )}

                        <textarea
                            className={`w-full p-2 border ${errores.descripcion ? 'border-red-500' : 'border-gray-300'} rounded mt-2`}
                            placeholder="Describe brevemente la empresa"
                            rows={4}
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                        {errores.descripcion && <p className="text-red-500 text-sm">{errores.descripcion}</p>}
                    </div>

                    {/* Botón de Enviar */}
                    <div className="w-full flex justify-center mt-4">
                        <button
                            type="submit"
                            className="bg-red-500 text-white font-semibold px-6 py-2 rounded hover:bg-red-600"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
