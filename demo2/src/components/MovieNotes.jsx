import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const MovieNotes = ({ movie, onClose }) => {
  const { updateNotes } = useContext(MovieContext);
  const [notes, setNotes] = useState(movie.notes || '');
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    updateNotes(movie.id, notes);
    setIsEditing(false);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content notes-modal">
        <h2>Notes for {movie.title}</h2>
        {isEditing ? (
          <div className="form-group">
            <textarea
              rows="8"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <div className="modal-actions">
              <button className="btn-secondary" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
              <button className="btn-primary" onClick={handleSave}>
                Save Notes
              </button>
            </div>
          </div>
        ) : (
          <div className="notes-view-content">
            <p className="full-notes-text">{movie.notes || 'No notes available for this movie.'}</p>
            <div className="modal-actions">
              <button className="btn-secondary" onClick={onClose}>
                Close
              </button>
              <button className="btn-primary" onClick={() => setIsEditing(true)}>
                Edit Notes
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieNotes;