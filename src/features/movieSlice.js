import { createSlice } from '@reduxjs/toolkit';
import { movieDictionary } from '../app/data';

const initialState = {
  movies: movieDictionary,
  favourites: [],
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload.id);
      state.favourites = state.favourites.filter(favourite => favourite.id != action.payload.id)
    },
    addFavourite: (state, action) => {
      if (!state.favourites.some(movie => movie.id === action.payload.id)) {
        state.favourites.push(action.payload);
      }
    },
    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(movie => movie.id !== action.payload.id);
    },
    addComment: (state, action) => {
      const movie = state.movies.find(movie => movie.id == action.payload.movieId);
      if (movie) {
        movie.comment.push(action.payload.comment);
      }
    },
    removeComment: (state, action) => {
      const movie = state.movies.find(movie => movie.id === action.payload.movieId);
      if (movie) {
        movie.comment = movie.comment.filter(comment => comment.id != action.payload.commentId);
      }
    },
  },
});

export const { addMovie, removeMovie, addFavourite, removeFavourite, addComment, removeComment } = moviesSlice.actions;

export default moviesSlice.reducer;
