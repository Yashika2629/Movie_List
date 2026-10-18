import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import AddMovie from './components/AddMovie';

import AllMovies from './pages/AllMovies';
import ToWatch from './pages/ToWatch';
import Watched from './pages/Watched';
import Favourites from './pages/Favourites';
import Hated from './pages/Hated';

function App() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <MovieProvider>
      <Router>
        <div className="app-layout">
          <Header
            onOpenAdd={() => setIsAddOpen(true)}
            onToggleSidebar={() => setIsSidebarOpen((prev) => !prev)}
          />
          <div className="app-body">
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
            <main className="app-content">
              <Routes>
                <Route path="/" element={<AllMovies />} />
                <Route path="/to-watch" element={<ToWatch />} />
                <Route path="/watched" element={<Watched />} />
                <Route path="/favourites" element={<Favourites />} />
                <Route path="/hated" element={<Hated />} />
              </Routes>
            </main>
          </div>
          {isAddOpen && <AddMovie onClose={() => setIsAddOpen(false)} />}
        </div>
      </Router>
    </MovieProvider>
  );
}

export default App;