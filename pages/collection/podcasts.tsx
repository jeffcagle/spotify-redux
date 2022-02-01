import { useState, useEffect } from 'react';
import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import ShowCard from '../../components/cards/ShowCard';
import { useSelector } from 'react-redux';
import { selectToken, selectUserEpisodes } from '../../store/user';
import * as http from '../../services/fetchService';

interface ShowProps {
  show: {
    id: string;
    name: string;
    publisher: string;
    images: {
      url: string;
    }[];
  };
}

interface EpisodeProps {
  items: { episode: { id: string; name: string; show: { name: string } } }[];
  total: number;
}

const Podcasts: NextPage = () => {
  const token = useSelector(selectToken);
  const userEpisodes: EpisodeProps = useSelector(selectUserEpisodes);
  const [userShows, setUserShows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShowsData() {
      const _userShows = await http.getUserShows(token);
      setUserShows(_userShows.items);
      setLoading(false);
    }
    fetchShowsData();
  }, []);

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
            {!loading && (
              <div className="grid grid-rows-1 grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-6">
                <Link href="/">
                  <a className="col-span-2 text-white bg-gradient-to-br from-emerald-900  to-emerald-600 rounded-md p-5">
                    <div className="flex flex-col gap-5 h-full">
                      <div className="liked__list mb-3 flex items-end flex-1">
                        <div className="line-clamp-3">
                          {userEpisodes.items.map(item => (
                            <span
                              key={item.episode.id}
                              className="first:before:content-[''] first:before:mx-0 before:content-['•'] before:mx-1"
                            >
                              <span>{item.episode.name}</span>
                              <span className="opacity-70 before:ml-1">
                                {item.episode.show.name}
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
                          {userEpisodes.total} episodes
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
                {userShows?.map((item: ShowProps) => (
                  <ShowCard
                    key={item.show.id}
                    id={item.show.id}
                    name={item.show.name}
                    publisher={item.show.publisher}
                    imageUrl={item.show.images[0].url}
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default Podcasts;
