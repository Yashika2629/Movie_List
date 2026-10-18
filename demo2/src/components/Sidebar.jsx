import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && <div className="sidebar-backdrop" onClick={onClose} />}
      <aside className={`app-sidebar ${isOpen ? 'mobile-open' : ''}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button className="close-sidebar-btn" onClick={onClose} title="Close Menu">
            ✕
          </button>
        </div>
        <nav className="sidebar-nav">
          <NavLink
            to="/"
            end
            onClick={onClose}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            🎬 All Movies
          </NavLink>
          <NavLink
            to="/to-watch"
            onClick={onClose}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            ⏳ To Watch
          </NavLink>
          <NavLink
            to="/watched"
            onClick={onClose}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            ✅ Watched
          </NavLink>
          <NavLink
            to="/favourites"
            onClick={onClose}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            ⭐ Favourites
          </NavLink>
          <NavLink
            to="/hated"
            onClick={onClose}
            className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
          >
            ❌ Hated
          </NavLink>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;