import Link from 'next/link';
// import data from '../../data/artists.json';
import ArtistCard from '../cards/ArtistCard';

function Artists() {
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-2xl">Your Artists</h2>
        {/* <Link href={`/genre/${data.genreId}`}>
          <a className="text-gray-100 font-medium text-xs tracking-widest uppercase">
            See All
          </a>
        </Link> */}
      </div>
      <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
        {/* {data.artists.map(artist => (
          <ArtistCard key={artist.id} id={artist.id} name={artist.name} />
        ))} */}
      </div>
    </section>
  );
}

export default Artists;
