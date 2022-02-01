import * as Icon from '../Icons';
import { TrackProps } from './Track';
import Track from './Track';

interface Props {
  data: {
    tracks: { items: TrackProps[] };
    id: string;
  };
}

function Table(props: Props) {
  const { data } = props,
    tracks = data;

  return (
    <div className="tracks flex flex-col">
      <div className="tracks__header px-4 border-b border-gray-600 h-9">
        <div className="grid gap-4 text-gray-100 grid-cols-[16px_4fr_minmax(120px,1fr)] h-full uppercase">
          <div className="flex items-center justify-center">#</div>
          <div className="flex items-center justify-self-start">Title</div>
          <div className="flex items-center justify-self-end">
            <Icon.Clock className="text-gray-100" />
          </div>
        </div>
      </div>
      <div className="tracks__list flex flex-col pt-5">
        {tracks.tracks.items.map((track, i) => (
          <Track key={track.id} index={i} data={track} contextId={data.id} />
        ))}
      </div>
    </div>
  );
}

export default Table;
