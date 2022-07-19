import { configureStore } from "@reduxjs/toolkit";
import { tmdbApi } from "../service/tmdbApi";

export const store = configureStore({
  reducer: {
    tmdbApi: tmdbApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(tmdbApi.middleware);
  },
});
