import { Experience, Game, Project } from './types';

// We now only keep structural data and non-translatable assets here.
// Text content has been moved to i18n.ts

type ExperienceMetadata = Omit<Experience, 'role' | 'description'>;
type ProjectMetadata = Omit<Project, 'title' | 'description'>;
type GameMetadata = Omit<Game, 'description'>;

export const EXPERIENCE_METADATA: ExperienceMetadata[] = [
  {
    id: '1',
    company: 'Performa_IT Solutions',
    period: 'Jun 2018 - Present',
    skills: [
      '.NET 6-8', 
      'C#', 
      'SQL Server', 
      'Clean Arch (DDD)', 
      'Azure/AWS', 
      'RabbitMQ/Kafka', 
      'Docker/K8s', 
      'CI/CD', 
      'ELK/Grafana', 
      'OpenAI/Gemini'
    ]
  },
  {
    id: '2',
    company: 'Appito',
    period: 'Feb 2017 - Feb 2018',
    skills: [
      '.NET Core', 
      'C#', 
      'Angular', 
      'TypeScript', 
      'Node.js', 
      'SQL Server', 
      'Machine Learning'
    ]
  },
  {
    id: '3',
    company: 'Sense Game Studio',
    period: 'Sep 2016 - Feb 2017',
    skills: [
      'Unity 3D', 
      'C#', 
      'Game Physics', 
      'AI/NPCs', 
      'Optimization',
      'Multiplayer'
    ]
  },
  {
    id: '4',
    company: 'Honda Brasil',
    period: 'Aug 2014 - Sep 2016',
    skills: [
      '.NET', 
      'SQL', 
      'Infraestrutura', 
      'Suporte TI'
    ]
  },
  {
    id: '5',
    company: 'Fox Informática',
    period: 'Jan 2012 - Aug 2014',
    skills: [
      'Hardware', 
      'Redes', 
      'Linux/Windows',
      'Manutenção'
    ]
  }
];

export const PROJECTS_METADATA: ProjectMetadata[] = [
  {
    id: 'p1',
    technologies: ['.NET 8', 'Microservices', 'Kubernetes', 'RabbitMQ'],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    // No repoUrl because it is a closed client project
    featured: true
  },
  {
    id: 'p2',
    technologies: ['Angular', 'Node.js', '.NET', 'SQL Server'],
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    liveUrl: 'https://appito.com', // Keeping live URL if it still exists or points to a press release
    featured: true
  },
  {
    id: 'p3',
    technologies: ['Python', 'LangChain', 'OpenAI API', 'GenAI'],
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    // Internal tool, no public link
    featured: false
  }
];

export const GAMES_METADATA: GameMetadata[] = [
  {
    id: 'g0',
    title: 'OrbiDash',
    thumbnailUrl: 'games/orbidash/assets/branding/icon_symbol.svg',
    gameUrl: 'games/orbidash/index.html',
    genre: 'Arcade',
    engine: 'Ionic'
  }
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/leandroferrete',
  github: 'https://github.com/leandroferrete',
  email: 'mailto:leandro.ferrete@hotmail.com',
  youtube: 'https://www.youtube.com/@leandroferreteportfolio',
  youtubeGamer: 'https://www.youtube.com/@GamerSenseBR'
};

// For backward compatibility / Typescript mapping during render
export const EXPERIENCE_DATA: Experience[] = []; 
export const PROJECTS_DATA: Project[] = [];
export const GAMES_DATA: Game[] = [];
