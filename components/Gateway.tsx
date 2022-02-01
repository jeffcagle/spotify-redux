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
    // localStorage.setItem('token', token);

    if (token) {
      dispatch(setToken(token));
      getUserData(token);
    }
  }, []);

  async function getUserData(token: string) {
    const _user = await http.getCurrentUser(token);
    dispatch(setUser(_user));
    const _userPlaylists = await http.getUserPlaylists(token);
    dispatch(setUserPlaylists(_userPlaylists));
    const _userTracks = await http.getUserTracks(token);
    dispatch(setUserTracks(_userTracks));
    const _userEpisodes = await http.getUserEpisodes(token);
    dispatch(setUserEpisodes(_userEpisodes));
  }

  return <>{token ? <Layout>{children}</Layout> : <Login />}</>;
  // return <Layout>{children}</Layout>;
}

export default Gateway;
