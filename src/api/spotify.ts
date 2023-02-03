import { SpotifyUserProfile } from '@/types/SpotifyApi';
import axios from 'axios';

export const getSpotifyLoginPath = (): string => {
  // https://accounts.spotify.com/authorizeへのリクエストパラメータに必要な項目を設定
  const scopes = [
    'streaming',
    'user-read-email',
    'user-read-private',
    'playlist-modify-public',
    'playlist-modify-private',
  ];
  const params = new URLSearchParams();
  params.append('client_id', process.env.NEXT_PUBLIC_CLIENT_ID || '');
  params.append('response_type', 'code');
  params.append('redirect_uri', process.env.NEXT_PUBLIC_RETURN_TO || '');
  params.append('scope', scopes.join(' '));
  params.append('state', 'state');
  return `https://accounts.spotify.com/authorize?${params.toString()}`;
};

export const fetchProfile = async (access_token: string): Promise<SpotifyUserProfile> => {
  const result = await axios.get<SpotifyUserProfile>('', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return result.data;
};
