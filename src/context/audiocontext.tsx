import React, { createContext, useContext, useState, useRef } from 'react';

interface AudioContextType {
  currentTrack: Track | null;
  isPlaying: boolean;
  playTrack: (track: Track) => void;
  togglePlay: () => void;
  setVolume: (volume: number) => void;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  audioUrl: string;
  imageUrl: string;
}

const AudioContext = createContext<AudioContextType | null>(null);

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playTrack = async (track: Track) => {
    if (currentTrack?.id === track.id) {
      togglePlay();
      return;
    }
    
    setCurrentTrack(track);
    setIsPlaying(true);
    
    if (audioRef.current) {
      try {
        audioRef.current.src = track.audioUrl;
        await audioRef.current.play();
      } catch (error) {
        console.error('Error playing track:', error);
        setIsPlaying(false);
      }
    }
  };

  const togglePlay = async () => {
    if (!audioRef.current) return;
    
    try {
      if (isPlaying) {
        await audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error toggling playback:', error);
      setIsPlaying(false);
    }
  };

  const setVolume = (volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  };

  return (
    <AudioContext.Provider value={{ currentTrack, isPlaying, playTrack, togglePlay, setVolume }}>
      <audio 
        ref={audioRef}
        onError={() => {
          console.error('Audio loading error');
          setIsPlaying(false);
        }}
      />
      {children}
    </AudioContext.Provider>
  );
};

export const useAudio = () => {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
};
