import React, { useEffect } from 'react';
import * as http from '../../services/fetchService';
import { selectToken } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaybackState } from '../../store/playback';
import CurrentTrack from './CurrentTrack';
import Controls from './Controls';
import Volume from './Volume';

export default function Player() {
  const token = useSelector(selectToken),
    dispatch = useDispatch();

  useEffect(() => {
    async function getPlaybackState() {
      try {
        const _playbackState = await http.getPlaybackState(token);
        dispatch(setPlaybackState(_playbackState));
      } catch (error: any) {
        console.log(error.message);
      }
    }
    getPlaybackState();
  }, [token, dispatch]);

  return (
    <div className="bg-gray-700 border-t border-t-gray-600 h-24 p-4 flex justify-between items-center text-gray-100 fixed z-20 bottom-0 min-w-full">
      <CurrentTrack />
      <Controls />
      <Volume />
    </div>
  );
}
