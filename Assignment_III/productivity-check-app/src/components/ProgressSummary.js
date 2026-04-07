function ProgressSummary({ tasks }) {
  const total = tasks.length;
  const completed = tasks.filter((task) => task.completed).length;
  const pending = total - completed;
  const progress = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="summary-box">
      <h2>Progress Overview</h2>
      <div className="summary-grid">
        <div>
          <h3>{total}</h3>
          <p>Total</p>
        </div>
        <div>
          <h3>{completed}</h3>
          <p>Completed</p>
        </div>
        <div>
          <h3>{pending}</h3>
          <p>Pending</p>
        </div>
        <div>
          <h3>{progress}%</h3>
          <p>Progress</p>
        </div>
      </div>
    </div>
  );
}

export default ProgressSummary;
