import TaskCard from "./TaskCard";

function TaskList({ tasks, setTasks, filter, sortBy }) {
  let filteredTasks = [...tasks];

  if (filter === "Completed") {
    filteredTasks = filteredTasks.filter((task) => task.completed);
  } else if (filter === "Pending") {
    filteredTasks = filteredTasks.filter((task) => !task.completed);
  } else if (filter !== "All") {
    filteredTasks = filteredTasks.filter((task) => task.category === filter);
  }

  if (sortBy === "priority") {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    filteredTasks.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  } else if (sortBy === "deadline") {
    filteredTasks.sort((a, b) => {
      if (!a.deadline) return 1;
      if (!b.deadline) return -1;
      return new Date(a.deadline) - new Date(b.deadline);
    });
  }

  return (
    <div className="task-list">
      {filteredTasks.length > 0 ? (
        filteredTasks.map((task) => (
          <TaskCard key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))
      ) : (
        <p className="empty-message">No tasks found.</p>
      )}
    </div>
  );
}

export default TaskList;
