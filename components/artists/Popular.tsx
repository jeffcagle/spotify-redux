import { useState } from 'react';
import Track from './Track';
import { TrackProps } from './Track';

interface Props {
  data: TrackProps[];
}

function Popular(props: Props) {
  const [popExpanded, setPopExpanded] = useState(false),
    { data } = props,
    topTracks = data;

  return (
    <div className="tracks flex flex-col">
      <div className="flex flex-col pt-5">
        <h2 className="tracks__header text-white font-bold mb-5 text-xl">
          Popular
        </h2>
        <div className="mb-10">
          <div
            className={`tracks__list overflow-hidden ${
              popExpanded || topTracks.length < 5 ? 'h-auto' : 'h-[280px]'
            }`}
          >
            {topTracks.map((track, i) => (
              <Track key={track.id} data={track} index={i} />
            ))}
          </div>
          {topTracks.length > 5 && (
            <button
              onClick={() => setPopExpanded(!popExpanded)}
              className="track__expand text-gray-100 uppercase font-medium text-xs tracking-widest p-4"
            >
              {popExpanded ? 'Show Less' : 'See More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Popular;
