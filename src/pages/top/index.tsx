import { SpotifyUserProfile } from '@/types/SpotifyApi';
import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Spotify from 'spotify-web-api-js';
import ChartTab from '../../components/ChartTab';
import NavigationBar from '../../components/NavigationBar';

const spotify = new Spotify();

const TopPage: NextPage = () => {
  const router = useRouter();
  const [spotifyUser, setSpotifyUser] = useState<SpotifyUserProfile>({ display_name: '', id: '' });
  const access_token = router.query.access_token;
  const user_id = router.query.user_id;

  useEffect(() => {
    if (access_token) {
      spotify.setAccessToken(access_token as string);
      (async () => {
        // example
        // await spotify.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err: any, data: any) {
        //   if (err) console.error(err);
        //   else console.log('Artist albums', data);
        // });
        const response = await spotify.getUser(user_id as string);
        const imageUrl = response.images ? response.images[0].url : '';

        const user: SpotifyUserProfile = {
          display_name: response.display_name || '',
          id: response.id,
          imageUrl,
        };
        setSpotifyUser(user);
      })();
    }
  }, [access_token, user_id]);
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
