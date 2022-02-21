import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { MovieCard } from "./MovieCard";

export const FavoritesList = () => {
  const { faves } = useContext(GlobalContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Favorites</h1>

          <span className="count-pill">
            {faves.length} {faves.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {faves.length > 0 ? (
          <div className="movie-grid">
            {faves.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="faves" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">You have no Favorite Movies! Add some!</h2>
        )}
      </div>
    </div>
  );
};
