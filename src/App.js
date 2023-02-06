import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { MovieCard } from "./components/MovieCard/movieCard";
import { fetchMovies } from "./movieApi/backend";
import { useQuery } from "react-query";
function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const { data, error, isError, isLoading } = useQuery("movies", fetchMovies);

  useEffect(() => {
    if (isError) console.log(error);
    setMovies(data);
  }, [data]);
  console.log("search", search);
  return (
    <div className='App'>
      <header className='header'>
        <h1 className='heading-1'>Movies</h1>
      </header>
      <div className='search'>
        <input
          type='text'
          id='search'
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>

      {(isLoading || isError) && <div>Loading....</div>}
      {!isLoading && (
        <main className='main'>
          {movies?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </main>
      )}
    </div>
  );
}

export default App;
