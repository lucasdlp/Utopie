import React, { useEffect } from "react";

const Games = () => {
  useEffect(() => {
    document.title = "Utopie - Jeux";
  });

  return <div className="content"></div>;
};

export default Games;
