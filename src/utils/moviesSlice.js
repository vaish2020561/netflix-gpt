import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    upcommingMovies: null,
    topRatedMovies: null,
    trendingMovies: null,
    shows: null,
    popularshows:null,
    topRatedShows:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrendingMovies: (state, action) => {
      state.trendingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTopRatedShows: (state, action) => {
      state.topRatedShows = action.payload;
    },
    addUpcommingMovies: (state, action) => {
      state.upcommingMovies = action.payload;
    },
    addShows: (state, action) => {
      state.shows = action.payload;
    },
    addPopularShows: (state, action) => {
      state.popularshows = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addUpcommingMovies,
  addTopRatedMovies,
  addTrendingMovies,
  addShows,
  addPopularShows,
  addTopRatedShows,
} = moviesSlice.actions;

export default moviesSlice.reducer;
