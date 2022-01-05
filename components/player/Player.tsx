import React, { useState } from 'react';
import * as Icon from '../Icons';

export default function Player() {
  return (
    <div className="bg-gray-700 border-t border-t-gray-600 h-24 p-4 flex justify-between items-center text-gray-100 fixed z-20 bottom-0 min-w-full">
      <Track />
      <Controls />
      <Volume />
    </div>
  );
}

function Track() {
  return (
    <div className="w-1/4 flex justify-start">
      <div className="flex items-center">
        <div className="w-14 h-14 bg-gray-300 rounded-sm mr-3 flex items-center justify-center text-gray-100">
          Track
        </div>
        <div className="flex flex-col">
          <span className="text-white">The Track Name</span>
          <span className="text-gray-100 text-xs">The Track Artist</span>
        </div>
      </div>
    </div>
  );
}

function Controls() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="w-2/4 flex flex-col items-center justify-center">
      <div className="flex gap-2">
        <button className="w-8 h-8 flex items-center justify-center group">
          <Icon.Shuffle className="text-gray-100 group-hover:text-white transition" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center group">
          <Icon.Previous className="text-gray-100 group-hover:text-white transition" />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-8 h-8 flex items-center justify-center group bg-white rounded-full"
        >
          {isPlaying ? (
            <Icon.Pause size={16} className="text-gray-700" />
          ) : (
            <Icon.Play size={16} className="text-gray-700" />
          )}
        </button>
        <button className="w-8 h-8 flex items-center justify-center group">
          <Icon.Next className="text-gray-100 group-hover:text-white transition" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center group">
          <Icon.Repeat className="text-gray-100 group-hover:text-white transition" />
        </button>
      </div>
      <div className="flex mt-3">
        <audio>
          <source src="" type="audio/mpeg" />
        </audio>
        <div className="flex items-center gap-2 text-xs text-gray-100">
          <div>0:00</div>
          <progress className="w-80 h-1" max="100" value="10"></progress>
          <div>4:18</div>
        </div>
      </div>
    </div>
  );
}

function Volume() {
  return (
    <div className="w-1/4 flex justify-end items-center gap-2 pr-2">
      <Icon.Speaker />
      <div className="bg-gray-400 w-24 h-1 rounded-[2px] overflow-hidden">
        <div className="bg-gray-100 w-3/4 h-full"></div>
      </div>
    </div>
  );
}
