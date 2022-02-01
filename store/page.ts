import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

export interface PageState {
  playlistId: string;
  albumId: string;
  artistId: string;
  showId: string;
  episodeId: string;
}

const initialState: PageState = {
  playlistId: '',
  albumId: '',
  artistId: '',
  showId: '',
  episodeId: '',
};

const slice = createSlice({
  name: 'page',
  initialState: initialState,
  reducers: {
    setPlaylistId: (item, action) => {
      item.playlistId = action.payload;
    },
    setAlbumId: (item, action) => {
      item.albumId = action.payload;
    },
    setArtistId: (item, action) => {
      item.artistId = action.payload;
    },
    setShowId: (item, action) => {
      item.showId = action.payload;
    },
    setEpisodeId: (item, action) => {
      item.episodeId = action.payload;
    },
  },
});

export const {
  setPlaylistId,
  setAlbumId,
  setArtistId,
  setShowId,
  setEpisodeId,
} = slice.actions;

// Selectors
export const selectPlaylistId = (state: AppState) => state.page.playlistId;
export const selectAlbumId = (state: AppState) => state.page.albumId;
export const selectArtistId = (state: AppState) => state.page.artistId;
export const selectShowId = (state: AppState) => state.page.showId;
export const selectEpisodeId = (state: AppState) => state.page.episodeId;

export default slice.reducer;
