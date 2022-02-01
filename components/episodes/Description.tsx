import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setShowId } from '../../store/page';

interface Props {
  data: {
    description: string;
    show: { id: string };
  };
}

function Description(props: Props) {
  const { data } = props,
    episode = data,
    [isExpanded, setIsExpanded] = useState(false),
    dispatch = useDispatch();

  return (
    <div className="about flex flex-col">
      <h2 className="about__title text-white font-bold mb-4 text-xl">
        Episode Description
      </h2>
      <div className="about__description flex flex-col pt-5 max-w-screen-md">
        <div className="text-gray-100 leading-6 tracking-wide">
          {truncateDescription(episode.description)}
        </div>
      </div>
      <div className="about__all">
        <Link href={`/show/${episode.show.id}`}>
          <a
            onClick={() => dispatch(setShowId(episode.show.id))}
            className="inline-block uppercase text-white font-medium tracking-widest text-xs border rounded-full border-gray-400 px-9 py-2 hover:underline hover:scale-105 mt-10 mb-4"
          >
            See All Episodes
          </a>
        </Link>
      </div>
    </div>
  );

  function truncateDescription(content: string) {
    if (!isExpanded && content.length > 300) {
      return (
        <>
          {content.slice(0, 300)}
          <button
            onClick={() => setIsExpanded(true)}
            className="text-white font-bold leading-6 tracking-wide"
          >
            ... see more
          </button>
        </>
      );
    }

    return (
      <>
        <div>{content}</div>
        <button
          onClick={() => setIsExpanded(false)}
          className="text-white font-bold"
        >
          show less
        </button>
      </>
    );
  }
}

export default Description;
