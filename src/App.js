import React from 'react';
//import './App.css';
import countriesAll from "./countriesAll.json";

function App() {
  return (
   <ul>
    {countriesAll.map((country, key) => {
      return <p key={key}>{country.name}</p>
    })}
   </ul>
  );
}

export default App;
/* <div className="App">
      {countriesAll.map((country, key) => {
        return (<div className="" key={key}>
          <p>{country.name.common}</p>
        </div>);
})}
    </div>
    */