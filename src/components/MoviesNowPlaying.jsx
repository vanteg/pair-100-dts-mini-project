import React from "react";
import { useMovieNowPlayingQuery } from "../service/tmdbApi";
import { useNavigate } from "react-router-dom";
import "./css/cardSmallLandscape.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MoviesNowPlaying = (propsData) => {
  const { data, isLoading, error } = useMovieNowPlayingQuery();
  const navigate = useNavigate();
  const urlImg = "https://image.tmdb.org/t/p/original";

  const imageOnClickHandler = (id) => {
    if (propsData) {
      navigate(`/movie/${id}`);
    } else {
      alert("Please login first");
    }
  };

  // console.log(data);

  const loadData = isLoading
    ? ""
    : data.results.map((movie) => {
        return (
          <SwiperSlide className="swiper-slide" key={movie.id}>
            <div
              className="imageContainer"
              onClick={() => imageOnClickHandler(movie.id)}
            >
              <img
                src={`${urlImg}${movie.backdrop_path}`}
                alt="poster"
                className="slide-img"
              />
              <div className="imgTitle">{movie.original_title}</div>
            </div>
          </SwiperSlide>
        );
      });

  return (
    <>
      {error ? (
        <div>"error....."</div>
      ) : isLoading ? (
        <div>"isLoading...."</div>
      ) : (
        <div className="movie-list-container">
          <p className="title">Now Playing</p>
          <Swiper
            modules={[Navigation, Pagination, A11y]}
            navigation
            speed={300}
            slidesPerView={5}
            loop
            className="swiper-container"
          >
            <div className="imgWrapper">{loadData}</div>
          </Swiper>
        </div>
      )}
    </>
  );
};

export default MoviesNowPlaying;
