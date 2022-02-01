import React from 'react';
import * as Icon from '../Icons';
import * as http from '../../services/fetchService';
import { selectToken } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsPlaying,
  selectRepeat,
  setIsPlaying,
  setRepeat,
  selectShuffle,
  setShuffle,
} from '../../store/playback';
import Progress from './Progress';

function Controls() {
  const token = useSelector(selectToken);
  const isPlaying = useSelector(selectIsPlaying);
  const repeatStatus = useSelector(selectRepeat);
  const shuffleStatus = useSelector(selectShuffle);

  const dispatch = useDispatch();

  return (
    <div className="w-2/4 flex flex-col items-center justify-center">
      <div className="flex gap-2">
        <button
          onClick={() => handleShuffle()}
          className="w-8 h-8 flex items-center justify-center group"
        >
          <Icon.Shuffle
            className={`${
              shuffleStatus ? 'text-brand' : 'text-gray-100'
            } group-hover:text-white transition`}
          />
        </button>
        <button
          onClick={() => handlePreviousTrack()}
          className="w-8 h-8 flex items-center justify-center group"
        >
          <Icon.Previous className="text-gray-100 group-hover:text-white transition" />
        </button>
        <button
          onClick={() => handlePlayPauseTrack()}
          className="w-8 h-8 flex items-center justify-center group bg-white rounded-full"
        >
          {isPlaying ? (
            <Icon.Pause size={16} className="text-gray-700" />
          ) : (
            <Icon.Play size={16} className="text-gray-700" />
          )}
        </button>
        <button
          onClick={() => handleNextTrack()}
          className="w-8 h-8 flex items-center justify-center group"
        >
          <Icon.Next className="text-gray-100 group-hover:text-white transition" />
        </button>
        <button
          onClick={() => handleRepeat()}
          className="w-8 h-8 flex items-center justify-center group relative"
        >
          <Icon.Repeat
            className={`${
              repeatStatus === 'off' ? 'text-gray-100' : 'text-brand'
            } group-hover:text-white transition`}
          />
          <span
            className={`${
              repeatStatus !== 'track' && 'hidden'
            } absolute top-[3px] right-[2px] flex items-center justify-center text-gray-800 text-[8px] leading-[8px] font-bold bg-brand rounded-full w-3 h-3`}
          >
            1
          </span>
        </button>
      </div>
      <Progress />
    </div>
  );

  async function handlePlayPauseTrack() {
    if (isPlaying) {
      await http.pauseTrack(token);
      dispatch(setIsPlaying(false));
    } else {
      await http.playTrack(token);
      dispatch(setIsPlaying(true));
    }
  }

  async function handlePreviousTrack() {
    await http.previousTrack(token);
    dispatch(setIsPlaying(true));
  }

  async function handleNextTrack() {
    await http.nextTrack(token);
    dispatch(setIsPlaying(true));
  }

  async function handleRepeat() {
    if (repeatStatus === 'off') {
      await http.repeat(token, 'context');
      dispatch(setRepeat('context'));
    } else if (repeatStatus === 'context') {
      await http.repeat(token, 'track');
      dispatch(setRepeat('track'));
    } else {
      await http.repeat(token, 'off');
      dispatch(setRepeat('off'));
    }
  }

  async function handleShuffle() {
    await http.shuffle(token, !shuffleStatus);
    dispatch(setShuffle(!shuffleStatus));
  }
}

export default Controls;
