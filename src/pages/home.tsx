import React from 'react';
import { Play } from 'lucide-react';
import { tracks } from '../data/tracks';
import PlayButton from '../components/PlayButton';

const Home = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-white mb-6">Good afternoon</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="flex items-center bg-[#282828] hover:bg-[#3e3e3e] transition-colors rounded-md overflow-hidden cursor-pointer group"
          >
            <img src={track.imageUrl} alt={track.title} className="h-20 w-20" />
            <span className="text-white font-semibold px-4">{track.title}</span>
            <div className="ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayButton track={track} size="sm" />
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-white mb-6">Recently Played</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {tracks.map((track) => (
          <div
            key={track.id}
            className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-colors cursor-pointer group"
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
  )
};

export default Home;
