import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

export interface UserState {
  details: {
    display_name: string;
  };
  token: string;
  playlists: { items: []; total: number };
  tracks: { items: []; total: number };
  shows: { items: []; total: number };
  episodes: { items: []; total: number };
  artists: { items: []; total: number };
  albums: { items: []; total: number };
}

const initialState: UserState = {
  details: {
    display_name: '',
  },
  token: '',
  playlists: { items: [], total: 0 },
  tracks: { items: [], total: 0 },
  shows: { items: [], total: 0 },
  episodes: { items: [], total: 0 },
  artists: { items: [], total: 0 },
  albums: { items: [], total: 0 },
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
    setUserAlbums: (user, action) => {
      user.albums = action.payload;
    },
    setUserArtists: (user, action) => {
      user.artists = action.payload.artists;
    },
    setUserShows: (user, action) => {
      user.shows = action.payload;
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
  setUserShows,
  setUserTracks,
  setUserEpisodes,
  setUserArtists,
  setUserAlbums,
} = slice.actions;

// Selectors
export const selectUsername = (state: AppState) =>
  state.user.details.display_name;

export const selectToken = (state: AppState) => state.user.token;
export const selectUserPlaylists = (state: AppState) => state.user.playlists;
export const selectUserArtists = (state: AppState) => state.user.artists;
export const selectUserAlbums = (state: AppState) => state.user.albums;
export const selectUserShows = (state: AppState) => state.user.shows;
export const selectUserTracks = (state: AppState) => state.user.tracks;
export const selectUserEpisodes = (state: AppState) => state.user.episodes;

export default slice.reducer;
