import React, { useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as Icon from '../../components/Icons';
import data from '../../data/album.json';
import insertCommas from '../../utils/insertCommas';

const Album: NextPage = () => {
  return (
    <>
      <Head>
        <title>Album - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Album */}
      <div
        style={{ height: 'calc(100vh - 161px)' }}
        className="overflow-y-auto"
      >
        <AlbumHeader />
        <div className="relative w-full">
          <div className="absolute z-0 w-full h-60 bg-gray-600 bg-gradient-to-b from-[rgba(0,0,0,.6)] to-gray-800">
            {/* Bg Gradient */}
          </div>
          <div className="p-8 relative z-10">
            <AlbumControls />
            <TrackTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;

function AlbumHeader() {
  return (
    <div className="album p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="album__image w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)]"></div>
        <div className="flex flex-col justify-end">
          <h2 className="text-white uppercase text-xs font-medium">Album</h2>
          <h1 className="album__title text-white font-black text-6xl my-3">
            {data.name}
          </h1>
          <div className="album__meta flex items-center text-sm">
            <figure className="album__artist-image w-6 h-6 mr-1">
              <div className="bg-gray-100 h-full w-full rounded-full"></div>
            </figure>
            <span className="album__artist text-white font-bold">
              {insertCommas(data.artists, 'artist')}
            </span>
            <span className="album__date before:content-['•'] before:mx-1 text-gray-100">
              {data.year}
            </span>
            <span className="album__length before:content-['•'] before:mx-1 text-gray-100">
              {data.tracks.length} {data.tracks.length > 1 ? 'songs' : 'song'},{' '}
              {data.totalDuration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlbumControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

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
        onClick={() => setIsFavorite(!isFavorite)}
        className="controls__favorite mr-8"
      >
        {isFavorite ? (
          <Icon.HeartFilled size={32} view={16} className="text-brand" />
        ) : (
          <Icon.Heart size={32} className="text-gray-100" />
        )}
      </button>
      <button className="controls__menu">
        <Icon.MenuDots className="text-gray-100" />
      </button>
    </div>
  );
}

function TrackTable() {
  return (
    <div className="tracks flex flex-col">
      {/* Track Table Header */}
      <div className="tracks__header px-4 border-b border-gray-600 h-9">
        <div className="grid gap-4 text-gray-100 grid-cols-[16px_4fr_minmax(120px,1fr)] h-full uppercase">
          <div className="flex items-center justify-center">#</div>
          <div className="flex items-center justify-self-start">Title</div>
          <div className="flex items-center justify-self-end">
            <Icon.Clock className="text-gray-100" />
          </div>
        </div>
      </div>
      {/* Track Items */}
      <div className="tracks__list flex flex-col pt-5">
        {data.tracks.map((track, i) => (
          <div
            className="track grid gap-4 text-gray-100 grid-cols-[16px_4fr_minmax(120px,1fr)] h-14 px-4 rounded-md group hover:bg-gray-600"
            key={track.id}
          >
            <div className="track__number flex items-center justify-center">
              <div className="group-hover:hidden">{i + 1}</div>
              <div className="hidden group-hover:flex">
                <Icon.Play size={16} className="text-white" />
              </div>
            </div>
            <div className="flex items-center justify-self-start">
              <div className="flex flex-col">
                <span className="track__name text-white font-medium cursor-default">
                  {track.name}
                </span>
                <span className="track__artist text-xs">
                  {insertCommas(track.artists, 'artist')}
                </span>
              </div>
            </div>
            <div className="track__duration flex items-center justify-self-end cursor-default">
              {track.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
