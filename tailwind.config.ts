interface Colors {
  gray: string;
}
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        "3xl": "14px 17px 40px 4px",
      },
      borderRadius: {
        primary: "20px",
      },
      backgroundImage: {
        my_bg_image: "url('../public/banner.png')",
      },
    },
    colors: ({ colors }: { colors: Colors }) => ({
      white: "#ffffff",
      lightSecondary: "#A3AED0",
      bluePrimary: "#2B3674",
      gray: {
        DEFAULT: colors.gray,
        50: "#f8f9fa",
        100: "#edf2f7",
        200: "#e9ecef",
        300: "#cbd5e0",
        400: "#a0aec0",
        500: "#adb5bd",
        600: "#a3aed0",
        700: "#707eae",
        800: "#252f40",
        900: "#1b2559",
      },
      navy: {
        50: "#d0dcfb",
        100: "#aac0fe",
        200: "#a3b9f8",
        300: "#728fea",
        400: "#3652ba",
        500: "#1b3bbb",
        600: "#24388a",
        700: "#1B254B",
        800: "#111c44",
        900: "#0b1437",
      },
      shadow: {
        500: "rgba(112, 144, 176, 0.08)",
      },
    }),
  },
};
