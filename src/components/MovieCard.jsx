import React, { useState } from 'react';
import MovieNotes from './MovieNotes';
import EditMovie from './EditMovie';
import DeleteConfirmation from './DeleteConfirmation';

const MovieCard = ({ movie }) => {
  const [isNotesOpen, setIsNotesOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  const truncateNotes = (text) => {
    if (!text) return 'No notes added yet...';
    return text.length > 90 ? text.substring(0, 90) + '...' : text;
  };

  return (
    <>
      <div className="movie-card">
        <div className="movie-poster-container">
          <img
            src={movie.poster || 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&auto=format&fit=crop&q=60'}
            alt={movie.title}
            className="movie-poster"
          />
          <div className="movie-badges">
            {movie.watchStatus && movie.watchStatus !== 'Neither' && (
              <span className={`badge ${movie.watchStatus === 'Watched' ? 'badge-watched' : 'badge-towatch'}`}>
                {movie.watchStatus}
              </span>
            )}
            {movie.personalStatus && movie.personalStatus !== 'Neither' && (
              <span className={`badge ${movie.personalStatus === 'Favourite' ? 'badge-favourite' : 'badge-hated'}`}>
                {movie.personalStatus === 'Favourite' ? '⭐ Fav' : '❌ Hated'}
              </span>
            )}
          </div>
        </div>

        <div className="movie-info">
          <div className="movie-header-row">
            <h3 className="movie-title">{movie.title || 'Untitled Movie'}</h3>
            <span className="movie-year">{movie.year || 'N/A'}</span>
          </div>

          <div className="movie-rating">
            ⭐ {movie.rating ? `${movie.rating} / 5` : 'Unrated'}
          </div>

          <div className="movie-notes-preview" onClick={() => setIsNotesOpen(true)} title="Click to read full notes">
            <p>{truncateNotes(movie.notes)}</p>
          </div>

          <div className="movie-actions">
            <button className="btn-icon" onClick={() => setIsEditOpen(true)} title="Edit Movie">
              ✏️ Edit
            </button>
            <button className="btn-icon" onClick={() => setIsNotesOpen(true)} title="View Notes">
              📝 Notes
            </button>
            <button className="btn-icon btn-delete" onClick={() => setIsDeleteOpen(true)} title="Delete Movie">
              🗑️ Delete
            </button>
          </div>
        </div>
      </div>

      {isNotesOpen && <MovieNotes movie={movie} onClose={() => setIsNotesOpen(false)} />}
      {isEditOpen && <EditMovie movie={movie} onClose={() => setIsEditOpen(false)} />}
      {isDeleteOpen && <DeleteConfirmation movie={movie} onClose={() => setIsDeleteOpen(false)} />}
    </>
  );
};

export default MovieCard;