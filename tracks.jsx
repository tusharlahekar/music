import { Track } from './types';
import { taylorSwift } from './artists/taylorSwift';
import { edSheeran } from './artists/edSheeran';
import { theWeeknd } from './artists/theWeeknd';
import { trendingPlaylist } from './playlists/trending';

// Flatten all tracks from artists' albums
const taylorSwiftTracks = taylorSwift.albums.flatMap(album => album.tracks);
const edSheeranTracks = edSheeran.albums.flatMap(album => album.tracks);
const weekndTracks = theWeeknd.albums.flatMap(album => album.tracks);

// Combine all tracks
export const tracks: Track[] = [
  ...trendingPlaylist.tracks,
  ...taylorSwiftTracks,
  ...edSheeranTracks,
  ...weekndTracks,
  {
    id: 'lofi-1',
    title: 'Lofi Study',
    artist: 'Lofi Beats',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=300&fit=crop'
  },
  {
    id: 'ambient-1',
    title: 'Deep Focus',
    artist: 'Ambient Tracks',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop'
  }
];