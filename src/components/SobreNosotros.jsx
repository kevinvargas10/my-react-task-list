import React from "react";
import { Link } from "react-router-dom";

const SobreNosotros = () => {
  return (
    <div>
      <h2>Acerca de Nosotros</h2>
      <p>
        Esta aplicación ha sido desarrollada con el propósito de ayudarte a
        gestionar tus tareas de manera eficiente. Algunas de las funcionalidades
        clave incluyen:
      </p>
      <ul>
        <li>Crear nuevas tareas con nombre y descripción opcional.</li>
        <li>Marcar tareas como completadas o incompletas.</li>
        <li>Editar el nombre de las tareas existentes.</li>
        <li>Eliminar tareas que ya no necesitas.</li>
      </ul>
      <p>
        Hemos utilizado tecnologías modernas como React para construir la
        interfaz de usuario y gestionar el estado de la aplicación. Además, la
        aplicación utiliza componentes reutilizables para mejorar la
        mantenibilidad y escalabilidad.
      </p>
      <p>
        Esperamos que esta aplicación te ayude a ser más productivo y a llevar
        un seguimiento de tus tareas de manera efectiva.
      </p>
      <Link to="/tareas">Ver Tareas</Link>
    </div>
  );
};

export default SobreNosotros;
