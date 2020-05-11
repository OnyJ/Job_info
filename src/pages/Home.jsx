import React from "react";

const Home = () => {
  return (
    <>
      <h1>Job Informer</h1>
      <h2>Ton site de renseignements sur les métiers</h2>
      <form>
        <input type="text" placeholder="Nom du métier"></input>
        <input type="submit" value="Rechercher"></input>
      </form>
    </>
  );
};

export default Home;
