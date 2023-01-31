import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import NavigationBar from '../components/NavigationBar';

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
        <center>
          <Heading>favotify</Heading>
        </center>
      </NavigationBar>
    </>
  );
};

export default Home;

