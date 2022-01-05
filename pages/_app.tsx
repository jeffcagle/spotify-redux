import '../styles/globals.css';
import type { AppProps } from 'next/app';
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
          <section className="bg-gray-800 flex-1 ml-60">
            <HeaderBar />
            <Component {...pageProps} />
          </section>
        </div>
        <Player />
      </main>
    </>
  );
}

function HeaderBar() {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center bg-gray-700 h-16 w-full sticky top-0 px-8 z-30">
      <div className="flex items-center gap-4">
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
      <div className="flex gap-2 items-center rounded-full p-[2px] bg-gray-800 text-white font-medium">
        <figure className="flex justify-center items-center bg-gray-400 rounded-full h-7 w-7">
          <Icon.User />
        </figure>
        <div className="flex items-center gap-2">
          <span>sceranox</span>
          <Icon.CaretDown className="mr-2" />
        </div>
      </div>
    </div>
  );
}
