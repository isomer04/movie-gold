import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
});

api.interceptors.request.use((config) => {
  config.headers["Access-Control-Allow-Origin"] = "http://localhost:3000";
  return config;
});

export default api;
