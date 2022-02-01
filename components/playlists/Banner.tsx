import Image from 'next/image';
import { addDurations, convertMs } from '../../utils/maths';

interface Props {
  data: {
    name: string;
    images: { url: string }[];
    owner: { display_name: string };
    followers: { total: number };
    tracks: { items: object[] };
    duration: number;
  };
}

function Banner(props: Props) {
  const { data } = props,
    name = data.name,
    image = data.images[0].url,
    owner = data.owner.display_name,
    followers = data.followers.total,
    tracks = data.tracks.items,
    duration = convertMs(addDurations(tracks));

  return (
    <div className="playlist p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="playlist__image w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)] flex-shrink-0">
          <Image
            className="object-cover h-full"
            src={image}
            alt={name}
            width={232}
            height={232}
          />
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="text-white uppercase text-xs font-medium">Playlist</h2>
          <h1 className="playlist__title text-white font-black text-6xl my-3 line-clamp-2">
            {name}
          </h1>
          <div className="playlist__meta flex text-sm">
            <span className="text-white font-bold">{owner}</span>
            <span className="before:content-['•'] before:mx-1 text-gray-100">
              {followers} {followers > 1 || followers === 0 ? 'likes' : 'like'}
            </span>
            <span className="before:content-['•'] before:mx-1 text-gray-100">
              {tracks.length} {tracks.length > 1 ? 'songs' : 'song'}, {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
