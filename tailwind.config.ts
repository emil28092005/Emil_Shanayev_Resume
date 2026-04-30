import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.ts',
  ],
  theme: {
    extend: {
      colors: {
        terminal: {
          bg:      '#0a0a0a',
          card:    '#0f0f0f',
          border:  '#1c1c1e',
          border2: '#27272a',
          amber:   '#f59e0b',
          amberDim:'#78350f',
          green:   '#22c55e',
          text:    '#e4e4e7',
          muted:   '#71717a',
          subtle:  '#3f3f46',
        },
      },
      fontFamily: {
        mono: ['var(--font-jetbrains)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'draw-line': 'drawLine 0.8s ease forwards',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(12px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        drawLine: {
          from: { width: '0' },
          to:   { width: '100%' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            fontFamily: 'var(--font-jetbrains), monospace',
          },
        },
      },
    },
  },
  plugins: [],
}

export default config
