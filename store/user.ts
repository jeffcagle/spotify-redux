import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

export interface UserState {
  details: {
    display_name: string;
  };
  token: string;
  playlists: { items: []; total: number };
  tracks: { items: []; total: number };
  episodes: { items: []; total: number };
}

const initialState: UserState = {
  details: {
    display_name: '',
  },
  token: '',
  playlists: { items: [], total: 0 },
  tracks: { items: [], total: 0 },
  episodes: { items: [], total: 0 },
};

const slice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setToken: (user, action) => {
      user.token = action.payload;
    },
    setUser: (user, action) => {
      user.details = action.payload;
    },
    setUserPlaylists: (user, action) => {
      user.playlists = action.payload;
    },
    setUserTracks: (user, action) => {
      user.tracks = action.payload;
    },
    setUserEpisodes: (user, action) => {
      user.episodes = action.payload;
    },
  },
});

export const {
  setToken,
  setUser,
  setUserPlaylists,
  setUserTracks,
  setUserEpisodes,
} = slice.actions;

// Selectors
export const selectUsername = (state: AppState) =>
  state.user.details.display_name;

export const selectToken = (state: AppState) => state.user.token;
export const selectUserPlaylists = (state: AppState) => state.user.playlists;
export const selectUserTracks = (state: AppState) => state.user.tracks;
export const selectUserEpisodes = (state: AppState) => state.user.episodes;

export default slice.reducer;
