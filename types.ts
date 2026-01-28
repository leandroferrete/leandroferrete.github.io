export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface Game {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  gameUrl: string; // URL to the hosted HTML5 game (iframe source)
  genre: string;
  engine: string;
}

export enum Section {
  HERO = 'home',
  SOFTWARE = 'software',
  GAMES = 'games',
  EXPERIENCE = 'experience',
  CONTACT = 'contact'
}