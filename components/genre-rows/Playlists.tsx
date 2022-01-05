import Link from 'next/link';

const playlistGenre = {
  genreId: 'playlists_skdljfsdf',
  playlists: [
    {
      playlistId: 'akjlksdjf',
      playlistName: 'Playlist 1',
      artists: ['Artist A', 'Artist B', 'Artist C', 'Artist D'],
    },
    {
      playlistId: 'skdjflsds',
      playlistName: 'Playlist 2',
      artists: ['Artist A', 'Artist B', 'Artist C'],
    },
    {
      playlistId: '9jkwdfjje',
      playlistName: 'Playlist 3',
      artists: ['Artist A', 'Artist D'],
    },
    {
      playlistId: 'jser3jjhfd',
      playlistName: 'Playlist 4',
      artists: ['Artist A', 'Artist B', 'Artist C', 'Artist D'],
    },
    {
      playlistId: 'urndnsdfh',
      playlistName: 'Playlist 5',
      artists: ['Artist A', 'Artist B', 'Artist C'],
    },
    {
      playlistId: '83hjksfkjh',
      playlistName: 'Playlist 6',
      artists: ['Artist B', 'Artist C', 'Artist D'],
    },
    {
      playlistId: '39enfbnsfi',
      playlistName: 'Playlist 7',
      artists: ['Artist A', 'Artist B', 'Artist C', 'Artist D'],
    },
  ],
};

function Playlists() {
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-2xl">Your Playlists</h2>
        <Link href={`/genre/${playlistGenre.genreId}`}>
          <a className="text-gray-100 font-medium text-xs tracking-widest uppercase">
            See All
          </a>
        </Link>
      </div>
      <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
        {playlistGenre.playlists.map(playlist => (
          <Link
            href={`/playlist/${playlist.playlistId}`}
            key={playlist.playlistId}
          >
            <a className="bg-gray-700 hover:bg-gray-600 transition-all duration-200 p-4 rounded-md cursor-pointer text-white">
              <div>
                <div className="mb-5">
                  <div className="pb-[100%] w-full relative">
                    <div className="bg-gray-500 text-gray-300 h-full w-full rounded-sm shadow-lg flex items-center justify-center absolute top-0 left-0">
                      Image
                    </div>
                  </div>
                </div>
                <div className="min-h-[62px]">
                  <div className="font-bold mb-1 truncate">
                    {playlist.playlistName}
                  </div>
                  <div className="text-gray-100">
                    {playlist.artists.map((artist, i) => {
                      if (i < playlist.artists.length - 1) {
                        return <span key={artist}>{artist}, </span>;
                      } else {
                        return <span key={artist}>{artist}</span>;
                      }
                    })}
                  </div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Playlists;
