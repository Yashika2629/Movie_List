import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="app-sidebar">
      <nav className="sidebar-nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          🎬 All Movies
        </NavLink>
        <NavLink to="/to-watch" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          ⏳ To Watch
        </NavLink>
        <NavLink to="/watched" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          ✅ Watched
        </NavLink>
        <NavLink to="/favourites" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          ⭐ Favourites
        </NavLink>
        <NavLink to="/hated" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          ❌ Hated
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;