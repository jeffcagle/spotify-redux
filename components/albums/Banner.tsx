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
  const { data, artist } = props;
  const id = data.id;
  const name = data.name;
  const image = data.images[1].url;
  const artists = data.artists;
  const releaseDate = data.release_date.slice(0, 4);
  const tracks = data.tracks.items;
  const duration = convertMs(addDurations(tracks));
  const artistImage = artist.images[1].url;

  return (
    <div className="album p-8 bg-gray-700">
      <div className="flex gap-6">
        <div className="album__image w-[232px] h-[232px] bg-gray-600 drop-shadow-[0_4px_60px_rgba(0,0,0,.5)] flex-shrink-0">
          <img className="object-cover h-full" src={image} />
        </div>
        <div className="flex flex-col justify-end">
          <h2 className="text-white uppercase text-xs font-medium">Album</h2>
          <h1 className="album__title text-white font-black text-6xl my-3 line-clamp-2">
            {name}
          </h1>
          <div className="album__meta flex items-center text-sm">
            <figure className="album__artist-image w-6 h-6 mr-2">
              <div className="bg-gray-100 h-full w-full rounded-full overflow-hidden">
                <img className="object-cover h-full" src={artistImage} />
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
