import type { NextPage } from 'next';
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import * as Icon from '../../../components/Icons';
import Head from 'next/head';

const Artist: NextPage = () => {
  const router = useRouter();
  const { artistId } = router.query;

  const artistData = {
    id: artistId,
    artistName: 'Artist Name',
    popular: [
      {
        id: 'skdjflksjdf',
        trackName: 'Track 1',
        listens: '5,039,022',
        length: '8:00',
      },
      {
        id: 'ksjiejsdlfk',
        trackName: 'Track 2',
        listens: '5,039,022',
        length: '8:00',
      },
      {
        id: '93jskdflkjs',
        trackName: 'Track 3',
        listens: '5,039,022',
        length: '8:00',
      },
      {
        id: 'soiejfklsdjf',
        trackName: 'Track 4',
        listens: '5,039,022',
        length: '8:00',
      },
      {
        id: '94rjksdfljks',
        trackName: 'Track 5',
        listens: '5,039,022',
        length: '8:00',
      },
      {
        id: 'knsjnsdfnsd',
        trackName: 'Track 6',
        listens: '5,039,022',
        length: '8:00',
      },
    ],
    albums: [
      {
        albumId: 'akjlksdjf',
        albumName: 'Album 1',
      },
      {
        albumId: 'skdjflsds',
        albumName: 'Album 2',
      },
      {
        albumId: '9jkwdfjje',
        albumName: 'Album 3',
      },
      {
        albumId: 'jser3jjhfd',
        albumName: 'Album 4',
      },
      {
        albumId: 'urndnsdfh',
        albumName: 'Album 5',
      },
      {
        albumId: '83hjksfkjh',
        albumName: 'Album 6',
      },
      {
        albumId: '39enfbnsfi',
        albumName: 'Album 7',
      },
    ],
  };

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
        <ArtistHeader data={artistData} />
        <div className="relative w-full">
          <div className="absolute z-0 w-full h-60 bg-gray-600 bg-gradient-to-b from-[rgba(0,0,0,.6)] to-gray-800">
            {/* Bg Gradient */}
          </div>
          <div className="p-8 relative z-10">
            <ArtistControls />
            {artistData.popular.length > 0 && <TrackTable data={artistData} />}
            <Albums data={artistData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Artist;

interface ArtistDataProps {
  data: {
    id: string | string[] | undefined;
    artistName: string;
    popular: {
      id: string;
      trackName: string;
      listens: string;
      length: string;
    }[];
    albums: { albumId: string; albumName: string }[];
  };
}

function ArtistHeader({ data }: ArtistDataProps) {
  return (
    <div className="p-8 bg-gray-700 h-[32vh] flex items-end">
      <div className="flex flex-col">
        <div className="text-white text-xs font-medium flex items-center gap-2">
          <Icon.Verified /> <span>Verified Artist</span>
        </div>
        <div>
          <h1 className="text-white font-black text-6xl my-3">
            {data.artistName}
          </h1>
        </div>
        <div className="flex text-sm">
          <span className="text-white">130,000 monthly listeners</span>
        </div>
      </div>
    </div>
  );
}

function ArtistControls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

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
      <button onClick={() => setIsFollowed(!isFollowed)} className="mr-8">
        {isFollowed ? (
          'Following'
        ) : (
          <div className="uppercase text-white font-medium text-xs tracking-widest border border-gray-300 py-2 px-4 rounded hover:border-white">
            Follow
          </div>
        )}
      </button>
      <button>
        <Icon.MenuDots className="text-gray-100" />
      </button>
    </div>
  );
}

function TrackTable({ data }: ArtistDataProps) {
  const [popExpanded, setPopExpanded] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Track Items */}
      <div className="flex flex-col pt-5">
        <h2 className="text-white font-bold mb-5 text-xl">Popular</h2>
        <div className="mb-10">
          <div
            className={`overflow-hidden ${
              popExpanded || data.popular.length < 5 ? 'h-auto' : 'h-[280px]'
            }`}
          >
            {data.popular.map((track, i) => (
              <div
                className="grid gap-4 text-gray-100 grid-cols-[16px_4fr_2fr_minmax(120px,1fr)] h-14 px-4 rounded-md group hover:bg-gray-600"
                key={track.id}
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
                  </div>
                </div>
                <div className="flex items-center justify-self-start cursor-default">
                  {track.listens}
                </div>
                <div className="flex items-center justify-self-end cursor-default">
                  {track.length}
                </div>
              </div>
            ))}
          </div>
          {data.popular.length > 5 && (
            <button
              onClick={() => setPopExpanded(!popExpanded)}
              className="text-gray-100 uppercase font-medium text-xs tracking-widest p-4"
            >
              {popExpanded ? 'Show Less' : 'See More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function Albums({ data }: ArtistDataProps) {
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-xl">Albums</h2>
        <Link href={`/artist/${data.id}/discography/album`}>
          <a className="text-gray-100 font-medium text-xs tracking-widest uppercase">
            See Discography
          </a>
        </Link>
      </div>
      <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
        {data.albums.map(album => (
          <Link href={`/album/${album.albumId}`} key={album.albumId}>
            <a className="bg-gray-700 hover:bg-gray-600 transition-all duration-200 p-4 rounded-md cursor-pointer text-white">
              <div>
                <div className="mb-5">
                  <div className="pb-[100%] w-full relative">
                    <div className="bg-gray-500 text-gray-300 h-full w-full rounded-sm shadow-lg flex items-center justify-center absolute top-0 left-0">
                      Image
                    </div>
                  </div>
                </div>
                <div className="min-h-[62px]">
                  <div className="font-bold mb-1 truncate">
                    {album.albumName}
                  </div>
                  <div className="text-gray-100">{data.artistName}</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}
