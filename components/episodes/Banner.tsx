import Link from 'next/link';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { setShowId } from '../../store/page';

interface Props {
  data: {
    name: string;
    images: { url: string }[];
    show: { id: string; name: string };
  };
}

function Banner(props: Props) {
  const { data } = props,
    episode = data,
    dispatch = useDispatch();

  return (
    <div className="episode p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="episode__image w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)] flex-shrink-0">
          <Image
            className="object-cover h-full"
            src={episode.images[1].url}
            alt={episode.name}
            width={232}
            height={232}
          />
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="text-white uppercase text-xs font-medium">Show</h2>
          <h1 className="episode__title text-white font-black text-6xl my-3 line-clamp-2">
            {episode.name}
          </h1>
          <div className="episode__meta flex text-sm">
            <Link href={`/show/${episode.show.id}`}>
              <a
                onClick={() => dispatch(setShowId(episode.show.id))}
                className="text-white text-xl font-bold hover:underline"
              >
                {episode.show.name}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
