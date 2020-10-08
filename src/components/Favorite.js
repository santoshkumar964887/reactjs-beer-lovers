import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { ItemCard } from "./ItemCard";

const Favorite = () => {
  const { favourite } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading"> Your Favorites</h1>
        </div>

        {favourite.length > 0 ? (
          <div className="movie-grid">
            {favourite.map((beer) => (
              <ItemCard beer={beer} key={beer.id} />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No Beer in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
export default Favorite;
