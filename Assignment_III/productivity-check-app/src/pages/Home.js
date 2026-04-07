import { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import FilterBar from "../components/FilterBar";
import FocusMode from "../components/FocusMode";
import ProgressSummary from "../components/ProgressSummary";

function Home() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1 className="page-title">Productivity Tracker</h1>
      <p className="subtitle">
        Track your work smarter with priorities, deadlines, focus mode, and stats.
      </p>

      <ProgressSummary tasks={tasks} />
      <TaskForm tasks={tasks} setTasks={setTasks} />
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <FocusMode tasks={tasks} />
      <TaskList
        tasks={tasks}
        setTasks={setTasks}
        filter={filter}
        sortBy={sortBy}
      />
    </div>
  );
}

export default Home;
