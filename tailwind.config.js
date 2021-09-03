module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#343837",
      secondary: "#0F9B8E",
      tertiary: "#03719C",
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

      primary: "#343837",
      secondary: "#0F9B8E",
      tertiary: "#03719C",
      white: "#ffffff",
    },
    fontFamily: {
      serif: ["poppins"],
    },
  },
  variants: {
    backgroundColor: ["active"],
    width: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
  },
  plugins: [],
};
