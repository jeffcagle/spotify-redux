import React, { useState } from 'react';
import * as Icon from '../../components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsPlaying,
  selectTrackId,
  setContextId,
  setIsPlaying,
} from '../../store/playback';
import * as http from '../../services/fetchService';
import { selectToken } from '../../store/user';

interface Props {
  contextId: string;
  id: string;
}

function Controls(props: Props) {
  const { contextId, id } = props;
  const token = useSelector(selectToken);
  const currentTrackId = useSelector(selectTrackId);
  console.log('currentTrackId', currentTrackId);
  console.log('id', id);
  const isPlaying = useSelector(selectIsPlaying);
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useDispatch();

  return (
    <div className="controls flex items-center mb-8">
      <button
        onClick={e => handlePlayEpisode(e, id)}
        className="controls__play hover:scale-105 bg-brand w-14 h-14 rounded-full flex items-center justify-center mr-8"
      >
        {isPlaying && currentTrackId === id ? (
          <Icon.Pause size={28} view={16} className="text-white" />
        ) : (
          <Icon.Play size={28} view={16} className="text-white" />
        )}
      </button>
      <button
        onClick={() => setIsAdded(!isAdded)}
        className="controls__add mr-8"
      >
        {isAdded ? (
          <Icon.AddedEpisode size={32} className="text-brand" />
        ) : (
          <Icon.AddEpisode size={32} className="text-gray-100" />
        )}
      </button>
      <button className="controls__menu">
        <Icon.MenuDots className="text-gray-100" />
      </button>
    </div>
  );

  async function handlePlayEpisode(e: React.MouseEvent, id: string) {
    e.preventDefault();

    if (currentTrackId === id && isPlaying) {
      try {
        await http.pauseTrack(token);
        dispatch(setIsPlaying(false));
      } catch (error: any) {
        console.log(error.message);
      }
    } else {
      try {
        await http.playEpisode(contextId, id, token);
        dispatch(setContextId(contextId));
        dispatch(setIsPlaying(true));
      } catch (error: any) {
        console.log(error.message);
      }
    }
  }
}

export default Controls;
