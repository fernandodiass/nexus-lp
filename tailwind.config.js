/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // Adicionei o prefixo src/ porque notei no seu erro que o projeto está usando a pasta src
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mesh-dark': "radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 100% 100%, hsla(225,39%,30%,1) 0, transparent 50%)",
      },
    },
  },
  plugins: [],
}