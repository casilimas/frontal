
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import CrearCliente from '../components/crear';
import ObtenerCliente from '../components/obtener';
import ActualizarCliente from '../components/actualizar';
import BorrarCliente from '../components/borrar';

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crear" element={<CrearCliente />} />
      <Route path="/obtener" element={<ObtenerCliente />} />
      <Route path="/actualizar" element={<ActualizarCliente />} />
      <Route path="/borrar" element={<BorrarCliente />} />
    </Routes>
  );
};

export default Rutas;
