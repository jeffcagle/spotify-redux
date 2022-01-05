import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Link from 'next/link';

const AlbumsDiscography: NextPage = () => {
  const router = useRouter();
  const { artistId } = router.query;

  return (
    <div style={{ height: 'calc(100vh - 161px)' }} className="overflow-y-auto">
      <div className="p-8">
        <section className="mb-4">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-white font-bold text-2xl">
              Artist {artistId} Albums
            </h2>
            <Link href="/genre/3">
              <a className="text-gray-100 font-medium text-xs tracking-widest uppercase">
                Menu
              </a>
            </Link>
          </div>
          <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
            {[...Array(20)].map((_, i) => (
              <Link href={`/album/${i}`} key={i}>
                <a className="bg-gray-700 hover:bg-gray-600 transition-all duration-200 p-4 rounded-md cursor-pointer text-white">
                  <div className="flex flex-col justify-center h-full">
                    <div className="mb-5">
                      <div className="pb-[100%] w-full relative">
                        <div className="bg-gray-500 text-gray-300 h-full w-full rounded-sm shadow-lg flex items-center justify-center absolute top-0 left-0">
                          Image
                        </div>
                      </div>
                    </div>
                    <div className="min-h-[62px]">
                      <div className="font-bold mb-1 truncate">Album Title</div>
                      <div className="text-gray-100">2019</div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AlbumsDiscography;
