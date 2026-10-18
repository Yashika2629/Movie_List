import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieList from '../components/MovieList';

const ToWatch = () => {
  const { movies } = useContext(MovieContext);
  const filtered = movies.filter((m) => m.watchStatus === 'To Watch');
  return (
    <div className="page-container">
      <h2>To Watch</h2>
      <MovieList movies={filtered} emptyMessage="No movies marked as To Watch." />
    </div>
  );
};

export default ToWatch;