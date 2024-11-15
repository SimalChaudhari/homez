/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        'customContainer': '1600px',  // Default for large screens
        'customContainer2': '1230px',  // Default for large screens
      },
      colors: {
        'custome-white': '#F8F9FA',
        'custome-yellow': '#DBB466',
        'custome-yellow-secondery': '#BB9B6A',
        'custome-red': '#eb6753',
        'custome-black': '#181a20',
        'custome-hover-black': '#333',
        'custome-hover-back': '#f3f3f3',
        'custome-hover-red': 'hsla(8, 79%, 62%, 0.07)',
      },
      // Custom z-index values from 1 to 20
      zIndex: {
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
      },
      // Define custom screens (media query breakpoints)
      screens: {
        'xl': '1200px',   // Equivalent to the "min-width: 1200px" media query
        'lg': '992px',    // Equivalent to the "min-width: 992px" media query
        'md': '768px',    // Equivalent to the "min-width: 768px" media query
        'sm': '576px',    // Equivalent to the "min-width: 576px" media query
        'xxl': '1400px',  // Custom breakpoint for "min-width: 1400px"
        'customWidth': '1600px' // Custom breakpoint for "min-width: 1600px"
      },
    },
  },
  plugins: [],
}
