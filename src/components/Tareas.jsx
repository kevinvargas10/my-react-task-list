import React, { useState } from "react";
import Task from "./Task";
import TaskList from "./TaskList";

const Tareas = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks); // Utiliza el estado local para gestionar las tareas

  const deleteTask = (taskId) => {
    const updatedTasks = taskList.filter((task) => task.id !== taskId);
    setTaskList(updatedTasks);
  };

  const updateTask = (taskId, updatedTask) => {
    const updatedTasks = taskList.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTaskList(updatedTasks);
  };

  const createTask = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  return (
    <div>
      <h2>Listado de Tareas</h2>
      <TaskList
        tasks={taskList}
        deleteTask={deleteTask}
        updateTask={updateTask}
        createTask={createTask}
      />
    </div>
  );
};

export default Tareas;


