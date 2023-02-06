import axios from "axios";

export const fetchMovies = async () => {
  const { data } = await axios.get(
    "http://www.omdbapi.com/?s=batman&apikey=a4cd2d"
  );
  console.log("omdb", data);
  return data?.Search;
};
