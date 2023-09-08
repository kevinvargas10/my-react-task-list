import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, onDeleteTask, onUpdateTask }) => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onUpdateTask={onUpdateTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;

