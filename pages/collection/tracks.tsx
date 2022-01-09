import React, { useState } from 'react';
import Head from 'next/head';
import * as Icon from '../../components/Icons';
import Link from 'next/link';
import insertCommas from '../../utils/insertCommas';
import data from '../../data/playlist.json';

function Tracks() {
  return (
    <>
      <Head>
        <title>Playlist - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Playlist */}
      <div
        style={{ height: 'calc(100vh - 161px)' }}
        className="overflow-y-auto"
      >
        <PlaylistHeader />
        <div className="relative w-full">
          <div className="absolute z-0 w-full h-60 bg-gray-600 bg-gradient-to-b from-[rgba(0,0,0,.6)] to-gray-800">
            {/* Bg Gradient */}
          </div>
          <div className="p-8 relative z-10">
            <PlaylistControls />
            <TrackTable />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracks;

function PlaylistHeader() {
  return (
    <div className="playlist p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="playlist__image w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)]"></div>
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
            <span className="text-white font-bold">{data.creator}</span>
            <span className="before:content-['•'] before:mx-1 text-gray-100">
              {data.tracks.length} {data.tracks.length > 1 ? 'songs' : 'song'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlaylistControls() {
  const [isPlaying, setIsPlaying] = useState(false);

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
    </div>
  );
}

function TrackTable() {
  return (
    <div className="tracks flex flex-col">
      {/* Track Table Header */}
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
      {/* Track Items */}
      <div className="tracks__list flex flex-col pt-5">
        {data.tracks.map((track, i) => (
          <div
            className="track grid gap-4 text-gray-100 grid-cols-[16px_6fr_4fr_3fr_minmax(120px,1fr)] h-14 px-4 rounded-md group hover:bg-gray-600"
            key={track.id}
          >
            <div className="track__number flex items-center justify-center">
              <div className="group-hover:hidden">{i + 1}</div>
              <div className="hidden group-hover:flex">
                <Icon.Play size={16} className="text-white" />
              </div>
            </div>
            <div className="flex items-center justify-self-start">
              <div className="track__image w-10 h-10 bg-gray-700 mr-4"></div>
              <div className="flex flex-col">
                <span className="track__name text-white font-medium cursor-default">
                  {track.name}
                </span>
                <span className="text-xs">
                  {insertCommas(track.artists, 'artist')}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-self-start">
              <Link href={`/album/${track.album.id}`}>
                <a className="track__album hover:underline hover:text-white">
                  {track.album.name}
                </a>
              </Link>
            </div>
            <div className="track__date flex items-center justify-self-start cursor-default">
              {track.date}
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
