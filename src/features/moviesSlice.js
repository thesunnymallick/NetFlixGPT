import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { movies: [] },
  reducers: {
    nowPlayingMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { nowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
