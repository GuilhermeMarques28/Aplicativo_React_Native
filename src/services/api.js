import axios from "axios";

export const key = "1fdea44770b882312e09cae9c315329b";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default api;
