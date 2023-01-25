import type { NextPage } from 'next';
import Link from 'next/link';
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
      </NavigationBar>
    </>
  );
};

export default TopPage;
