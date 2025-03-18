"use client";

import "./index.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import { Movie } from "@/types/movie";
import MovieCard from "../MovieCard";
import ReactLoading from "react-loading";

export default function MovieList() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/discover/movie",
      params: {
        api_key: "9c74145a394a7e1cf5c2281b074df2d6",
        language: "pt-BR",
      },
    }).then((response) => {
      setMovies(response.data.results);
    });

    setLoading(false);
  };

  if (loading) {
    return (
      <div className="loading">
        <ReactLoading type="spin" color="#6046ff" height={"5%"} width={"5%"} />
      </div>
    );
  }

  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}
    </ul>
  );
}
