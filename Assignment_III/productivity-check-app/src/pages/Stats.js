function Stats() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const highPriority = tasks.filter((task) => task.priority === "High").length;
  const mediumPriority = tasks.filter((task) => task.priority === "Medium").length;
  const lowPriority = tasks.filter((task) => task.priority === "Low").length;

  const studyCount = tasks.filter((task) => task.category === "Study").length;
  const workCount = tasks.filter((task) => task.category === "Work").length;
  const healthCount = tasks.filter((task) => task.category === "Health").length;
  const personalCount = tasks.filter((task) => task.category === "Personal").length;

  return (
    <div className="container">
      <h1 className="page-title">Progress Stats</h1>

      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Tasks</h3>
          <p>{totalTasks}</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p>{completedTasks}</p>
        </div>
        <div className="stat-card">
          <h3>Pending</h3>
          <p>{pendingTasks}</p>
        </div>
      </div>

      <div className="stats-section">
        <h2>Priority Breakdown</h2>
        <p>High: {highPriority}</p>
        <p>Medium: {mediumPriority}</p>
        <p>Low: {lowPriority}</p>
      </div>

      <div className="stats-section">
        <h2>Category Breakdown</h2>
        <p>Study: {studyCount}</p>
        <p>Work: {workCount}</p>
        <p>Health: {healthCount}</p>
        <p>Personal: {personalCount}</p>
      </div>
    </div>
  );
}

export default Stats;
