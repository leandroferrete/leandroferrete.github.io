import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        work: 'Work',
        play: 'Play',
        path: 'Path',
        path: 'Path',
        contact: 'Contact'
      },
      meta: {
        title: 'Leandro Ferrete | Senior .NET Engineer & AI Architect',
        description: 'Senior .NET Engineer & AI Specialist. Expert in High-Performance Microservices, Clean Architecture, and Interactive Game Development. View the portfolio of Leandro Ferrete.'
      },
      hero: {
        badge: 'Leandro Ferrete Portfolio',
        title1: 'Intelligent Systems',
        title2: '& Immersive Games',
        subtitle: 'Senior .NET Engineer fusing high-performance architecture with Generative AI and creative development. Specialist in Microservices, AI Agents, and Interactive Experiences.',
        btn_work: 'View Projects',
        btn_contact: 'Get in Touch'
      },
      software: {
        title: 'Selected Works',
        status_badge: 'Under Construction',
        status_desc: 'System Update: We are currently refactoring these case studies for a better experience. Detailed content will be back soon.',
        subtitle: 'Engineering solutions where robust code meets artificial intelligence.',
        source: 'Source',
        visit: 'Visit',
        private: 'Enterprise / NDA'
      },
      games: {
        label: 'Interactive Lab',
        title: 'Playground',
        subtitle: 'Solo development projects: Engineered entirely from scratch, covering physics, logic, and design.',
        play_now: 'PLAY NOW'
      },
      experience: {
        title: 'Professional Journey'
      },
      contact: {
        title: "Let's build the intelligent future.",
        copyright: '© {{year}} Leandro Ferrete. Designed & Engineered with passion.'
      },
      ai: {
        greeting: "Hello! I am Leandro's AI agent. Ask me about his work with LLMs, .NET systems, or game dev.",
        placeholder: "Ask me anything...",
        thinking: "Processing...",
        title: "Leandro AI",
        powered: "Powered by Gemini",
        badge: "Chat with AI"
      },
      game_modal: {
        initializing: "Initializing Environment..."
      },
      // Dynamic Data
      data: {
        jobs: {
          '1': {
            role: 'Senior .NET Backend Developer',
            description: [
              'Development of REST APIs and Microservices in .NET 6–8 using Clean Architecture (DDD/Onion) and SOLID principles.',
              'Implementation of asynchronous messaging (RabbitMQ, Kafka, SQS) and job orchestration (Hangfire) in distributed environments.',
              'CI/CD pipeline automation with Azure DevOps and GitHub Actions; End-to-end observability with ELK Stack, Grafana, and Prometheus.',
              'Advanced SQL Server programming (optimization, procedures) and AI integration (OpenAI, Gemini) for process automation.'
            ]
          },
          '2': {
            role: 'Full-Stack .NET Developer',
            description: [
              'Full-stack development with .NET, C#, Angular/TypeScript, and Node.js for a sports tech startup.',
              'Implemented key features: match management, court reservations, online payments, and player ranking systems.',
              'Performance optimization for both frontend (lazy loading, bundles) and backend (SQL caching, latency reduction).',
              'Early exploration of AI/ML for personalized recommendations and content moderation.'
            ]
          },
          '3': {
            role: 'Unity Game Developer',
            description: [
              'Developed immersive 2D/3D experiences, applying complex AI behaviors for NPC pathfinding and decision making.',
              'Optimized real-time rendering pipelines and memory management for high-performance interactive applications.',
              'Bridged the gap between game logic and backend persistence layers.'
            ]
          },
          '4': {
            role: 'IT Intern',
            description: [
              'Developed internal automation tools and web systems using .NET ecosystem.',
              'Maintained operational continuity for large-scale corporate infrastructure.'
            ]
          },
          '5': {
            role: 'IT Technician',
            description: [
              'Provided technical solutions and hardware support with a focus on operational efficiency.'
            ]
          }
        },
        projects: {
          'p1': {
            title: 'Intelligent Microservices Platform',
            description: 'A high-performance distributed architecture featuring AI-driven anomaly detection, automated CI/CD, and secure API gateways for global enterprise clients.'
          },
          'p2': {
            title: 'Appito Sports SaaS',
            description: 'A comprehensive sports platform managing thousands of active users with algorithmic matchmaking and real-time social interactions.'
          },
          'p3': {
            title: 'Generative AI Automation',
            description: 'Custom implementation of Gemini & OpenAI agents to automate complex corporate decision-making workflows and semantic analysis.'
          }
        },
        games: {
          'g0': {
            description: 'High-speed ring runner built with Ionic, featuring responsive controls, score streaks, and modern mobile UI.'
          },
          'g1': {
            description: 'Fast-paced arcade shooter showcasing optimized physics and AI enemy behaviors.'
          },
          'g2': {
            description: 'Procedural generation engine creating infinite, unique levels in real-time.'
          },
          'g3': {
            description: 'Logic puzzle game featuring a custom state-machine solver.'
          }
        }
      }
    }
  },
  pt: {
    translation: {
      nav: {
        home: 'Início',
        work: 'Projetos',
        play: 'Jogos',
        path: 'Jornada',
        path: 'Jornada',
        contact: 'Contato'
      },
      meta: {
        title: 'Leandro Ferrete | Engenheiro .NET Sênior & Arquiteto de IA',
        description: 'Engenheiro de Software Sênior .NET & Especialista em IA. Focado em Microsserviços de Alta Performance, Clean Architecture e Jogos Interativos. Veja o portfólio de Leandro Ferrete.'
      },
      hero: {
        badge: 'Portfólio Leandro Ferrete',
        title1: 'Sistemas Inteligentes',
        title2: '& Jogos Imersivos',
        subtitle: 'Engenheiro .NET Sênior fundindo arquitetura de alta performance com Inteligência Artificial Generativa. Especialista em Microsserviços, Agentes de IA e Experiências Interativas.',
        btn_work: 'Ver Projetos',
        btn_contact: 'Entre em Contato'
      },
      software: {
        title: 'Trabalhos Selecionados',
        status_badge: 'Em Construção',
        status_desc: 'Atualização de Sistema: Estamos refatorando estes estudos de caso para uma melhor experiência. O conteúdo detalhado voltará em breve.',
        subtitle: 'Engenharia de software onde código robusto encontra a inteligência artificial.',
        source: 'Código',
        visit: 'Visitar',
        private: 'Projeto Confidencial / NDA'
      },
      games: {
        label: 'Laboratório Interativo',
        title: 'Playground',
        subtitle: 'Projetos Solo: Engenharia desenvolvida inteiramente do zero por mim, cobrindo física, lógica e design.',
        play_now: 'JOGAR AGORA'
      },
      experience: {
        title: 'Jornada Profissional'
      },
      contact: {
        title: "Vamos criar o futuro inteligente.",
        copyright: '© {{year}} Leandro Ferrete. Projetado & Desenvolvido com paixão.'
      },
      ai: {
        greeting: "Olá! Sou o agente digital do Leandro. Pergunte sobre soluções de IA, backends .NET ou desenvolvimento de jogos.",
        placeholder: "Pergunte-me qualquer coisa...",
        thinking: "Processando...",
        title: "Leandro AI",
        powered: "Powered by Gemini",
        badge: "Conversar com IA"
      },
      game_modal: {
        initializing: "Inicializando Ambiente..."
      },
      data: {
        jobs: {
          '1': {
            role: 'Desenvolvedor Backend .NET Sênior',
            description: [
              'Desenvolvimento de APIs REST e microsserviços em .NET 6–8 seguindo Clean Architecture (DDD/Onion) e princípios SOLID.',
              'Implementação de mensageria assíncrona (RabbitMQ, Kafka, SQS) e orquestração de jobs (Hangfire) em ambientes distribuídos.',
              'Automação de pipelines CI/CD (Azure DevOps, GitHub Actions) e observabilidade ponta a ponta (ELK, Grafana, Prometheus).',
              'Programação avançada em SQL Server e integração de IA (OpenAI, Gemini) para automação de processos e análise preditiva.'
            ]
          },
          '2': {
            role: 'Desenvolvedor Full-Stack .NET',
            description: [
              'Desenvolvimento Full-stack com .NET, C#, Angular/TypeScript e Node.js, garantindo escalabilidade da plataforma.',
              'Implementação de funcionalidades estratégicas: gestão de partidas, reservas de quadras, pagamentos online e rankings.',
              'Otimização de performance no frontend (lazy loading, bundles) e backend (queries SQL otimizadas, caching).',
              'Exploração inicial de inteligência artificial aplicada a recomendações de partidas e moderação de conteúdo.'
            ]
          },
          '3': {
            role: 'Desenvolvedor de Jogos Unity',
            description: [
              'Criação de experiências imersivas 2D/3D, aplicando comportamentos complexos de IA (Pathfinding/FSM) para NPCs.',
              'Otimização de pipelines de renderização e gerenciamento de memória para aplicações interativas de alta performance.',
              'Integração entre lógica de gameplay complexa e persistência de dados em nuvem.'
            ]
          },
          '4': {
            role: 'Estagiário de TI',
            description: [
              'Desenvolvimento de ferramentas de automação interna e sistemas web utilizando o ecossistema .NET.',
              'Manutenção da continuidade operacional de infraestruturas corporativas de grande porte.'
            ]
          },
          '5': {
            role: 'Técnico de Informática',
            description: [
              'Suporte técnico e soluções de hardware com foco em eficiência operacional.'
            ]
          }
        },
        projects: {
          'p1': {
            title: 'Plataforma Inteligente de Microsserviços',
            description: 'Arquitectura distribuída de alta performance com detecção de anomalias via IA, CI/CD automatizado e gateways seguros para clientes globais.'
          },
          'p2': {
            title: 'SaaS Esportivo Appito',
            description: 'Plataforma esportiva gerenciando milhares de usuários com algoritmos de matchmaking e interações sociais em tempo real.'
          },
          'p3': {
            title: 'Automação com IA Generativa',
            description: 'Implementação customizada de agentes Gemini & OpenAI para automatizar fluxos de decisão corporativa e análise semântica de dados.'
          }
        },
        games: {
          'g0': {
            description: 'Runner de aneis em alta velocidade feito com Ionic, com controles responsivos, combos de pontuacao e UI mobile moderna.'
          },
          'g1': {
            description: 'Shooter arcade rápido demonstrando física otimizada e comportamentos de inimigos via IA.'
          },
          'g2': {
            description: 'Engine de geração procedural criando níveis infinitos e únicos em tempo real.'
          },
          'g3': {
            description: 'Puzzle de lógica focado em resolução algorítmica e máquinas de estado.'
          }
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        work: 'Proyectos',
        play: 'Juegos',
        path: 'Trayectoria',
        path: 'Trayectoria',
        contact: 'Contacto'
      },
      meta: {
        title: 'Leandro Ferrete | Ingeniero .NET Senior & Arquitecto de IA',
        description: 'Ingeniero .NET Senior y Especialista en IA. Experto en Microservicios de Alto Rendimiento, Clean Architecture y Desarrollo de Juegos. Ve el portafolio de Leandro Ferrete.'
      },
      hero: {
        badge: 'Portafolio Leandro Ferrete',
        title1: 'Sistemas Inteligentes',
        title2: '& Juegos Inmersivos',
        subtitle: 'Ingeniero .NET Senior fusionando arquitectura de alto rendimiento con Inteligencia Artificial Generativa. Experto en Microservicios, Agentes de IA y Experiencias Interactivas.',
        btn_work: 'Ver Proyectos',
        btn_contact: 'Contáctame'
      },
      software: {
        title: 'Trabajos Selecionados',
        status_badge: 'En Construcción',
        status_desc: 'Actualización del Sistema: Estamos refactorizando estos casos de estudio para una mejor experiencia. El contenido detallado volverá pronto.',
        subtitle: 'Ingeniería de software donde el código robusto se encuentra con la inteligencia artificial.',
        source: 'Código',
        visit: 'Visitar',
        private: 'Proyecto Privado / NDA'
      },
      games: {
        label: 'Laboratorio Interactivo',
        title: 'Zona de Juegos',
        subtitle: 'Proyectos en solitario: Ingeniería desarrollada completamente desde cero, cubriendo física, lógica y diseño.',
        play_now: 'JUGAR AHORA'
      },
      experience: {
        title: 'Trayectoria Profesional'
      },
      contact: {
        title: "Creemos el futuro inteligente.",
        copyright: '© {{year}} Leandro Ferrete. Diseñado y Desarrollado con pasión.'
      },
      ai: {
        greeting: "¡Hola! Soy el agente digital de Leandro. Pregúntame sobre soluciones de IA, backends .NET o desarrollo de juegos.",
        placeholder: "Pregúntame lo que sea...",
        thinking: "Procesando...",
        title: "Leandro IA",
        powered: "Impulsado por Gemini",
        badge: "Chatea con IA"
      },
      game_modal: {
        initializing: "Inicializando Entorno..."
      },
      data: {
        jobs: {
          '1': {
            role: 'Desarrollador Backend .NET Senior',
            description: [
              'Desarrollo de APIs REST y Microservicios en .NET 6–8 utilizando Clean Architecture (DDD/Onion) y principios SOLID.',
              'Implementación de mensajería asíncrona (RabbitMQ, Kafka) y orquestación de trabajos (Hangfire) en entornos distribuidos.',
              'Automatización de pipelines CI/CD (Azure DevOps, GitHub Actions) y observabilidad total (ELK, Grafana, Prometheus).',
              'Programación avanzada en SQL Server e integración de IA (OpenAI, Gemini) para automatización de procesos.'
            ]
          },
          '2': {
            role: 'Desarrollador Full-Stack .NET',
            description: [
              'Desarrollo Full-stack con .NET, C#, Angular/TypeScript y Node.js para una startup de tecnología deportiva.',
              'Implementación de funcionalidades clave: gestión de partidos, reservas de canchas, pagos en línea y sistemas de clasificación.',
              'Optimización de rendimiento en frontend (lazy loading) y backend (consultas SQL optimizadas, almacenamiento en caché).',
              'Exploración inicial de IA/ML para recomendaciones personalizadas y moderación de contenido.'
            ]
          },
          '3': {
            role: 'Desarrollador de Juegos Unity',
            description: [
              'Creación de experiencias inmersivas 2D/3D, aplicando comportamentos complejos de IA para NPCs.',
              'Optimización de pipelines de renderizado y gestión de memoria para aplicaciones interactivas de alto rendimiento.',
              'Integración entre lógica de juego compleja y persistencia de datos en la nube.'
            ]
          },
          '4': {
            role: 'Pasante de TI',
            description: [
              'Desarrollo de herramientas de automatización interna y sistemas web utilizando el ecosistema .NET.',
              'Mantenimiento de la continuidad operativa de infraestructuras corporativas a gran escala.'
            ]
          },
          '5': {
            role: 'Técnico Informático',
            description: [
              'Soporte técnico y soluciones de hardware con enfoque en eficiencia operativa.'
            ]
          }
        },
        projects: {
          'p1': {
            title: 'Plataforma Inteligente de Microservicios',
            description: 'Arquitectura distribuida de alto rendimiento con detección de anomalías vía IA, CI/CD automatizado y gateways seguros.'
          },
          'p2': {
            title: 'SaaS Deportivo Appito',
            description: 'Plataforma deportiva gestionando miles de usuarios con algoritmos de matchmaking e interacciones en tiempo real.'
          },
          'p3': {
            title: 'Automatización con IA Generativa',
            description: 'Implementación personalizada de agentes Gemini & OpenAI para automatizar flujos de decisión corporativa y análisis semántico.'
          }
        },
        games: {
          'g0': {
            description: 'Runner de anillos de alta velocidad hecho con Ionic, con controles responsivos, rachas de puntuacion y UI mobile moderna.'
          },
          'g1': {
            description: 'Shooter arcade rápido demostrando física optimizada y comportamientos de enemigos vía IA.'
          },
          'g2': {
            description: 'Motor de generación procedimental creando niveles infinitos y únicos en tiempo real.'
          },
          'g3': {
            description: 'Juego de lógica enfocado en resolución algorítmica y máquinas de estado.'
          }
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['navigator', 'localStorage', 'htmlTag'],
      caches: ['localStorage']
    }
  });

export default i18n;


