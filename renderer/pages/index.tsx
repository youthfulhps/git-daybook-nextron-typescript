import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import useUser from '@hooks/useUser';

function Home() {
  const { data } = useUser('youthfulhps');

  console.log(data);

  return (
    <React.Fragment>
      <Head>
        <title>GitLog - 개발자 친화적인 기록</title>
      </Head>
      <div>
        <p>
          ⚡ Electron + Next.js ⚡ -
          <Link href="/next">
            <a>Go to next page</a>
          </Link>
        </p>
        <img src="/images/logo.png" />
      </div>
    </React.Fragment>
  );
}

export default Home;
