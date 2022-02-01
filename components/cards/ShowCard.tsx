import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setShowId } from '../../store/page';

interface Props {
  id: string;
  name: string;
  publisher: string;
  imageUrl: string;
}

function ShowCard({ id, name, publisher, imageUrl }: Props) {
  const dispatch = useDispatch();
  return (
    <Link href={`/show/${id}`}>
      <div
        onClick={() => dispatch(setShowId(id))}
        className="bg-gray-700 hover:bg-gray-600 transition-all duration-200 p-4 rounded-md cursor-pointer text-white"
      >
        <div>
          <div className="mb-5">
            <div className="pb-[100%] w-full relative">
              <div className="bg-gray-500 text-gray-300 h-full w-full rounded-sm shadow-lg flex items-center justify-center absolute top-0 left-0">
                {imageUrl && (
                  <img className="object-cover h-full" src={imageUrl} />
                )}
              </div>
            </div>
          </div>
          <div className="min-h-[62px]">
            <div className="font-bold mb-1 truncate">{name}</div>
            <div className="text-gray-100">{publisher}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ShowCard;
