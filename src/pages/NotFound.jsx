import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Erreur 404</h1>
      <h2>La page que vous avez demandée n'existe pas</h2>
      <NavLink to="/">Retourner à l'accueil</NavLink>
    </div>
  );
};

export default NotFound;
