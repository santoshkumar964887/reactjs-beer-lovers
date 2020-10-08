import React from "react";
import { Link } from "react-router-dom";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Beer Lovers</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/favorite">
                Favorites <FavoriteSharpIcon className="faviort-icon" />
              </Link>
            </li>

            <li>
              <Link to="/" className="btn btn-main">
                Search
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
