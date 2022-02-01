import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../store/user';
import { selectArtistId } from '../../../store/page';
import * as http from '../../../services/fetchService';
import Banner from '../../../components/artists/Banner';
import Controls from '../../../components/artists/Controls';
import Body from '../../../components/artists/Body';
import Popular from '../../../components/artists/Popular';
import Albums from '../../../components/artists/Albums';

const initialArtistState = {
  name: '',
  followers: { total: 0 },
  images: [],
};

const Artist: NextPage = () => {
  const token = useSelector(selectToken);
  const artistId = useSelector(selectArtistId);
  const [artist, setArtist] = useState(initialArtistState);
  const [topTracks, setTopTracks] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArtistData() {
      try {
        setLoading(true);
        const _artist = await http.getArtist(artistId, token);
        const _topTracks = await http.getArtistTopTracks(artistId, token);
        let _albums = await http.getArtistAlbums(artistId, token);
        _albums = removeDuplicates(_albums.items);
        setArtist(_artist);
        setTopTracks(_topTracks.tracks);

        setAlbums(_albums);
      } catch (error: any) {
        console.log(`----! ${error.message.toUpperCase()} !----`);
      } finally {
        setLoading(false);
      }
    }
    fetchArtistData();
  }, [artistId]);

  return (
    <>
      <Head>
        <title>Artist - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!loading ? (
        <>
          <Banner data={artist} />
          <Body>
            <Controls />
            <Popular data={topTracks} />
            <Albums data={albums} />
          </Body>
        </>
      ) : (
        <div className="playlist p-8 text-gray-200">Loading...</div>
      )}
    </>
  );

  function removeDuplicates(items: { name: string }[]) {
    const albums = [];
    const albumTitles = [''];
    for (const item of items) {
      if (!albumTitles.includes(item.name.toLowerCase())) {
        albumTitles.push(item.name.toLowerCase());
        albums.push(item);
      }
    }
    return albums;
  }
};

export default Artist;
