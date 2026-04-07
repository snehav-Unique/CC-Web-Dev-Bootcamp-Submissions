function TaskCard({ task, tasks, setTasks }) {
  const handleToggle = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const handleDelete = () => {
    const updatedTasks = tasks.filter((t) => t.id !== task.id);
    setTasks(updatedTasks);
  };

  return (
    <div className={`task-card ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p><strong>Category:</strong> {task.category}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Deadline:</strong> {task.deadline || "No deadline"}</p>
      <p><strong>Status:</strong> {task.completed ? "Completed" : "Pending"}</p>

      <div className="task-actions">
        <button onClick={handleToggle}>
          {task.completed ? "Mark Pending" : "Mark Complete"}
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
