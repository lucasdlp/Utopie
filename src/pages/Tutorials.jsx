import { useEffect } from "react";

const Tutorials = () => {
  useEffect(() => {
    document.title = "Utopie - Tutoriels";
  });

  return <div className="content"></div>;
};

export default Tutorials;
