import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

// initial state
const initialState = {
  watchlist: localStorage.getItem("watchlist")
    ? JSON.parse(localStorage.getItem("watchlist"))
    : [],
  faves: localStorage.getItem("faves")
    ? JSON.parse(localStorage.getItem("faves"))
    : [],
};

// create context
export const GlobalContext = createContext(initialState);

// provider components
export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
    localStorage.setItem("faves", JSON.stringify(state.faves));
  }, [state]);

  // actions
  const addMovieToWatchlist = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
  };

  const removeMovieFromWatchlist = (id) => {
    dispatch({ type: "REMOVE_MOVIE_FROM_WATCHLIST", payload: id });
  };

  const addMovieTofaves = (movie) => {
    dispatch({ type: "ADD_MOVIE_TO_FAVES", payload: movie });
  };

  const moveToWatchlist = (movie) => {
    dispatch({ type: "MOVE_TO_WATCHLIST", payload: movie });
  };

  const removeFromfaves = (id) => {
    dispatch({ type: "REMOVE_FROM_FAVES", payload: id });
  };

  return (
    <GlobalContext.Provider
      value={{
        watchlist: state.watchlist,
        faves: state.faves,
        addMovieToWatchlist,
        removeMovieFromWatchlist,
        addMovieTofaves,
        moveToWatchlist,
        removeFromfaves,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
