import React from 'react';
import { X, Loader2, Maximize2 } from './Icons';
import { Game } from '../types';
import { useTranslation } from 'react-i18next';

interface GameModalProps {
  game: Game;
  onClose: () => void;
  autoFullscreen?: boolean;
}

const GameModal: React.FC<GameModalProps> = ({ game, onClose, autoFullscreen }) => {
  const [loading, setLoading] = React.useState(true);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const { t } = useTranslation();
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (document.fullscreenElement) {
      await document.exitFullscreen();
      const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
      if (gtag) gtag('event', 'game_fullscreen_exit');
      return;
    }
    await containerRef.current.requestFullscreen();
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (gtag) gtag('event', 'game_fullscreen_enter');
  };

  React.useEffect(() => {
    if (autoFullscreen) {
      // Small timeout to ensure ref is attached and browser is ready
      const timer = setTimeout(() => {
        toggleFullscreen().catch((err) => console.warn('Auto-fullscreen blocked:', err));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-bg/95 backdrop-blur-md p-4 animate-fade-in">
      <div
        ref={containerRef}
        className="relative w-full max-w-7xl h-[80vh] md:h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col"
      >
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-brand-surface border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <h3 className="text-lg font-medium text-white tracking-wide">
              {game.title}
            </h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleFullscreen}
              className="text-brand-muted hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition"
              title={isFullscreen ? 'Sair da tela cheia' : 'Tela cheia'}
              aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
            >
              <Maximize2 size={18} />
            </button>
            <button
              onClick={onClose}
              className="text-brand-muted hover:text-white bg-white/5 hover:bg-white/10 p-2 rounded-full transition"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Game Area */}
        <div className="relative flex-1 bg-black">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-brand-surface/50">
              <Loader2 size={40} className="animate-spin text-brand-accent mb-4" />
              <p className="text-sm tracking-widest uppercase text-brand-muted">{t('game_modal.initializing')}</p>
            </div>
          )}
          <iframe
            src={game.gameUrl}
            title={game.title}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen; gamepad"
            allowFullScreen
            onLoad={() => setLoading(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default GameModal;
