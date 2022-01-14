import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as Icon from '../../components/Icons';
import Link from 'next/link';
import insertCommas from '../../utils/insertCommas';
import data from '../../data/show.json';

const Show: NextPage = () => {
  return (
    <>
      <Head>
        <title>Show - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Show */}
      <div
        style={{ height: 'calc(100vh - 161px)' }}
        className="overflow-y-auto"
      >
        <ShowHeader />
        <div className="relative w-full">
          <div className="absolute z-0 w-full h-60 bg-gray-600 bg-gradient-to-b from-[rgba(0,0,0,.6)] to-gray-800">
            {/* Bg Gradient */}
          </div>
          <div className="p-8 relative z-10">
            <ShowControls />
            <ShowTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Show;

function ShowHeader() {
  return (
    <div className="show p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="show__image w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)]"></div>
        <div className="show__details flex flex-col justify-end">
          <h2 className="show__type text-white uppercase text-xs font-medium">
            Podcast
          </h2>
          <h1 className="show__title text-white font-black text-6xl my-3">
            {data.name}
          </h1>
          <div className="show__hosts flex text-xl">
            <span className="text-white font-bold">
              {insertCommas(data.hosts)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShowControls() {
  // const [isPlaying, setIsPlaying] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="controls flex items-center mb-8">
      <button
        onClick={() => setIsFollowed(!isFollowed)}
        className="controls__follow mr-8 uppercase text-white font-medium text-xs tracking-widest border border-gray-300 py-2 px-4 rounded hover:border-white"
      >
        {isFollowed ? 'Following' : 'Follow'}
      </button>
      <button className="controls__menu">
        <Icon.MenuDots className="text-gray-100" />
      </button>
    </div>
  );
}

function ShowTable() {
  return (
    <div className="episodes__grid grid gap-4 grid-cols-[2fr_1fr]">
      <div className="episodes">
        <h2 className="text-white text-xl font-bold">All Episodes</h2>
        {/* Episodes */}
        <div className="flex flex-col pt-5 ml-[-1rem]">
          {data.episodes.map(episode => (
            <Link href={`/episode/${episode.id}`} key={episode.id}>
              <div className="episode text-gray-100 px-4 rounded-md group hover:bg-gray-600 cursor-pointer">
                <div className="episode__border py-4 flex border-t border-gray-600 group-hover:border-transparent">
                  <div className="episode__image flex flex-none items-center justify-center w-28 h-28 rounded bg-gray-500 mr-6">
                    Image
                  </div>
                  <div className="episode__content flex-1">
                    <div className="episode__title text-white text-base font-medium mb-2 hover:underline">
                      <Link href={`/episode/${episode.id}`}>
                        <a>{episode.name}</a>
                      </Link>
                    </div>
                    <div className="episode__summary mb-3 line-clamp-2">
                      {episode.summary}
                    </div>
                    <div className="episode__footer flex items-center gap-4">
                      <button className="episode__play w-8 h-8 bg-white rounded-full flex items-center justify-center hover:cursor-default">
                        <Icon.Play size={16} className="text-gray-800" />
                      </button>
                      <div className="episode__meta flex">
                        <span className="text-gray-100">{episode.date}</span>
                        <span className="before:content-['•'] before:mx-1 text-gray-100">
                          {episode.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="about">
        <h2 className="text-white text-xl font-bold mb-4">About</h2>
        <p className="text-gray-100 leading-relaxed">{data.about}</p>
      </div>
    </div>
  );
}
