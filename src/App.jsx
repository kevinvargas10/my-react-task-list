import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Tareas from "./components/Tareas";
import SobreNosotros from "./components/SobreNosotros";
import Menu from "./components/Menu";

function App() {
  const initialTasks = [
    { id: 1, name: "Recoger la basura", completed: true },
    { id: 2, name: "Dormir 8 horas", completed: false },
    { id: 3, name: "Entregar pedidos pendientes", completed: false },
  ];

  return (
    <Router>
      <div>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/tareas"
            element={<Tareas tasks={initialTasks} />}
          />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
