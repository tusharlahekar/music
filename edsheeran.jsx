import { Artist } from '../types';

export const edSheeran: Artist = {
  id: 'ed-sheeran',
  name: 'Ed Sheeran',
  imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop',
  albums: [
    {
      id: 'subtract',
      title: '-',
      year: 2023,
      imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop',
      tracks: [
        {
          id: 'ed-1',
          title: 'Eyes Closed',
          artist: 'Ed Sheeran',
          duration: '3:13',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
          imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
        },
        {
          id: 'ed-2',
          title: 'Life Goes On',
          artist: 'Ed Sheeran',
          duration: '3:39',
          audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
          imageUrl: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop'
        }
      ]
    }
  ]
};