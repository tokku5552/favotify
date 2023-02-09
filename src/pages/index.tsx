import { Box, Button, Flex, Heading, keyframes, Link, Stack, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import type { NextPage } from 'next';

const animationKeyframes = keyframes`
  0% { transform: scale(1); border-radius: 20%; }
  
  100% { transform: scale(2) ; border-radius: 20%; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

const Home: NextPage = () => {
  return (
    <>
      <Flex
        as={motion.div}
        animation={animation}
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        backgroundImage="repeating-radial-gradient(circle at center, #1ed760, #1db954 50%)"
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
            <Text as={'span'} color={'#FFFFFF'} >
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
            position={'relative'}
          >
            <Link href='/top'>
              <Button>
                Spotifyにアクセス
              </Button>
            </Link>

          </Stack>
        </Stack>
      </Flex>

    </>
  );
};

export default Home;


