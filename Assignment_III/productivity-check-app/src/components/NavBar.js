import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Productivity Tracker</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
      </div>
    </nav>
  );
}

export default Navbar;
