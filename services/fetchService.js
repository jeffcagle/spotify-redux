const urls = {
  baseUrl: 'https://api.spotify.com/v1/',
  user: 'me',
  userPlaylists: 'me/playlists',
  userAlbums: 'me/albums',
  userTracks: 'me/tracks',
  userShows: 'me/shows',
  userEpisodes: 'me/episodes',
  userRecentlyPlayed: 'me/player/recently-played',
  userFollowing: 'me/following',
  playerState: 'me/player',
  currentTrack: 'me/player/currently-playing',
  categories: 'browse/categories/',
  playlists: 'playlists',
  albums: 'albums',
  artists: 'artists',
  topTracks: 'top-tracks',
  shows: 'shows',
  episodes: 'episodes',
  play: 'me/player/play',
};

// const baseUrl = 'https://api.spotify.com/v1/';
const headers = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

const fetchResponseStatus = (response, fetchType) => {
  if (!response.ok) {
    const message = `${fetchType} unsuccessful. Returned: ${response.status}`;
    console.log(message);
  }
};

/**
 *  User specific calls
 */

export async function getCurrentUser(token) {
  const response = await fetch(`${urls.baseUrl}${urls.user}`, headers(token));
  fetchResponseStatus(response, 'Get user');
  return await response.json();
}

export async function getUserPlaylists(token, limit = 50) {
  const response = await fetch(
    `${urls.baseUrl}${urls.userPlaylists}?limit=${limit}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get user playlists');
  return await response.json();
}

export async function getUserShows(token, limit = 50) {
  const response = await fetch(
    `${urls.baseUrl}${urls.userShows}?limit=${limit}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get user shows');
  return await response.json();
}

export async function getUserArtists(token) {
  const response = await fetch(
    `${urls.baseUrl}${urls.userFollowing}?type=artist`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get user artists');
  return await response.json();
}

export async function getUserAlbums(token) {
  const response = await fetch(
    `${urls.baseUrl}${urls.userAlbums}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get user albums');
  return await response.json();
}

export async function getUserTracks(token, limit = 50) {
  const response = await fetch(
    `${urls.baseUrl}${urls.userTracks}?limit=${limit}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get user tracks');
  return await response.json();
}

export async function getUserEpisodes(token, limit = 50) {
  const response = await fetch(
    `${urls.baseUrl}${urls.userEpisodes}?limit=${limit}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get user episodes');
  return await response.json();
}

export async function getUserRecentlyPlayedTracks(token, limit = 50) {
  const response = await fetch(
    `${urls.baseUrl}${urls.userRecentlyPlayed}?limit=${limit}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get recently played tracks');
  return await response.json();
}

/**
 *  Playback
 */

export async function getPlaybackState(token) {
  const response = await fetch(
    `${urls.baseUrl}${urls.playerState}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get player state');
  return await response.json();
}

export async function getCurrentTrack(token) {
  const response = await fetch(
    `${urls.baseUrl}${urls.currentTrack}?additional_types=episode`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get current track');
  if (response.status === 204) {
    return response;
  } else {
    return await response.json();
  }
}

/**
 * Spotify categories
 */

export async function getCategoryPlaylists(id, type, token, limit = 50) {
  const response = await fetch(
    `${urls.baseUrl}${urls.categories}${id}/${type}?limit=${limit}&country=US`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get items from category');
  return await response.json();
}

/**
 * Albums, playlists, shows, and artists
 */

export async function getPlaylist(id, token) {
  const response = await fetch(
    `${urls.baseUrl}${urls.playlists}/${id}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get playlist');
  return await response.json();
}

export async function getAlbum(id, token) {
  const response = await fetch(
    `${urls.baseUrl}${urls.albums}/${id}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get album');
  return await response.json();
}

export async function getArtist(id, token) {
  const response = await fetch(
    `${urls.baseUrl}${urls.artists}/${id}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get artist');
  return await response.json();
}

export async function getArtistTopTracks(id, token) {
  const response = await fetch(
    `${urls.baseUrl}${urls.artists}/${id}/${urls.topTracks}?country=US`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get artist top tracks');
  return await response.json();
}

export async function getArtistAlbums(id, token, limit = 50) {
  const response = await fetch(
    `${urls.baseUrl}${urls.artists}/${id}/${urls.albums}?country=US&limit=${limit}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get artist albums');
  return await response.json();
}

export async function getShow(id, token) {
  const response = await fetch(
    `${urls.baseUrl}${urls.shows}/${id}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get show');
  return await response.json();
}

export async function getEpisode(id, token) {
  const response = await fetch(
    `${urls.baseUrl}${urls.episodes}/${id}`,
    headers(token)
  );
  fetchResponseStatus(response, 'Get episode');
  return await response.json();
}

/**
 * Player controls
 */

export async function getDevices(token) {
  const response = await fetch(
    `${urls.baseUrl}me/player/devices`,
    headers(token)
  );
  return await response.json();
}

export async function playTrack(token) {
  const response = await fetch(`${urls.baseUrl}${urls.play}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  fetchResponseStatus(response, 'Play track');
}

export async function playSavedTrack(token, trackId) {
  const options = {
    uris: [`spotify:track:${trackId}`],
  };
  const response = await fetch(`${urls.baseUrl}${urls.play}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(options),
  });
  fetchResponseStatus(response, 'Play saved track');
}

export async function playPlaylist(token, playlistId) {
  const options = {
    context_uri: `spotify:playlist:${playlistId}`,
  };
  const response = await fetch(`${urls.baseUrl}${urls.play}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(options),
  });
  fetchResponseStatus(response, 'Play playlist');
}

export async function playAlbum(token, albumId) {
  const options = {
    context_uri: `spotify:album:${albumId}`,
  };
  const response = await fetch(`${urls.baseUrl}${urls.play}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(options),
  });
  fetchResponseStatus(response, 'Play album');
}

export async function playTrackInList(contextId, contextType, trackId, token) {
  const options = {
    context_uri: `spotify:${contextType}:${contextId}`,
    offset: {
      uri: `spotify:track:${trackId}`,
    },
  };
  const response = await fetch(`${urls.baseUrl}${urls.play}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(options),
  });
  fetchResponseStatus(response, 'Play track in list');
}

export async function playEpisode(contextId, trackId, token) {
  const options = {
    context_uri: `spotify:show:${contextId}`,
    offset: {
      uri: `spotify:episode:${trackId}`,
    },
  };
  const response = await fetch(`${urls.baseUrl}${urls.play}`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(options),
  });
  fetchResponseStatus(response, 'Play episode in list');
}

export async function pauseTrack(token) {
  const response = await fetch(`${urls.baseUrl}me/player/pause`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  fetchResponseStatus(response, 'Pause track');
}

export async function previousTrack(token) {
  const response = await fetch(`${urls.baseUrl}me/player/previous`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  fetchResponseStatus(response, 'Previous track');
}

export async function nextTrack(token) {
  const response = await fetch(`${urls.baseUrl}me/player/next`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  fetchResponseStatus(response, 'Next track');
}

export async function repeat(token, state) {
  const response = await fetch(
    `${urls.baseUrl}me/player/repeat?state=${state}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  fetchResponseStatus(response, 'Repeat track');
}

export async function shuffle(token, state) {
  const response = await fetch(
    `${urls.baseUrl}me/player/shuffle?state=${state}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  fetchResponseStatus(response, 'Shuffle tracks');
}

export async function setVolume(token, percent) {
  const response = await fetch(
    `${urls.baseUrl}me/player/volume?volume_percent=${percent}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  fetchResponseStatus(response, 'Set volume');
}
