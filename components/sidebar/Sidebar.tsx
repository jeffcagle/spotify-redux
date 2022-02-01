import React from 'react';
import Link from 'next/link';
import * as Icon from '../Icons';
import { useRouter } from 'next/router';
import {
  selectUserEpisodes,
  selectUserPlaylists,
  selectUserTracks,
  selectUserAlbums,
  selectUserArtists,
  selectUserShows,
} from '../../store/user';
import { useSelector, useDispatch } from 'react-redux';
import { setPlaylistId } from '../../store/page';
import { selectContextId, selectIsPlaying } from '../../store/playback';

export default function Sidebar() {
  return (
    <div className="bg-black p-2 w-60 fixed top-0 bottom-[96px]">
      <nav>
        <Icon.SpotifyLogo className="text-white w-32 m-4" />
        <PrimaryMenu />
        <SecondaryMenu />
        <PlaylistsMenu />
      </nav>
    </div>
  );
}

function PrimaryMenu() {
  let router = useRouter();
  const playlistCount = useSelector(selectUserPlaylists).total,
    showCount = useSelector(selectUserShows).total,
    artistCount = useSelector(selectUserArtists).total,
    albumCount = useSelector(selectUserAlbums).total,
    hasLibrary =
      playlistCount > 0 || showCount > 0 || artistCount > 0 || albumCount > 0;

  return (
    <div className="mt-7">
      <ul>
        <li>
          <Link href="/">
            <a
              className={`flex items-center gap-4 group rounded px-4 h-10 font-medium hover:text-white transition-all ${
                router.pathname === '/'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-100'
              }`}
            >
              {router.pathname === '/' ? <Icon.HomeFilled /> : <Icon.Home />}
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/search">
            <a
              className={`flex items-center gap-4 group rounded px-4 h-10 font-medium hover:text-white transition-all ${
                router.pathname === '/search'
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-100'
              }`}
            >
              {router.pathname === '/search' ? (
                <Icon.SearchFilled size={24} />
              ) : (
                <Icon.Search size={24} />
              )}
              Search
            </a>
          </Link>
        </li>
        {hasLibrary && (
          <li>
            <Link href="/collection/playlists">
              <a
                className={`flex items-center gap-4 group rounded px-4 h-10 font-medium hover:text-white transition-all ${
                  router.pathname.includes('/collection')
                    ? 'bg-gray-700 text-white'
                    : 'text-gray-100'
                }`}
              >
                {router.pathname.includes('collection') ? (
                  <Icon.LibraryFilled />
                ) : (
                  <Icon.Library />
                )}
                Your Library
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}

function SecondaryMenu() {
  const userTracks = useSelector(selectUserTracks),
    hasTracks = userTracks.total > 0,
    userEpisodes = useSelector(selectUserEpisodes),
    hasEpisodes = userEpisodes.total > 0;

  return (
    <>
      <div className="mt-6">
        <ul>
          <li>
            <Link href="/">
              <a className="flex items-center gap-4 group rounded px-4 h-10 font-medium text-gray-100 hover:text-white transition-all">
                <div className="flex justify-center items-center h-6 w-6 bg-white opacity-70 text-gray-900 group-hover:opacity-100 transition-all">
                  <Icon.CreatePlaylist />
                </div>{' '}
                Create Playlist
              </a>
            </Link>
          </li>
          {hasTracks && (
            <li>
              <Link href="/collection/tracks">
                <a className="flex items-center gap-4 group rounded px-4 h-10 font-medium text-gray-100 hover:text-white transition-all">
                  <div className="flex justify-center items-center h-6 w-6 bg-gradient-to-br opacity-70 from-blue-700  to-indigo-400 text-white group-hover:opacity-100 transition-all">
                    <Icon.HeartFilled size={12} view={16} />
                  </div>{' '}
                  Liked Songs
                </a>
              </Link>
            </li>
          )}
          {hasEpisodes && (
            <li>
              <Link href="/collection/episodes">
                <a className="flex items-center gap-4 group rounded px-4 h-10 font-medium text-gray-100 hover:text-white transition-all">
                  <div className="flex justify-center items-center h-6 w-6 bg-green-800 rounded opacity-70 group-hover:opacity-100 transition-all">
                    <Icon.PodcastMenu />
                  </div>{' '}
                  Your Episodes
                </a>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="px-4 mt-2 mb-4">
        <hr className="bg-gray-600 border-0 h-px" />
      </div>
    </>
  );
}

function PlaylistsMenu() {
  interface Props {
    id: string;
    name: string;
  }
  const userPlaylists = useSelector(selectUserPlaylists),
    isPlaying = useSelector(selectIsPlaying),
    currentContextId = useSelector(selectContextId),
    dispatch = useDispatch();

  return (
    <div className="h-fit pb-40 relative">
      <ul
        className="flex flex-col h-fit absolute left-0 right-[-7px] overflow-y-auto pb-2"
        style={{ height: 'calc(100vh - 436px)' }}
      >
        {userPlaylists.items?.map((playlist: Props) => (
          <li key={playlist.id}>
            <Link href={`/playlist/${playlist.id}`}>
              <a
                onClick={() => dispatch(setPlaylistId(playlist.id))}
                className="flex items-center justify-between px-4 h-8 text-sm text-gray-100 hover:text-white transition-all"
              >
                {playlist.name}{' '}
                {isPlaying && playlist.id === currentContextId && (
                  <Icon.Speaker />
                )}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
