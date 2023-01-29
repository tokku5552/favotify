import { Heading } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Link from 'next/link';
import ChartTab from '../../components/ChartTab';
import NavigationBar from '../../components/NavigationBar';

const TopPage: NextPage = () => {
  return (
    <>
      <NavigationBar>
        <center>
          <Heading>Top Chart</Heading>
        </center>
        <ul>
          <li>
            <Link href='/'>LP Page</Link>
          </li>
          <li>
            <Link href='/setting'>Setting Page</Link>
          </li>
        </ul>
        <ChartTab />
      </NavigationBar>
    </>
  );
};

export default TopPage;
