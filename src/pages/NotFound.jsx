import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Erreur 404</h1>
        <h2>La page que vous avez demandée n'existe pas</h2>
        <NavLink to="/">Retourner à l'accueil</NavLink>
      </main>
    </div>
  );
};

export default NotFound;
