import React from 'react';
import Countries from './Countries';
//import './App.css';
import countriesAll from "./countriesAll.json";



function App() {
  return (
    <div>
      <Countries />
      <ul>
        {countriesAll.map((country, key) => {
          return <p key={key}>{country.name}</p>;
        })}
      </ul>
    </div>
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