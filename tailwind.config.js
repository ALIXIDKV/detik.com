export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: { extend: {
    colors: { brand: { DEFAULT: '#D6001C', dark: '#A80016' } },
    fontFamily: { sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'], serif: ['"Source Serif 4"', 'Georgia', 'serif'] },
  } },
}
