import React, { createContext, useState, useEffect } from 'react';
import { getStoredMovies, saveStoredMovies } from '../utils/localStorage';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState(() => getStoredMovies());

  useEffect(() => {
    saveStoredMovies(movies);
  }, [movies]);

  const addMovie = (newMovie) => {
    const movieWithId = { ...newMovie, id: Date.now().toString() };
    setMovies((prev) => [movieWithId, ...prev]);
  };

  const editMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((m) => (m.id === updatedMovie.id ? updatedMovie : m))
    );
  };

  const deleteMovie = (id) => {
    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  const updateNotes = (id, newNotes) => {
    setMovies((prev) =>
      prev.map((m) => (m.id === id ? { ...m, notes: newNotes } : m))
    );
  };

  return (
    <MovieContext.Provider
      value={{ movies, addMovie, editMovie, deleteMovie, updateNotes }}
    >
      {children}
    </MovieContext.Provider>
  );
};