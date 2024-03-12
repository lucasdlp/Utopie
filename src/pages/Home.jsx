import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Utopie - Accueil";
  });

  return (
    <div>
      <main></main>
    </div>
  );
};

export default Home;
