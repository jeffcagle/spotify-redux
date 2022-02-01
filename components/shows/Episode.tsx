import React from 'react';
import * as Icon from '../../components/Icons';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { setEpisodeId } from '../../store/page';
import { convertMs } from '../../utils/maths';
import * as http from '../../services/fetchService';
import { selectToken } from '../../store/user';
import {
  selectTrackId,
  selectIsPlaying,
  setIsPlaying,
} from '../../store/playback';

export interface EpisodeProps {
  id: string;
  name: string;
  description: string;
  images: { url: string }[];
  release_date: string;
  duration_ms: number;
}

interface Props {
  data: EpisodeProps;
  contextId: string;
}

function Episode(props: Props) {
  const token = useSelector(selectToken);
  const currentTrackId = useSelector(selectTrackId);
  const isPlaying = useSelector(selectIsPlaying);
  const { data, contextId } = props;
  const id = data.id;
  const name = data.name;
  const description = data.description;
  const image = data.images[0].url;
  const release = data.release_date;
  const duration = data.duration_ms;

  const dispatch = useDispatch();

  return (
    <Link href={`/episode/${id}`}>
      <div
        onClick={() => dispatch(setEpisodeId(id))}
        className="episode text-gray-100 px-4 rounded-md group hover:bg-gray-600 cursor-pointer"
      >
        <div className="episode__border py-4 flex border-t border-gray-600 group-hover:border-transparent">
          <div className="episode__image flex flex-none items-center justify-center w-28 h-28 rounded bg-gray-500 mr-6 flex-shrink-0">
            <img className="object-cover h-full" src={image} />
          </div>
          <div className="episode__content flex-1 overflow-hidden">
            <div className="episode__title text-white text-base font-medium mb-2 hover:underline line-clamp-1">
              <Link href={`/episode/${id}`}>
                <a>{name}</a>
              </Link>
            </div>
            <div className="episode__summary mb-3 line-clamp-2">
              {description}
            </div>
            <div className="episode__footer flex items-center gap-4">
              {id !== currentTrackId && (
                <button
                  onClick={e => handlePlayTrack(e, contextId, id)}
                  className="episode__play w-8 h-8 bg-white rounded-full flex items-center justify-center hover:cursor-default"
                >
                  <Icon.Play size={16} className="text-gray-800" />
                </button>
              )}
              {id === currentTrackId && isPlaying && (
                <button
                  onClick={e => handlePauseTrack(e)}
                  className="episode__play w-8 h-8 bg-white rounded-full flex items-center justify-center hover:cursor-default"
                >
                  <Icon.Pause size={16} className="text-gray-800" />
                </button>
              )}
              <div className="episode__meta flex">
                <span className="text-gray-100">{release}</span>
                <span className="before:content-['•'] before:mx-1 text-gray-100">
                  {convertMs(duration)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );

  async function handlePlayTrack(
    e: React.MouseEvent,
    contextId: string,
    trackId: string
  ) {
    e.preventDefault();
    await http.playEpisode(contextId, trackId, token);
  }

  async function handlePauseTrack(e: React.MouseEvent) {
    e.preventDefault();

    await http.pauseTrack(token);
    dispatch(setIsPlaying(false));
  }
}

export default Episode;
