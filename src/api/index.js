import axios from "axios";
import { userLogin } from "../utils/userAuth";

const user = userLogin();

const api = axios.create({
  // baseURL: "https://dummyjson.com/",
  baseURL: "https://api.nutripal.site/",
  headers: {
    "Content-Type": "application/json",
    Authorization: user?.newToken ? `${user?.newToken}` : undefined,
  },
});

export default api;
