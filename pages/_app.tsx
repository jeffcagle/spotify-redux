import '../styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import Player from '../components/player/Player';
import Sidebar from '../components/sidebar/Sidebar';
import * as Icon from '../components/Icons';
import { useRouter } from 'next/router';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className="flex flex-col h-screen text-sm overflow-hidden">
        <div className="flex flex-1">
          <Sidebar />
          <div className="bg-gray-800 flex-1 ml-60">
            <HeaderBar />
            <Component {...pageProps} />
          </div>
        </div>
        <Player />
      </main>
    </>
  );
}

function HeaderBar() {
  const router = useRouter();

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
          <span>sceranox</span>
          <Icon.CaretDown className="mr-2" />
        </div>
      </div>
    </header>
  );
}

function LibraryMenu() {
  const { pathname } = useRouter();

  return (
    <div className="header__library ml-7">
      <div className="library__menu">
        <nav>
          <ul className="flex">
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
