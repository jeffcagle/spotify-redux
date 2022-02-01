import Image from 'next/image';
import ListArtists from '../ListArtists';
import { convertMs, addDurations } from '../../utils/maths';

interface Props {
  data: {
    id: string;
    name: string;
    images: { url: string }[];
    artists: object[];
    tracks: { items: object[] };
    release_date: string;
    duration: number;
  };
  artist: {
    images: { url: string }[];
  };
}

function Banner(props: Props) {
  const { data, artist } = props,
    id = data.id,
    name = data.name,
    image = data.images[1].url,
    artists = data.artists,
    releaseDate = data.release_date.slice(0, 4),
    tracks = data.tracks.items,
    duration = convertMs(addDurations(tracks)),
    artistImage = artist.images[1].url;

  return (
    <div className="album p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="album__image w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)] flex-shrink-0">
          <Image
            className="object-cover h-full"
            src={image}
            alt={name}
            width={232}
            height={232}
          />
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="text-white uppercase text-xs font-medium">Album</h2>
          <h1 className="album__title text-white font-black text-6xl my-3 line-clamp-2">
            {name}
          </h1>
          <div className="album__meta flex items-center text-sm">
            <figure className="album__artist-image w-6 h-6 mr-2">
              <div className="bg-gray-100 h-full w-full rounded-full overflow-hidden">
                <Image
                  className="object-cover h-full"
                  src={artistImage}
                  alt={name}
                  width={24}
                  height={24}
                />
              </div>
            </figure>
            <span className="album__artist text-white font-bold">
              <ListArtists baseUrl="artist" artists={artists} />
            </span>
            <span className="album__date before:content-['•'] before:mx-1 text-gray-100">
              {releaseDate}
            </span>
            <span className="album__length before:content-['•'] before:mx-1 text-gray-100">
              {tracks.length} {tracks.length > 1 ? 'songs' : 'song'}, {duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
