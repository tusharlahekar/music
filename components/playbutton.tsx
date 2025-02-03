import React from 'react';
import { Play, Pause } from 'lucide-react';
import { useAudio } from '../context/AudioContext';
import type { Track } from '../context/AudioContext';

interface PlayButtonProps {
  track: Track;
  size?: 'sm' | 'lg';
}

const PlayButton = ({ track, size = 'lg' }: PlayButtonProps) => {
  const { currentTrack, isPlaying, playTrack } = useAudio();
  const isCurrentTrack = currentTrack?.id === track.id;

  return (
    <button
      onClick={() => playTrack(track)}
      className={`${
        size === 'lg' ? 'p-3' : 'p-2'
      } bg-green-500 rounded-full hover:scale-105 transition shadow-lg`}
    >
      {isCurrentTrack && isPlaying ? (
        <Pause className={`${size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} text-black`} fill="black" />
      ) : (
        <Play className={`${size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'} text-black`} fill="black" />
      )}
    </button>
  );
};

export default PlayButton;
