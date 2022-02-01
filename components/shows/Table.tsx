import React from 'react';
import Episode, { EpisodeProps } from './Episode';

interface Props {
  data: {
    id: string;
    description: string;
    episodes: { items: EpisodeProps[] };
  };
}

function Table(props: Props) {
  const { data } = props;
  const episodes = data.episodes.items;

  return (
    <div className="episodes__grid flex gap-4">
      <div className="episodes w-2/3">
        <h2 className="text-white text-xl font-bold">All Episodes</h2>
        <div className="flex flex-col pt-5 ml-[-1rem]">
          {episodes.map(episode => (
            <Episode key={episode.id} data={episode} contextId={data.id} />
          ))}
        </div>
      </div>
      <div className="about w-1/3">
        <h2 className="text-white text-xl font-bold mb-4">About</h2>
        <p className="text-gray-100 leading-relaxed">{data.description}</p>
      </div>
    </div>
  );
}

export default Table;
