import axios from "axios";

const api = axios.create({
  // baseURL: "https://dummyjson.com/",
  baseURL: "https://api.nutripal.site/",
});

export default api;