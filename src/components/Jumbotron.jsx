import React from "react";
import { useMovieNowPlayingQuery } from "../service/tmdbApi";
import "./css/jumbotron.css";
import { useNavigate } from "react-router-dom";

const Jumbotron = (propsData) => {
  const { data, isLoading, error } = useMovieNowPlayingQuery();
  const navigate = useNavigate();

  const imageOnClickHandler = (id) => {
    if (propsData) {
      navigate(`/movie/${id}`);
    } else {
      alert("Please login first");
    }
  };

  const urlImg = "https://image.tmdb.org/t/p/original";
  const loadData = error
    ? console.log(error.message)
    : isLoading
    ? ""
    : data.results[Math.floor(Math.random() * data?.results.length)];

  return (
    <>
      <div className="jumbotron">
        <div
          className="jumbotron-inner"
          onClick={() => imageOnClickHandler(loadData.id)}
        >
          <div className="jumbotron-left">
            <div className="jumbotron-title">{loadData.original_title}</div>
            <div className="jumbotron-overview">{loadData.overview}</div>
          </div>
          <div className="jumbotron-right">
            <img
              src={`${urlImg}${loadData.backdrop_path}`}
              alt="Jumbotron"
              className="jumbotron-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
