import React, { useEffect, useState } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import * as http from '../../services/fetchService';
import { useSelector } from 'react-redux';
import { selectToken } from '../../store/user';
import { selectShowId } from '../../store/page';
import Banner from '../../components/shows/Banner';
import Body from '../../components/shows/Body';
import Controls from '../../components/shows/Controls';
import Table from '../../components/shows/Table';

const initialShowState = {
  id: '',
  name: '',
  description: '',
  images: [],
  publisher: '',
  episodes: { items: [] },
};

const Show: NextPage = () => {
  const token = useSelector(selectToken),
    showId = useSelector(selectShowId),
    [show, setShow] = useState(initialShowState),
    [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchShowData() {
      try {
        setLoading(true);
        const _show = await http.getShow(showId, token);
        setShow(_show);
      } catch (error: any) {
        console.log(`----! ${error.message.toUpperCase()} !----`);
      } finally {
        setLoading(false);
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

      {!loading ? (
        <>
          <Banner data={show} />
          <Body>
            <Controls />
            <Table data={show} />
          </Body>
        </>
      ) : (
        <div className="playlist p-8 text-gray-200">Loading...</div>
      )}
    </>
  );
};

export default Show;
