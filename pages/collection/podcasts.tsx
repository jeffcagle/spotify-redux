import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import ShowCard from '../../components/cards/ShowCard';
import data from '../../data/shows.json';

const Podcasts: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your Podcasts - Spotify Redux</title>
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
              <h2 className="text-white font-bold text-2xl">Podcasts</h2>
            </div>
            <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
              <Link href="/">
                <a className="col-span-2 text-white bg-gradient-to-br from-emerald-900  to-emerald-600 rounded-md p-5">
                  <div className="flex flex-col gap-5 h-full">
                    <div className="liked__list mb-3 flex items-end flex-1">
                      <div className="line-clamp-3">
                        {data.shows.map(show => (
                          <span
                            key={show.id}
                            className="first:before:content-[''] first:before:mx-0 before:content-['•'] before:mx-1"
                          >
                            <span>{show.name}</span>
                            <span className="opacity-70 before:ml-1">
                              {show.episodes[0]}
                            </span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="liked__count min-h-[62px] flex flex-col gap-1">
                      <span className="font-medium text-3xl">
                        Your Episodes
                      </span>
                      <span className="text-ellipsis">
                        {data.shows.length} episodes
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
              {data.shows.map(show => (
                <ShowCard
                  key={show.id}
                  id={show.id}
                  name={show.name}
                  hosts={show.hosts}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Podcasts;
