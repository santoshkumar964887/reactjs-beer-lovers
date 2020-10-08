import React, { useState, useEffect,useCallback } from "react";
import { ResultCard } from "./ResultCard";
import "../lib/font-awesome/css/style.css";
import SearchIcon from "@material-ui/icons/Search";
import InfiniteScroll from "react-infinite-scroll-component";
const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://api.punkapi.com/v2/beers?page=${page}&per_page=60`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults((d) => [...d, ...data]);
        } else {
          setResults([]);
        }
      });
  }, [page]);
  const onChange = useCallback((e) => {
    e.preventDefault();

    setQuery(e.target.value);
  },[]);

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

  const next = () => {
    setPage((page) => page + 1);
  };
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
          <button
            type="button"
            onClick={handleClick}
            className="btn btn-success"
          >
            <SearchIcon />
            <span id="btn-success" className="btn4">
              Search
            </span>
          </button>
        </div>
      </div>
      <InfiniteScroll dataLength={results.length} next={next} hasMore={true}>
        {results ? (
          results.length > 0 ? (
            <ul className="results1">
              {results.map((beer) => (
                <li key={beer.id}>
                  <ResultCard beer={beer} />
                </li>
              ))}
            </ul>
          ) : (
            <h2 style={{ textAlign: "center" }}>Loading...</h2>
          )
        ) : (
          <h2 style={{ textAlign: "center" }}>Result Not Found</h2>
        )}
      </InfiniteScroll>
    </div>
  );
};
export default Search;
