import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as Icon from '../../components/Icons';
import data from '../../data/episode.json';
import Link from 'next/link';

const Episode: NextPage = () => {
  return (
    <>
      <Head>
        <title>Episode - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Episode */}
      <div
        style={{ height: 'calc(100vh - 161px)' }}
        className="overflow-y-auto"
      >
        <EpisodeHeader />
        <div className="relative w-full">
          <div className="absolute z-0 w-full h-60 bg-gray-600 bg-gradient-to-b from-[rgba(0,0,0,.6)] to-gray-800">
            {/* Bg Gradient */}
          </div>
          <div className="p-8 relative z-10">
            <div className="playlist__meta flex text-sm mb-4">
              <span className="text-gray-100">{data.date}</span>
              <span className="before:content-['•'] before:mx-1 text-gray-100">
                {data.duration}
              </span>
            </div>
            <EpisodeControls />
            <AboutEpisode />
          </div>
        </div>
      </div>
    </>
  );
};

export default Episode;

function EpisodeHeader() {
  return (
    <div className="episode p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="episode__image w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)]"></div>
        <div className="flex flex-col justify-end">
          <h2 className="text-white uppercase text-xs font-medium">
            Podcast Episode
          </h2>
          <h1 className="episode__title text-white font-black text-6xl my-3">
            {data.name}
          </h1>
          <div className="episode__meta flex text-sm">
            <Link href="/show/1">
              <a className="text-white text-xl font-bold hover:underline">
                {data.show}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function EpisodeControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  return (
    <div className="controls flex items-center mb-8">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="controls__play bg-brand w-14 h-14 rounded-full flex items-center justify-center mr-8"
      >
        {isPlaying ? (
          <Icon.Pause size={28} view={16} className="text-white" />
        ) : (
          <Icon.Play size={28} view={16} className="text-white" />
        )}
      </button>
      <button
        onClick={() => setIsAdded(!isAdded)}
        className="controls__add mr-8"
      >
        {isAdded ? (
          <Icon.AddedEpisode size={32} className="text-brand" />
        ) : (
          <Icon.AddEpisode size={32} className="text-gray-100" />
        )}
      </button>
      <button className="controls__menu">
        <Icon.MenuDots className="text-gray-100" />
      </button>
    </div>
  );
}

function AboutEpisode() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="about flex flex-col">
      <h2 className="about__title text-white font-bold mb-4 text-xl">
        Episode Description
      </h2>
      <div className="about__description flex flex-col pt-5 max-w-screen-md">
        <p className="text-gray-100 leading-6 tracking-wide">
          {truncateDescription(data.summary)}
        </p>
      </div>
      <div className="about__all">
        <Link href="/show/1">
          <a className="inline-block uppercase text-white font-medium tracking-widest text-xs border rounded-full border-gray-400 px-9 py-2 hover:underline hover:scale-105 mt-10 mb-4">
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
