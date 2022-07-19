import React from "react";
import { useMovieDetailQuery } from "../service/tmdbApi";
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../authentication/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const DetailMovie = () => {
  const { id } = useParams();
  const urlImg = "https://image.tmdb.org/t/p/original";
  const { data, isLoading } = useMovieDetailQuery(id);
  const loadData = isLoading ? "Loading..." : data;
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <>
      {user ? (
        <div>
          <div>{loadData.original_title}</div>
          <div>{loadData.overview}</div>
          <img src={`${urlImg}${loadData?.backdrop_path}`} alt="poster" />
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );

  // <div>{loadData.original_title}</div>
  //     <div>{loadData.overview}</div>
  //     <img src={`${urlImg}${loadData?.backdrop_path}`} alt="poster" />
};

export default DetailMovie;
