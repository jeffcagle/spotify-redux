import type { NextPage } from 'next';
import Head from 'next/head';
import data from '../../data/artists.json';
import ArtistCard from '../../components/cards/ArtistCard';

const Artists: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Artists - Spotify Redux</title>
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
              <h2 className="text-white font-bold text-2xl">Artists</h2>
            </div>
            <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
              {data.artists.map(artist => (
                <ArtistCard key={artist.id} id={artist.id} name={artist.name} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Artists;
