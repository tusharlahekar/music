import { Artist } from '../types';

export const theWeeknd: Artist = {
  id: 'the-weeknd',
  name: 'The Weeknd',
  imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
  albums: [
    {
      id: 'starboy',
      title: 'Starboy',
      year: 2016,
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop',
      tracks: [
        {
          id: 'weeknd-1',
          title: 'Starboy',
          artist: 'The Weeknd',
          duration: '3:50',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
          imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop'
        },
        {
          id: 'weeknd-2',
          title: 'Die For You',
          artist: 'The Weeknd',
          duration: '4:20',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
          imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop'
        }
      ]
    }
  ]
};