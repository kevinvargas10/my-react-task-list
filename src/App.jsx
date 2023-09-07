import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import useTaskManager from "./hooks/useTaskManager";

function App() {
  const initialTasks = [
    { id: 1, name: "Recoger la basura", completed: true },
    { id: 2, name: "Dormir 8 horas", completed: false },
    { id: 3, name: "Entregar pedidos pendientes", completed: false },
  ];

  const { tasks, createTask, deleteTask, updateTask } = useTaskManager(
    initialTasks
  );

  return (
    <div>
      <Header />
      <TaskList
        tasks={tasks}
        createTask={createTask}
        deleteTask={deleteTask}
        updateTask={updateTask}
      />
    </div>
  );
}

export default App;

