/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core backgrounds — depth hierarchy from darkest to lightest
        void:    "#0A0A0F", // page background
        studio:  "#111118", // navbar / sidebar
        reel:    "#16161F", // cards / panels
        frame:   "#1E1E2E", // borders / dividers
        grain:   "#2A2A3A", // subtle fills / inputs
 
        // Amber Gold — primary accent
        gold: {
          tint:    "#E8C54720", // chip backgrounds, hover fills (12% opacity)
          DEFAULT: "#C4972A",   // base — use in gradients, icons
          bright:  "#E8C547",   // logo mark, star ratings
          hover:   "#F5D76E",   // button hover state
          900:     "#412402",
          800:     "#633806",
          600:     "#854F0B",
          400:     "#BA7517",
          200:     "#FAC775",
          50:      "#FAEEDA",
        },
 
        // Typography
        celluloid: "#F0EEE8", // primary headings & body (warm white)
        ash:       "#A8A8BA", // subtext / metadata
        slate:     "#7A7A8C", // placeholders / hints
 
        // Semantic
        crimson: {
          DEFAULT: "#E05252", // danger / remove
          dim:     "#E0525220",
          border:  "#E0525240",
        },
        sage: {
          DEFAULT: "#4A9E72", // success / saved
          dim:     "#4A9E7220",
          border:  "#4A9E7240",
        },
        dusk: {
          DEFAULT: "#7C9EE0", // info / links
          dim:     "#7C9EE020",
          border:  "#7C9EE040",
        },
        ember: {
          DEFAULT: "#D48B3A", // warning / notice
          dim:     "#D48B3A20",
          border:  "#D48B3A40",
        },
 
        // Genre poster accent colors (movie cards)
        poster: {
          scifi:    "#C4972A",
          drama:    "#4A7C59",
          thriller: "#2A4A6B",
          fantasy:  "#5A4080",
          horror:   "#8B1A1A",
          romance:  "#8B2A4A",
          comedy:   "#4A6B2A",
          action:   "#6B3A2A",
          doc:      "#2A5A6B",
        },
      },
    },
  },
  plugins: [],
}