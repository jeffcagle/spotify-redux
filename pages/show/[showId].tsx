import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import * as http from '../../services/fetchService';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/user';
import Banner from '../../components/shows/Banner';
import Body from '../../components/shows/Body';
import Controls from '../../components/shows/Controls';
import Table from '../../components/shows/Table';

const Show: NextPage = () => {
  const token = useSelector(selectToken),
    router = useRouter(),
    showId = router.query.showId,
    [state, setState] = useState({
      show: {
        id: '',
        name: '',
        description: '',
        images: [{ url: '' }],
        publisher: '',
        episodes: { items: [] },
      },
      loading: true,
    });

  useEffect(() => {
    async function fetchShowData() {
      try {
        setState(state => ({ ...state, loading: true }));
        const _show = await http.getShow(showId, token);
        setState({ show: _show, loading: false });
      } catch (error) {
        console.error(error);
      }
    }
    fetchShowData();
  }, [showId, token]);

  return (
    <>
      <Head>
        <title>Show - Spotify Redux</title>
        <meta name="description" content="A Spotify clone..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!state.loading ? (
        <>
          <Banner data={state.show} />
          <Body>
            <Controls />
            <Table data={state.show} />
          </Body>
        </>
      ) : (
        <div className="playlist p-8 text-gray-200">Loading...</div>
      )}
    </>
  );
};

export default Show;
