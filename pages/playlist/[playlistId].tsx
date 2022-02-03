import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/user';
import * as http from '../../services/fetchService';
import Banner from '../../components/playlists/Banner';
import Body from '../../components/playlists/Body';
import Controls from '../../components/playlists/Controls';
import Table from '../../components/playlists/Table';

const Playlist: NextPage = () => {
  const token = useSelector(selectToken),
    router = useRouter(),
    playlistId = router.query.playlistId,
    [state, setState] = useState({
      playlist: {
        id: '',
        name: '',
        images: [{ url: '' }],
        owner: { display_name: '' },
        followers: { total: 0 },
        tracks: { items: [] },
        duration: 0,
      },
      loading: true,
    });

  useEffect(() => {
    async function fetchPlaylistData() {
      try {
        setState(state => ({ ...state, loading: true }));
        const _playlist = await http.getPlaylist(playlistId, token);
        setState({ playlist: _playlist, loading: false });
      } catch (error) {
        console.error(error);
      }
    }
    fetchPlaylistData();
  }, [playlistId, token]);

  return (
    <>
      <Head>
        <title>Playlist - Spotify Redux</title>
        <meta
          name="description"
          content="A Spotify clone made with React and Redux."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!state.loading ? (
        <>
          <Banner data={state.playlist} />
          <Body>
            <Controls data={state.playlist.id} />
            <Table data={state.playlist} />
          </Body>
        </>
      ) : (
        <div className="playlist p-8 text-gray-200">Loading...</div>
      )}
    </>
  );
};

export default Playlist;
