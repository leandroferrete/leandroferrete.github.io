import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, ChevronLeft, ChevronRight, Play, Code2, Lock, Sun, Moon, Youtube, Menu, X, Loader2 } from './components/Icons';
import { HashRouter } from 'react-router-dom';
import { EXPERIENCE_METADATA, GAMES_METADATA, PROJECTS_METADATA, SOCIAL_LINKS } from './constants';
import { Game, Section } from './types';
import GameModal from './components/GameModal';
// import AiAssistant from './components/AiAssistant';
import ScrollReveal from './components/ScrollReveal';
import { ScrollTriggeredLine, SpotlightCard, TypewriterText, ProgressBar, ScrollGlowingBorder } from './components/ScrollAnimations';
import { useTranslation } from 'react-i18next';

const App: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState<Section>(Section.HERO);
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const baseUrl = import.meta.env.BASE_URL || '/';
  const sectionViewedRef = useRef<Set<Section>>(new Set());
  const scrollDepthRef = useRef<Set<number>>(new Set());
  const sectionStartRef = useRef<{ section: Section; startedAt: number } | null>(null);
  const sessionStartRef = useRef<number>(Date.now());
  const lastActiveRef = useRef<number>(Date.now());
  const gameScoreMilestonesRef = useRef<Set<number>>(new Set());
  
  // Theme State
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
  // --- CAROUSEL CONFIGURATION ---
  const [itemsPerPage, setItemsPerPage] = useState(1);

  // 1. Games Carousel State
  const [gameCarouselIndex, setGameCarouselIndex] = useState(0);
  const [isGameDragging, setIsGameDragging] = useState(false);
  const [gameStartX, setGameStartX] = useState(0);
  const [gameCurrentTranslate, setGameCurrentTranslate] = useState(0);
  const gameCarouselRef = useRef<HTMLDivElement>(null);

  // 2. Projects Carousel State
  const [projectCarouselIndex, setProjectCarouselIndex] = useState(0);
  const [isProjectDragging, setIsProjectDragging] = useState(false);
  const [projectStartX, setProjectStartX] = useState(0);
  const [projectCurrentTranslate, setProjectCurrentTranslate] = useState(0);
  const projectCarouselRef = useRef<HTMLDivElement>(null);

  // Image Fallback State
  const GOOGLE_DRIVE_ID = '1XDWSocUsjTkQmIVAs232Tt-v7a3gil4Y';
  const FALLBACK_IMAGE_URL = `https://drive.google.com/thumbnail?id=${GOOGLE_DRIVE_ID}&sz=w1000`;
  const [profileImageSrc, setProfileImageSrc] = useState(FALLBACK_IMAGE_URL);

  const trackEvent = (action: string, params?: Record<string, unknown>) => {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) {
      gtag('event', action, params || {});
    }
  };

  useEffect(() => {
    const sendPageView = () => {
      trackEvent('page_view', {
        page_location: window.location.href,
        page_path: `${window.location.pathname}${window.location.search}${window.location.hash}`,
        page_title: document.title
      });
    };
    sendPageView();
    window.addEventListener('hashchange', sendPageView);
    return () => window.removeEventListener('hashchange', sendPageView);
  }, []);

  // Handle Resize for Carousel
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = Object.values(Section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!sectionViewedRef.current.has(activeSection)) {
      sectionViewedRef.current.add(activeSection);
      trackEvent('section_view', { section: activeSection });
    }
  }, [activeSection]);

  useEffect(() => {
    const now = Date.now();
    if (sectionStartRef.current) {
      const durationMs = now - sectionStartRef.current.startedAt;
      if (durationMs > 500) {
        trackEvent('section_duration', {
          section: sectionStartRef.current.section,
          duration_ms: durationMs
        });
      }
    }
    sectionStartRef.current = { section: activeSection, startedAt: now };
  }, [activeSection]);

  useEffect(() => {
    const handleVisibility = () => {
      const now = Date.now();
      if (document.visibilityState === 'hidden') {
        const sessionDuration = now - sessionStartRef.current;
        if (sessionDuration > 500) {
          trackEvent('session_duration', { duration_ms: sessionDuration });
        }
        if (sectionStartRef.current) {
          const durationMs = now - sectionStartRef.current.startedAt;
          if (durationMs > 500) {
            trackEvent('section_duration', {
              section: sectionStartRef.current.section,
              duration_ms: durationMs
            });
          }
        }
      } else {
        sessionStartRef.current = now;
        if (sectionStartRef.current) {
          sectionStartRef.current.startedAt = now;
        }
      }
      lastActiveRef.current = now;
    };
    document.addEventListener('visibilitychange', handleVisibility);
    window.addEventListener('pagehide', handleVisibility);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      window.removeEventListener('pagehide', handleVisibility);
    };
  }, []);

  useEffect(() => {
    const handleDepth = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const depth = Math.round((window.scrollY / docHeight) * 100);
      [25, 50, 75, 100].forEach((threshold) => {
        if (depth >= threshold && !scrollDepthRef.current.has(threshold)) {
          scrollDepthRef.current.add(threshold);
          trackEvent('scroll_depth', { percent: threshold });
        }
      });
    };
    window.addEventListener('scroll', handleDepth);
    handleDepth();
    return () => window.removeEventListener('scroll', handleDepth);
  }, []);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (!data || typeof data !== 'object') return;
      if ((data as { source?: string }).source !== 'orbidash') return;

      const { type, params } = data as { type?: string; params?: Record<string, unknown> };
      if (!type) return;

      const basePayload = {
        game_id: 'g0',
        game_title: 'OrbiDash',
        ...params
      };

      if (type === 'score_gain') {
        const scoreValue = typeof params?.score === 'number' ? params.score : null;
        if (scoreValue !== null) {
          const milestone = Math.floor(scoreValue / 10) * 10;
          if (milestone >= 10 && !gameScoreMilestonesRef.current.has(milestone)) {
            gameScoreMilestonesRef.current.add(milestone);
            trackEvent('game_score_milestone', { ...basePayload, score: milestone });
          }
        }
        return;
      }

      if (type === 'new_record') {
        trackEvent('game_new_record', basePayload);
        return;
      }

      if (type === 'record_celebration') {
        trackEvent('game_record_celebration', basePayload);
        return;
      }

      if (type === 'best_update') {
        trackEvent('game_best_update', basePayload);
        return;
      }

      if (type === 'combo_gain') {
        trackEvent('game_combo_gain', basePayload);
        return;
      }

      if (
        type === 'game_start' ||
        type === 'game_over' ||
        type === 'session_start' ||
        type === 'ads_removed' ||
        type === 'game_pause' ||
        type === 'game_resume' ||
        type === 'game_exit' ||
        type === 'game_session_duration'
      ) {
        if (type === 'game_start') {
          gameScoreMilestonesRef.current.clear();
        }
        trackEvent(type, basePayload);
        return;
      }

      trackEvent('game_event', { event_type: type, ...basePayload });
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Initialize Theme
  useEffect(() => {
    document.body.classList.remove('light-theme');
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.body.classList.add('light-theme');
      trackEvent('theme_change', { theme: 'light' });
    } else {
      setTheme('dark');
      document.body.classList.remove('light-theme');
      trackEvent('theme_change', { theme: 'dark' });
    }
  };

  const scrollTo = (id: Section) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
    trackEvent('nav_click', { section: id });
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    trackEvent('language_change', { language: lng });
  };

  // Merge Metadata with Translations
  const experiences = EXPERIENCE_METADATA.map(job => ({
    ...job,
    role: t(`data.jobs.${job.id}.role`),
    description: t(`data.jobs.${job.id}.description`, { returnObjects: true }) as string[]
  }));

  const projects = PROJECTS_METADATA.map((proj) => {
    const titleKey = `data.projects.${proj.id}.title`;
    const descriptionKey = `data.projects.${proj.id}.description`;
    const title = t(titleKey);
    const description = t(descriptionKey);

    return {
      ...proj,
      title,
      description
    };
  }).filter((proj) => (
    proj.title && proj.description && 
    !proj.title.startsWith('data.projects.') && 
    !proj.description.startsWith('data.projects.')
  ));

  const games = GAMES_METADATA.map((game) => {
    const descriptionKey = `data.games.${game.id}.description`;
    const description = t(descriptionKey);
    return {
      ...game,
      description
    };
  }).filter((game) => (
    game.description &&
    !game.description.startsWith('data.games.')
  ));

  // Ensure carousel indexes stay within bounds
  useEffect(() => {
    // Games Bounds
    const maxGameIndex = Math.max(0, games.length - itemsPerPage);
    if (gameCarouselIndex > maxGameIndex) {
      setGameCarouselIndex(maxGameIndex);
    }
    // Projects Bounds
    const maxProjectIndex = Math.max(0, projects.length - itemsPerPage);
    if (projectCarouselIndex > maxProjectIndex) {
      setProjectCarouselIndex(maxProjectIndex);
    }
  }, [itemsPerPage, gameCarouselIndex, projectCarouselIndex, games.length, projects.length]);

  // --- GAMES CAROUSEL LOGIC ---
  const maxGameIndex = Math.max(0, games.length - itemsPerPage);
  const isPrevGameDisabled = gameCarouselIndex === 0;
  const isNextGameDisabled = gameCarouselIndex >= maxGameIndex;
  const shouldShowGameNav = games.length > itemsPerPage;

  const nextGame = () => {
    if (!isNextGameDisabled) {
      setGameCarouselIndex((prev) => prev + 1);
      trackEvent('carousel_next', { carousel: 'games' });
    }
  };
  const prevGame = () => {
    if (!isPrevGameDisabled) {
      setGameCarouselIndex((prev) => prev - 1);
      trackEvent('carousel_prev', { carousel: 'games' });
    }
  };

  const handleGamePointerDown = (e: React.PointerEvent) => {
    setIsGameDragging(true);
    setGameStartX(e.pageX);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const handleGamePointerMove = (e: React.PointerEvent) => {
    if (!isGameDragging) return;
    setGameCurrentTranslate(e.pageX - gameStartX);
  };
  const handleGamePointerUp = (e: React.PointerEvent) => {
    if (!isGameDragging) return;
    setIsGameDragging(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    if (gameCurrentTranslate < -50 && !isNextGameDisabled) nextGame();
    else if (gameCurrentTranslate > 50 && !isPrevGameDisabled) prevGame();
    setGameCurrentTranslate(0);
  };

  // --- PROJECTS CAROUSEL LOGIC ---
  const maxProjectIndex = Math.max(0, projects.length - itemsPerPage);
  const isPrevProjectDisabled = projectCarouselIndex === 0;
  const isNextProjectDisabled = projectCarouselIndex >= maxProjectIndex;
  const shouldShowProjectNav = projects.length > itemsPerPage;

  const nextProject = () => {
    if (!isNextProjectDisabled) {
      setProjectCarouselIndex((prev) => prev + 1);
      trackEvent('carousel_next', { carousel: 'projects' });
    }
  };
  const prevProject = () => {
    if (!isPrevProjectDisabled) {
      setProjectCarouselIndex((prev) => prev - 1);
      trackEvent('carousel_prev', { carousel: 'projects' });
    }
  };

  const handleProjectPointerDown = (e: React.PointerEvent) => {
    setIsProjectDragging(true);
    setProjectStartX(e.pageX);
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };
  const handleProjectPointerMove = (e: React.PointerEvent) => {
    if (!isProjectDragging) return;
    setProjectCurrentTranslate(e.pageX - projectStartX);
  };
  const handleProjectPointerUp = (e: React.PointerEvent) => {
    if (!isProjectDragging) return;
    setIsProjectDragging(false);
    (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    if (projectCurrentTranslate < -50 && !isNextProjectDisabled) nextProject();
    else if (projectCurrentTranslate > 50 && !isPrevProjectDisabled) prevProject();
    setProjectCurrentTranslate(0);
  };

  // Calculations for transforms
  const itemWidthPercent = 100 / itemsPerPage;
  const baseGameTranslate = -(gameCarouselIndex * itemWidthPercent);
  const baseProjectTranslate = -(projectCarouselIndex * itemWidthPercent);

  const navItems = [
    { id: Section.HERO, label: t('nav.home') },
    { id: Section.SOFTWARE, label: t('nav.work') },
    { id: Section.GAMES, label: t('nav.play') },
    { id: Section.EXPERIENCE, label: t('nav.path') },
    { id: Section.CONTACT, label: t('nav.contact') },
  ];

  return (
    <HashRouter>
      <div className="min-h-screen relative font-sans transition-colors duration-500">
        
        {/* Global Progress Bar */}
        <ProgressBar />

        {/* Premium Floating Navbar */}
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
          <div className={`pointer-events-auto transition-all duration-300 glass-nav rounded-full px-2 py-2 flex items-center gap-1 sm:gap-2 ${scrolled ? 'shadow-2xl scale-100' : 'scale-105'}`}>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1 sm:gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-brand-text bg-brand-surfaceHighlight shadow-inner'
                      : 'text-brand-muted hover:text-brand-text hover:bg-brand-surfaceHighlight/50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-3 rounded-full text-brand-text hover:bg-brand-surfaceHighlight/50 transition-colors"
                aria-label="Open Menu"
              >
                <Menu size={20} />
              </button>
            </div>
            
            <div className="w-px h-6 bg-brand-border/20 mx-1 hidden md:block"></div>
            
            {/* Language Switcher (Desktop) */}
            <div className="hidden md:flex gap-1">
              <button 
                onClick={() => changeLanguage('en')} 
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${i18n.resolvedLanguage === 'en' ? 'text-brand-text bg-brand-surfaceHighlight/50' : 'text-brand-muted hover:text-brand-text'}`}
              >
                EN
              </button>
              <button 
                onClick={() => changeLanguage('pt')} 
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${i18n.resolvedLanguage?.startsWith('pt') ? 'text-brand-text bg-brand-surfaceHighlight/50' : 'text-brand-muted hover:text-brand-text'}`}
              >
                PT
              </button>
              <button 
                onClick={() => changeLanguage('es')} 
                className={`text-xs font-bold px-2 py-1 rounded transition-colors ${i18n.resolvedLanguage?.startsWith('es') ? 'text-brand-text bg-brand-surfaceHighlight/50' : 'text-brand-muted hover:text-brand-text'}`}
              >
                ES
              </button>
            </div>

            <div className="w-px h-6 bg-brand-border/20 mx-1"></div>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full text-brand-muted hover:text-brand-accent transition-colors hover:bg-brand-surfaceHighlight/50"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Full Screen Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-[60] bg-brand-bg/95 backdrop-blur-xl animate-fade-in flex flex-col items-center justify-center">
             <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-8 right-8 p-3 rounded-full bg-brand-surfaceHighlight/50 text-brand-text hover:bg-brand-accent hover:text-white transition-all duration-300"
             >
                <X size={28} />
             </button>

             <nav className="flex flex-col items-center gap-8 mb-12">
                {navItems.map((item, index) => (
                   <button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className="text-3xl font-light tracking-wide text-brand-text hover:text-brand-accent transition-colors duration-300 transform hover:scale-110"
                      style={{ animation: `slideUp 0.5s ease-out forwards ${index * 0.1}s`, opacity: 0 }}
                   >
                      {item.label}
                   </button>
                ))}
             </nav>

             <div className="flex gap-4 mt-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                {['en', 'pt', 'es'].map((lang) => (
                   <button
                      key={lang}
                      onClick={() => changeLanguage(lang)}
                      className={`text-sm font-bold px-4 py-2 rounded-full border border-brand-border/20 uppercase tracking-widest transition-all ${
                         i18n.resolvedLanguage?.startsWith(lang) 
                         ? 'bg-brand-text text-brand-bg' 
                         : 'text-brand-muted hover:border-brand-text hover:text-brand-text'
                      }`}
                   >
                      {lang}
                   </button>
                ))}
             </div>
          </div>
        )}

        {/* Hero Section */}
        <section id={Section.HERO} className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20 pb-10">
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-accent/20 rounded-full blur-[120px] animate-pulse-glow"></div>
             <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px]" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10 w-full">
            <ScrollReveal animation="fade-in">
              <div className="inline-block px-4 py-1.5 mb-8 border border-brand-border/10 rounded-full bg-brand-surface/5 backdrop-blur-sm">
                <span className="text-sm font-medium tracking-wider text-brand-accentLight uppercase">{t('hero.badge')}</span>
              </div>
            </ScrollReveal>
            
            <div className="min-h-[160px] sm:min-h-[240px]">
              <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-8 leading-tight">
                <span className="text-gradient">
                  <TypewriterText text={t('hero.title1')} delay={0.2} />
                </span> <br/>
                <span className="text-gradient-accent">
                   <TypewriterText text={t('hero.title2')} delay={1.5} />
                </span>
              </h1>
            </div>

            <ScrollReveal animation="slide-up" delay={2.5}>
              <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-brand-muted font-light leading-relaxed">
                {t('hero.subtitle')}
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="slide-up" delay={2.8}>
              <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                <button 
                  onClick={() => scrollTo(Section.SOFTWARE)}
                  className="group relative px-8 py-4 bg-brand-text text-brand-bg rounded-full font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                >
                  {t('hero.btn_work')}
                </button>
                <button 
                  onClick={() => scrollTo(Section.CONTACT)}
                  className="px-8 py-4 rounded-full border border-brand-border/20 text-brand-text font-medium hover:bg-brand-surfaceHighlight/50 transition-all hover:border-brand-border/40"
                >
                  {t('hero.btn_contact')}
                </button>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce text-brand-muted/50 hidden lg:block">
            <ChevronDown size={24} />
          </div>
        </section>

        {/* Software Projects - Carousel Style */}
        <section id={Section.SOFTWARE} className="py-32 relative select-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="relative">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                      <h2 className="text-3xl sm:text-5xl font-bold text-brand-text">{t('software.title')}</h2>
                      
                      {/* Elegant 'Work in Progress' Badge */}
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 backdrop-blur-md">
                          <Loader2 size={14} className="text-amber-500 animate-spin" />
                          <span className="text-[10px] font-bold tracking-widest text-amber-500 uppercase">{t('software.status_badge')}</span>
                      </div>
                  </div>
                  
                  <div className="h-1 w-20 bg-brand-accent rounded-full mb-6"></div>
                  
                  {/* Status Message */}
                  <p className="text-brand-muted max-w-xl text-lg font-light leading-relaxed border-l-2 border-amber-500/30 pl-4">
                     {t('software.status_desc')}
                  </p>
                </div>
                
                 {/* Project Carousel Navigation (Desktop Only) */}
                <div className={`hidden md:flex gap-2 ${shouldShowProjectNav ? '' : 'opacity-0 pointer-events-none'}`}>
                  <button 
                    onClick={prevProject}
                    disabled={isPrevProjectDisabled}
                    className={`p-3 rounded-full border border-brand-border/10 bg-brand-surfaceHighlight/50 hover:bg-brand-surfaceHighlight text-brand-text transition-all active:scale-95 ${isPrevProjectDisabled ? 'opacity-30 cursor-not-allowed' : ''}`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextProject}
                    disabled={isNextProjectDisabled}
                    className={`p-3 rounded-full border border-brand-border/10 bg-brand-surfaceHighlight/50 hover:bg-brand-surfaceHighlight text-brand-text transition-all active:scale-95 ${isNextProjectDisabled ? 'opacity-30 cursor-not-allowed' : ''}`}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Project Carousel Container */}
             <ScrollReveal animation="slide-up">
              <div 
                className={`overflow-hidden -mx-4 px-4 py-4 ${isProjectDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                ref={projectCarouselRef}
                style={{ touchAction: 'pan-y' }}
                onPointerDown={handleProjectPointerDown}
                onPointerMove={handleProjectPointerMove}
                onPointerUp={handleProjectPointerUp}
                onPointerLeave={handleProjectPointerUp}
              > 
                <div 
                  className="flex"
                  style={{ 
                     transform: `translateX(calc(${baseProjectTranslate}% + ${projectCurrentTranslate}px))`,
                     transition: isProjectDragging ? 'none' : 'transform 0.5s ease-out'
                  }}
                >
                {projects.map((project, index) => (
                    <div key={project.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex h-auto">
                        <SpotlightCard className="h-full group flex flex-col w-full">
                          {/* Generic Abstract Header instead of Image */}
                          <div className="h-56 overflow-hidden relative flex-shrink-0 bg-brand-surfaceHighlight/50 flex items-center justify-center border-b border-brand-border/5">
                            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-accent/10 via-transparent to-transparent"></div>
                            <Code2 size={48} className="text-brand-muted/20" />
                            
                            <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{project.title}</h3>
                            </div>
                          </div>
                          
                          <div className="p-6 pt-2 flex-1 flex flex-col">
                            <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-1">{project.description}</p>
                            
                            <div className="space-y-4 mt-auto">
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map(tech => (
                                  <span key={tech} className="px-2.5 py-1 bg-brand-surfaceHighlight text-[10px] uppercase tracking-wider text-brand-text/80 rounded border border-brand-border/10">
                                    {tech}
                                  </span>
                                ))}
                              </div>
                              <div className="flex items-center gap-4 pt-4 border-t border-brand-border/10">
                                {project.repoUrl && (
                                  <a
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-xs font-medium text-brand-text hover:text-brand-accent transition-colors uppercase tracking-wide"
                                    onClick={() => trackEvent('outbound_click', { section: 'projects', type: 'repo', url: project.repoUrl })}
                                  >
                                    <Github size={14} /> {t('software.source')}
                                  </a>
                                )}
                                {project.liveUrl && (
                                  <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 text-xs font-medium text-brand-text hover:text-brand-accent transition-colors uppercase tracking-wide"
                                    onClick={() => trackEvent('outbound_click', { section: 'projects', type: 'live', url: project.liveUrl })}
                                  >
                                    <ExternalLink size={14} /> {t('software.visit')}
                                  </a>
                                )}
                                {!project.repoUrl && !project.liveUrl && (
                                  <div className="flex items-center gap-2 text-xs font-bold text-brand-muted/70 uppercase tracking-wide select-none">
                                    <Lock size={14} /> {t('software.private')}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </SpotlightCard>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Games Arcade - Carousel Slider */}
        <section id={Section.GAMES} className="py-32 relative bg-brand-surface/30 overflow-hidden select-none">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(var(--color-text),0.05)_1px,transparent_1px)] [background-size:16px_16px] opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <ScrollReveal>
              <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
                <div className="text-left">
                  <span className="text-brand-accent text-sm font-bold tracking-widest uppercase mb-2 block">{t('games.label')}</span>
                  <h2 className="text-4xl sm:text-5xl font-bold text-brand-text flex items-center gap-3 mb-4">
                    {t('games.title')}
                  </h2>
                  <p className="text-brand-muted max-w-lg text-lg font-light leading-relaxed">
                     {t('games.subtitle')}
                  </p>
                </div>
                
                {/* Games Carousel Navigation (Desktop Only) */}
                <div className={`hidden md:flex gap-2 ${shouldShowGameNav ? '' : 'opacity-0 pointer-events-none'}`}>
                  <button 
                    onClick={prevGame}
                    disabled={isPrevGameDisabled}
                    className={`p-3 rounded-full border border-brand-border/10 bg-brand-surfaceHighlight/50 hover:bg-brand-surfaceHighlight text-brand-text transition-all active:scale-95 ${isPrevGameDisabled ? 'opacity-30 cursor-not-allowed' : ''}`}
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button 
                    onClick={nextGame}
                    disabled={isNextGameDisabled}
                    className={`p-3 rounded-full border border-brand-border/10 bg-brand-surfaceHighlight/50 hover:bg-brand-surfaceHighlight text-brand-text transition-all active:scale-95 ${isNextGameDisabled ? 'opacity-30 cursor-not-allowed' : ''}`}
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Games Carousel Container */}
            <ScrollReveal animation="slide-up">
              <div 
                className={`overflow-hidden -mx-4 px-4 py-4 ${isGameDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
                ref={gameCarouselRef}
                style={{ touchAction: 'pan-y' }} // Allows vertical scroll but handles horizontal swipe via JS
                onPointerDown={handleGamePointerDown}
                onPointerMove={handleGamePointerMove}
                onPointerUp={handleGamePointerUp}
                onPointerLeave={handleGamePointerUp} // Safety fallback, though capture handles most cases
              > 
                <div 
                  className="flex"
                  style={{ 
                     // Dynamic transformation including drag offset
                     transform: `translateX(calc(${baseGameTranslate}% + ${gameCurrentTranslate}px))`,
                     transition: isGameDragging ? 'none' : 'transform 0.5s ease-out'
                  }}
                >
                  {games.map((game, index) => (
                    <div 
                      key={game.id} 
                      className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3 flex h-auto"
                    >
                        <div className="group relative rounded-2xl overflow-hidden bg-brand-surface border border-brand-border/5 hover:border-brand-accent/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-brand-accent/10 h-full flex flex-col w-full">
                          <div className="aspect-[4/3] w-full relative overflow-hidden flex-shrink-0">
                            <img 
                              src={game.thumbnailUrl} 
                              alt={game.title} 
                              draggable={false}
                              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                            />
                            <div className="absolute inset-0 bg-brand-bg/60 group-hover:bg-brand-bg/40 transition-colors duration-300"></div>
                            
                            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                              <button 
                                onClick={(e) => {
                                   e.stopPropagation();
                                   trackEvent('game_open', { game_id: game.id, game_title: game.title });
                                   setActiveGame(game);
                                }}
                                onPointerDown={(e) => e.stopPropagation()}
                                className="bg-white text-brand-bg w-16 h-16 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-110 transition-transform cursor-pointer"
                              >
                                <Play fill="currentColor" className="ml-1" size={24} />
                              </button>
                              <button
                                onClick={(e) => {
                                   e.stopPropagation();
                                   trackEvent('game_open', { game_id: game.id, game_title: game.title });
                                   setActiveGame(game);
                                }}
                                onPointerDown={(e) => e.stopPropagation()}
                                className="mt-4 text-white font-bold tracking-widest text-sm bg-black/50 px-3 py-1 rounded-full backdrop-blur-sm hover:bg-black/70 transition-colors cursor-pointer"
                              >
                                {t('games.play_now')}
                              </button>
                            </div>
                          </div>
                          
                          <div className="p-6 bg-brand-surfaceHighlight/30 backdrop-blur-sm border-t border-brand-border/5 flex-1">
                            <div className="flex justify-between items-center mb-2">
                              <h3 className="text-xl font-bold text-brand-text truncate pr-2">{game.title}</h3>
                              <span className="text-[10px] font-mono text-brand-accent border border-brand-accent/30 px-2 py-0.5 rounded uppercase whitespace-nowrap">
                                {game.engine}
                              </span>
                            </div>
                            <p className="text-sm text-brand-muted line-clamp-2">{game.description}</p>
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Experience - Clean Minimalist Timeline with Dynamic Filling Line */}
        <section id={Section.EXPERIENCE} className="py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-brand-text mb-16 pl-8 border-l-4 border-brand-accent">
                {t('experience.title')}
              </h2>
            </ScrollReveal>

            {/* Container for timeline items with relative positioning for the dynamic line */}
            <div className="relative">
              
              {/* The Dynamic Line - Visible on both Mobile and Desktop with different positioning */}
              {/* Mobile: Center of dot is at 2rem (left-6 + 0.5rem). Line width 2px. Line left: calc(2rem - 1px). */}
              {/* Desktop: Center of dot is at 9.5rem + 1px. Line left: 9.5rem. */}
              {/* Vertical: top-2 (0.5rem) to start at center of first dot. */}
              <div className="absolute top-2 bottom-0 left-[calc(2rem-1px)] md:left-[9.5rem] w-[2px] z-0">
                 <ScrollTriggeredLine />
              </div>

              <div className="space-y-12">
                {experiences.map((job, idx) => (
                  <ScrollReveal key={job.id} animation="slide-up" threshold={0.1} className="relative pl-14 md:pl-0">
                     <div className="md:flex gap-12 group relative z-10">
                        
                        {/* Timeline Dot with Glow */}
                        {/* Mobile: align dot center to line at calc(-1.9rem - 1px). */}
                        {/* Desktop: Left = 9.5rem + 1px (center) - 0.5rem = 9rem + 1px. */}
                        {/* Vertical: top-0. h-4 (1rem). Center 0.5rem. Matches line start. */}
                        <div className="absolute top-0 left-[calc(-1.9rem-1px)] md:left-[calc(9rem+1px)] w-4 h-4 rounded-full border-2 border-brand-accent bg-brand-bg group-hover:bg-brand-accent transition-all duration-300 shadow-[0_0_0_4px_rgba(var(--color-bg),1)] group-hover:shadow-[0_0_15px_rgba(99,102,241,0.6)]"></div>
                        
                        {/* Date (Desktop Left) */}
                        <div className="hidden md:block w-32 text-right pt-0.5 flex-shrink-0">
                          <span className="text-sm font-mono text-brand-muted group-hover:text-brand-text transition-colors">{job.period}</span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pb-12 border-b border-brand-border/5 last:border-0 md:pt-0">
                          {/* Mobile Date */}
                          <span className="md:hidden text-xs font-mono text-brand-muted mb-2 block">{job.period}</span>
                          
                          <h3 className="text-2xl font-bold text-brand-text mb-1 group-hover:text-brand-accentLight transition-colors">{job.role}</h3>
                          <div className="text-lg text-brand-muted mb-4">{job.company}</div>
                          
                          <ul className="space-y-3 mb-6">
                            {job.description.map((desc, i) => (
                              <li key={i} className="text-brand-muted/80 text-base leading-relaxed pl-4 relative before:absolute before:left-0 before:top-2.5 before:w-1.5 before:h-1.5 before:bg-brand-border/20 before:rounded-full group-hover:before:bg-brand-accent transition-colors">
                                {desc}
                              </li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map(skill => (
                              <span key={skill} className="text-xs text-brand-text/60 bg-brand-surfaceHighlight px-3 py-1 rounded-full group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                     </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Footer */}
        <section id={Section.CONTACT} className="py-24 border-t border-brand-border/5 bg-brand-bg relative overflow-hidden">
          {/* Decorative background glow */}
          <div className="absolute inset-0 pointer-events-none opacity-30">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-accent/5 rounded-full blur-[100px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center relative z-10">
              
              {/* Profile Photo - Pop in animation with dynamic scroll glow. Repeat=true makes it play again on scroll */}
              <ScrollReveal animation="scale-in" duration={0.8} className="flex flex-col items-center" repeat={true}>
                <ScrollGlowingBorder className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-8 relative group bg-brand-surfaceHighlight">
                  <img 
                    src={profileImageSrc} 
                    onError={() => {
                      if (profileImageSrc !== `${baseUrl}profile.jpg`) {
                        setProfileImageSrc(`${baseUrl}profile.jpg`);
                      }
                    }}
                    referrerPolicy="no-referrer"
                    alt="Leandro Ferrete" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
                  />
                </ScrollGlowingBorder>
              </ScrollReveal>

              {/* Title - Slide up */}
              <ScrollReveal animation="slide-up" delay={0.2}>
                <h2 className="text-4xl md:text-6xl font-bold text-brand-text mb-8 tracking-tight">{t('contact.title')}</h2>
              </ScrollReveal>

              {/* Links - Slide up with delay and sequential wave animation - REPEAT ENABLED */}
              <ScrollReveal animation="slide-up" delay={0.4} className="group" repeat={true}>
                <div className="flex justify-center gap-6 sm:gap-8 mb-16 flex-wrap px-4">
                  {/* LinkedIn - Hover color is brand-text (White). Delay set to 1.3s to start after slide-up ends (1.2s) */}
                  <a 
                    href={SOCIAL_LINKS.linkedin} 
                    target="_blank" 
                    rel="noreferrer" 
                    title="LinkedIn" 
                    className="p-4 rounded-full glass-panel text-brand-muted hover:text-brand-text hover:scale-110 transition-all duration-300 group-[.animate-slide-up]:animate-wave-light hover:animate-none"
                    onClick={() => trackEvent('outbound_click', { section: 'contact', type: 'linkedin', url: SOCIAL_LINKS.linkedin })}
                    style={{ 
                      animationDelay: '1300ms', 
                      '--wave-color': 'rgb(var(--color-text))', 
                      '--wave-shadow': 'rgb(var(--color-text) / 0.5)' 
                    } as React.CSSProperties}
                  >
                    <Linkedin size={24} />
                  </a>

                  {/* Github - Hover color is brand-text (White) */}
                  <a 
                    href={SOCIAL_LINKS.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    title="GitHub" 
                    className="p-4 rounded-full glass-panel text-brand-muted hover:text-brand-text hover:scale-110 transition-all duration-300 group-[.animate-slide-up]:animate-wave-light hover:animate-none"
                    onClick={() => trackEvent('outbound_click', { section: 'contact', type: 'github', url: SOCIAL_LINKS.github })}
                    style={{ 
                      animationDelay: '1500ms', 
                      '--wave-color': 'rgb(var(--color-text))', 
                      '--wave-shadow': 'rgb(var(--color-text) / 0.5)' 
                    } as React.CSSProperties}
                  >
                    <Github size={24} />
                  </a>

                  {/* YouTube Portfolio - Hover color is Red */}
                  <a 
                    href={SOCIAL_LINKS.youtube} 
                    target="_blank" 
                    rel="noreferrer" 
                    title="YouTube Portfolio" 
                    className="p-4 rounded-full glass-panel text-brand-muted hover:text-[#FF0000] hover:scale-110 transition-all duration-300 group-[.animate-slide-up]:animate-wave-light hover:animate-none"
                    onClick={() => trackEvent('outbound_click', { section: 'contact', type: 'youtube_portfolio', url: SOCIAL_LINKS.youtube })}
                    style={{ 
                      animationDelay: '1700ms', 
                      '--wave-color': '#FF0000', 
                      '--wave-shadow': 'rgba(255, 0, 0, 0.6)' 
                    } as React.CSSProperties}
                  >
                    <Youtube size={24} />
                  </a>

                  {/* YouTube Gamer - Hover color is Red */}
                  <a 
                    href={SOCIAL_LINKS.youtubeGamer} 
                    target="_blank" 
                    rel="noreferrer" 
                    title="GamerSenseBR" 
                    className="p-4 rounded-full glass-panel text-brand-muted hover:text-[#FF0000] hover:scale-110 transition-all duration-300 group-[.animate-slide-up]:animate-wave-light hover:animate-none"
                    onClick={() => trackEvent('outbound_click', { section: 'contact', type: 'youtube_gamer', url: SOCIAL_LINKS.youtubeGamer })}
                    style={{ 
                      animationDelay: '1900ms', 
                      '--wave-color': '#FF0000', 
                      '--wave-shadow': 'rgba(255, 0, 0, 0.6)' 
                    } as React.CSSProperties}
                  >
                    <Youtube size={24} />
                  </a>

                  {/* Email - Hover color is brand-text (White) */}
                  <a 
                    href={SOCIAL_LINKS.email} 
                    title="Email" 
                    className="p-4 rounded-full glass-panel text-brand-muted hover:text-brand-text hover:scale-110 transition-all duration-300 group-[.animate-slide-up]:animate-wave-light hover:animate-none"
                    onClick={() => trackEvent('outbound_click', { section: 'contact', type: 'email', url: SOCIAL_LINKS.email })}
                    style={{ 
                      animationDelay: '2100ms', 
                      '--wave-color': 'rgb(var(--color-text))', 
                      '--wave-shadow': 'rgb(var(--color-text) / 0.5)' 
                    } as React.CSSProperties}
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </ScrollReveal>

              {/* Copyright - Fade in last */}
              <ScrollReveal animation="fade-in" delay={0.6} duration={2.0} repeat={true} threshold={0.5}>
                <p className="text-brand-muted/40 text-sm font-light">
                  {t('contact.copyright', { year: new Date().getFullYear() })}
                </p>
              </ScrollReveal>
          </div>
        </section>

        {/* Modals & Overlays */}
        {activeGame && (
          <GameModal
            game={activeGame}
            onClose={() => {
              trackEvent('game_close', { game_id: activeGame.id, game_title: activeGame.title });
              setActiveGame(null);
            }}
          />
        )}
        
        {/* AI Assistant Chatbot */}
        {/* <AiAssistant /> */}
      </div>
    </HashRouter>
  );
};

export default App;
