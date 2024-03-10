import { useEffect } from "react";
import SearchBar from "../components/SearchBar";

const Home = () => {
  useEffect(() => {
    document.title = "Utopie - Accueil";
  });

  return (
    <div className="content">
      <SearchBar />
      <main></main>
    </div>
  );
};

export default Home;
