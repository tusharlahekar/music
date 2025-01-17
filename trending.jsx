import { Playlist } from '../types';

export const trendingPlaylist: Playlist = {
  id: 'trending',
  title: 'Top Trending Songs',
  description: 'The hottest tracks right now',
  imageUrl: 'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop',
  tracks: [
    {
      id: 'trending-1',
      title: 'Last Night',
      artist: 'Morgan Wallen',
      duration: '2:50',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    },
    {
      id: 'trending-2',
      title: 'Flowers',
      artist: 'Miley Cyrus',
      duration: '3:20',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop'
    }
    // ... more trending tracks
  ]
};