import React, { useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const DeleteConfirmation = ({ movie, onClose }) => {
  const { deleteMovie } = useContext(MovieContext);

  const handleDelete = () => {
    deleteMovie(movie.id);
    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content confirm-modal">
        <h3>Are you sure?</h3>
        <p>Do you want to delete <strong>{movie.title}</strong> from your watchlist?</p>
        <div className="modal-actions">
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-danger" onClick={handleDelete}>
            Yes, Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmation;