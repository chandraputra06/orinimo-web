import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: colors.slate,          // ✅ balikin slate-*
        primary: { DEFAULT: "#7B1E1E" },
        surface: "#F5F5F5",
      },
      fontFamily: { poppins: ["Poppins", "sans-serif"] },
    },
  },                                                      
  plugins: [],
};
