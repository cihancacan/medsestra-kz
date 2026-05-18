import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1F3A',
          blue: '#4EA3D8',
          soft: '#EAF6FB',
          beige: '#F7F1EA',
          gold: '#B8965B'
        }
      },
      boxShadow: {
        premium: '0 24px 80px rgba(11, 31, 58, 0.14)'
      }
    }
  },
  plugins: []
};

export default config;
