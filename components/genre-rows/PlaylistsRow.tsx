import Link from 'next/link';
import { useDispatch } from 'react-redux';
import PlaylistCard from '../cards/PlaylistCard';
import { setGenreItems, setGenreType, setGenreTitle } from '../../store/genre';

interface Props {
  name: string;
  path: string;
  items: {
    id: string;
    name: string;
    owner: { display_name: string };
    images: {
      url: string;
    }[];
  }[];
}

function PlaylistsRow({ name, path, items }: Props) {
  const dispatch = useDispatch();

  return (
    <>
      <section className="mb-4">
        <div className="flex items-center justify-between mb-5">
          <h2 className="text-white font-bold text-2xl">{name}</h2>
          <Link href={`/genre/${path}`}>
            <a
              onClick={() => setGenreData('playlists', name)}
              className="text-gray-100 font-medium text-xs tracking-widest uppercase"
            >
              See All
            </a>
          </Link>
        </div>
        <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] auto-rows-[0] gap-x-6 gap-y-0 overflow-y-hidden">
          {items?.map(item => (
            <PlaylistCard
              key={item.id}
              id={item.id}
              name={item.name}
              creator={item.owner.display_name}
              imageUrl={item.images[0].url}
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

export default PlaylistsRow;
