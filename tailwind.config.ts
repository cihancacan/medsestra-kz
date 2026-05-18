import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#071827',
          navy: '#0B1F3A',
          blue: '#4EA3D8',
          ice: '#EFF8FC',
          soft: '#EAF6FB',
          beige: '#F7F1EA',
          cream: '#FBF6EF',
          gold: '#B8965B',
          sand: '#E8D9C7'
        }
      },
      boxShadow: {
        premium: '0 24px 80px rgba(11, 31, 58, 0.14)',
        luxury: '0 34px 120px rgba(7, 24, 39, 0.20)'
      }
    }
  },
  plugins: []
};

export default config;
