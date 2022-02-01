import { useEffect } from 'react';
import Layout from './Layout';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectToken,
  setToken,
  setUser,
  setUserPlaylists,
  setUserTracks,
  setUserEpisodes,
  setUserShows,
  setUserArtists,
  setUserAlbums,
} from '../store/user';
import { getTokenFromUrl } from '../services/login';
import * as http from '../services/fetchService';
import Login from '../components/Login';

interface GatewayProps {
  children: React.ReactNode;
}

function Gateway({ children }: GatewayProps) {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const token = hash.access_token;

    async function getUserData(token: string) {
      const _user = await http.getCurrentUser(token),
        _userPlaylists = await http.getUserPlaylists(token),
        _userTracks = await http.getUserTracks(token),
        _userEpisodes = await http.getUserEpisodes(token),
        _userShows = await http.getUserShows(token),
        _userArtists = await http.getUserArtists(token),
        _userAlbums = await http.getUserAlbums(token);
      dispatch(setUser(_user));
      dispatch(setUserPlaylists(_userPlaylists));
      dispatch(setUserTracks(_userTracks));
      dispatch(setUserEpisodes(_userEpisodes));
      dispatch(setUserShows(_userShows));
      dispatch(setUserArtists(_userArtists));
      dispatch(setUserAlbums(_userAlbums));
    }

    if (token) {
      dispatch(setToken(token));
      getUserData(token);
    }
  }, [dispatch]);

  return <>{token ? <Layout>{children}</Layout> : <Login />}</>;
}

export default Gateway;
