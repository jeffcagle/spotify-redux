const clientId = 'e84d5cea5c6845eeafe361dc6c02d049';
// const redirectUri = 'http://localhost:3000/';
const redirectUri = 'https://spotify-redux-rho.vercel.app/';

const scope = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
  'playlist-read-private',
  'user-library-read',
  'user-follow-read',
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce(
      (initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      },
      { access_token: '' }
    );
};

export const url = 'https://accounts.spotify.com/authorize';

export const loginUrl = `${url}?response_type=token&client_id=${encodeURIComponent(
  clientId
)}&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(
  scope
)}`;
