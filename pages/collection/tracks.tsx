import React from 'react';
import Head from 'next/head';
import Banner from '../../components/saved-tracks/Banner';
import Body from '../../components/saved-tracks/Body';
import Controls from '../../components/saved-tracks/Controls';
import Table from '../../components/saved-tracks/Table';
import { selectToken, selectUserTracks } from '../../store/user';
import { useSelector } from 'react-redux';

function SavedTracks() {
  return (
    <>
      <Head>
        <title>Playlist - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner />
      <Body>
        <Controls />
        <Table />
      </Body>
    </>
  );
}

export default SavedTracks;
