import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as Icon from '../../components/Icons';
import Link from 'next/link';

const likedTracks = {
  tracks: [
    {
      trackId: 'akjlksdjf',
      trackName: 'Playlist 1',
      artists: ['Artist A', 'Artist B', 'Artist C', 'Artist D'],
      albumName: 'Album A',
      dateAdded: 'Jan 1, 2022',
      duration: '8:00',
    },
    {
      trackId: 'skdjflsds',
      trackName: 'Playlist 2',
      artists: ['Artist A', 'Artist B', 'Artist C'],
      albumName: 'Album A',
      dateAdded: 'Jan 1, 2022',
      duration: '8:00',
    },
    {
      trackId: '9jkwdfjje',
      trackName: 'Playlist 3',
      artists: ['Artist A', 'Artist D'],
      albumName: 'Album A',
      dateAdded: 'Jan 1, 2022',
      duration: '8:00',
    },
    {
      trackId: 'jser3jjhfd',
      trackName: 'Playlist 4',
      artists: ['Artist A', 'Artist B', 'Artist C', 'Artist D'],
      albumName: 'Album A',
      dateAdded: 'Jan 1, 2022',
      duration: '8:00',
    },
    {
      trackId: 'urndnsdfh',
      trackName: 'Playlist 5',
      artists: ['Artist A', 'Artist B', 'Artist C'],
      albumName: 'Album A',
      dateAdded: 'Jan 1, 2022',
      duration: '8:00',
    },
    {
      trackId: '83hjksfkjh',
      trackName: 'Playlist 6',
      artists: ['Artist B', 'Artist C', 'Artist D'],
      albumName: 'Album A',
      dateAdded: 'Jan 1, 2022',
      duration: '8:00',
    },
    {
      trackId: '39enfbnsfi',
      trackName: 'Playlist 7',
      artists: ['Artist A', 'Artist B', 'Artist C', 'Artist D'],
      albumName: 'Album A',
      dateAdded: 'Jan 1, 2022',
      duration: '8:00',
    },
  ],
};

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
        <PlaylistHeader data={likedTracks} />
        <div className="relative w-full">
          <div className="absolute z-0 w-full h-60 bg-gray-600 bg-gradient-to-b from-[rgba(0,0,0,.6)] to-gray-800">
            {/* Bg Gradient */}
          </div>
          <div className="p-8 relative z-10">
            <PlaylistControls />
            <TrackTable data={likedTracks} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracks;

interface PlaylistProps {
  data: {
    tracks: {
      trackId: string;
      trackName: string;
      artists: string[];
      albumName: string;
      dateAdded: string;
      duration: string;
    }[];
  };
}

function PlaylistHeader({ data }: PlaylistProps) {
  return (
    <div className="p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)]"></div>
        <div className="flex flex-col justify-end">
          <div>
            <h2 className="text-white uppercase text-xs font-medium">
              Playlist
            </h2>
          </div>
          <div>
            <h1 className="text-white font-black text-6xl my-3">Liked Songs</h1>
          </div>
          <div className="flex text-sm">
            <span className="text-white font-bold">username</span>
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
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex items-center mb-8">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className="bg-brand w-14 h-14 rounded-full flex items-center justify-center mr-8"
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

function TrackTable({ data }: PlaylistProps) {
  return (
    <div className="flex flex-col">
      {/* Track Table Header */}
      <div className="px-4 border-b border-gray-600 h-9">
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
      <div className="flex flex-col pt-5">
        {data.tracks.map((track, i) => (
          <div
            className="grid gap-4 text-gray-100 grid-cols-[16px_6fr_4fr_3fr_minmax(120px,1fr)] h-14 px-4 rounded-md group hover:bg-gray-600"
            key={track.trackId}
          >
            <div className="flex items-center justify-center">
              <div className="group-hover:hidden">{i + 1}</div>
              <div className="hidden group-hover:flex">
                <Icon.Play size={16} className="text-white" />
              </div>
            </div>
            <div className="flex items-center justify-self-start">
              <div className="w-10 h-10 bg-gray-700 mr-4"></div>
              <div className="flex flex-col">
                <span className="text-white font-medium cursor-default">
                  {track.trackName}
                </span>
                <span className="text-xs">
                  <Link href="/">
                    <a className="hover:underline hover:text-white">
                      {track.artists.map((artist, i) => {
                        if (i < track.artists.length - 1) {
                          return <span key={artist}>{artist}, </span>;
                        } else {
                          return <span key={artist}>{artist}</span>;
                        }
                      })}
                    </a>
                  </Link>
                </span>
              </div>
            </div>
            <div className="flex items-center justify-self-start">
              <Link href="/">
                <a className="hover:underline hover:text-white">
                  {track.albumName}
                </a>
              </Link>
            </div>
            <div className="flex items-center justify-self-start cursor-default">
              {track.dateAdded}
            </div>
            <div className="flex items-center justify-self-end cursor-default">
              {track.duration}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
