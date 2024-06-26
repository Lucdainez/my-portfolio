import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'back-code': 'url(../../public/images/fundo.jpeg)'
      },
      colors: {
        'back': '#306A8C',
        'main':  '#2d6484'
      },
      boxShadow: {
        'box': ' 5px -5px 13px #2d6484, -5px 5px 13px #337094'
      },
      spacing: {
        'window': '1200px'
      }
    }
  },
  plugins: []
};
export default config;
