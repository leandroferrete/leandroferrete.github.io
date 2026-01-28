import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2 } from './Icons';
import { chatWithLeandroAI } from '../services/geminiService';
import { useTranslation } from 'react-i18next';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AiAssistant: React.FC = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Initialize greeting on open or language change
  useEffect(() => {
    if (messages.length === 0) {
        setMessages([{ role: 'assistant', content: t('ai.greeting') }]);
    }
  }, [t, messages.length]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await chatWithLeandroAI(userMsg);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end font-sans">
      {isOpen && (
        <div className="mb-4 w-[360px] max-w-[90vw] h-[550px] glass-panel bg-brand-bg/90 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-scale-in border border-white/10">
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex justify-between items-center bg-white/5">
            <div>
              <h3 className="text-white font-bold text-lg flex items-center gap-2">
                {t('ai.title')}
              </h3>
              <p className="text-xs text-brand-muted">{t('ai.powered')}</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-brand-muted hover:text-white transition p-1 hover:bg-white/10 rounded-full">
              <X size={20} />
            </button>
          </div>

          {/* Chat Body */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-6">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-accent text-white rounded-2xl rounded-br-sm shadow-lg' 
                      : 'bg-white/10 text-gray-200 rounded-2xl rounded-bl-sm border border-white/5'
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-2xl rounded-bl-sm flex items-center gap-2 border border-white/5">
                  <Loader2 size={16} className="animate-spin text-brand-accent" />
                  <span className="text-xs text-brand-muted">{t('ai.thinking')}</span>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-white/5 flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t('ai.placeholder')}
              className="flex-1 bg-brand-bg border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-brand-accent transition placeholder-white/20"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-brand-accent hover:bg-brand-accentLight disabled:opacity-50 disabled:cursor-not-allowed text-white p-3 rounded-xl transition shadow-lg"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-110 ${isOpen ? 'bg-brand-surface border border-white/20' : 'bg-brand-accent text-white'}`}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={26} />}
        
        {!isOpen && (
            <span className="absolute right-full mr-4 bg-white text-brand-bg px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {t('ai.badge')}
            </span>
        )}
      </button>
    </div>
  );
};

export default AiAssistant;