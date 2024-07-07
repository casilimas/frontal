
import { useEffect, useState } from 'react';
import axios from 'axios';

const ObtenerCliente = () => {
    // Estado inicial para almacenar la lista de clientes y mensajes
    const [clientes, setClientes] = useState([]);
    const [mensaje, setMensaje] = useState('');

    // useEffect para realizar la solicitud HTTP cuando el componente se monta
    useEffect(() => {
        // Función asincrónica para obtener los clientes desde la API
        const fetchClientes = async () => {
            try {
                // Realiza la solicitud GET a la API
                const response = await axios.get('http://localhost:3000/api/clientes');
                // Almacena los datos obtenidos en el estado
                setClientes(response.data);
            } catch (error) {
                // Maneja cualquier error y establece un mensaje de error
                console.error('Error al obtener clientes:', error);
                setMensaje('Error al obtener clientes');
            }
        };

        // Llama a la función para obtener los clientes
        fetchClientes();
    }, []); // La dependencia vacía hace que useEffect se ejecute solo una vez al montar el componente


    return (
        <div className="clientes">
            <h1 className="clientes__titulo">Lista de Clientes</h1>
            {mensaje && <p className="clientes__mensaje">{mensaje}</p>}
            <table className="clientes__tabla">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Edad</th>
                        <th>Profesión</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map((cliente) => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.edad}</td>
                            <td>{cliente.profesion}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ObtenerCliente;
