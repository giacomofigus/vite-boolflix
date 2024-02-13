import { reactive } from "vue";

export const store = reactive({
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=980a1a5c51cee9d7c58a1c9d39e12ea6",
    searchFilm: "",
})