import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: 10 }}>
      <Link to="/">Home</Link>
      <Link to="/redux">Redux</Link>
    </nav>
  );
}

export default Navbar;
