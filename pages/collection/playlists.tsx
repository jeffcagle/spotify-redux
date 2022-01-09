import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import data from '../../data/playlists.json';
import playlistData from '../../data/playlist.json';
import PlaylistCard from '../../components/cards/PlaylistCard';

const Playlists: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Playlists - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{ height: 'calc(100vh - 161px)' }}
        className="overflow-y-auto"
      >
        <div className="p-8">
          <section className="mb-4">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white font-bold text-2xl">Playlists</h2>
            </div>
            <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
              <Link href="/collection/tracks">
                <a className="col-span-2 text-white bg-gradient-to-br from-blue-700  to-indigo-400 rounded-md p-5">
                  <div className="flex flex-col gap-5 h-full">
                    <div className="liked__list mb-3 flex items-end flex-1">
                      <div className="line-clamp-3">
                        {playlistData.tracks.map(track => (
                          <span
                            key={track.id}
                            className="first:before:content-[''] first:before:mx-0 before:content-['•'] before:mx-1"
                          >
                            <span>{track.artists[0].name}</span>
                            <span className="opacity-70 before:ml-1">
                              {track.name}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="liked__count min-h-[62px] flex flex-col gap-1">
                      <span className="font-medium text-3xl">Liked Songs</span>
                      <span className="text-ellipsis">
                        {playlistData.tracks.length} liked songs
                      </span>
                    </div>
                  </div>
                </a>
              </Link>

              {data.playlists.map(playlist => (
                <PlaylistCard
                  key={playlist.id}
                  id={playlist.id}
                  name={playlist.name}
                  artists={playlist.artists}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Playlists;
