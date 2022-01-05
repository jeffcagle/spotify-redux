import Link from 'next/link';

const albumGenre = {
  genreId: 'albums_skdljfsdf',
  albums: [
    {
      albumId: 'akjlksdjf',
      albumName: 'Album 1',
      artistName: 'Artist A',
    },
    {
      albumId: 'skdjflsds',
      albumName: 'Album 2',
      artistName: 'Artist B',
    },
    {
      albumId: '9jkwdfjje',
      albumName: 'Album 3',
      artistName: 'Artist C',
    },
    {
      albumId: 'jser3jjhfd',
      albumName: 'Album 4',
      artistName: 'Artist D',
    },
    {
      albumId: 'urndnsdfh',
      albumName: 'Album 5',
      artistName: 'Artist E',
    },
    {
      albumId: '83hjksfkjh',
      albumName: 'Album 6',
      artistName: 'Artist F',
    },
    {
      albumId: '39enfbnsfi',
      albumName: 'Album 7',
      artistName: 'Artist G',
    },
  ],
};

function Albums() {
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-2xl">Your Albums</h2>
        <Link href={`/genre/${albumGenre.genreId}`}>
          <a className="text-gray-100 font-medium text-xs tracking-widest uppercase">
            See All
          </a>
        </Link>
      </div>
      <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
        {albumGenre.albums.map(album => (
          <Link href={`/album/${album.albumId}`} key={album.albumId}>
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
                    {album.albumName}
                  </div>
                  <div className="text-gray-100">{album.artistName}</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Albums;
