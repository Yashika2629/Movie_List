import React from 'react';

const Header = ({ onOpenAdd }) => {
  return (
    <header className="app-header">
      <div className="header-title">
        <h1>My Movie Watchlist</h1>
        <p>Track your personal cinematic journey</p>
      </div>
      <button className="btn-primary" onClick={onOpenAdd}>
        + Add Movie
      </button>
    </header>
  );
};

export default Header;