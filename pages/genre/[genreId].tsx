import type { NextPage } from 'next';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import {
  selectGenreItems,
  selectGenreTitle,
  selectGenreType,
} from '../../store/genre';
import ShowCard from '../../components/cards/ShowCard';
import TrackCard from '../../components/cards/TrackCard';
import PlaylistCard from '../../components/cards/PlaylistCard';

interface PlaylistProps {
  id: string;
  name: string;
  owner: { display_name: string };
  images: { url: string }[];
}

interface ShowProps {
  show: {
    id: string;
    name: string;
    publisher: string;
    images: { url: string }[];
  };
}

interface TrackProps {
  track: {
    id: string;
    name: string;
    artists: object[];
    album: {
      id: string;
      images: { url: string }[];
    };
  };
}

const Genre: NextPage = () => {
  const type = useSelector(selectGenreType),
    name = useSelector(selectGenreTitle),
    items = useSelector(selectGenreItems);

  return (
    <>
      <Head>
        <title>Genre - Spotify Redux</title>
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
              <h2 className="text-white font-bold text-2xl">{name}</h2>
            </div>
            <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
              {type === 'shows' &&
                items.map((item: ShowProps) => (
                  <ShowCard
                    key={item.show.id}
                    id={item.show.id}
                    name={item.show.name}
                    publisher={item.show.publisher}
                    imageUrl={item.show.images[1].url}
                  />
                ))}

              {type === 'tracks' &&
                items.map((item: TrackProps) => (
                  <TrackCard
                    key={item.track.id}
                    id={item.track.id}
                    name={item.track.name}
                    artists={item.track.artists}
                    albumId={item.track.album.id}
                    imageUrl={item.track.album.images[1].url}
                  />
                ))}

              {type === 'playlists' &&
                items.map((item: PlaylistProps) => (
                  <PlaylistCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    creator={item.owner.display_name}
                    imageUrl={item.images[0].url}
                  />
                ))}

              {/* {type === 'artists' &&
                items.map((item: PlaylistProps) => (
                  <ArtistCard
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    creator={item.owner.display_name}
                    imageUrl={item.images[0].url}
                  />
                ))} */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Genre;
