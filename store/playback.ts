import { createSlice } from '@reduxjs/toolkit';
import { AppState } from './store';

interface Props {
  isPlaying: boolean;
  progress: number;
  duration: number;
  contextType: string;
  contextId: string;
  trackId: string;
  repeat: string;
  shuffle: boolean;
  volume: number;
  trackName: string;
  imageUrl: string;
  artist: string | [];
}

const initialState: Props = {
  isPlaying: false,
  progress: 0,
  duration: 0,
  contextType: '',
  contextId: '',
  trackId: '',
  repeat: 'off',
  shuffle: false,
  volume: 0,
  trackName: '',
  imageUrl: '',
  artist: '',
};

const slice = createSlice({
  name: 'playback',
  initialState: initialState,
  reducers: {
    setCurrentlyPlaying: (item, action) => {
      item.isPlaying = action.payload.is_playing;
      if (action.payload.item) {
        item.trackName = action.payload.item.name;
        item.trackId = action.payload.item.id;
        item.progress = action.payload.progress_ms;
        item.duration = action.payload.item.duration_ms;
        if (action.payload.context) {
          item.contextType = action.payload.context.type;
          item.contextId = action.payload.context.uri.split(':')[2];
        }
        if (item.contextType === 'show') {
          item.imageUrl = action.payload.item.images[0].url;
          item.artist = action.payload.item.show.publisher;
        } else {
          item.imageUrl = action.payload.item.album.images[0].url;
          item.artist = action.payload.item.artists;
        }
      }
    },
    setPlaybackState: (item, action) => {
      item.isPlaying = action.payload.is_playing;
      item.volume = action.payload.device.volume_percent;
      item.shuffle = action.payload.shuffle_state;
      item.repeat = action.payload.repeat_state;
    },
    setIsPlaying: (item, action) => {
      item.isPlaying = action.payload;
    },
    setContextId: (item, action) => {
      item.contextId = action.payload;
    },
    setContextType: (item, action) => {
      item.contextType = action.payload;
    },
    setRepeat: (item, action) => {
      item.repeat = action.payload;
    },
    setShuffle: (item, action) => {
      item.shuffle = action.payload;
    },
  },
});

export const {
  setCurrentlyPlaying,
  setPlaybackState,
  setIsPlaying,
  setContextId,
  setContextType,
  setRepeat,
  setShuffle,
} = slice.actions;

export const selectIsPlaying = (state: AppState) => state.playback.isPlaying;
export const selectProgress = (state: AppState) => state.playback.progress;
export const selectDuration = (state: AppState) => state.playback.duration;
export const selectContextType = (state: AppState) =>
  state.playback.contextType;
export const selectContextId = (state: AppState) => state.playback.contextId;
export const selectTrackId = (state: AppState) => state.playback.trackId;
export const selectRepeat = (state: AppState) => state.playback.repeat;
export const selectShuffle = (state: AppState) => state.playback.shuffle;
export const selectVolume = (state: AppState) => state.playback.volume;
export const selectTrackName = (state: AppState) => state.playback.trackName;
export const selectImageUrl = (state: AppState) => state.playback.imageUrl;
export const selectArtist = (state: AppState) => state.playback.artist;

export default slice.reducer;
