import { Box, Button, Flex, Heading, Stack, Text, useTheme } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const theme = useTheme()
  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        background={"#1DB954"}
      >
        <Stack

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
      </Flex>
    </>
  );
};

export default Home;

