import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieList from '../components/MovieList';

const Hated = () => {
  const { movies } = useContext(MovieContext);
  const filtered = movies.filter((m) => m.personalStatus === 'Hated');
  return (
    <div className="page-container">
      <h2>Hated Movies</h2>
      <MovieList movies={filtered} emptyMessage="No hated movies in your list." />
    </div>
  );
};

export default Hated;