import React, { useState } from 'react';
import * as Icon from '../Icons';

function Controls() {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <div className="controls flex items-center mb-8">
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
