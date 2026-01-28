import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'pop-in' | 'scale-in';
  delay?: number; // delay in seconds
  duration?: number; // duration in seconds (optional override)
  className?: string;
  threshold?: number;
  repeat?: boolean; // New prop to toggle re-animating on scroll
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  animation = 'slide-up', 
  delay = 0,
  duration,
  className = '',
  threshold = 0.1,
  repeat = false
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Only unobserve if we DON'T want to repeat
          if (!repeat && ref.current) observer.unobserve(ref.current);
        } else if (repeat) {
          // If repeating, reset visibility when element leaves viewport
          setIsVisible(false);
        }
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is fully in view
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold, repeat]);

  const style: React.CSSProperties = {
    animationDelay: `${delay}s`,
    ...(duration ? { animationDuration: `${duration}s` } : {}),
    animationFillMode: 'both' // Ensures initial state (opacity: 0) is applied during delay
  };

  // If repeat is on, we ensure the class is removed when not visible so it can be added again
  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0-forced';

  return (
    <div 
      ref={ref} 
      className={`${className} ${animationClass}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;