module.exports = {
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto"', "sans-serif"],
        splash: ['"Permanent Marker"', "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: ["winter"],
  },
};
