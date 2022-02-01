import type { NextPage } from 'next';
import Head from 'next/head';
import Albums from '../components/genre-rows/Albums';
import Artists from '../components/genre-rows/Artists';
// import Playlists from '../components/genre-rows/Playlists';
import Shows from '../components/genre-rows/Shows';
import { loginUrl } from '../services/login';

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8">
        <a href={loginUrl}>Login</a>
      </div>
    </>
  );
};

export default Login;
