import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { AiOutlineHeart } from 'react-icons/ai'
import { IoHeartDislikeOutline } from 'react-icons/io5'

export const MovieControls = ({ type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieTofaves,
    moveToWatchlist,
    removeFromfaves,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button className="ctrl-btn" onClick={() => addMovieTofaves(movie)}>
            <AiOutlineHeart />
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "faves" && (
        <>
          <button className="ctrl-btn" onClick={() => moveToWatchlist(movie)}>
            <IoHeartDislikeOutline/>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeFromfaves(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
