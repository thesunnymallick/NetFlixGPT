import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import moviesReducer from '../features/moviesSlice';
import apiReducer from '../features/apiConfigurationSlice';
const store = configureStore({
  reducer: {
    auth: userReducer,
    movies: moviesReducer,
    url:apiReducer
  },
});
export default store;
