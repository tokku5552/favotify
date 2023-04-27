import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import ChartTab from '../../components/ChartTab';
import NavigationBar from '../../components/NavigationBar';

const TopPage: NextPage = () => {
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
          <Heading>Top Chart</Heading>
        </center>
        <ChartTab />
      </NavigationBar>
    </>
  );
};

export default TopPage;

