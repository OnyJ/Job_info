import React, { useState, useEffect } from "react";

// si plus de trois caracteres suggérer 5 liens
// en cliquant il atterit sur /job/uuiddujob

const Search = () => {
  const [request, setRequest] = useState("");

  useEffect(() => {
    console.log();
  }, [request]);

  const handleChange = (e) => {
    if (e.target.value.length > 2) {
      e.preventDefault();
      setRequest(e.target.value);
    }
  };

  const findRequest = () => {
    const URL_AUTOCOMPLETE =
      "http://api.dataatwork.org/v1/jobs/autocomplete?begins_with=";
    console.log(URL_AUTOCOMPLETE + request);

    fetch(URL_AUTOCOMPLETE + request)
      .then((response) => response.json())
      .then((response) => {
        for (let i = 0; i < 5; i++) {
          console.log(response[i].suggestion);
        }
        console.log();
        //
      });
  };

  return (
    <>
      <form onSubmit={findRequest()}>
        <input
          type="text"
          placeholder="Nom du métier"
          onChange={handleChange}
        ></input>
        <input type="submit" value="Rechercher"></input>
      </form>
    </>
  );
};

export default Search;

// autocomplete
