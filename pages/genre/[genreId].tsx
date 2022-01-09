import type { NextPage } from 'next';
import Head from 'next/head';
import PlaylistCard from '../../components/cards/PlaylistCard';
import data from '../../data/playlists.json';

const Genre: NextPage = () => {
  return (
    <>
      <Head>
        <title>Genre - Spotify Redux</title>
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
              <h2 className="text-white font-bold text-2xl">Genre</h2>
            </div>
            <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
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

export default Genre;
