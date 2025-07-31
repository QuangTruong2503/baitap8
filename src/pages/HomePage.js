// src/App.js
import React from 'react';
import MovieCard from '../components/MovieCard';

const sampleMovies = [
  {
    title: 'Avengers: Endgame',
    description: 'Superheroes assemble to defeat Thanos and save the universe.',
    posterUrl: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SL1500_.jpg'
  },
  {
    title: 'Interstellar',
    description: 'A journey through space and time to save humanity.',
    posterUrl: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg'
  },
  {
    title: 'Inception',
    description: 'A thief steals secrets through the use of dream-sharing technology.',
    posterUrl: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SL1500_.jpg'
  }
];

function HomePage() {
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-5">🎬 Movie Homepage</h1>
      <div className="row">
        {sampleMovies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            description={movie.description}
            posterUrl={movie.posterUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
