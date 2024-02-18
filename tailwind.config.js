/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      xs:"360px",
      s:"640px",
      md:"764px",
      lg:"1024px",
      xl:"1280px",
    },
    extend: {
      fontFamily:{
        "lexend-deca":["Lexend Deca","sans-serif"]
      },
      colors:{
        primary:"#014061",
        secondary:"#1B7F79",
        background:"#00CCC0",
      },
      width:{
        xs:"20rem",
        sm:"24rem",
        md:"28rem",
        lg:"48rem",
        xl:"64rem",
        "2xl":"80rem"
      },
      height:{
        xs:"20rem",
        sm:"24rem",
        md:"28rem",
        lg:"48rem",
        xl:"64rem",
      }
    },
  },
  plugins: [],
}