import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="content">
      <main className="page404 flex flex-col items-center justify-center gap-3 ">
        <h1 className="font-bold text-5xl">Erreur 404</h1>
        <h2 className="text-xl">La page que vous avez demandé n'existe pas</h2>
        <NavLink
          className="border-2 border-white p-2 rounded-lg hover:bg-white hover:text-primary 
          transition-all"
          to="/"
        >
          Retourner à l'accueil
        </NavLink>
      </main>
    </div>
  );
};

export default NotFound;
