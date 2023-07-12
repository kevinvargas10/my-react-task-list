const Task = ({ task }) => {
  return (
    <li>
      <span>{task.name}</span>
      {task.completed ? (
        <span className="completed">☑</span>
      ) : (
        <span className="incomplete">☐</span>
      )}
    </li>
  );
};

export default Task;
