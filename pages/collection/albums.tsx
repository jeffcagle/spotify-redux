import type { NextPage } from 'next';
import Head from 'next/head';
import AlbumCard from '../../components/cards/AlbumCard';
import { selectUserAlbums } from '../../store/user';
import { useSelector } from 'react-redux';

interface AlbumProps {
  album: {
    id: string;
    name: string;
    artists: object[];
    images: { url: string }[];
  };
}

const Albums: NextPage = () => {
  const albums = useSelector(selectUserAlbums).items;

  return (
    <>
      <Head>
        <title>Your Albums - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{ height: 'calc(100vh - 161px)' }}
        className="overflow-y-auto"
      >
        <div className="p-8">
          <section className="mb-4">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white font-bold text-2xl">Albums</h2>
            </div>

            <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
              {albums.map((item: AlbumProps) => (
                <AlbumCard
                  key={item.album.id}
                  id={item.album.id}
                  name={item.album.name}
                  artists={item.album.artists}
                  imageUrl={item.album.images[1].url}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Albums;
