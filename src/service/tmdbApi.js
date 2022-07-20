// import create api redux toolkit query
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/",
  }),
  endpoints: (builder) => ({
    moviesPopular: builder.query({
      query: () =>
        `movie/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`,
    }),
    moviesTopRated: builder.query({
      query: () =>
        `movie/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`,
    }),
    movieNowPlaying: builder.query({
      query: () =>
        `movie/now_playing?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`,
    }),
    movieRecommendation: builder.query({
      query: (id) =>
        `movie/${id}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`,
    }),
    movieDetail: builder.query({
      query: (id) =>
        `movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`,
    }),
    movieLatest: builder.query({
      query: () =>
        `movie/latest?api_key=${process.env.REACT_APP_TMDB_API_KEY}&page=1`,
    }),
  }),
});

export const {
  useMoviesPopularQuery,
  useMovieNowPlayingQuery,
  useMovieDetailQuery,
  useMovieLatestQuery,
  useMoviesTopRatedQuery,
} = tmdbApi;
