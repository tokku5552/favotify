import { Box, Button, Flex, HStack, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Flex
        minH={'100vh'}
        align="center"
        justify={'center'}
        backgroundColor={'black'}
      >
        <HStack
          textAlign={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 10, md: 10 }}
        >
          <Text
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            textAlign={'center'}
            as={'span'}
            color={'#FFFFFF'}
            width="50%"
          >
            favotify
          </Text>
          <Text
            width="50%"
            color={'#FFFFFF'}
          >
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
            <Link
              href='/top'
            >
              <Button
                color={'black'}
                margin="50px 0 0 0"
              >
                Spotifyにアクセス
              </Button>
            </Link>
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            position={'relative'}
          >
          </Stack>
        </HStack>

      </Flex>
      <Box
        bg="green.500"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box width="50%" height="100%" bg="black"></Box>
      </Box>
    </>
  );
};

export default Home;