import { useEffect } from "react";
import { useState } from "react";
import Countrie from "./Countrie";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h3>Total Countries: {countries.length}</h3>
      {countries.map((countrie) => (
        <Countrie countrie={countrie}></Countrie>
      ))}
    </div>
  );
};

export default Countries;
