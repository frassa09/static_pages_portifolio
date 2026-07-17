/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
    './portfolio-hub/**/*.{js,jsx}',
    './landing-pages/**/*.{js,jsx}',
    './shared/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Cormorant Garamond', 'Georgia', 'Cambria', 'Times New Roman', 'serif']
      },
      colors: {
        primary: '#141413',
        canvas: '#ffffff',
        'canvas-soft': '#faf9f5',
        peach: '#e8875b',
        'peach-deep': '#cc785c',
        coral: '#cc785c',
        sand: '#efe9de',
        ink: '#141413',
        body: '#3d3d3a',
        muted: '#6c6a64',
        'surface-card': '#efe9de',
        'surface-soft': '#f5f0e8'
      },
      borderRadius: {
        'glass': '16px'
      },
      boxShadow: {
        'glass': '0 1px 2px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.04)',
        'glass-hover': '0 1px 2px rgba(0,0,0,0.04), 0 8px 32px rgba(0,0,0,0.08)',
        'glass-strong': '0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)'
      }
    }
  },
  plugins: []
};
