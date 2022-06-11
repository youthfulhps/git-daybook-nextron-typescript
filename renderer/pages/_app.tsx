import React from 'react';
import type { AppProps } from 'next/app';
import GlobalStyles from '@assets/styles/globalStyles';
import CommonLayout from '@layouts/CommonLayout';
import SectionContextProvider from '@contexts/SectionContext';
import Head from 'next/head';
import 'antd/dist/antd.css';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <title>GitLog | 개발자 친화적인 기록</title>
        <link rel="shortcut icon" href="favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <SectionContextProvider>
            <CommonLayout>
              <Component {...pageProps} />
            </CommonLayout>
          </SectionContextProvider>
        </Hydrate>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default App;
