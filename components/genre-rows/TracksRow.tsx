import Link from 'next/link';
import { useDispatch } from 'react-redux';
import TrackCard from '../cards/TrackCard';
import { setGenreItems, setGenreType, setGenreTitle } from '../../store/genre';

interface Props {
  name: string;
  path: string;
  items: {
    track: {
      id: string;
      name: string;
      artists: {
        name: string;
      }[];
      album: {
        id: string;
        images: {
          url: string;
        }[];
      };
    };
  }[];
}

function TracksRow({ name, path, items }: Props) {
  const dispatch = useDispatch();

  return (
    <>
      <section className="mb-4">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white font-bold text-2xl">{name}</h2>
          <Link href={`/genre/${path}`}>
            <a
              onClick={() => setGenreData('tracks', name)}
              className="text-gray-100 font-medium text-xs tracking-widest uppercase"
            >
              See All
            </a>
          </Link>
        </div>
        <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
          {items?.map(item => (
            <TrackCard
              key={item.track.id}
              id={item.track.id}
              name={item.track.name}
              artists={item.track.artists}
              albumId={item.track.album.id}
              imageUrl={item.track.album.images[1].url}
            />
          ))}
        </div>
      </section>
    </>
  );

  function setGenreData(type: string, title: string) {
    dispatch(setGenreType(type));
    dispatch(setGenreTitle(title));
    dispatch(setGenreItems(items));
  }
}

export default TracksRow;
