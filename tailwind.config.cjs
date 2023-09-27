/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        fade: "fadeOut 2s ease-in-out",
        fade4: "fadeOut 4s ease-in-out",
        wiggle: "wiggle 1s ease-in-out infinite",
      },

      // that is actual animation
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { backgroundColor: theme("colors.black") },
          "100%": { backgroundColor: theme("colors.black100") },
        },
      }),

      fontFamily: {
        coolvetica: ["Coolvetica", "sans-serif"],
        jumper: ["Jumper", "sans-serif"],
        titillium: ["Titillium Web", "sans-serif"],
        foobar: ["Foobar Pro", "sans-serif"],
        sourceSans: ["SourceSans", "sans-serif"],
        sourceSansSemi: ["SourceSansSemi", "sans-serif"],
        bivoac: ["Bivoac", "sans-serif"],
        openSans: ["OpenSans", "sans-serif"],
        robotoLight: ["RobotoLight", "sans-serif"],
        robotoReg: ["RobotoRegular", "sans-serif"],
        robotoCond: ["RobotoCondensed", "sans-serif"],
        baloo: ["Baloo", "sans-serif"],
      },
      colors: {
        background: "#171714",
        lighterForeground: "#1e1e1e",
        highlight: "#27DEE8",
        darkHighlight: "#008188",
        headerText: "#FFFFFF",
        paragraphText: "#A3A3A3",
        mediumGray: "#797979",
        gray: "#323232",
        darkGray: "#1E1E1E",
        darkerGray: "#171714",
        offWhite: "#C7C7C7",
        gunxPink: "#A80D68",
        seaBlue: "#0D68A8",
        priceGreen: "#68A80D",
        priceRed: "#ed123e",
      },
      transitionProperty: {
        height: "height",
        width: "width",
      },
      backgroundImage: {
        gunx: "url('./src/assets/images/projects/gutterpunx/gunx-profile-logo.png')",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
  corePlugins: {
    backgroundOpacity: true,
  },
};
