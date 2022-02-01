import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

export interface GenreState {
  type: string;
  name: string;
  items: [];
}

const initialState: GenreState = {
  type: '',
  name: '',
  items: [],
};

const slice = createSlice({
  name: 'genre',
  initialState: initialState,
  reducers: {
    setGenreType: (genre, action) => {
      genre.type = action.payload;
    },
    setGenreTitle: (genre, action) => {
      genre.name = action.payload;
    },
    setGenreItems: (genre, action) => {
      genre.items = action.payload;
    },
  },
});

export const { setGenreItems, setGenreType, setGenreTitle } = slice.actions;

export const selectGenreType = (state: AppState) => state.genre.type;
export const selectGenreTitle = (state: AppState) => state.genre.name;
export const selectGenreItems = (state: AppState) => state.genre.items;

export default slice.reducer;
