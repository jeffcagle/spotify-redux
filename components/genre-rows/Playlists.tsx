import Link from 'next/link';
import PlaylistCard from '../cards/PlaylistCard';
import data from '../../data/playlists.json';

function Playlists() {
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-2xl">Your Playlists</h2>
        <Link href={`/genre/${data.genreId}`}>
          <a className="text-gray-100 font-medium text-xs tracking-widest uppercase">
            See All
          </a>
        </Link>
      </div>
      <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
        {data.playlists.map(playlist => (
          <PlaylistCard
            key={playlist.id}
            id={playlist.id}
            name={playlist.name}
            artists={playlist.artists}
          />
        ))}
      </div>
    </section>
  );
}

export default Playlists;
