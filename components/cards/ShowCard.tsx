import Link from 'next/link';
import insertCommas from '../../utils/insertCommas';

interface Props {
  id: string;
  name: string;
  hosts: {
    id: string;
    name: string;
  }[];
}

function ShowCard({ id, name, hosts }: Props) {
  return (
    <Link href={`/show/${id}`}>
      <div className="bg-gray-700 hover:bg-gray-600 transition-all duration-200 p-4 rounded-md cursor-pointer text-white">
        <div>
          <div className="mb-5">
            <div className="pb-[100%] w-full relative">
              <div className="bg-gray-500 text-gray-300 h-full w-full rounded-sm shadow-lg flex items-center justify-center absolute top-0 left-0">
                Image
              </div>
            </div>
          </div>
          <div className="min-h-[62px]">
            <div className="font-bold mb-1 truncate">{name}</div>
            <div className="text-gray-100">{insertCommas(hosts)}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ShowCard;
