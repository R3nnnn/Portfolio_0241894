import React, { useState } from 'react';
import './Card.css';
import Details from './Details';

function Card({ movie }) {
  const [details, setDetails] = useState(false);
  const [name, setName] = useState(false);
  const [logo, setLogo] = useState(false);
  const [comments, setComments] = useState([]);
  const handleMoreClick = () => {
    setDetails(!details);
  };

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };
  return (
    <div className="col-6 col-md-4">
      <div className="card">
        <img
          src={`./images/${movie.poster}`}
          className="card-img-top"
          alt={movie.title}
          onMouseOver={() => setLogo(true)}
          onMouseOut={() => setLogo(false)}
        />
        <div className="card-body">
          <h5
            className={`card-title ${name ? getAffiliationColor(movie.best_character.affiliation) : ''}`}
            onMouseOver={() => setName(true)}
            onMouseOut={() => setName(false)}
          >
            {movie.title}
          </h5>
          <h6 className="card-subtitle">{movie.year}</h6>
          <a href="#" className="card-link" onClick={handleMoreClick}>More...</a>
          {details && (
            <Details
              movie={movie}
              onCommentSubmit={handleCommentSubmit}
              comments={comments}
            />
          )}
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