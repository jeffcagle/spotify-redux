import React, { useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as Icon from '../../components/Icons';
import Link from 'next/link';

const Album: NextPage = () => {
  const router = useRouter();
  const { albumId } = router.query;

  const album = {
    id: albumId,
    albumName: 'Album Name',
    artist: 'Artist Name',
    releaseYear: '2022',
    tracks: [
      {
        trackId: 'aksdjflksjdf',
        trackName: 'Track 1',
        artistName: 'Artist A',
        albumName: 'Album 1',
        date: 'Jan 8, 2022',
        duration: '8:00',
      },
      {
        trackId: 'kajejlksdf',
        trackName: 'Track 2',
        artistName: 'Artist B',
        albumName: 'Album 2',
        date: 'Jan 8, 2022',
        duration: '7:00',
      },
      {
        trackId: '34jskfjsiodf',
        trackName: 'Track 3',
        artistName: 'Artist C',
        albumName: 'Album 3',
        date: 'Jan 8, 2022',
        duration: '7:00',
      },
      {
        trackId: 'werskdfjssd',
        trackName: 'Track 4',
        artistName: 'Artist D',
        albumName: 'Album 4',
        date: 'Jan 8, 2022',
        duration: '7:00',
      },
    ],
  };

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
        <AlbumHeader data={album} />
        <div className="relative w-full">
          <div className="absolute z-0 w-full h-60 bg-gray-600 bg-gradient-to-b from-[rgba(0,0,0,.6)] to-gray-800">
            {/* Bg Gradient */}
          </div>
          <div className="p-8 relative z-10">
            <AlbumControls />
            <TrackTable data={album} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Album;

interface AlbumProps {
  data: {
    id: string | string[] | undefined;
    albumName: string;
    artist: string;
    releaseYear: string;
    tracks: {
      trackId: string;
      trackName: string;
      artistName: string;
      albumName: string;
      date: string;
      duration: string;
    }[];
  };
}

function AlbumHeader({ data }: AlbumProps) {
  return (
    <div className="p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)]"></div>
        <div className="flex flex-col justify-end">
          <div>
            <h2 className="text-white uppercase text-xs font-medium">Album</h2>
          </div>
          <div>
            <h1 className="text-white font-black text-6xl my-3">
              {data.albumName}
            </h1>
          </div>
          <div className="flex items-center text-sm">
            <figure className="w-6 h-6 mr-1">
              <div className="bg-gray-100 h-full w-full rounded-full"></div>
            </figure>
            <span className="text-white font-bold">{data.artist}</span>
            <span className="before:content-['•'] before:mx-1 text-gray-100">
              {data.releaseYear}
            </span>
            <span className="before:content-['•'] before:mx-1 text-gray-100">
              {data.tracks.length} {data.tracks.length > 1 ? 'songs' : 'song'},
              5 hr 45 min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AlbumControls() {
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
      <button onClick={() => setIsLiked(!isLiked)} className="mr-8">
        {isLiked ? (
          <Icon.HeartFilled size={32} view={16} className="text-brand" />
        ) : (
          <Icon.Heart size={32} className="text-gray-100" />
        )}
      </button>
      <button>
        <Icon.MenuDots className="text-gray-100" />
      </button>
    </div>
  );
}

function TrackTable({ data }: AlbumProps) {
  return (
    <div className="flex flex-col">
      {/* Track Table Header */}
      <div className="px-4 border-b border-gray-600 h-9">
        <div className="grid gap-4 text-gray-100 grid-cols-[16px_4fr_minmax(120px,1fr)] h-full uppercase">
          <div className="flex items-center justify-center">#</div>
          <div className="flex items-center justify-self-start">Title</div>
          <div className="flex items-center justify-self-end">
            <Icon.Clock className="text-gray-100" />
          </div>
        </div>
      </div>
      {/* Track Items */}
      <div className="flex flex-col pt-5">
        {data.tracks.map((track, i) => (
          <div
            className="grid gap-4 text-gray-100 grid-cols-[16px_4fr_minmax(120px,1fr)] h-14 px-4 rounded-md group hover:bg-gray-600"
            key={track.trackId}
          >
            <div className="flex items-center justify-center">
              <div className="group-hover:hidden">{i + 1}</div>
              <div className="hidden group-hover:flex">
                <Icon.Play size={16} className="text-white" />
              </div>
            </div>
            <div className="flex items-center justify-self-start">
              <div className="flex flex-col">
                <span className="text-white font-medium cursor-default">
                  {track.trackName}
                </span>
                <span className="text-xs">
                  <Link href="/">
                    <a className="hover:underline hover:text-white">
                      {track.artistName}
                    </a>
                  </Link>
                </span>
              </div>
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
