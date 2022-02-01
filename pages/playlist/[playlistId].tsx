import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/user';
import { selectPlaylistId } from '../../store/page';
import * as http from '../../services/fetchService';
import Banner from '../../components/playlists/Banner';
import Body from '../../components/playlists/Body';
import Controls from '../../components/playlists/Controls';
import Table from '../../components/playlists/Table';

const initialPlaylistState = {
  id: '',
  name: '',
  images: [{ url: '' }],
  owner: { display_name: '' },
  followers: { total: 0 },
  tracks: { items: [] },
  duration: 0,
};

const Playlist: NextPage = () => {
  const token = useSelector(selectToken);
  const playlistId = useSelector(selectPlaylistId);
  const [playlist, setPlaylist] = useState(initialPlaylistState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlaylistData() {
      try {
        setLoading(true);
        const _playlist = await http.getPlaylist(playlistId, token);
        setPlaylist(_playlist);
      } catch (error: any) {
        console.log(`----! ${error.message.toUpperCase()} !----`);
      } finally {
        setLoading(false);
      }
    }
    fetchPlaylistData();
  }, [playlistId]);

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

      {!loading ? (
        <>
          <Banner data={playlist} />
          <Body>
            <Controls data={playlist.id} />
            <Table data={playlist} />
          </Body>
        </>
      ) : (
        <div className="playlist p-8 text-gray-200">Loading...</div>
      )}
    </>
  );
};

export default Playlist;
