/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "edu": "Edu TAS Beginner",
      },
    },
  },
  plugins: [],
  prefix: "tw-",
  corePlugins: {
    preflight: false,
  },
};

