import Track, { TrackProps } from './Track';
import * as Icon from '../Icons';

interface Props {
  data: {
    tracks: { items: { track: TrackProps }[] };
    id: string;
  };
}

function Table(props: Props) {
  const { data } = props;
  const playlist = data;

  return (
    <div className="tracks flex flex-col">
      <div className="tracks__header px-4 border-b border-gray-600 h-9">
        <div className="grid gap-4 text-gray-100 grid-cols-[16px_6fr_4fr_3fr_minmax(120px,1fr)] h-full uppercase">
          <div className="flex items-center justify-center">#</div>
          <div className="flex items-center justify-self-start">Title</div>
          <div className="flex items-center justify-self-start">Album</div>
          <div className="flex items-center justify-self-start">Date Added</div>
          <div className="flex items-center justify-self-end">
            <Icon.Clock className="text-gray-100" />
          </div>
        </div>
      </div>
      <div className="tracks__list flex flex-col pt-5">
        {playlist.tracks.items.map((track, i) => (
          <Track
            key={track.track.id}
            index={i}
            data={track.track}
            contextId={playlist.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Table;
