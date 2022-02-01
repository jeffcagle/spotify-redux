import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/user';
import { selectAlbumId } from '../../store/page';
import * as http from '../../services/fetchService';
import Banner from '../../components/albums/Banner';
import Body from '../../components/albums/Body';
import Controls from '../../components/albums/Controls';
import Table from '../../components/albums/Table';

const initialAlbumState = {
  id: '',
  name: '',
  images: [{ url: '' }],
  tracks: { items: [] },
  artists: [],
  release_date: '',
  duration: 0,
};

const initialArtistState = {
  images: [{ url: '' }],
};

const Album: NextPage = () => {
  const token = useSelector(selectToken),
    albumId = useSelector(selectAlbumId),
    [album, setAlbum] = useState(initialAlbumState),
    [artist, setArtist] = useState(initialArtistState),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAlbumData() {
      try {
        setLoading(true);
        const _album = await http.getAlbum(albumId, token),
          _artist = await http.getArtist(_album.artists[0].id, token);
        setAlbum(_album);
        setArtist(_artist);
      } catch (error: any) {
        console.log(`----! ${error.message.toUpperCase()} !----`);
      } finally {
        setLoading(false);
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

      {!loading ? (
        <>
          <Banner data={album} artist={artist} />
          <Body>
            <Controls data={album.id} />
            <Table data={album} />
          </Body>
        </>
      ) : (
        <div className="playlist p-8 text-gray-200">Loading...</div>
      )}
    </>
  );
};

export default Album;
