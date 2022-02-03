import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { selectToken } from '../store/user';
import { useDispatch, useSelector } from 'react-redux';
import * as http from '../services/fetchService';
import TracksRow from '../components/genre-rows/TracksRow';
import ShowsRow from '../components/genre-rows/ShowsRow';
import PlaylistsRow from '../components/genre-rows/PlaylistsRow';

const Home: NextPage = () => {
  const token = useSelector(selectToken),
    dispatch = useDispatch(),
    router = useRouter(),
    [state, setState] = useState({
      loading: true,
      recentTracks: [],
      userShows: [],
      rockPlaylists: [],
      countryPlaylists: [],
    });

  useEffect(() => {
    async function fetchRowData() {
      try {
        let _recentTracks = await http.getUserRecentlyPlayedTracks(token);
        _recentTracks = removeDuplicates(_recentTracks.items);
        const _rockPlaylists = await http.getCategoryPlaylists(
            'rock',
            'playlists',
            token
          ),
          _countryPlaylists = await http.getCategoryPlaylists(
            'country',
            'playlists',
            token
          ),
          _userShows = await http.getUserShows(token);

        setState({
          recentTracks: _recentTracks,
          userShows: _userShows.items,
          rockPlaylists: _rockPlaylists.playlists.items,
          countryPlaylists: _countryPlaylists.playlists.items,
          loading: false,
        });
      } catch (error) {
        console.error(error);
      }
    }
    fetchRowData();
  }, [token, dispatch, router.asPath]);

  return (
    <>
      <Head>
        <title>Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8 grid gap-6">
        {!state.loading && (
          <>
            {state.recentTracks && (
              <TracksRow
                name="Recently Played"
                path="recently-played"
                items={state.recentTracks}
              />
            )}

            {state.userShows && (
              <ShowsRow
                name="Your Shows"
                path="sectionjIdnO39OnsJU"
                items={state.userShows}
              />
            )}

            <PlaylistsRow
              name="Rock Playlists"
              path="section8Uend8HWS02d"
              items={state.rockPlaylists}
            />

            <PlaylistsRow
              name="Country Playlists"
              path="sectionU8dsTSD0fbs"
              items={state.countryPlaylists}
            />
          </>
        )}
      </div>
    </>
  );
};

function removeDuplicates(items: { track: { id: string } }[]) {
  const tracks = [];
  const trackIds = [''];
  for (const item of items) {
    if (!trackIds.includes(item.track.id)) {
      trackIds.push(item.track.id);
      tracks.push(item);
    }
  }
  return tracks;
}

export default Home;
