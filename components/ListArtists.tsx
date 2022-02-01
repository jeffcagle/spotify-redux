import Link from 'next/link';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setArtistId } from '../store/page';

interface Props {
  artists: ArtistProps[];
  baseUrl: string;
}

export interface ArtistProps {
  id?: string;
  name?: string;
}

function ListArtists({ artists, baseUrl }: Props) {
  const dispatch = useDispatch();

  return (
    <>
      {artists.map((artist: ArtistProps, i) => (
        <React.Fragment key={artist.id}>
          <Link href={`/${baseUrl}/${artist.id}`}>
            <a
              onClick={() => dispatch(setArtistId(artist.id))}
              className="track__artist hover:underline hover:text-white"
            >
              <span>{artist.name}</span>
            </a>
          </Link>
          {`${artists.length - 1 > i ? ', ' : ''}`}
        </React.Fragment>
      ))}
    </>
  );
}

export default ListArtists;
