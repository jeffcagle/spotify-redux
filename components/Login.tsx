import type { NextPage } from 'next';
import { loginUrl } from '../services/login';
import * as Icon from './Icons';

const Login: NextPage = () => {
  return (
    <div className="bg-gray-800 h-screen p-8 flex items-center justify-center">
      <div className="bg-gray-700 max-w-[600px] p-16 rounded-md">
        <div className="flex justify-center">
          <Icon.SpotifyLogo className="text-white w-60 mb-8" />
        </div>
        <h1 className="text-white font-bold text-center text-2xl mb-5">
          Spotify <span className="italic text-gray-100">API</span> + Redux +
          Tailwind
        </h1>
        <div className="text-white text-center bg-gray-800 border border-gray-600 rounded-md p-4 mb-4">
          <p className="mb-2 leading-relaxed">
            <span className="text-red-600 font-bold">Warning:</span> This is not
            the real Spotify!
          </p>
          <p className="text-gray-100 text-xs leading-relaxed">
            For the real Spotify, please visit{' '}
            <a
              className="text-brand"
              href="https://open.spotify.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://open.spotify.com/
            </a>
            .
          </p>
        </div>
        <div className="text-gray-100 text-center">
          <p className="mb-3 text-lg text-gray-50 font-bold leading-relaxed">
            Welcome to my Spotify clone!
          </p>
          <p className="mb-3 leading-relaxed">
            The purpose of this project was to make learning Tailwind and Redux
            fun and interesting. Due to rate limiting and API limitations, this
            app is not publicly accessible. In order to access it, you must
            first request to have your Spotify username added to the allowed
            users list.
          </p>
          <p className="leading-relaxed">
            If you would like to be added, please{' '}
            <a className="text-brand" href="https://www.jeffcagle.dev/contact">
              contact me
            </a>
            .
          </p>
        </div>
        <a
          className="text-white flex justify-center bg-brand py-4 px-8 mt-8 rounded-full"
          href={loginUrl}
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default Login;
