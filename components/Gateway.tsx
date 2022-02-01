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

    async function getUserData(token: string) {
      const _user = await http.getCurrentUser(token),
        _userPlaylists = await http.getUserPlaylists(token),
        _userTracks = await http.getUserTracks(token),
        _userEpisodes = await http.getUserEpisodes(token);
      dispatch(setUser(_user));
      dispatch(setUserPlaylists(_userPlaylists));
      dispatch(setUserTracks(_userTracks));
      dispatch(setUserEpisodes(_userEpisodes));
    }

    if (token) {
      dispatch(setToken(token));
      getUserData(token);
    }
  }, []);

  return <>{token ? <Layout>{children}</Layout> : <Login />}</>;
}

export default Gateway;
