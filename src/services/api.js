import axios from "axios";

// BASE DA URL: https://api.themoviedb.org/3/

// URL DA API: /movie/now_playing?api_key=88cba256fa5b87ba578b00a0d248ca67&language=pt-BR

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
});

export default api;
