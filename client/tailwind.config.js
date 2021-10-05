module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "#1B2431",
      secondary: "#016795",
      tertiary: "#1E488F",
      highlight: "#1E488F"
    }),

    // padding: {
    //   sm: '8px',
    //   md: '16px',
    //   lg: '24px',
    //   xl: '48px',
    //   br:'132px'
    //  },

    colors: {
      // Configure your color palette here

      primary: "#1B2431",
      secondary: "#016795",
      tertiary: "#1E488F",
      white: "#ffffff"
    },
    fontFamily: {
      serif: ["poppins"]
    }
  },
  variants: {
    backgroundColor: ["active"],
    width: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      opacity: ["disabled"]
    }
  },
  plugins: []
};
