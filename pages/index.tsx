import { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { selectToken } from '../store/user';
import { useSelector } from 'react-redux';
import * as http from '../services/fetchService';
import TracksRow from '../components/genre-rows/TracksRow';
import ShowsRow from '../components/genre-rows/ShowsRow';
import PlaylistsRow from '../components/genre-rows/PlaylistsRow';
import WithAuth from '../components/WithAuth';

const Home: NextPage = () => {
  const token = useSelector(selectToken);
  const [loading, setIsLoading] = useState(true);
  const [recentTracks, setRecentTracks] = useState([]);
  const [userShows, setUserShows] = useState([]);
  const [rockPlaylists, setRockPlaylists] = useState([]);
  const [countryPlaylists, setCountryPlaylists] = useState([]);

  useEffect(() => {
    fetchRowData();
  }, []);

  return (
    <>
      <Head>
        <title>Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-8 grid gap-6">
        {!loading && (
          <>
            {recentTracks && (
              <TracksRow
                name="Recently Played"
                path="recently-played"
                items={recentTracks}
              />
            )}

            <ShowsRow
              name="Your Shows"
              path="sectionjIdnO39OnsJU"
              items={userShows}
            />

            <PlaylistsRow
              name="Rock Playlists"
              path="section8Uend8HWS02d"
              items={rockPlaylists}
            />

            <PlaylistsRow
              name="Country Playlists"
              path="sectionU8dsTSD0fbs"
              items={countryPlaylists}
            />
          </>
        )}
      </div>
    </>
  );

  async function fetchRowData() {
    let _recentTracks = await http.getUserRecentlyPlayedTracks(token);
    const _userShows = await http.getUserShows(token);
    const _rockPlaylists = await http.getCategoryPlaylists(
      'rock',
      'playlists',
      token
    );
    const _countryPlaylists = await http.getCategoryPlaylists(
      'country',
      'playlists',
      token
    );

    _recentTracks = removeDuplicates(_recentTracks.items);
    setRecentTracks(_recentTracks);
    setUserShows(_userShows.items);
    setRockPlaylists(_rockPlaylists.playlists.items);
    setCountryPlaylists(_countryPlaylists.playlists.items);
    setIsLoading(false);
  }
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

// export default WithAuth(Home);
export default Home;
