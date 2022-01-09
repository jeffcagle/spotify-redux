import Link from 'next/link';
import ShowCard from '../cards/ShowCard';
import data from '../../data/shows.json';

function Shows() {
  return (
    <section className="mb-4">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-white font-bold text-2xl">Your Shows</h2>
        <Link href={`/genre/${data.genreId}`}>
          <a className="text-gray-100 font-medium text-xs tracking-widest uppercase">
            See All
          </a>
        </Link>
      </div>
      <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
        {data.shows.map(show => (
          <ShowCard
            key={show.id}
            id={show.id}
            name={show.name}
            hosts={show.hosts}
          />
        ))}
      </div>
    </section>
  );
}

export default Shows;
