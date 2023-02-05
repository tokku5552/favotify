import { SpotifyUserProfile } from '@/types/SpotifyApi';
import { Heading } from '@chakra-ui/react';
import axios from 'axios';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Spotify from 'spotify-web-api-js';
import ChartTab from '../../components/ChartTab';
import NavigationBar from '../../components/NavigationBar';
import { ResponseBody } from '../api/auth/refresh';

const spotify = new Spotify();

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

const TopPage: NextPage = () => {
  const router = useRouter();
  const [spotifyUser, setSpotifyUser] = useState<SpotifyUserProfile>({ display_name: '', id: '' });
  const [tokens, setTokens] = useState<Tokens>({
    accessToken: router.query.access_token as string,
    refreshToken: router.query.refresh_token as string,
  });

  const user_id = router.query.user_id;

  useEffect(() => {
    if (tokens.accessToken) {
      spotify.setAccessToken(tokens.accessToken as string);
      (async () => {
        // example
        // await spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err: any, data: any) {
        //   if (err) console.error(err);
        //   else console.log('Artist albums', data);
        // });
        try {
          const response = await spotify.getUser(user_id as string);
          const imageUrl = response.images ? response.images[0].url : '';
          const tracks = await spotify.getMyTopTracks();
          console.log(tracks);
          const user: SpotifyUserProfile = {
            display_name: response.display_name || '',
            id: response.id,
            imageUrl,
          };
          setSpotifyUser(user);
        } catch (e) {
          console.log('catch!');
          (async () => {
            const res = await axios.post<ResponseBody>('/api/auth/refresh', {
              shouldRetryOnError: false,
              refreshInterval: 5 * 60 * 1000,
            });
            console.log(res);
            setTokens({ accessToken: res.data.accessToken!, refreshToken: res.data.refreshToken! });
          })();
        }
      })();
    } else {
      (async () => {
        const res = await axios.post<ResponseBody>('/api/auth/refresh', {
          shouldRetryOnError: false,
          refreshInterval: 5 * 60 * 1000,
        });
        console.log(res);
        setTokens({ accessToken: res.data.accessToken!, refreshToken: res.data.refreshToken! });
      })();
    }
  }, [tokens, user_id]);

  return (
    <>
      <NavigationBar user={spotifyUser}>
        <ul>
          <li>
            <Link href='/'>LP Page</Link>
          </li>
          <li>
            <Link href='/setting'>Setting Page</Link>
          </li>
        </ul>
        <center>
          <Heading>Top Chart</Heading>
        </center>
        <ChartTab />
      </NavigationBar>
    </>
  );
};

export default TopPage;
