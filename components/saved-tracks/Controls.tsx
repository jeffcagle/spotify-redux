import React, { useState } from 'react';
import * as Icon from '../Icons';

/**
 * @todo Figure out how to turn saved tracks into a playable playlist
 */
function Controls() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="controls flex items-center mb-8">
      <button
        disabled
        onClick={() => setIsPlaying(!isPlaying)}
        className="controls__play bg-gray-600 w-14 h-14 rounded-full flex items-center justify-center mr-8"
      >
        {isPlaying ? (
          <Icon.Pause size={28} view={16} className="text-gray-500" />
        ) : (
          <Icon.Play size={28} view={16} className="text-gray-500" />
        )}
      </button>
    </div>
  );
}

export default Controls;
