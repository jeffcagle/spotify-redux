import ListArtists from '../ListArtists';
import * as Icon from '../Icons';
import { convertMs } from '../../utils/maths';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectTrackId,
  selectIsPlaying,
  setIsPlaying,
} from '../../store/playback';
import * as http from '../../services/fetchService';
import { selectToken } from '../../store/user';

export interface TrackProps {
  id: string;
  name: string;
  artists: object[];
  duration_ms: number;
}

interface Props {
  data: TrackProps;
  index: number;
  contextId: string;
}

function Track(props: Props) {
  const token = useSelector(selectToken);
  const isPlaying = useSelector(selectIsPlaying);
  const playingTrackId = useSelector(selectTrackId);
  const { data, index, contextId } = props;
  const id = data.id;
  const name = data.name;
  const artists = data.artists;
  const trackDuration = data.duration_ms;

  const dispatch = useDispatch();

  return (
    <div className="track grid gap-4 text-gray-100 grid-cols-[16px_4fr_minmax(120px,1fr)] h-14 px-4 rounded-md group hover:bg-gray-600">
      <div className="track__number flex items-center justify-center">
        {(playingTrackId !== id || !isPlaying) && (
          <>
            <div className="group-hover:hidden">{index + 1}</div>
            <div
              onClick={() => handlePlayTrack(contextId, id)}
              className="hidden group-hover:flex"
            >
              <Icon.Play size={16} className="text-white" />
            </div>
          </>
        )}
        {playingTrackId === id && isPlaying && (
          <>
            <div className="group-hover:hidden">
              <img src="https://open.scdn.co/cdn/images/equaliser-animated-green.f93a2ef4.gif" />
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
        <div className="flex flex-col">
          <span className="track__name text-white font-medium cursor-default line-clamp-1">
            {name}
          </span>
          <span className="track__artist text-xs line-clamp-2">
            <ListArtists baseUrl="artist" artists={artists} />
          </span>
        </div>
      </div>
      <div className="track__duration flex items-center justify-self-end cursor-default">
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
