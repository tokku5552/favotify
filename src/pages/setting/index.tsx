import type { NextPage } from 'next';
import Link from 'next/link';

const SettingPage: NextPage = () => {
  return (
    <>
      <h1>SettingPage</h1>
      <br />
      <Link href='/top'>Top Page</Link>
    </>
  );
};

export default SettingPage;
