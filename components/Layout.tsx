import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import * as user from '../store/user';
import Player from './player/Player';
import Sidebar from './sidebar/Sidebar';
import * as Icon from './Icons';
import * as http from '../services/fetchService';
import Login from './Login';
import { getTokenFromUrl } from '../services/login';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const token = useSelector(user.selectToken),
    dispatch = useDispatch(),
    [state, setState] = useState({
      loading: false,
    });

  useEffect(() => {
    async function getUser() {
      try {
        const hash = getTokenFromUrl();
        const _token = hash.access_token;
        window.location.hash = '';

        if (_token) {
          setState({ loading: true });

          const _user = await http.getCurrentUser(_token),
            _userPlaylists = await http.getUserPlaylists(_token),
            _userTracks = await http.getUserTracks(_token),
            _userEpisodes = await http.getUserEpisodes(_token),
            _userShows = await http.getUserShows(_token),
            _userArtists = await http.getUserArtists(_token),
            _userAlbums = await http.getUserAlbums(_token);
          dispatch(user.setToken(_token));
          dispatch(user.setUser(_user));
          dispatch(user.setUserPlaylists(_userPlaylists));
          dispatch(user.setUserTracks(_userTracks));
          dispatch(user.setUserShows(_userShows));
          dispatch(user.setUserEpisodes(_userEpisodes));
          dispatch(user.setUserArtists(_userArtists));
          dispatch(user.setUserAlbums(_userAlbums));

          setState({ loading: false });
        }
      } catch (error) {
        console.error(error);
      }
    }
    getUser();
  }, [dispatch]);

  if (state.loading) {
    return (
      <div className="bg-gray-800 h-screen p-8 flex items-center justify-center">
        <span className="text-gray-100">...loading</span>
      </div>
    );
  }

  return (
    <>
      {token ? (
        <main className="flex flex-col h-screen text-sm overflow-hidden">
          <div className="flex flex-1">
            <Sidebar />
            <div className="bg-gray-800 flex-1 ml-60">
              <HeaderBar />
              <div
                style={{ height: 'calc(100vh - 161px)' }}
                className="overflow-y-auto"
              >
                {children}
              </div>
            </div>
          </div>
          <Player />
        </main>
      ) : (
        <Login />
      )}
    </>
  );
}

function HeaderBar() {
  const router = useRouter(),
    username = useSelector(user.selectUsername);

  return (
    <header className="flex justify-between items-center bg-gray-700 h-16 w-full sticky top-0 px-8 z-30">
      <div className="flex items-center">
        <div className="header__history flex items-center gap-4">
          <button
            className="group flex justify-center items-center bg-black w-8 h-8 rounded-full opacity-90"
            onClick={() => router.back()}
          >
            <Icon.LeftChevron className="text-gray-100 group-hover:text-white transition-all w-6 h-6" />
          </button>
          <button
            disabled
            className="group flex justify-center items-center bg-black w-8 h-8 rounded-full opacity-50 cursor-not-allowed"
          >
            <Icon.RightChevron className="text-gray-100 group-hover:text-white transition-all w-6 h-6" />
          </button>
        </div>
        {router.pathname.includes('collection') &&
          !router.pathname.includes('tracks') && <LibraryMenu />}
        {router.pathname.includes('search') && <SearchForm />}
      </div>
      <div className="flex gap-2 items-center rounded-full p-[2px] bg-gray-800 text-white font-medium">
        <figure className="flex justify-center items-center bg-gray-400 rounded-full h-7 w-7">
          <Icon.User />
        </figure>
        <div className="flex items-center gap-2">
          <span>{username}</span>
          <Icon.CaretDown className="mr-2" />
        </div>
      </div>
    </header>
  );
}

function LibraryMenu() {
  const { pathname } = useRouter(),
    playlistCount = useSelector(user.selectUserPlaylists).total,
    showCount = useSelector(user.selectUserShows).total,
    artistCount = useSelector(user.selectUserArtists).total,
    albumCount = useSelector(user.selectUserAlbums).total;

  return (
    <div className="header__library ml-7">
      <div className="library__menu">
        <nav>
          <ul className="flex">
            {playlistCount > 0 && (
              <li>
                <Link href="/collection/playlists">
                  <a
                    className={`text-white font-medium rounded-md px-4 py-3 ${handleActiveClass(
                      pathname,
                      'playlists'
                    )}`}
                  >
                    Playlists
                  </a>
                </Link>
              </li>
            )}
            {showCount > 0 && (
              <li>
                <Link href="/collection/podcasts">
                  <a
                    className={`text-white font-medium rounded-md px-4 py-3 ${handleActiveClass(
                      pathname,
                      'podcasts'
                    )}`}
                  >
                    Podcasts
                  </a>
                </Link>
              </li>
            )}
            {artistCount > 0 && (
              <li>
                <Link href="/collection/artists">
                  <a
                    className={`text-white font-medium rounded-md px-4 py-3 ${handleActiveClass(
                      pathname,
                      'artists'
                    )}`}
                  >
                    Artists
                  </a>
                </Link>
              </li>
            )}
            {albumCount > 0 && (
              <li>
                <Link href="/collection/albums">
                  <a
                    className={`text-white font-medium rounded-md px-4 py-3 ${handleActiveClass(
                      pathname,
                      'albums'
                    )}`}
                  >
                    Albums
                  </a>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

function handleActiveClass(pathname: string, path: string) {
  if (pathname.includes(path)) {
    return 'bg-gray-500';
  }
}

function SearchForm() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="ml-7 relative w-[364px]">
      <form role="search">
        <input
          className="px-12 py-[.6rem] h-10 w-full rounded-full placeholder:text-gray-200 border-0 outline-0"
          maxLength={800}
          placeholder="Artists, songs, or podcasts"
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </form>
      <div className="absolute flex items-center left-[12px] right-[12px] top-0 bottom-0 pointer-events-none">
        <div className="flex-1">
          <Icon.Search size={24} className="text-gray-800" />
        </div>
        {searchValue && (
          <button
            onClick={() => setSearchValue('')}
            className="pointer-events-auto"
          >
            <Icon.Close size={24} className="text-gray-800" />
          </button>
        )}
      </div>
    </div>
  );
}
