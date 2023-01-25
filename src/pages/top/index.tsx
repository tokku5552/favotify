import type { NextPage } from 'next';
import Link from 'next/link';

const TopPage: NextPage = () => {
  return (
    <>
      Top Page
      <br />
      <ul>
        <li>
          <Link href='/'>LP Page</Link>
        </li>
        <li>
          <Link href='/setting'>Setting Page</Link>
        </li>
      </ul>
    </>
  );
};

export default TopPage;
