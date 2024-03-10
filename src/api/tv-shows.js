import axios from "axios";

// const BASE_URL = "https://api.themoviedb.org/3/";
// const API_KEYS_PARAM =
//   "api_key=dsadasdasdas";

const APIKey = process.env.REACT_APP_API_KEY
const APIToken = process.env.REACT_APP_TOKEN


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
      console.log(response.data.results);
      return response.data.results;
    } catch (error) {
      console.error(error);
    }
  }
}

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/tv/popular',
//   params: {language: 'en-US', page: '1'},
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer asdasdasd'},
// };

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });
