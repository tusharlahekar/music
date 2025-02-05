import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import { tracks } from '../data/tracks';
import PlayButton from '../components/PlayButton';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredTracks = tracks.filter(track => 
    track.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    track.artist.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="relative mb-8">
        <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="What do you want to listen to?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full max-w-md pl-12 pr-4 py-3 bg-[#242424] text-white rounded-full focus:outline-none focus:ring-2 focus:ring-white"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredTracks.map((track) => (
          <div
            key={track.id}
            className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-colors group"
          >
            <div className="relative">
              <img
                src={track.imageUrl}
                alt={track.title}
                className="w-full aspect-square object-cover rounded-md mb-4"
              />
              <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                <PlayButton track={track} />
              </div>
            </div>
            <h3 className="text-white font-semibold mb-1">{track.title}</h3>
            <p className="text-gray-400 text-sm">{track.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
