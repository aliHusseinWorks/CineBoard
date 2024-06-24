const apiKey = process.env.REACT_APP_API_KEY;
const authorizationKey = process.env.REACT_APP_AUTHORIZATION_KEY;
const baseUrl = process.env.REACT_APP_BASE_URL;
const defaultHeaders = {
  Accept: "application/json",
  Authorization: authorizationKey,
};

const fetchData = async (url) => {
  try {
    const options = {
      method: "GET",
      headers: defaultHeaders,
    };
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

//https://developer.themoviedb.org/reference/trending-all
export const getTrending = async (page) => {
  const url = `${baseUrl}/trending/all/day?api_key=${apiKey}&page=${page}`;
  return await fetchData(url);
};

//https://developer.themoviedb.org/reference/discover-movie
//https://developer.themoviedb.org/reference/discover-tv
export const getTrendingByType = async (page, genreURL, type) => {
  const url = `${baseUrl}/discover/${type}?api_key=${apiKey}&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=${genreURL}&page=${page}`;
  return await fetchData(url);
};

//https://developer.themoviedb.org/reference/genre-movie-list
//https://developer.themoviedb.org/reference/genre-tv-list
export const getGenre = async (type) => {
  const url = `${baseUrl}/genre/${type}/list?api_key=${apiKey}`;
  return await fetchData(url);
};

//https://developer.themoviedb.org/reference/search-multi
export const getSearch = async (searchText, page) => {
  const url = `${baseUrl}/search/multi?api_key=${apiKey}&query=${searchText}&include_adult=false&page=${page}`;
  return await fetchData(url);
};
