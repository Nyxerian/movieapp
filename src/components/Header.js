import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/">Movie App</Link>
          </div>

          <ul className="nav-links">
            <li>
              <Link to="/WatchList">Watch List</Link>
            </li>

            <li>
              <Link to="/FavoritesList">Favorites</Link>
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
