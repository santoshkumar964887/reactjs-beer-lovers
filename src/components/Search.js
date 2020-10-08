import React, { useState, useEffect } from "react";
import { ResultCard } from "./ResultCard";
import "../lib/font-awesome/css/style.css";
import SearchIcon from '@material-ui/icons/Search';
const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://api.punkapi.com/v2/beers?page=1&per_page=80")
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data);
        } else {
          setResults([]);
        }
      });
  }, []);
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);
  };

  const handleClick = () => {
    fetch(`https://api.punkapi.com/v2/beers?beer_name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data);
        } else {
          setResults([]);
        }
      });
  };
  console.log(results)
  return (
    <div>
      <div className="input-wrapper">
        <input
          className="input2"
          type="text"
          placeholder="Search for Beers"
          value={query}
          onChange={onChange}
        />
    
        <div>
          <button type="button" onClick={handleClick} className="btn btn-success" >
            <SearchIcon />
            <span id="btn-success" className="btn4">Search</span>
          </button>
        </div>
      </div>

      { results?(results.length > 0 ? (
        <ul className="results1">
          {results.map((beer) => (
            <li key={beer.id}>
              <ResultCard beer={beer} />
            </li>
          ))}
        </ul>
      ):<h2 style={{textAlign:'center'}}>Loading...</h2>):<h2 style={{textAlign:'center'}}>Result Not Found</h2>}
    </div>
  );
};
export default Search; 