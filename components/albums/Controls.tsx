import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContextId,
  selectIsPlaying,
  setContextId,
  setContextType,
  setIsPlaying,
} from '../../store/playback';
import * as Icon from '../Icons';
import * as http from '../../services/fetchService';
import { selectToken } from '../../store/user';

interface Props {
  data: string;
}

function Controls(props: Props) {
  const { data } = props,
    id = data,
    token = useSelector(selectToken),
    currentContextId = useSelector(selectContextId),
    isPlaying = useSelector(selectIsPlaying),
    [isFavorite, setIsFavorite] = useState(false),
    dispatch = useDispatch();

  return (
    <div className="controls flex items-center mb-8">
      <button
        onClick={e => handlePlayAlbum(e, id)}
        className="controls__play hover:scale-105 bg-brand w-14 h-14 rounded-full flex items-center justify-center mr-8"
      >
        {isPlaying && currentContextId === id ? (
          <Icon.Pause size={28} view={16} className="text-white" />
        ) : (
          <Icon.Play size={28} view={16} className="text-white" />
        )}
      </button>
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="controls__favorite mr-8"
      >
        {isFavorite ? (
          <Icon.HeartFilled size={32} view={16} className="text-brand" />
        ) : (
          <Icon.Heart size={32} className="text-gray-100" />
        )}
      </button>
      <button className="controls__menu">
        <Icon.MenuDots className="text-gray-100" />
      </button>
    </div>
  );

  async function handlePlayAlbum(e: React.MouseEvent, id: string) {
    e.preventDefault();

    if (currentContextId === id && isPlaying) {
      try {
        await http.pauseTrack(token);
        dispatch(setIsPlaying(false));
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await http.playAlbum(token, id);
        dispatch(setContextId(id));
        dispatch(setIsPlaying(true));
      } catch (error) {
        console.error(error);
      }
    }
  }
}

export default Controls;
