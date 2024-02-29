/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: '#FCB72B',
        snow: '#F2F5F9',
        navy: '#333A44',
        overlay: 'rgb(0 0 0 / 75%)',
        'dark-navy': '#495567',
        'dim-gray': '#939CAA',
        'light-gray': '#E5ECF4',
        'light-yellow': '#FFF4DF'
      },
      lineHeight: {
        h1: '3.5rem', // 56px
        h2: '3rem', // 48px
        h3: '3rem', // 48px
        h4: '2rem', // 32px
        h5: '1.75rem', // 28px
        h6: '1.75rem', // 28px
        'body-2': '1.5625rem', // 25px
        'body-1': '1.5625rem' // 25px
      },
      maxWidth: {
        container: '1110px'
      }
    },
    fontSize: {
      h1: '3.5rem', // 56px
      h2: '3rem', // 48px
      h3: '2.5rem', // 40px
      h4: '2rem', // 32px
      h5: '1.5rem', // 24px
      h6: '1.25rem', // 20px
      'body-2': '1.125rem', // 18px
      'body-1': '0.9375rem' // 15px
    },
    letterSpacing: {
      h1: '-2.5px',
      h2: '-2.14px',
      h3: '-1.79px',
      h4: '-1.43px',
      h5: '-1.07px',
      h6: '-0.89px'
    },
    fontFamily: {
      sans: ['Lexend Deca', 'sans-serif'],
      mono: ['Space Mono', 'monospace']
    },

    backgroundImage: {
      circle: 'url("/patterns/circle.svg")',
      'semi-circles': 'url("/patterns/semi-circles.svg")',
      'white-circles': 'url("/patterns/white-circles.svg")',
      'right-arrow': 'url(/patterns/right-arrow.svg)'
    },
    screens: {
      md: '768px',
      xl: '1280px'
    }
  },
  plugins: []
}
