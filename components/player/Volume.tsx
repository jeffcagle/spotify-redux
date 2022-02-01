import React from 'react';
import * as Icon from '../Icons';
import { useSelector } from 'react-redux';
import { selectVolume } from '../../store/playback';

function Volume() {
  const volume = useSelector(selectVolume);

  return (
    <div className="w-1/4 flex justify-end items-center gap-2 pr-2">
      <Icon.Speaker />
      <div className="bg-gray-400 w-24 h-1 rounded-[2px] overflow-hidden">
        <div
          style={{ width: `${volume}%` }}
          className={`bg-gray-100 h-full`}
        ></div>
      </div>
    </div>
  );
}

export default Volume;
