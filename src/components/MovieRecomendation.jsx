import React from "react";
import { useMovieRecommendationQuery } from "../service/tmdbApi";
import { useNavigate } from "react-router-dom";
import "./css/cardSmallLandscape.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const MovieRecomendation = (props) => {
  // ! sesuaikan dengan movie recomendation pake props dari detil movie
  const { propsData } = props;

  const { data, isLoading, error } = useMovieRecommendationQuery(propsData);
  const navigate = useNavigate();
  const urlImg = "https://image.tmdb.org/t/p/original";
  const imageOnClickHandler = (propsData) => {
    if (propsData) {
      navigate(`/movie/${propsData}`);
    } else {
      alert("Please login first");
    }
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
              {movie.backdrop_path ? (
                <img
                  src={`${urlImg}${movie.poster_path}`}
                  alt="poster"
                  className="slide-img"
                />
              ) : (
                <img
                  src={process.env.PUBLIC_URL + "/img/netflix.jpg"}
                  alt="poster"
                  className="slide-img"
                />
              )}

              {/* <div className="imgTitle">{movie.original_title}</div> */}
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
          <p className="title">Recomendation</p>
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
