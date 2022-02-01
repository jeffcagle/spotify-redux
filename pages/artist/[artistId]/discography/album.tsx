import type { NextPage } from 'next';
import Link from 'next/link';
import AlbumCard from '../../../../components/cards/AlbumCard';
// import data from '../../../../data/artist.json';

const AlbumsDiscography: NextPage = () => {
  return (
    <div style={{ height: 'calc(100vh - 161px)' }} className="overflow-y-auto">
      <div className="p-8">
        <section className="mb-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-bold text-2xl">
              {/* {data.name} Albums */}
            </h2>
            <Link href="/genre/3">
              <a className="text-gray-100 font-medium text-xs tracking-widest uppercase">
                Menu
              </a>
            </Link>
          </div>
          {/* <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
            {data.albums.map(album => (
              <AlbumCard
                key={album.id}
                id={album.id}
                name={album.name}
                artists={album.artists}
              />
            ))}
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default AlbumsDiscography;
