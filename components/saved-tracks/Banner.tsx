import { useSelector } from 'react-redux';
import { selectUsername, selectUserTracks } from '../../store/user';
import * as Icon from '../Icons';

function Banner() {
  const owner = useSelector(selectUsername),
    tracks = useSelector(selectUserTracks);

  return (
    <div className="playlist p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="playlist__image flex items-center justify-center w-[232px] h-[232px] bg-gradient-to-br from-blue-700  to-indigo-400 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)] text-white">
          <Icon.HeartFilled size={80} view={16} />
        </div>
        <div className="flex flex-col justify-end">
          <div>
            <h2 className="text-white uppercase text-xs font-medium">
              Playlist
            </h2>
          </div>
          <div>
            <h1 className="playlist__title text-white font-black text-6xl my-3">
              Liked Songs
            </h1>
          </div>
          <div className="playlist__meta flex text-sm">
            <span className="text-white font-bold">{owner}</span>
            <span className="before:content-['•'] before:mx-1 text-gray-100">
              {tracks.total} {tracks.total > 1 ? 'songs' : 'song'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
