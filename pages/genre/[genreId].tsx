import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Genre: NextPage = () => {
  const router = useRouter();
  const { genreId } = router.query;

  return (
    <>
      <Head>
        <title>Genre - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{ height: 'calc(100vh - 161px)' }}
        className="overflow-y-auto"
      >
        <div className="p-8">
          <section className="mb-4">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-white font-bold text-2xl">Genre {genreId}</h2>
            </div>
            <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-700 hover:bg-gray-600 transition-all duration-200 p-4 rounded-md cursor-pointer text-white"
                >
                  <div>
                    <div className="mb-5">
                      <div className="pb-[100%] w-full relative">
                        <div className="bg-gray-500 text-gray-300 h-full w-full rounded-sm shadow-lg flex items-center justify-center absolute top-0 left-0">
                          Image
                        </div>
                      </div>
                    </div>
                    <div className="min-h-[62px]">
                      <div className="font-bold mb-1 truncate">
                        The Name of the Track or Episode
                      </div>
                      <div className="text-gray-100">The Artist</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Genre;
