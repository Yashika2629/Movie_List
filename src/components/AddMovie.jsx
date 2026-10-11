import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const AddMovie = ({ onClose }) => {
  const { addMovie } = useContext(MovieContext);

  const [title, setTitle] = useState('');
  const [posterType, setPosterType] = useState('url');
  const [poster, setPoster] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [watchStatus, setWatchStatus] = useState('To Watch');
  const [personalStatus, setPersonalStatus] = useState('Neither');
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPoster(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Movie title is required.');
      return;
    }

    if (rating !== '') {
      const numRating = parseFloat(rating);
      if (isNaN(numRating) || numRating < 1 || numRating > 5) {
        setError('Rating must be a decimal between 1 and 5.');
        return;
      }
    }

    addMovie({
      title: title.trim(),
      poster: poster.trim(),
      year: year.trim(),
      rating: rating !== '' ? parseFloat(rating) : '',
      watchStatus,
      personalStatus,
      notes: notes.trim(),
    });

    onClose();
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Add New Movie</h2>
        {error && <div className="error-banner">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Movie Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Interstellar"
              required
            />
          </div>

          <div className="form-group">
            <label>Poster Source</label>
            <div className="poster-tabs">
              <button
                type="button"
                className={posterType === 'url' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => setPosterType('url')}
              >
                Image URL
              </button>
              <button
                type="button"
                className={posterType === 'file' ? 'tab-btn active' : 'tab-btn'}
                onClick={() => setPosterType('file')}
              >
                Upload File
              </button>
            </div>

            {posterType === 'url' ? (
              <input
                type="url"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
                placeholder="https://example.com/poster.jpg"
              />
            ) : (
              <input type="file" accept="image/*" onChange={handleFileChange} />
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Release Year</label>
              <input
                type="number"
                min="1900"
                max="2030"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="2026"
              />
            </div>
            <div className="form-group">
              <label>Rating (1 to 5)</label>
              <input
                type="number"
                // step="0.1"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                placeholder="4.5"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Watch Status</label>
              <select
                value={watchStatus}
                onChange={(e) => setWatchStatus(e.target.value)}
              >
                <option value="To Watch">To Watch</option>
                <option value="Watched">Watched</option>
                <option value="Neither">Neither</option>
              </select>
            </div>
            <div className="form-group">
              <label>Personal Status</label>
              <select
                value={personalStatus}
                onChange={(e) => setPersonalStatus(e.target.value)}
              >
                <option value="Neither">Neither</option>
                <option value="Favourite">Favourite</option>
                <option value="Hated">Hated</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Notes & Review</label>
            <textarea
              rows="4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Write your thoughts or review about the movie..."
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Save Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;