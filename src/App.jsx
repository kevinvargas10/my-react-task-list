import React, { useState, useEffect } from 'react';


const App = () => {
 
  const [tasks, setTasks] = useState([]);
  
  const addTask = (description) => {
    const newTask = { description, completed: false };
    setTasks([...tasks, newTask]);
  };
 
  const toggleTaskCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompleted(index)}
              />
              {task.description}
            </label>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Ingrese una Tarea"
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value.trim() !== '') {
              addTask(e.target.value.trim());
              e.target.value = '';
            }
          }}
        />
      </div>
    </div>
  );
};

export default App;

