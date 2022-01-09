import type { NextPage } from 'next';
import Head from 'next/head';

const Library: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Library - Spotify</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Library</div>
    </>
  );
};

export async function getStaticProps() {
  return {
    redirect: {
      destination: '/collection/playlists',
      permanent: false,
    },
  };
}

export default Library;
