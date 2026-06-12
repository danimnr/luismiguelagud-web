/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Design tokens — cambia aquí para actualizar toda la web
        tinta: '#0F0E0D',       // casi negro, texto principal
        crema: '#F7F3EE',       // fondo claro
        oro: '#B8975A',         // acento dorado
        arena: '#E8E2D9',       // fondo secundario
        gris: '#6B6560',        // texto secundario
        'tinta-dark': '#F7F3EE',
        'crema-dark': '#141210',
        'arena-dark': '#1E1C19',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.2rem, 5vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(1.6rem, 3vw, 2.8rem)', { lineHeight: '1.15' }],
      },
      spacing: {
        section: 'clamp(5rem, 10vw, 9rem)',
      },
      transitionDuration: {
        400: '400ms',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
