const SPOTIFY_AUTH_URL = 'https://accounts.spotify.com/authorize';
const CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID; 
const REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI; 
const SCOPES = ['user-top-read'];

export const authorizeUser = () => {
  const url = `${SPOTIFY_AUTH_URL}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(REDIRECT_URI)}&scope=${encodeURIComponent(SCOPES.join(' '))}&response_type=token`;
  window.location.href = url; 
};
