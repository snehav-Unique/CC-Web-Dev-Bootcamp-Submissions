function FilterBar({ filter, setFilter, sortBy, setSortBy }) {
  return (
    <div className="filter-bar">
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="All">All Tasks</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
        <option value="Study">Study</option>
        <option value="Work">Work</option>
        <option value="Health">Health</option>
        <option value="Personal">Personal</option>
      </select>

      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="default">Sort: Default</option>
        <option value="priority">Sort: Priority</option>
        <option value="deadline">Sort: Deadline</option>
      </select>
    </div>
  );
}

export default FilterBar;
