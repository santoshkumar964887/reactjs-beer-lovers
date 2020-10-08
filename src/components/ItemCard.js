import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import "../lib/font-awesome/css/style.css";
import LinesEllipsis from "react-lines-ellipsis";
import StarsIcon from "@material-ui/icons/Stars";
export const ItemCard = ({ beer }) => {
  const { removeFromfavourite } = useContext(GlobalContext);

  return (
    <div className="result-card">
      <Link to={`/movie/${beer.id}`}></Link>
      <div className="poster-wrappers1">
        <button className="btn2">
          <StarsIcon onClick={() => removeFromfavourite(beer.id)} />
        </button>

        <div>
          {beer.image_url ? (
            <img
              className="poster1"
              src={beer.image_url}
              alt={`${beer.name} Poster`}
            />
          ) : (
            <div className="filler-poster" />
          )}
        </div>
        <div className="title">
          <h3>{beer.name}</h3>

          <LinesEllipsis
            text={beer.description}
            maxLine="3"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      </div>
    </div>
  );
};
