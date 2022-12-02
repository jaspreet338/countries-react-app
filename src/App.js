import React from 'react';
import './App.css';
import countriesAll from "./countriesAll.json";

function App() {
  return (
    <div className="App">
{countriesAll.map((country)=>(
  <div className="">
    <p>{country.name.common}</p>
    </div>
))}
    </div>
  );
}

export default App;
