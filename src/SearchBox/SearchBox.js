import React, { useState } from "react";
import './SearchBox.css'
function SearchBox(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      fetch(`http://localhost/search.php?searchTerm=${searchTerm}`)
        .then((response) => {return response.json()})
        .then((data) => {
            let datajson=JSON.parse(data)
            console.log(datajson)
            props.onSearch(datajson.results);})
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="SearchBoxContainer">
        <form onSubmit={handleSubmit} className="SearchBox"> 
            <input
                className="SearchBoxInput"
                type="text"
                placeholder="Search for a movie..."
                value={searchTerm}
                onChange={handleChange}/>
            <button className="SearchBoxButton" type="submit">Search</button>
        </form>
    </div>
  );
}

export default SearchBox;
