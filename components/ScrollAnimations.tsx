import React, { useEffect, useRef, useState } from 'react';

// --- 1. Dynamic Scroll Line (For Timeline) ---
export const ScrollTriggeredLine: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height: containerHeight } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start filling when the element enters the bottom 3/4 of screen
      const startPoint = windowHeight * 0.75; 
      
      // Calculate how much pixel distance we've scrolled past the start point relative to the element
      const dist = startPoint - top;
      
      // Convert to percentage (0 to 100)
      let percentage = (dist / containerHeight) * 100;
      percentage = Math.max(0, Math.min(100, percentage));
      
      setHeight(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className={`relative w-[2px] h-full bg-brand-border/10 ${className}`}>
      <div 
        className="absolute top-0 left-0 w-full bg-brand-accent transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(99,102,241,0.5)]"
        style={{ height: `${height}%` }}
      />
    </div>
  );
};

// --- 2. Spotlight Card (Mouse Tracking Glow) ---
interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export const SpotlightCard: React.FC<SpotlightCardProps> = ({ 
  children, 
  className = "", 
  spotlightColor = "rgba(99, 102, 241, 0.15)" 
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-2xl border border-brand-border/10 bg-brand-surface/30 backdrop-blur-sm transition-colors duration-300 ${className}`}
    >
      {/* Moving Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      {/* Content */}
      <div className="relative h-full">
        {children}
      </div>
    </div>
  );
};

// --- 3. Typewriter Text Effect ---
export const TypewriterText: React.FC<{ text: string; delay?: number; className?: string }> = ({ text, delay = 0, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStarted(true);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50 + Math.random() * 30); // Randomize slightly for human feel

    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span className={`${className}`}>
      {displayedText}
      <span className="animate-pulse ml-1 text-brand-accent">_</span>
    </span>
  );
};

// --- 4. Page Scroll Progress Bar ---
export const ProgressBar = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setWidth(scrollPercent);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 h-1 bg-brand-accent/30 z-[100] w-full">
            <div 
                className="h-full bg-brand-accent shadow-[0_0_10px_rgba(99,102,241,0.8)]" 
                style={{ width: `${width}%` }} 
            />
        </div>
    )
}

// --- 5. Scroll Glowing Border (For Profile Photo) ---
export const ScrollGlowingBorder: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [intensity, setIntensity] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        if (!ref.current) return;
        
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Calculate based on distance from center of viewport to center of element
        const elementCenter = rect.top + (rect.height / 2);
        const viewportCenter = windowHeight / 2;
        const dist = Math.abs(viewportCenter - elementCenter);

        // Define range: How far from center before it fades out?
        // Let's say it starts fading immediately as it leaves center, and is 0 at about 60% of viewport height distance
        const maxDist = windowHeight / 1.5; 

        let val = 1 - (dist / maxDist);
        val = Math.max(0, Math.min(1, val));
        
        setIntensity(val);
      };
  
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    // Interpolate values
    // Border alpha: 0.1 -> 1
    // Box shadow spread: 0 -> 25px
    // Box shadow alpha: 0 -> 0.6
    
    return (
      <div 
        ref={ref}
        className={`border-4 transition-all duration-100 ease-out ${className}`}
        style={{
            borderColor: `rgba(99, 102, 241, ${0.1 + (intensity * 0.9)})`,
            boxShadow: `0 0 ${intensity * 30}px rgba(99, 102, 241, ${intensity * 0.6})`
        }}
      >
        {children}
      </div>
    );
};