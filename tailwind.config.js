module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {},
  },
   daisyui: {
    styled: true,
    themes: ["emerald", "dark", "cmyk"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  plugins: [require("daisyui")],
}
