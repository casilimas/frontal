import { useState } from 'react';
import axios from 'axios';

const BorrarCliente = () => {
    // Estado para almacenar el ID del cliente a borrar y el mensaje a mostrar
    const [clienteId, setClienteId] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Maneja los cambios en el campo de entrada para el ID del cliente
    const handleChange = (event) => {
        setClienteId(event.target.value);
    };

    // Maneja el envío del formulario
    const handleSubmit = async (event) => {
        event.preventDefault(); // Previene el comportamiento predeterminado del formulario
        
        if (!clienteId) {
            // Verifica si el campo ID está vacío y muestra un mensaje de error
            setMensaje('El campo ID es necesario');
            setTimeout(() => {
                setMensaje('');
            }, 2000);
            return;
        }

        try {
            // Realiza una solicitud DELETE para borrar el cliente por su ID
            const response = await axios.delete(`http://localhost:3000/api/clientes/borrar/${clienteId}`);
            // Muestra el mensaje de éxito y limpia el campo de entrada
            setMensaje(response.data.message);
            setClienteId(''); // Limpiar el campo de entrada después de borrar el cliente
            setTimeout(() => {
                setMensaje('');
            }, 2000);
        } catch (error) {
            // Maneja los errores y muestra un mensaje de error adecuado
            console.error('Error al borrar el cliente:', error);
            if (error.response && error.response.status === 404) {
                // Si el cliente no se encuentra, muestra un mensaje de error 404
                setMensaje('Cliente no encontrado');
            } else {
                // Para otros errores, muestra un mensaje de error genérico
                setMensaje('Error al borrar el cliente');
            }
            setTimeout(() => {
                setMensaje('');
            }, 2000);
        }
    };

    return (
        <div className="borrar-cliente">
            <h1 className="borrar-cliente__titulo">Borrar Cliente</h1>
            {mensaje && <p className="borrar-cliente__mensaje">{mensaje}</p>}
            <form className="borrar-cliente__form" onSubmit={handleSubmit}>
                <div className="borrar-cliente__campo">
                    <label className="borrar-cliente__label">ID:</label>
                    <input
                        className="borrar-cliente__input"
                        type="text"
                        name="id"
                        value={clienteId}
                        onChange={handleChange}
                        required // Campo requerido
                    />
                </div>
                <button className="borrar-cliente__boton" type="submit">Borrar Cliente</button>
            </form>
        </div>
    );
};

export default BorrarCliente;
