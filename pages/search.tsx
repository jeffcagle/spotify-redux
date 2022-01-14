import type { NextPage } from 'next';
import Head from 'next/head';

const Search: NextPage = () => {
  return (
    <>
      <Head>
        <title>Search Spotify</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{ height: 'calc(100vh - 161px)' }}
        className="p-8 grid gap-6 overflow-y-auto"
      >
        <h1 className="text-white text-2xl font-bold">Search Coming Soon</h1>
      </div>
    </>
  );
};

export default Search;
