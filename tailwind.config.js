module.exports = {
  content: ["./src/**/*.{html,js,pug}"],
  theme: {
    screens: {
      'lg': '1200px',
      'xl': '1440px'
    },

    colors: {
      'transparent': 'transparent',
      'white': '#FFFFFF',
      'black': '#000000',
      'main': '#444444',
      'gray': '#8A8A8A',
      '91': '#919EC3',
      '00A': '#00AEEF',
      '5C': '#5CD3FF',
      'blue': '#0D4DA1',
      'dark-blue': '#0F2447',
      '87': '#878787',
      '8A': '#8A8A8A',
      'BD': '#BDBDBD',
      'F4': '#F4F4F4',
      'orange': '#F89320',
      'C4': '#C4C4C4',
      'D3': '#D31616'

    },

    borderRadius: {
      none: '0px',
      sm: '0.125rem',
      DEFAULT: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '20px': '1.25rem',
      '3xl': '1.5rem',
      full: '9999px',
    },

    extend: {
      dropShadow: {
        'btn': '0 13px 12px rgba(18, 67, 54, 0.5)',
        'plate': '0px 16px 23px -12px rgba(50, 50, 50, 0.1)'
      }
    },
  },
  plugins: [],
}
