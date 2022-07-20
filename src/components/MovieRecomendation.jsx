import React from "react";
import { useMoviesPopularQuery } from "../service/tmdbApi";
import { useNavigate } from "react-router-dom";
import "./css/cardSmallLandscape.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const MovieRecomendation = (propsData) => {
  // ! sesuaikan dengan movie recomendation pake props dari detil movie
  const { data, isLoading, error } = useMoviesPopularQuery();
  const navigate = useNavigate();
  const urlImg = "https://image.tmdb.org/t/p/original";

  const imageOnClickHandler = (id) => {
    // if (propsData) {
    navigate(`/movie/${id}`);
    // } else {
    //   alert("Please login first");
    // }
  };

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
          <p className="title">Popular</p>
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

export default MovieRecomendation;
