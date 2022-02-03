import React, { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
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

const Artist: NextPage = () => {
  const token = useSelector(selectToken),
    router = useRouter(),
    artistId = router.query.artistId,
    [state, setState] = useState({
      artist: {
        name: '',
        followers: { total: 0 },
        images: [],
      },
      topTracks: [],
      albums: [],
      loading: true,
    });

  useEffect(() => {
    async function fetchArtistData() {
      try {
        setState(state => ({ ...state, loading: true }));
        const _artist = await http.getArtist(artistId, token),
          _topTracks = await http.getArtistTopTracks(artistId, token);
        let _albums = await http.getArtistAlbums(artistId, token);
        _albums = removeDuplicates(_albums.items);

        setState({
          artist: _artist,
          topTracks: _topTracks.tracks,
          albums: _albums,
          loading: false,
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchArtistData();
  }, [artistId, token]);

  return (
    <>
      <Head>
        <title>Artist - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!state.loading ? (
        <>
          <Banner data={state.artist} />
          <Body>
            <Controls />
            <Popular data={state.topTracks} />
            <Albums data={state.albums} />
          </Body>
        </>
      ) : (
        <div className="playlist p-8 text-gray-200">Loading...</div>
      )}
    </>
  );

  function removeDuplicates(items: { name: string }[]) {
    const albums = [],
      albumTitles = [''];
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
