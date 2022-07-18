import React from "react";
import { useMovieDetailQuery } from "../service/tmdbApi";
import { useParams } from "react-router-dom";

const DetailMovie = () => {
  const { id } = useParams();
  const urlImg = "https://image.tmdb.org/t/p/original";
  const { data, isLoading } = useMovieDetailQuery(id);
  const loadData = isLoading ? "Loading..." : data;

  return (
    <>
      <div>{loadData.original_title}</div>
      <div>{loadData.overview}</div>
      <img src={`${urlImg}${loadData.backdrop_path}`} alt="poster" />
    </>
  );
};

export default DetailMovie;
