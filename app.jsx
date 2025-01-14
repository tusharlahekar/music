import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Home from './pages/Home';
import Search from './pages/Search';
import { AudioProvider } from './context/AudioContext';

function App() {
  return (
    <AudioProvider>
      <Router>
        <div className="h-screen flex flex-col bg-black">
          <div className="flex-1 flex overflow-hidden">
            <Sidebar />
            <main className="flex-1 bg-gradient-to-b from-[#1e1e1e] to-[#121212] overflow-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </main>
          </div>
          <Player />
        </div>
      </Router>
    </AudioProvider>
  );
}

export default App;