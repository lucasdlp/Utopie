import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-col align-left">
      <div>
        <h1 className="text-4xl font-medium">Utopie</h1>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/">Tutoriel</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/">DMCA</NavLink>{" "}
        </li>
        <li>
          <NavLink to="/">Support</NavLink>{" "}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
