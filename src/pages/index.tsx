import { Button, Flex, Heading, HStack, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Flex
        minH={'100vh'}
        justify={'center'}
        //backgroundImage="repeating-radial-gradient(circle at center, #1ed760, #1db954 50%)"
        backgroundColor={'black'}
      >
        <Heading
          as='h1'
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
        >
          <Text
            textAlign={'center'}
            as={'span'}
            color={'#FFFFFF'}
          >
            favotify
          </Text>
        </Heading>
        <HStack
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 10 }}
        >
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
            position={'relative'}
          >
          </Stack>
        </HStack>
        <Link href='/top'>
          <Button>
            Spotifyにアクセス
          </Button>
        </Link>
      </Flex>
    </>
  );
};

export default Home;