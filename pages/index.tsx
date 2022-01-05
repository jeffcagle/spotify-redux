import type { NextPage } from 'next';
import Head from 'next/head';
import Albums from '../components/genre-rows/Albums';
import Artists from '../components/genre-rows/Artists';
import Playlists from '../components/genre-rows/Playlists';
import Shows from '../components/genre-rows/Shows';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{ height: 'calc(100vh - 161px)' }}
        className="p-8 grid gap-6 overflow-y-auto"
      >
        <Shows />

        <Playlists />

        <Albums />

        <Artists />
      </div>
    </>
  );
};

export default Home;
