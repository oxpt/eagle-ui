import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        alart: {
          from: {
            opacity: '0',
            width: '100%',
          },
          to: {
            opacity: '1',
            width: '0%',
          },
        },
      },
      animation: {
        'alart-progress': 'alart 10s linear 0s 1',
      },
    },
  },
};
export default config;
