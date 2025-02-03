import React from 'react';
import { Play, Heart } from 'lucide-react';

const MainContent = () => {
  const playlists = [
    {
      title: "Today's Top Hits",
      description: "Jung Kook is on top of the Hottest 50!",
      imageUrl: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
    },
    {
      title: "RapCaviar",
      description: "New music from Drake, Travis Scott and more",
      imageUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
    },
    {
      title: "All Out 2010s",
      description: "The biggest songs of the 2010s",
      imageUrl: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop"
    },
    {
      title: "Rock Classics",
      description: "Rock legends & epic songs",
      imageUrl: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="flex-1 bg-gradient-to-b from-[#1e1e1e] to-[#121212] overflow-auto">
      <div className="p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Good afternoon</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {playlists.slice(0, 6).map((playlist, index) => (
            <div
              key={index}
              className="flex items-center bg-[#282828] hover:bg-[#3e3e3e] transition-colors rounded-md overflow-hidden cursor-pointer group"
            >
              <img src={playlist.imageUrl} alt={playlist.title} className="h-20 w-20" />
              <span className="text-white font-semibold px-4">{playlist.title}</span>
              <div className="ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-green-500 rounded-full p-3 hover:scale-105 transition shadow-lg">
                  <Play className="h-5 w-5 text-black" fill="black" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-6">Made For You</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              className="bg-[#181818] p-4 rounded-md hover:bg-[#282828] transition-colors cursor-pointer group"
            >
              <div className="relative">
                <img
                  src={playlist.imageUrl}
                  alt={playlist.title}
                  className="w-full aspect-square object-cover rounded-md mb-4"
                />
                <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all shadow-lg hover:scale-105">
                  <Play className="h-5 w-5 text-black" fill="black" />
                </button>
              </div>
              <h3 className="text-white font-semibold mb-1">{playlist.title}</h3>
              <p className="text-gray-400 text-sm">{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
