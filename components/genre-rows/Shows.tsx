import Link from 'next/link';

const showGenre = {
  genreId: 'shows_skdljfsdf',
  shows: [
    {
      showId: 'akjlksdjf',
      showName: 'Show 1',
      showHosts: ['Host A', 'Host B', 'Host C', 'Host D'],
    },
    {
      showId: 'skdjflsds',
      showName: 'Show 2',
      showHosts: ['Host A', 'Host B', 'Host C'],
    },
    {
      showId: '9jkwdfjje',
      showName: 'Show 3',
      showHosts: ['Host A', 'Host D'],
    },
    {
      showId: 'jser3jjhfd',
      showName: 'Show 4',
      showHosts: ['Host A', 'Host B', 'Host C', 'Host D'],
    },
    {
      showId: 'urndnsdfh',
      showName: 'Show 5',
      showHosts: ['Host A', 'Host B', 'Host C'],
    },
    {
      showId: '83hjksfkjh',
      showName: 'Show 6',
      showHosts: ['Host B', 'Host C', 'Host D'],
    },
    {
      showId: '39enfbnsfi',
      showName: 'Show 7',
      showHosts: ['Host A', 'Host B', 'Host C', 'Host D'],
    },
  ],
};

function Shows() {
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-2xl">Your Shows</h2>
        <Link href={`/genre/${showGenre.genreId}`}>
          <a className="text-gray-100 font-medium text-xs tracking-widest uppercase">
            See All
          </a>
        </Link>
      </div>
      <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
        {showGenre.shows.map(show => (
          <Link href={`/show/${show.showId}`} key={show.showId}>
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
                  <div className="font-bold mb-1 truncate">{show.showName}</div>
                  <div className="text-gray-100">
                    {show.showHosts.map((artist, i) => {
                      if (i < show.showHosts.length - 1) {
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

export default Shows;
