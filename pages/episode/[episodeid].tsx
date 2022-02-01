import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import { selectToken } from '../../store/user';
import { useSelector } from 'react-redux';
import * as http from '../../services/fetchService';
import { selectEpisodeId } from '../../store/page';
import Banner from '../../components/episodes/Banner';
import Controls from '../../components/episodes/Controls';
import Body from '../../components/episodes/Body';
import Description from '../../components/episodes/Description';

const initialEpisodeState = {
  id: '',
  name: '',
  description: '',
  images: [],
  show: { id: '', name: '' },
  release_date: '',
  duration_ms: 0,
};

const Episode: NextPage = () => {
  const token = useSelector(selectToken),
    episodeId = useSelector(selectEpisodeId),
    [episode, setEpisode] = useState(initialEpisodeState),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchEpisodeData() {
      try {
        setLoading(true);
        const _episode = await http.getEpisode(episodeId, token);
        setEpisode(_episode);
      } catch (error: any) {
        console.log(`----! ${error.message.toUpperCase()} !----`);
      } finally {
        setLoading(false);
      }
    }
    fetchEpisodeData();
  }, [episodeId, token]);

  return (
    <>
      <Head>
        <title>Episode - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!loading ? (
        <>
          <Banner data={episode} />
          <Body data={episode}>
            <Controls contextId={episode.show.id} id={episode.id} />
            <Description data={episode} />
          </Body>
        </>
      ) : (
        <div className="playlist p-8 text-gray-200">Loading...</div>
      )}
    </>
  );
};

export default Episode;
