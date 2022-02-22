import React, { useContext, useState } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { AiOutlineHeart } from 'react-icons/ai'
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import Rate from '../components/Rating';

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieTofaves,
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
  const [selectedMovie, setSelectedMovie] = useState();
  const [cast, setCast] = useState();

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    setSelectedMovie(movie);
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie.id}/credits?api_key=32bab9e20f1e44d9fce8f05bd0f37d8d`);
    const data = await res.json();
    setCast(data);
  }

  const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
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

          
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>{selectedMovie && selectedMovie.title}</Modal.Title>
        </Modal.Header>
        <ModalContainer>
        <Modal.Body>
          <h4>Overview</h4><br/>
          <p>{cast && movie.overview}</p>
          <Rate rate={Math.round(movie.vote_average / 2)}></Rate>
          
        </Modal.Body>
        <Modal.Footer>
        <div className="controls">
            <button
              className="btn"
              disabled={watchlistDisabled}
              onClick={() => addMovieToWatchlist(movie)}
            >
              Add to <i className="fa-fw far fa-eye"></i>
            </button>
            <span style={{marginLeft:4}}> {" "} </span>
            <button
              className="btn"
              disabled={favesDisabled}
              onClick={() => addMovieTofaves(movie)}
            >
              Add to <AiOutlineHeart />
            </button>
          </div>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </ModalContainer>        
      </Modal>
    </>
  );
};
