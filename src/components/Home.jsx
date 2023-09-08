import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Bienvenido a la Aplicación de Tareas</h2>
      <p>Esta es una aplicación simple para gestionar tus tareas.</p>
      <Link to="/tareas">Ver Tareas</Link> {/* Agrega un enlace a la página de tareas */}
    </div>
  );
};

export default Home;

