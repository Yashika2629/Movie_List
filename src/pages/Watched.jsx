import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieList from '../components/MovieList';

const Watched = () => {
  const { movies } = useContext(MovieContext);
  const filtered = movies.filter((m) => m.watchStatus === 'Watched');
  return (
    <div className="page-container">
      <h2>Watched Movies</h2>
      <MovieList movies={filtered} emptyMessage="No watched movies found." />
    </div>
  );
};

export default Watched;