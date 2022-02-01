import { useState } from 'react';
import * as Icon from '../Icons';

/**
 * @todo Figure out how to turn popular tracks into a playable playlist
 */
function Controls() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFollowed, setIsFollowed] = useState(false);

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
      <button
        onClick={() => setIsFollowed(!isFollowed)}
        className="controls__follow mr-8 uppercase text-white font-medium text-xs tracking-widest border border-gray-300 py-2 px-4 rounded hover:border-white"
      >
        {isFollowed ? 'Following' : 'Follow'}
      </button>
      <button className="controls__menu">
        <Icon.MenuDots className="text-gray-100" />
      </button>
    </div>
  );
}

export default Controls;
