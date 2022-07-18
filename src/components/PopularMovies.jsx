import React from "react";
import { useMoviesPopularQuery } from "../service/tmdbApi";
import { useNavigate } from "react-router-dom";
import "./css/cardSmallLandscape.css";

const PopularMovies = () => {
  const { data, isLoading, error } = useMoviesPopularQuery();
  const navigate = useNavigate();
  const urlImg = "https://image.tmdb.org/t/p/original";

  const imageOnClickHandler = (id) => {
    navigate(`/movie/${id}`);
  };

  const loadData = isLoading
    ? "Loading..."
    : data.results.slice(-5).map((movie) => {
        return (
          <div
            className="imageContainer"
            key={movie.id}
            onClick={() => imageOnClickHandler(movie.id)}
          >
            <img src={`${urlImg}${movie.backdrop_path}`} alt="poster" />
            <div className="imgTitle">{movie.original_title}</div>
          </div>
        );
      });
  return (
    <>
      <div className="movie-list-container">
        <span className="title">Popular</span>
        <div className="imgWrapper">{error ? error.message : loadData}</div>
      </div>
    </>
  );
};

export default PopularMovies;
