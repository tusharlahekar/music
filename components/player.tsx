import React from 'react';
import { SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import PlayButton from './PlayButton';
import VolumeSlider from './VolumeSlider';

const Player = () => {
  const { currentTrack } = useAudio();

  if (!currentTrack) return null;

  return (
    <div className="h-20 bg-[#181818] border-t border-[#282828] px-4 flex items-center justify-between">
      <div className="flex items-center w-1/3">
        <img
          src={currentTrack.imageUrl}
          alt={currentTrack.title}
          className="h-14 w-14 rounded"
        />
        <div className="ml-4">
          <div className="text-white text-sm">{currentTrack.title}</div>
          <div className="text-gray-400 text-xs">{currentTrack.artist}</div>
        </div>
      </div>
      
      <div className="flex flex-col items-center w-1/3">
        <div className="flex items-center space-x-6">
          <button className="text-gray-400 hover:text-white">
            <Shuffle className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <SkipBack className="h-5 w-5" />
          </button>
          <PlayButton track={currentTrack} />
          <button className="text-gray-400 hover:text-white">
            <SkipForward className="h-5 w-5" />
          </button>
          <button className="text-gray-400 hover:text-white">
            <Repeat className="h-5 w-5" />
          </button>
        </div>
      </div>
      
      <div className="flex items-center justify-end w-1/3 space-x-3">
        <Volume2 className="h-5 w-5 text-gray-400" />
        <VolumeSlider />
      </div>
    </div>
  );
};

export default Player;
