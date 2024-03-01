/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: '#18222f',
        page: '#2b3441',
        card: '#3e4c59',
        'card-hover': '#4e5e6f',
        'default-text': '#d1d5db',
        'blue-accent': '#0084d4',
        'blue-accent-hover': '#009fff',
      },
    },
  },
  plugins: [],
};
