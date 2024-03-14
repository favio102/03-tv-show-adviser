import axios from "axios";
// import { FAKE_POPULARS, FAKE_RECOMMENDATION } from "./fake_data";

const APIKey = process.env.REACT_APP_API_KEY;
const APIToken = process.env.REACT_APP_TOKEN;

export class TVShowAPI {
  static async fetchPopulars() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/popular",
      params: { language: "en-US", page: "1", api_key: APIKey },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIToken}`,
      },
    };
    try {
      const response = await axios.request(options);
      // console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
    // return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    const options = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${tvShowId}/recommendations`,
      params: { language: "en-US", page: "1", api_key: APIKey },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIToken}`,
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
    // return FAKE_RECOMMENDATION;
  }

  static async fetchByTitle(title) {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/tv",
      params: {
        query: title,
        include_adult: "false",
        language: "en-US",
        page: "1",
      },
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${APIToken}`,
      },
    };

    try {
      const response = await axios.request(options);
      // console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
}
