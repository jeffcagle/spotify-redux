import type { NextPage } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import * as Icon from '../../../components/Icons';
import Head from 'next/head';
import data from '../../../data/artist.json';
import AlbumCard from '../../../components/cards/AlbumCard';

const Artist: NextPage = () => {
  return (
    <>
      <Head>
        <title>Artist - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Artist */}
      <div
        style={{ height: 'calc(100vh - 161px)' }}
        className="overflow-y-auto"
      >
        <ArtistHeader />
        <div className="relative w-full">
          <div className="absolute z-0 w-full h-60 bg-gray-600 bg-gradient-to-b from-[rgba(0,0,0,.6)] to-gray-800">
            {/* Bg Gradient */}
          </div>
          <div className="p-8 relative z-10">
            <ArtistControls />
            {data.popularTracks.length > 0 && <TrackTable />}
            <Albums />
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;

function ArtistHeader() {
  return (
    <div className="artist p-8 bg-gray-700 h-[32vh] flex items-end">
      <div className="flex flex-col">
        {data.verified && (
          <div className="artist__verified text-white text-xs font-medium flex items-center gap-2">
            <Icon.Verified /> <span>Verified Artist</span>
          </div>
        )}
        <div>
          <h1 className="artist__name text-white font-black text-6xl my-3">
            {data.name}
          </h1>
        </div>
        <div className="artist__meta flex text-sm">
          <span className="text-white">{data.listeners} monthly listeners</span>
        </div>
      </div>
    </div>
  );
}

function ArtistControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

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

function TrackTable() {
  const [popExpanded, setPopExpanded] = useState(false);

  return (
    <div className="tracks flex flex-col">
      {/* Track Items */}
      <div className="flex flex-col pt-5">
        <h2 className="tracks__header text-white font-bold mb-5 text-xl">
          Popular
        </h2>
        <div className="mb-10">
          <div
            className={`tracks__list overflow-hidden ${
              popExpanded || data.popularTracks.length < 5
                ? 'h-auto'
                : 'h-[280px]'
            }`}
          >
            {data.popularTracks.map((track, i) => (
              <div
                className="track grid gap-4 text-gray-100 grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] h-14 px-4 rounded-md group hover:bg-gray-600"
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
                  <div className="track__name flex flex-col">
                    <span className="text-white font-medium cursor-default">
                      {track.name}
                    </span>
                  </div>
                </div>
                <div className="track__listens flex items-center justify-self-start cursor-default">
                  {track.listens}
                </div>
                <div className="track__length flex items-center justify-self-end cursor-default">
                  {track.duration}
                </div>
              </div>
            ))}
          </div>
          {data.popularTracks.length > 5 && (
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

function Albums() {
  return (
    <section className="albums mb-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-xl">Albums</h2>
        <Link href={`/artist/${data.id}/discography/album`}>
          <a className="albums__discography text-gray-100 font-medium text-xs tracking-widest uppercase">
            See Discography
          </a>
        </Link>
      </div>
      <div className="albums__list grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
        {data.albums.map(album => (
          <AlbumCard
            key={album.id}
            id={album.id}
            name={album.name}
            artists={album.artists}
          />
        ))}
      </div>
    </section>
  );
}
