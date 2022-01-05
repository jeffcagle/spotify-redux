import Link from 'next/link';

const artistGenre = {
  genreId: 'artists_klsjdfks',
  artists: [
    { artistId: 'oiadfjkasdf', artistName: 'Artist A' },
    { artistId: 'sdkfjadfkjs', artistName: 'Artist B' },
    { artistId: '9jdslfkskjf', artistName: 'Artist C' },
    { artistId: 'eiwjkfksjdn', artistName: 'Artist D' },
    { artistId: '9efjoseeyrs', artistName: 'Artist E' },
    { artistId: 'nseeuerhsfs', artistName: 'Artist F' },
    { artistId: '20dksjfksss', artistName: 'Artist G' },
  ],
};

function Artists() {
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-2xl">Your Artists</h2>
        <Link href={`/genre/${artistGenre.genreId}`}>
          <a className="text-gray-100 font-medium text-xs tracking-widest uppercase">
            See All
          </a>
        </Link>
      </div>
      <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
        {artistGenre.artists.map(artist => (
          <Link href={`/artist/${artist.artistId}`} key={artist.artistId}>
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
                    {artist.artistName}
                  </div>
                  <div className="text-gray-100">Artist</div>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Artists;
