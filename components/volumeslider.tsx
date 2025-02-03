import React from 'react';
import { useAudio } from '../context/AudioContext';

const VolumeSlider = () => {
  const { setVolume } = useAudio();

  return (
    <input
      type="range"
      min="0"
      max="1"
      step="0.01"
      defaultValue="1"
      onChange={(e) => setVolume(parseFloat(e.target.value))}
      className="w-24 h-1 bg-gray-600 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white"
    />
  );
};

export default VolumeSlider;
