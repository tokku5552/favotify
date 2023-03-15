import { Box, Button, Center, Flex, HStack, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Flex
        align="center"
        justify={'center'}
      >
        <HStack
          textAlign={'center'}
          minH="100vh"
          w="100%"
          m={0}
          p={0}
          overflow="hidden"
          spacing={0}
        >
          <Box
            w="50%"
            h="100%"
            bgColor="#1DB954"
          >
            <Center h="100%">
              <Text
                fontWeight={"bold"}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                textAlign={'center'}
                as={'span'}
                color={'#FFFFFF'}
              >
                favotify
              </Text>
            </Center>
          </Box>
          <Box
            w="50%"
            h="100%"
            bgColor="black"
          >
            <Center
              h="100%"
            >
              <Text
                fontSize="4xl"
                fontWeight="bold"
                color="white"
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
            </Center>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              position={'relative'}
            >
            </Stack>
          </Box>
        </HStack>
      </Flex>
    </>
  );
};

export default Home;