import { useState } from 'react';
import axios from 'axios';

const ActualizarCliente = () => {
    // Estado inicial del cliente con campos vacíos
    const [cliente, setCliente] = useState({
        id: '',
        nombre: '',
        edad: '',
        profesion: ''
    });
    // Estado para los mensajes de éxito o error
    const [mensaje, setMensaje] = useState('');

    // Maneja los cambios en los campos del formulario
    const handleChange = (event) => {
        const { name, value } = event.target;
        // Actualiza el estado del cliente con los nuevos valores ingresados
        setCliente((prevCliente) => ({
            ...prevCliente,
            [name]: value
        }));
    };

    // Maneja el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario
        const { id, nombre, edad, profesion } = cliente;
        
        // Validar que todos los campos están llenos
        if (!id || !nombre || !edad || !profesion) {
            // Si falta algún campo, muestra un mensaje de error y termina la función
            setMensaje('Todos los campos son necesarios');
            return;
        }

        try {
            // Realiza una solicitud PUT para actualizar el cliente
            const response = await axios.put(`http://localhost:3000/api/clientes/actualizar/${id}`, {
                nombre,
                edad,
                profesion
            });
            // Si la solicitud es exitosa, muestra el mensaje de éxito del servidor
            setMensaje(response.data.message);
        } catch (error) {
            // Si ocurre un error, muestra un mensaje de error
            console.error('Error al actualizar el cliente:', error);
            setMensaje('Error al actualizar el cliente');
        }
    };

    return (
        <div className="actualizar-cliente">
            <h1 className="actualizar-cliente__titulo">Actualizar Cliente</h1>
            {mensaje && <p className="actualizar-cliente__mensaje">{mensaje}</p>}
            <form className="actualizar-cliente__form" onSubmit={handleSubmit}>
                <div className="actualizar-cliente__campo">
                    <label className="actualizar-cliente__label">ID:</label>
                    <input
                        className="actualizar-cliente__input"
                        type="text"
                        name="id"
                        value={cliente.id}
                        onChange={handleChange}
                        required // Campo requerido
                    />
                </div>
                <div className="actualizar-cliente__campo">
                    <label className="actualizar-cliente__label">Nombre:</label>
                    <input
                        className="actualizar-cliente__input"
                        type="text"
                        name="nombre"
                        value={cliente.nombre}
                        onChange={handleChange}
                        required // Campo requerido
                    />
                </div>
                <div className="actualizar-cliente__campo">
                    <label className="actualizar-cliente__label">Edad:</label>
                    <input
                        className="actualizar-cliente__input"
                        type="number"
                        name="edad"
                        value={cliente.edad}
                        onChange={handleChange}
                        required // Campo requerido
                    />
                </div>
                <div className="actualizar-cliente__campo">
                    <label className="actualizar-cliente__label">Profesión:</label>
                    <input
                        className="actualizar-cliente__input"
                        type="text"
                        name="profesion"
                        value={cliente.profesion}
                        onChange={handleChange}
                        required // Campo requerido
                    />
                </div>
                <button className="actualizar-cliente__boton" type="submit">Actualizar Cliente</button>
            </form>
        </div>
    );
};

export default ActualizarCliente;
