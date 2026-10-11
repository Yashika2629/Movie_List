import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies, emptyMessage }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="empty-state">
        <p>{emptyMessage || 'No movies found.'}</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;