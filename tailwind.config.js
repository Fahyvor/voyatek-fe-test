/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'custom-xl': '0 10px 20px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}
