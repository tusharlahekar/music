import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-black h-full flex flex-col">
      <div className="p-6">
        <h1 className="text-white text-2xl font-bold mb-8">Musicify</h1>
        
        <nav className="space-y-4">
          <Link
            to="/"
            className={`flex items-center ${
              location.pathname === '/' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Home className="h-6 w-6 mr-3" />
            Home
          </Link>
          <Link
            to="/search"
            className={`flex items-center ${
              location.pathname === '/search' ? 'text-white' : 'text-gray-300 hover:text-white'
            }`}
          >
            <Search className="h-6 w-6 mr-3" />
            Search
          </Link>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Library className="h-6 w-6 mr-3" />
            Your Library
          </a>
        </nav>

        <div className="mt-8 space-y-4">
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <PlusSquare className="h-6 w-6 mr-3" />
            Create Playlist
          </a>
          <a href="#" className="flex items-center text-gray-300 hover:text-white">
            <Heart className="h-6 w-6 mr-3" />
            Liked Songs
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
