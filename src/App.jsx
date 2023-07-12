import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const tasks = [
    { id: 1, name: "Recoger la basura", completed: true },
    { id: 2, name: "Dormir 8 horas", completed: false },
    { id: 3, name: "Entregar pedidos pendientes", completed: false },
  ];

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
