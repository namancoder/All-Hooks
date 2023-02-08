import axios from "axios";
import { useQuery } from "react-query";

export const defaultSearchUrl =
  "http://www.omdbapi.com/?s=batman&apikey=a4cd2d";

export const searchKeywordUrl = (keyword) => {
  if (keyword) return `http://www.omdbapi.com/?s=${keyword}&apikey=a4cd2d`;
  else return defaultSearchUrl;
};

export const fetchKeywordMovies = async (search) => {
  const { data } = await axios.get(searchKeywordUrl(search));
  return data?.Search;
};

export const useFetchKeywordMovies = (search) => {
  let url = defaultSearchUrl;
  if (!!search) {
    url = searchKeywordUrl(search);
  }
  return useQuery(["movies", url], () => fetchMovies(url));
};
export const fetchMovies = async (url) => {
  const { data } = await axios.get(url);
  console.log("omdb", data);
  return data?.Search;
};
