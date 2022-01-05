import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Show: NextPage = () => {
  const router = useRouter();
  const { showId } = router.query;

  return (
    <>
      <Head>
        <title>Show - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Show {showId}</div>
    </>
  );
};

export default Show;
