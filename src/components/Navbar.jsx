import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-secondary flex flex-col align-left w-1/6 h-screen px-5 py-5 fixed">
      <div className="mb-8">
        <NavLink className="nav_link" to="/">
          <img className="w-44" src="assets/logo.svg" alt="Utopie" />
        </NavLink>
      </div>
      <ul className="nav_links flex flex-col gap-7 ml-5">
        <li>
          <NavLink className="nav_link" to="/">
            <img src="assets/svg/home.svg" alt="Menu" />
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_link" to="/games">
            <img src="assets/svg/games.svg" alt="jeux" />
            Jeux
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_link" to="/tutoriel">
            <img src="assets/svg/tutorial.svg" alt="Tutoriel" />
            Tutoriel
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_link" to="/dmca">
            <img src="assets/svg/dmca.svg" alt="DMCA" /> DMCA
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_link" to="/support">
            <img src="assets/svg/support.svg" alt="Support" />
            Support
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
