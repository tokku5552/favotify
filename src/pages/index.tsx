import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import NavigationBar from '../components/NavigationBar';
import {
  Box,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <NavigationBar>
        <ul>
          <li>
            <Link href='/'>LP Page</Link>
          </li>
          <li>
            <Link href='/setting'>Setting Page</Link>
          </li>
        </ul>
      </NavigationBar>
        <Stack
          background={"#1ED760"}
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            >
            <Text as={'span'} color={'#FFFFFF'}>
              favotify
            </Text>
          </Heading>
          <Text color={'#FFFFFF'}>
          機能の説明とSpotifyへのアカウントリンクを促す文章。
          <br />
          機能の説明とSpotifyへのアカウントリンクを促す文章。
          <br />
          機能の説明とSpotifyへのアカウントリンクを促す文章。
          <br />
          機能の説明とSpotifyへのアカウントリンクを促す文章。
          <br />
          機能の説明とSpotifyへのアカウントリンクを促す文章。
          <br />
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button>
              Spotifyにアクセス
            </Button>
          </Stack>
        </Stack>
        </>
  );
};

export default Home;

