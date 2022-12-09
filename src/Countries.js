import React, { useEffect, useState } from "react";
import Search from "./Search";

const Countries = () => {

   
        const [countries, setCountries] = useState();
        const [countriesAll, setCountriesAll] = useState();

        useEffect(() => {
            fetch("https://restcountries.eu/rest/v2/all")
            .then((response) => response.json()
            .then((data) => {
                setCountries(data);
                setCountriesAll(data);
            }))
        }, [] );
       
       function search(searchValue) {
         setCountries(
           countriesAll.filter((country) =>
             country.name.toLowerCase().includes(searchValue.toLowerCase())
           )
         );
       }
    
    return(
        <div className="App-content">
            <Search searchFunc={search}/>
        </div>
    );
};
export default Countries;