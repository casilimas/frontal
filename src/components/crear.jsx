import { useState } from 'react';
import axios from 'axios';

function CrearCliente() {
  const [cliente, setCliente] = useState({
    id: '',
    nombre: '',
    edad: '',
    profesion: ''
  });

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value
    });
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previene el comportamiento predeterminado del formulario
    console.log('Datos del cliente:', cliente);
    // Aquí añadimos lógica para enviar estos datos a tu API
    try {
      // Realiza una solicitud POST para crear un nuevo cliente
      const response = await axios.post('http:relacional-production.up.railway.app', cliente);
      console.log('Cliente creado:', response.data);
      alert('Cliente creado con éxito!');
      // Limpia el formulario después de la operación exitosa
      setCliente({ id: '', nombre: '', edad: '', profesion: '' });
    } catch (error) {
      console.error('Error al crear el cliente:', error.response ? error.response.data : error.message);
      // Muestra un mensaje de error si falla la creación del cliente
      alert(`Error al crear el cliente: ${error.response ? error.response.data.message : error.message}`);
    }
  };

  return (
    <div className="crear-cliente">
        <h1 className="crear-cliente__titulo">Crear Cliente</h1>
        <form className="crear-cliente__form" onSubmit={handleSubmit}>
            <div className="crear-cliente__campo">
                <label className="crear-cliente__label">ID:</label>
                <input
                    className="crear-cliente__input"
                    type="text"
                    name="id"
                    value={cliente.id}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="crear-cliente__campo">
                <label className="crear-cliente__label">Nombre:</label>
                <input
                    className="crear-cliente__input"
                    type="text"
                    name="nombre"
                    value={cliente.nombre}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="crear-cliente__campo">
                <label className="crear-cliente__label">Edad:</label>
                <input
                    className="crear-cliente__input"
                    type="number"
                    name="edad"
                    value={cliente.edad}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="crear-cliente__campo">
                <label className="crear-cliente__label">Profesión:</label>
                <input
                    className="crear-cliente__input"
                    type="text"
                    name="profesion"
                    value={cliente.profesion}
                    onChange={handleChange}
                    required
                />
            </div>
            <button className="crear-cliente__boton" type="submit">Crear Cliente</button>
        </form>
    </div>
  );
}

export default CrearCliente;

/*
Métodos nativos de JavaScript en este script:
- useState: Hook de React para manejar el estado del componente.
- import: Declaración para importar módulos.
- console.log: Método para imprimir mensajes en la consola.
- axios.post: Método para realizar una solicitud POST a la API.
- alert: Método para mostrar un mensaje emergente.
- catch: Manejo de errores en promesas.
- [cliente, setCliente]: Desestructuración del estado del cliente y la función para actualizarlo.
- preventDefault: Método para prevenir el comportamiento predeterminado del formulario.
*/
