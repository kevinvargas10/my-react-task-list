import React, { useState } from "react";
import Task from "./Task";

const TaskList = ({ tasks, createTask, deleteTask, updateTask }) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleCreateTask = () => {
    if (newTaskName.trim() !== "") {
      createTask({
        id: tasks.length + 1,
        name: newTaskName,
        completed: false,
      });
      setNewTaskName(""); // Limpiar el campo después de crear una tarea
    }
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
      />
      <button onClick={handleCreateTask}>Crear tarea</button>
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


