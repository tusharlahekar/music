export interface Track {
    id: string;
    title: string;
    artist: string;
    audioUrl: string;
    imageUrl: string;
    duration?: string;
  }
  
  export interface Album {
    id: string;
    title: string;
    year: number;
    imageUrl: string;
    tracks: Track[];
  }
  
  export interface Artist {
    id: string;
    name: string;
    imageUrl: string;
    albums: Album[];
  }
  
  export interface Playlist {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    tracks: Track[];
  }