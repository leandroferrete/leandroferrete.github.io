/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './App.tsx',
    './components/**/*.{ts,tsx}',
    './services/**/*.{ts,tsx}',
    './i18n.ts'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif']
      },
      colors: {
        brand: {
          bg: 'rgb(var(--color-bg) / <alpha-value>)',
          surface: 'rgb(var(--color-surface) / <alpha-value>)',
          surfaceHighlight: 'rgb(var(--color-surface-highlight) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
          accentLight: 'rgb(var(--color-accent-light) / <alpha-value>)',
          text: 'rgb(var(--color-text) / <alpha-value>)',
          muted: 'rgb(var(--color-muted) / <alpha-value>)',
          border: 'rgb(var(--color-border) / <alpha-value>)'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        float: 'float 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave-light': 'waveLight 0.6s ease-in-out 1'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' }
        },
        waveLight: {
          '0%, 100%': {
            borderColor: 'var(--glass-border)',
            boxShadow: 'none',
            transform: 'scale(1)',
            color: 'rgb(var(--color-muted))'
          },
          '50%': {
            borderColor: 'var(--wave-color)',
            boxShadow: '0 0 20px var(--wave-shadow)',
            transform: 'scale(1.15)',
            color: 'var(--wave-color)'
          }
        }
      }
    }
  },
  plugins: []
};
