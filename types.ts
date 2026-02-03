
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
}

export interface MemoryItem {
  id: number;
  type: 'image' | 'video';
  url: string;
  caption: string;
  size: 'small' | 'medium' | 'large';
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}
