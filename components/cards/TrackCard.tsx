import Link from 'next/link';
import Image from 'next/image';
import { setAlbumId } from '../../store/page';
import { useDispatch } from 'react-redux';
import ListArtists from '../ListArtists';

interface Props {
  id: string;
  name: string;
  artists: object[];
  albumId: string;
  imageUrl: string;
}

function TrackCard({ id, name, artists, albumId, imageUrl }: Props) {
  const dispatch = useDispatch();

  return (
    <Link href={`/album/${albumId}`} passHref>
      <div
        onClick={() => dispatch(setAlbumId(albumId))}
        className="bg-gray-700 hover:bg-gray-600 transition-all duration-200 p-4 rounded-md cursor-pointer text-white"
      >
        <div>
          <div className="mb-5">
            <div className="pb-[100%] w-full relative">
              <div className="bg-gray-500 text-gray-300 h-full w-full rounded-sm shadow-lg flex items-center justify-center absolute top-0 left-0">
                <Image
                  className="object-cover h-full"
                  src={imageUrl}
                  alt={name}
                  width={250}
                  height={250}
                />
              </div>
            </div>
          </div>
          <div className="min-h-[62px]">
            <div className="font-bold mb-1 truncate">{name}</div>
            <div className="text-gray-100">
              <ListArtists baseUrl="artist" artists={artists} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default TrackCard;
