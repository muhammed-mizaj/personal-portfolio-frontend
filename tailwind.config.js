module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}","./public/*.{js,jsx,ts,tsx}","./src/Components/*.{js,jsx,ts,tsx}",
    "./src/pages/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'),],
}
