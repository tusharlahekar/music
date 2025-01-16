import { Artist } from '../types';

export const taylorSwift: Artist = {
  id: 'taylor-swift',
  name: 'Taylor Swift',
  imageUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=400&fit=crop',
  albums: [
    {
      id: 'midnights',
      title: 'Midnights',
      year: 2022,
      imageUrl: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop',
      tracks: [
        {
          id: 'midnights-1',
          title: 'Lavender Haze',
          artist: 'Taylor Swift',
          duration: '3:22',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
          imageUrl: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop'
        },
        {
          id: 'midnights-2',
          title: 'Anti-Hero',
          artist: 'Taylor Swift',
          duration: '3:20',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
          imageUrl: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?w=400&h=400&fit=crop'
        }
      ]
    },
    {
      id: '1989',
      title: '1989',
      year: 2014,
      imageUrl: 'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=400&h=400&fit=crop',
      tracks: [
        {
          id: '1989-1',
          title: 'Shake It Off',
          artist: 'Taylor Swift',
          duration: '3:39',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
          imageUrl: 'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=400&h=400&fit=crop'
        },
        {
          id: '1989-2',
          title: 'Blank Space',
          artist: 'Taylor Swift',
          duration: '3:51',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
          imageUrl: 'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=400&h=400&fit=crop'
        }
      ]
    }
  ]
};