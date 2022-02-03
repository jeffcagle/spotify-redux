import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/user';
import * as http from '../../services/fetchService';
import Banner from '../../components/albums/Banner';
import Body from '../../components/albums/Body';
import Controls from '../../components/albums/Controls';
import Table from '../../components/albums/Table';

const Album: NextPage = () => {
  const token = useSelector(selectToken),
    router = useRouter(),
    albumId = router.query.albumId,
    [state, setState] = useState({
      album: {
        id: '',
        name: '',
        images: [{ url: '' }],
        tracks: { items: [] },
        artists: [],
        release_date: '',
        duration: 0,
      },
      artist: { images: [{ url: '' }] },
      loading: true,
    });

  useEffect(() => {
    async function fetchAlbumData() {
      try {
        setState(state => ({ ...state, loading: true }));
        const _album = await http.getAlbum(albumId, token),
          _artist = await http.getArtist(_album.artists[0].id, token);

        setState({ album: _album, artist: _artist, loading: false });
      } catch (error) {
        console.error(error);
      }
    }
    fetchAlbumData();
  }, [albumId, token]);

  return (
    <>
      <Head>
        <title>Album - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!state.loading ? (
        <>
          <Banner data={state.album} artist={state.artist} />
          <Body>
            <Controls data={state.album.id} />
            <Table data={state.album} />
          </Body>
        </>
      ) : (
        <div className="playlist p-8 text-gray-200">Loading...</div>
      )}
    </>
  );
};

export default Album;
