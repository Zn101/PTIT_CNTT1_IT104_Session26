import { Outlet, Link } from "react-router-dom";

export default function Teams() {
  console.log("Rendering Teams");
  return (
    <div>
      <h2>Teams Page</h2>
      <nav>
        <ul>
          <li><Link to="1">Team 1</Link></li>
          <li><Link to="2">Team 2</Link></li>
          <li><Link to="3">Team 3</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

