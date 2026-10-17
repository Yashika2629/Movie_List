import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieList from '../components/MovieList';

const AllMovies = () => {
  const { movies } = useContext(MovieContext);
  return (
    <div className="page-container">
      <h2>All Movies</h2>
      <MovieList movies={movies} emptyMessage="No movies in your watchlist yet. Add one!" />
    </div>
  );
};

export default AllMovies;