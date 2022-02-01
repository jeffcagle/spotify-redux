import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import * as http from '../../services/fetchService';
import { selectToken } from '../../store/user';
import { useDispatch, useSelector } from 'react-redux';
import ListArtists from '../ListArtists';
import {
  selectArtist,
  selectImageUrl,
  selectIsPlaying,
  selectTrackName,
  setCurrentlyPlaying,
  setIsPlaying,
} from '../../store/playback';

function CurrentTrack() {
  const token = useSelector(selectToken),
    isPlaying = useSelector(selectIsPlaying),
    trackName = useSelector(selectTrackName),
    imageUrl = useSelector(selectImageUrl),
    artist = useSelector(selectArtist),
    dispatch = useDispatch();

  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (isPlaying) {
      timer = setInterval(() => updateTrackData(), 1000);
    }
    return () => clearInterval(timer);
  });

  async function updateTrackData() {
    try {
      const _currentTrack = await http.getCurrentTrack(token);
      if (_currentTrack.status === 204) {
        dispatch(setIsPlaying(false));
      } else {
        dispatch(setCurrentlyPlaying(_currentTrack));
      }
    } catch (error: any) {
      console.log(error.message);
    }
  }

  return (
    <div className="w-1/4 flex justify-start">
      <div className="flex items-center">
        <div className="w-14 h-14 rounded-sm mr-3 flex items-center justify-center text-gray-100 flex-shrink-0">
          {imageUrl && (
            <Image
              className="object-cover h-full"
              src={imageUrl}
              width={56}
              height={56}
              alt={trackName}
            />
          )}
        </div>
        <div className="flex flex-col">
          {trackName !== null && (
            <span className="text-white line-clamp-1">{trackName}</span>
          )}
          <span className="text-gray-100 text-xs line-clamp-1">
            {typeof artist === 'object' ? (
              <ListArtists artists={artist} baseUrl="artist" />
            ) : (
              artist
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentTrack;
