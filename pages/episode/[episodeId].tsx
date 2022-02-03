import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { selectToken } from '../../store/user';
import { useSelector } from 'react-redux';
import * as http from '../../services/fetchService';
import { selectEpisodeId } from '../../store/page';
import Banner from '../../components/episodes/Banner';
import Controls from '../../components/episodes/Controls';
import Body from '../../components/episodes/Body';
import Description from '../../components/episodes/Description';

const Episode: NextPage = () => {
  const token = useSelector(selectToken),
    router = useRouter(),
    episodeId = router.query.episodeId,
    [state, setState] = useState({
      episode: {
        id: '',
        name: '',
        description: '',
        images: [],
        show: { id: '', name: '' },
        release_date: '',
        duration_ms: 0,
      },
      loading: true,
    });

  useEffect(() => {
    async function fetchEpisodeData() {
      try {
        setState(state => ({ ...state, loading: true }));
        const _episode = await http.getEpisode(episodeId, token);
        setState({ episode: _episode, loading: false });
      } catch (error) {
        console.error(error);
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

      {!state.loading ? (
        <>
          <Banner data={state.episode} />
          <Body data={state.episode}>
            <Controls contextId={state.episode.show.id} id={state.episode.id} />
            <Description data={state.episode} />
          </Body>
        </>
      ) : (
        <div className="playlist p-8 text-gray-200">Loading...</div>
      )}
    </>
  );
};

export default Episode;
