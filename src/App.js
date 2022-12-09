
import React, { useState } from "react";
import "./App.css";
import Country from "./Country";
import countriesAll from "./countriesAll.json"
import Options from "./Options";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [country, setCountry] = useState(countriesAll);
  const [clicked, setClicked] = useState(true);

  const clickHandler = () => {
    setClicked(!clicked);
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setCountry(
      country.filter((country) => {
        return country.name.toLowerCase().includes(value.toLowerCase());
      })
    );
  };

  return (
    <div className={clicked ? "countries" : "darkMode"}>
      <header>
        <h2>Where In The World?</h2>

        <button onClick={clickHandler}>
          Dark Mode <i class="fa-solid fa-moon"></i>
        </button>
      </header>
      <div className="select-search">
        <input
          type="text"
          placeholder="Search country..."
          value={searchTerm}
          onChange={handleSearch}
          className="input-search"
        ></input>
        <button className="glass">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
      <Options data={countriesAll} onSelecting={(country) => setCountry(country)} />
      <div>
        <div className="main">
          {country.map((country) => {
            return (
              <Country
                Flag={country.flag}
                Name={country.name}
                Population={country.population}
                Capital={country.capital}
                Region={country.region}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;