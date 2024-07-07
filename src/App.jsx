import { BrowserRouter as Router, Link } from 'react-router-dom';
import Rutas from './routes/rutas';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav className="nav-barra">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/crear">Crear</Link></li>
            <li><Link to="/obtener">Obtener</Link></li>
            <li><Link to="/actualizar">Actualizar</Link></li>
            <li><Link to="/borrar">Borrar</Link></li>
          </ul>
        </nav>
        <Rutas />
      </div>
    </Router>
  );
}

export default App;
