/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'poppins-normal': ['Poppins_400Regular', 'sans-serif'],
        'poppins-medium': ['Poppins_500Medium', 'sans-serif'],
        'poppins-semibold': ['Poppins_600SemiBold', 'sans-serif'],
        'poppins-bold': ['Poppins_700Bold', 'sans-serif'],
        'poppins-extrabold': ['Poppins_800ExtraBold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}