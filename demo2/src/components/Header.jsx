import React from 'react';

const Header = ({ onOpenAdd, onToggleSidebar }) => {
  return (
    <header className="app-header">
      <div className="header-left">
        <button className="hamburger-btn" onClick={onToggleSidebar} title="Toggle Menu">
          ☰
        </button>
        <div className="header-title">
          <h1>My Movie Watchlist</h1>
          <p>Track your personal cinematic journey</p>
        </div>
      </div>
      <button className="btn-primary" onClick={onOpenAdd}>
        + Add <span className="btn-text-extra">Movie</span>
      </button>
    </header>
  );
};

export default Header;