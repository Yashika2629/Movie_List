import React, { useState, useContext } from 'react';
import { MovieContext } from '../context/MovieContext';

const EditMovie = ({ movie, onClose }) => {
  const { editMovie } = useContext(MovieContext);

  const [title, setTitle] = useState(movie.title || '');
  const [poster, setPoster] = useState(movie.poster || '');
  const [year, setYear] = useState(movie.year || '');
  const [rating, setRating] = useState(movie.rating ?? '');
  const [watchStatus, setWatchStatus] = useState(movie.watchStatus || 'To Watch');
  const [personalStatus, setPersonalStatus] = useState(movie.personalStatus || 'Neither');
  const [notes, setNotes] = useState(movie.notes || '');
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

    editMovie({
      ...movie,
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
        <h2>Edit Movie</h2>
        {error && <div className="error-banner">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Movie Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Poster Image URL or Upload</label>
            <div className="poster-url-container" style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
              <input
                type="text"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
                placeholder="Image URL"
                style={{ flex: 1 }}
              />
              <button
                type="button"
                className="btn-secondary"
                onClick={() => {
                  const searchQuery = title ? `${title} movie poster` : 'movie poster';
                  window.open(`https://www.google.com/search?tbm=isch&q=${encodeURIComponent(searchQuery)}`, '_blank');
                }}
                title="Search Google Images"
                style={{ whiteSpace: 'nowrap', padding: '0.5rem 0.75rem' }}
              >
                🔍 Search Google
              </button>
            </div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
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
                step="0.1"
                min="1"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
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
            <label>Notes</label>
            <textarea
              rows="4"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Update Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditMovie;