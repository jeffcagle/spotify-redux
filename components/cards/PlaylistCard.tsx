import Link from 'next/link';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setPlaylistId } from '../../store/page';
import * as Icon from '../Icons';
import * as http from '../../services/fetchService';
import { selectToken } from '../../store/user';
import {
  selectContextId,
  selectIsPlaying,
  setContextId,
  setIsPlaying,
} from '../../store/playback';

interface Props {
  id: string;
  name: string;
  imageUrl: string;
  creator: string;
}

function PlaylistCard({ id, name, imageUrl, creator }: Props) {
  const token = useSelector(selectToken),
    currentContextId = useSelector(selectContextId),
    isPlaying = useSelector(selectIsPlaying),
    dispatch = useDispatch();

  return (
    <Link href={`/playlist/${id}`} passHref>
      <div
        onClick={() => dispatch(setPlaylistId(id))}
        className="bg-gray-700 hover:bg-gray-600 transition-all duration-200 p-4 rounded-md cursor-pointer text-white group"
      >
        <div>
          <div className="mb-5">
            <div className="pb-[100%] w-full relative">
              <div className="bg-gray-500 text-gray-300 h-full w-full rounded-sm shadow-lg flex items-center justify-center absolute top-0 left-0">
                <Image
                  className="object-cover h-full"
                  src={imageUrl}
                  alt={name}
                  width={250}
                  height={250}
                />
                <div
                  className={`absolute ${
                    currentContextId === id && isPlaying
                      ? 'bottom-2'
                      : 'invisible opacity-0 bottom-0'
                  } group-hover:visible group-hover:opacity-100 group-hover:bottom-2 transition-all duration-200 right-2 drop-shadow-[0_8px_8px_rgba(0,0,0,.3)] rounded-full w-12 h-12`}
                >
                  <button
                    onClick={e => handlePlayPlaylist(e, id)}
                    className="hover:scale-105 flex items-center justify-center bg-brand rounded-full w-12 h-12 cursor-default"
                  >
                    {currentContextId === id && isPlaying ? (
                      <Icon.Pause size={24} view={16} className="text-white" />
                    ) : (
                      <Icon.Play size={24} view={16} className="text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-[62px]">
            <div className="font-bold mb-1 truncate">{name}</div>
            <div className="text-gray-100">
              <span>By </span>
              {creator}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  async function handlePlayPlaylist(e: React.MouseEvent, id: string) {
    e.preventDefault();
    dispatch(setIsPlaying(true));

    if (currentContextId === id && isPlaying) {
      try {
        await http.pauseTrack(token);
        dispatch(setIsPlaying(false));
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        await http.playPlaylist(token, id);
        dispatch(setContextId(id));
        dispatch(setIsPlaying(true));
      } catch (error) {
        console.error(error);
      }
    }
  }
}

export default PlaylistCard;
