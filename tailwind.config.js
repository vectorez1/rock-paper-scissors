/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          scissor: {
            from: 'hsl(40, 84%, 53%)',
            to: 'hsl(39, 89%, 49%)',
          },
          paper: {
            from: 'hsl(230, 89%, 62%)',
            to: 'hsl(230, 89%, 65%)',
          },
          rock: {
            from: 'hsl(349, 71%, 52%)',
            to: 'hsl(349, 70%, 56%)',
          },
          lizard: {
            from: 'hsl(261, 73%, 60%)',
            to: 'hsl(261, 72%, 63%)',
          },
          cyan: {
            from: 'hsl(189, 59%, 53%)',
            to: 'hsl(189, 58%, 57%)',
          },
        },
        neutral: {
          darktext: 'hsl(229, 25%, 31%)',
          scoretext: 'hsl(229, 64%, 46%)',
          headeroutline: 'hsl(217, 16%, 45%)',
        }
      },
    },
  },
  plugins: [],
}
