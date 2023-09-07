import React, { useState } from "react";

const Task = ({ task, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTaskName, setEditedTaskName] = useState(task.name);

  const handleUpdateTask = () => {
    onUpdate({ name: editedTaskName });
    setIsEditing(false);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onUpdate({ completed: !task.completed })}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTaskName}
            onChange={(e) => setEditedTaskName(e.target.value)}
          />
          <button onClick={handleUpdateTask}>Actualizar tarea</button>
        </>
      ) : (
        <>
          <span>{task.name}</span>
          <button onClick={() => setIsEditing(true)}>Editar</button>
          <button onClick={onDelete}>Eliminar</button>
          <button onClick={handleUpdateTask}>Actualizar tarea</button> {/* Agregamos este botón */}
        </>
      )}
    </li>
  );
};

export default Task;



