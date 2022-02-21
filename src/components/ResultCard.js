import React, { useContext, useState } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToFaves,
    watchlist,
    faves,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMoviefaves = faves.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMoviefaves
    ? true
    : false;

  const favesDisabled = storedMoviefaves ? true : false;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ModalContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 20px 20px;
    justify-content: center;
    border-bottom: 1px solid lightgray;
  `;

  return (
    <>
      <div className="result-card">
        <div className="poster-wrapper">
          {movie.poster_path ? (
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={`${movie.title} Poster`}
            />
          ) : (
            <div className="filler-poster" />
          )}
        </div>

        <div className="info">
          <div className="header">
            <h3 className="title" onClick={handleShow}>{movie.title}</h3>
            <h4 className="release-date">
              <Moment format="YYYY">{movie.release_date}</Moment>
            </h4>
          </div>

          <div className="controls">
            <button
              className="btn"
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}
            >
              Add to Watchlist
            </button>

            <button
              className="btn"
              disabled={favesDisabled}
              onClick={() => addMovieToFaves(movie)}
            >
              Add to faves
            </button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>More Information</Modal.Title>
        </Modal.Header>
        <ModalContainer>
        <Modal.Body>More information 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </ModalContainer>        
      </Modal>
    </>
  );
};
