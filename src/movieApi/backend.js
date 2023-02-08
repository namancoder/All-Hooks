import axios from "axios";

export const defaultSearchUrl =
  "http://www.omdbapi.com/?s=batman&apikey=a4cd2d";

export const searchKeywordUrl = (keyword) => {
  if (keyword) return `http://www.omdbapi.com/?s=${keyword}&apikey=a4cd2d`;
  else return defaultSearchUrl;
};

// function debounce(func, wait) {
//   let timeout;
//   return function (...args) {
//     const context = this;
//     if (timeout) clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       timeout = null;
//       func.apply(context, args);
//     }, wait);
//   };
// }
export const fetchKeywordMovies = async (search) => {
  const { data } = await axios.get(searchKeywordUrl(search));
  return data?.Search;
};

export const useFetchKeywordMovies = (search)=> {
  let url = defaultSearchUrl;
  if (!!search) {
    url = searchKeywordUrl(search);
  }
  return useQuery(["movies", url], () => fetchMovies(url));
}
export const fetchMovies = async (url) => {
  const { data } = await axios.get(url);
  console.log("omdb", data);
  return data?.Search;
};
