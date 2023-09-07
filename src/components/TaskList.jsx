import React, { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, createTask, deleteTask, updateTask }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [error, setError] = useState(""); // Estado para almacenar mensajes de error

  const handleCreateTask = () => {
    if (newTaskName.trim().length < 3) {
      setError("El nombre de la tarea debe tener al menos 3 caracteres.");
      return;
    }

    createTask({
      id: tasks.length + 1,
      name: newTaskName,
      description: newTaskDescription,
      completed: false,
    });

    // Limpiar los campos después de crear una tarea y eliminar el mensaje de error
    setNewTaskName("");
    setNewTaskDescription("");
    setError("");
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <form>
        <label>
          Nombre de la tarea:
          <input
            type="text"
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Descripción:
          <textarea
            value={newTaskDescription}
            onChange={(e) => setNewTaskDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="button" onClick={handleCreateTask}>
          Crear tarea
        </button>
      </form>
      {/* Mostrar mensaje de error si existe */}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={() => deleteTask(task.id)}
            onUpdate={(updatedTask) => updateTask(task.id, updatedTask)}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;





