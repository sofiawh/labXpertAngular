/** @type {import('tailwindcss').Config} */
module.exports = {
  /**
   * TO @Sofia AND @Mariam
   * THIS PLACE WE ADD OUR PATH OF THE TEMPLATE(HTML FILES)
   */
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-grotesk': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#8abac4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
