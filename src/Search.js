import React, { useState } from 'react';
const Search = ({searchFunc}) =>{
    const[searchTerm, setSearchTerm] = useState("");

    function searchTermHandler(event) {
        setSearchTerm(event.target.value);
        searchFunc(event.target.value);

    }
return (
   <div>
    <input 
    type = "text"
    value={searchTerm}
    placeholder="Search for the country"
    onChange={searchTermHandler}/>
   </div> 
);
};
export default Search;