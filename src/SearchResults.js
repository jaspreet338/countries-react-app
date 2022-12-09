import React from "react";

const SearchResults = ({results}) => {
    return ( 
    <>
    {
        results.map((country)=> (
            <div className="country" key={country.alpha3code}>
            <img src = {country.flag}
            alt = ""
            style = {{width: "250px", height: "220px"}}/>
            </div>
        ))
    }
    </>
           );
};
export default SearchResults;