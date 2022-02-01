import Link from 'next/link';
import Image from 'next/image';
import * as Icon from '../Icons';
import { convertMs } from '../../utils/maths';
import { useDispatch, useSelector } from 'react-redux';
import { setAlbumId } from '../../store/page';
import { selectIsPlaying, selectTrackId } from '../../store/playback';
import * as http from '../../services/fetchService';
import { selectToken } from '../../store/user';
import { setIsPlaying } from '../../store/playback';

export interface TrackProps {
  id: string;
  name: string;
  album: {
    id: string;
    name: string;
    images: { url: string }[];
  };
  duration_ms: number;
}

interface Props {
  data: TrackProps;
  index: number;
}

function Track(props: Props) {
  const token = useSelector(selectToken),
    isPlaying = useSelector(selectIsPlaying),
    playingTrackId = useSelector(selectTrackId),
    { data, index } = props,
    id = data.id,
    name = data.name,
    albumId = data.album.id,
    image = data.album.images[1].url,
    albumName = data.album.name,
    trackDuration = data.duration_ms,
    dispatch = useDispatch();

  return (
    <div className="track grid gap-4 text-gray-100 grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] h-14 px-4 rounded-md group hover:bg-gray-600">
      <div className="track__number flex items-center justify-center">
        {(playingTrackId !== id || !isPlaying) && (
          <>
            <div className="group-hover:hidden">{index + 1}</div>
            <div
              onClick={() => handlePlayTrack(data.album.id, id)}
              className="hidden group-hover:flex"
            >
              <Icon.Play size={16} className="text-white" />
            </div>
          </>
        )}
        {playingTrackId === id && isPlaying && (
          <>
            <div className="group-hover:hidden">
              <Image
                className="object-cover h-full"
                src="https://open.scdn.co/cdn/images/equaliser-animated-green.f93a2ef4.gif"
                alt="equalizer"
                width={16}
                height={16}
              />
            </div>
            <div
              onClick={() => handlePauseTrack()}
              className="hidden group-hover:flex"
            >
              <Icon.Pause size={16} className="text-white" />
            </div>
          </>
        )}
      </div>
      <div className="flex items-center justify-self-start">
        <div className="track__image w-10 h-10 bg-gray-700 mr-4 flex-shrink-0">
          <Image
            className="object-cover h-full"
            src={image}
            alt={name}
            width={40}
            height={40}
          />
        </div>
        <div className="track__name">
          <span className="track__name text-white font-medium cursor-default line-clamp-1">
            {name}
          </span>
        </div>
      </div>
      <div className="track__album flex items-center justify-self-start">
        <Link href={`/album/${albumId}`}>
          <a
            onClick={() => dispatch(setAlbumId(albumId))}
            className="track__album hover:underline hover:text-white line-clamp-2"
          >
            {albumName}
          </a>
        </Link>
      </div>
      <div className="track__length flex items-center justify-self-end cursor-default">
        {convertMs(trackDuration, 'track')}
      </div>
    </div>
  );

  async function handlePlayTrack(contextId: string, trackId: string) {
    await http.playTrackInList(contextId, 'album', trackId, token);
  }

  async function handlePauseTrack() {
    await http.pauseTrack(token);
    dispatch(setIsPlaying(false));
  }
}

export default Track;
