import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import userSlice from './user';
import genreSlice from './genre';
import pageSlice from './page';
import currentSlice from './playback';

const rootReducer = combineReducers({
  user: userSlice,
  genre: genreSlice,
  page: pageSlice,
  playback: currentSlice,
});

export function makeStore() {
  return configureStore({
    reducer: rootReducer,
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
