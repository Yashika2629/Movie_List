import { defaultMovies } from '../data/defaultMovies';

const STORAGE_KEY = 'movie_watchlist_data';

export const getStoredMovies = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      return defaultMovies;
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : defaultMovies;
  } catch (error) {
    console.error('Failed to load movies from localStorage', error);
    return defaultMovies;
  }
};

export const saveStoredMovies = (movies) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  } catch (error) {
    console.error('Failed to save movies to localStorage', error);
  }
};