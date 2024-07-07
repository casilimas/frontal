import "../../src/components/home";
import imagenMsql from '/images/mysql.png';
import imagenGithub from '/images/github.png';

const Home = () => {
  return (
    <div>
      <div className="container-home-iz">
        <h1 className="titulo">Base De Datos No Relacional</h1>
        <div className="parrafo-uno">
          <p>
            Realizar una aplicación con una base de datos MySQL como proyecto
            personal presento varios retos. creación y gestión de bases de
            datos, tablas y relaciones. Diseñar una base de datos eficiente y
            normalizada fue crucial para evitar redundancias y asegurar la
            integridad de los datos.
          </p>

          <p>
            Integrar MySQL con Node.js . Node.js, siendo un entorno de ejecución
            para JavaScript, requiere el uso de paquetes como `mysql` para
            conectarse y comunicarse con la base de datos. La gestión de
            conexiones y la ejecución de consultas de manera asíncrona puede ser
            complicada, `async/await`.
          </p>

          <p>
            Desarrollar una interfaz de usuario con React y Vite añade otra capa
            de complejidad. React es una biblioteca de JavaScript para construir
            interfaces de usuario y requiere una comprensión de conceptos como
            componentes, estado y props. Vite, una herramienta de desarrollo
            rápida para proyectos de JavaScript, mejora la experiencia de
            desarrollo, pero también requiere conocimientos adicionales para
            configurarlo correctamente y aprovechar sus ventajas.
          </p>

          <p>
            La combinación de estas tecnologías implica aprender y dominar
            varios lenguajes y herramientas diferentes: SQL para la base de
            datos, JavaScript para el backend con Node.js y el frontend con
            React, y Vite para optimizar el proceso de desarrollo. Coordinar
            todos estos componentes para que funcionen juntos de manera fluida
            es un desafío significativo.
          </p>

          <p>
            Además, se debieron considerar aspectos como la seguridad
            (protección contra inyecciones SQL y gestión de autenticación), el
            rendimiento (optimización de consultas y manejo eficiente del estado
            en React) y la experiencia del usuario (diseño de una interfaz
            intuitiva y receptiva).
          </p>

          <p>
            En resumen, los principales retos incluyen el diseño y la gestión de
            la base de datos, la integración de tecnologías diversas, la gestión
            de la asincronía en Node.js, y la creación de una interfaz de
            usuario eficiente y agradable usando React y Vite. La solución a
            estos retos requiere tiempo, paciencia y una dedicación considerable
            al aprendizaje y la práctica continua.
          </p>
        </div>
      </div>

      <div className="container-home-derecho">
      <img src={imagenMsql} alt="Imagen de Msql" className="imagen-mysql" />




      <div className="image-link-github">
        <a href="https://www.example.com" target="_blank" rel="noopener noreferrer" className="link-ubicacion" >
          <img src={imagenGithub} alt="Descripción de la imagen" className="image-github" />
        </a>
      </div>



      




      </div>

      

            
            
      


    </div>
  );
};

export default Home;
