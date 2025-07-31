// src/components/MovieCard.js
import React from 'react';

const MovieCard = ({ title, description, posterUrl }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow">
        <img src={posterUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
