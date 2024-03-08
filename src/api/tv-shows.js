import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3/tv/popular";
const API_KEYS_PARAM =
  "api_key=6f1ce0e9b12eed130f12fdab778c6bf2";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(`${BASE_URL}tv/popular${API_KEYS_PARAM}`);
    console.log(response.data.results);
    return response.data.results;
  }
}
