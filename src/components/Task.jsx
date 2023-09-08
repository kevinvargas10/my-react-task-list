import React from "react";

const Task = ({ task, onTaskToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onTaskToggle(task.id, !task.completed)} // Corrige la llamada a onTaskToggle
      />
      <span>{task.name}</span>
    </li>
  );
};

export default Task;





