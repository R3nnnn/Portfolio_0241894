import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Card.css';
import Details from './components/Details';

function Card({ movie }) {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const handleLike = () => {
    setLike(!like);
    if (dislike) {
      setDislike(false);
    }
  };
  const handleDislike = () => {
    setDislike(!dislike);
    if (liked) {
      setLike(false);
    }
  };
  return (
    <div className="col-6 col-md-4">
      <div className="card">
        <Link to={`/details/${movie.episode}`}>
          <img src={`./images/${movie.poster}`} className="card-img-top" alt={movie.title} />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{movie.year}</h6>
          <div className="thumbs-container">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className={`thumb-icon ${like ? 'liked' : ''}`}
              onClick={handleLike}
            />
            <FontAwesomeIcon
              icon={faThumbsDown}
              className={`thumb-icon ${dislike ? 'disliked' : ''}`}
              onClick={handleDislike}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;


function getAffiliationColor(affiliation) {
  switch (affiliation) {
    case 'Jedi':
    case 'Rebel':
      return 'blue-text';
    case 'Empire':
    case 'Sith':
      return 'red-text';
    default:
      return '';
  }
}