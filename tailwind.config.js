/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        darkblue: "#002399",
        lightdark: "#262626",
      },
      backgroundColor: {
        darkblue: "#002399",
      },
      borderColor: {
        darkblue: "#002399",
        grey: "#D3D3D3",
        lightdark: "#262626",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
        inter: "'Inter', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        segoeUI: "'Segoe', sans-serif",
        sora: "'Sora', sans-serif",
        dmsans: "'DM Sans', sans-serif",
        plusJakartaSans: "'Plus Jakarta Sans', sans-serif",
        workSans: "'Work Sans', sans-serif",
      },
      backgroundImage: {
        wave: "url('/bg-wave.png')",
      },
    },
  },
  plugins: [],
};
