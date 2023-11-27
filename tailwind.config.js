/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      hijau: "#66D37E",
      putih: "#fff",
      biru: "0D6EFD",
      merah: "DC3545",
      kuning: "FBF44C",
      oren: "F79E1B",
    },
  },
  plugins: [require("daisyui")],
};
