import { Box, Button, Flex, Icon, Link, Stack, Text } from '@chakra-ui/react';
import type { NextPage } from 'next';
import { FaSpotify } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <>
      <Flex align='center' justify={'center'} minH='100vh'>
        <Flex
          textAlign={'center'}
          minH='100vh'
          w='100%'
          m={0}
          p={0}
          overflow={{ base: 'auto', lg: 'hidden' }}
          flexDirection={{ base: 'column', lg: 'row' }}
        >
          <Box
            w={{ base: '100%', lg: '50%' }}
            h={{ base: '50vh', lg: '100vh' }}
            bgColor='#1EB16A'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Text
              fontWeight={'bold'}
              fontSize={{ base: '4xl', sm: '5xl', md: '7xl' }}
              textAlign={'center'}
              as={'span'}
              color={'#FFFFFF'}
              whiteSpace='pre-wrap'
              wordBreak='break-word'
            >
              Favotify
            </Text>
          </Box>
          <Box
            w={{ base: '100%', lg: '50%' }}
            h={{ base: '50vh', lg: '100vh' }}
            bgColor='black'
            display='flex'
            alignItems='center'
            justifyContent='center'
          >
            <Text
              fontSize={{ base: '1xl', sm: '2xl', md: '3xl', lg: '4xl' }}
              fontWeight='bold'
              color='white'
              whiteSpace='pre-wrap'
              wordBreak='break-word'
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
              <Link href='/top'>
                <Button
                  margin='50px 0 0 0'
                  leftIcon={<Icon as={FaSpotify} />}
                  bgColor='white'
                  color='black'
                  borderRadius='full'
                  _hover={{
                    bgColor: 'gray.200',
                  }}
                >
                  Sign in with Spotify
                </Button>
              </Link>
            </Text>
            <Stack direction={'column'} spacing={3} align={'center'} position={'relative'}></Stack>
          </Box>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
