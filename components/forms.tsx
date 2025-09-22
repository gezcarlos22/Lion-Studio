"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

const FormularioContacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    alert('Formulario enviado con éxito');
    // Aquí puedes agregar la lógica para enviar los datos
  };

  return (
    <div className="w-[500px] h-[700px] border-8 border-black rounded-2xl bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="nombre" className="block text-black font-bold text-lg mb-2">Nombre</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Tu Nombre"
              className="bg-gray-200 w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-4 focus:ring-green focus:border-gray-300 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="apellido" className="block text-black font-bold text-lg mb-2">Apellido</label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
              placeholder="Tu Apellido"
              className="bg-gray-200 w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-4 focus:ring-green focus:border-gray-300 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-black font-bold text-lg mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu Email"
              className="bg-gray-200 w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-4 focus:ring-green focus:border-gray-300 transition-all duration-200"
              required
            />
          </div>

          <div>
            <label htmlFor="telefono" className="block text-black font-bold text-lg mb-2">Telefono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Tu Telefono"
              className="bg-gray-200 w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-4 focus:ring-green focus:border-gray-300 transition-all duration-200"

              required
            />
          </div>

          <div>
            <label htmlFor="mensaje" className="block text-black font-bold text-lg mb-2">Deja tu mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              placeholder="Escribe tu mensaje"
              className="bg-gray-200 w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:ring-4 focus:ring-green focus:border-gray-300 transition-all duration-200"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green hover:bg-white text-black font-bold py-3 px-4 rounded-lg transition-all duration-200 transform cursor-pointer hover:scale-105 focus:ring-4 focus:ring-green-300 focus:outline-none"
          >
            ENVIAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormularioContacto;