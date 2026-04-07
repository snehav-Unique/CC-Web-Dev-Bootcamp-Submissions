function FocusMode({ tasks }) {
  const priorityOrder = { High: 1, Medium: 2, Low: 3 };

  const pendingTasks = tasks.filter((task) => !task.completed);

  const focusTask = [...pendingTasks].sort(
    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
  )[0];

  return (
    <div className="focus-box">
      <h2>Focus Mode</h2>
      {focusTask ? (
        <p>
          Your most important task right now is:{" "}
          <strong>{focusTask.title}</strong> ({focusTask.priority} Priority)
        </p>
      ) : (
        <p>No pending tasks left. Great job.</p>
      )}
    </div>
  );
}

export default FocusMode;
