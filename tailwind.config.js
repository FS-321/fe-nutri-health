/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      hijau: "#66D37E",
      putih: "#fff",
      biru: "#0D6EFD",
      merah: "#DC3545",
      kuning: "#FBF44C",
      oren: "#F79E1B",
      birutua: "#5A4CFB",
      ungu: "#D700B4",
      hitam: "#5F6D7E",
    },
  },
  plugins: [require("daisyui")],
};
