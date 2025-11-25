import api from "../api/moviesAPI";

export async function GetAllMovies() {
  const response = await api.get("movie/now_playing", {
    params: {
      api_key: "6bbbbaf932a4bd9b56a095b8eb7707ed",
      language: "pt-BR",
    },
  });

  console.log(response.data.results)
  return response.data.results;
}
