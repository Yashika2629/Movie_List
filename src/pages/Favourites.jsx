import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';
import MovieList from '../components/MovieList';

const Favourites = () => {
  const { movies } = useContext(MovieContext);
  const filtered = movies.filter((m) => m.personalStatus === 'Favourite');
  return (
    <div className="page-container">
      <h2>Favourite Movies</h2>
      <MovieList movies={filtered} emptyMessage="No favourite movies added yet." />
    </div>
  );
};

export default Favourites;