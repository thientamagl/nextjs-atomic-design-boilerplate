import React from 'react';
import { NextPage } from 'next';
import '@/styles/globals.css';
import clsx from 'clsx';
import { notoSans, roboto } from '@/libs/fonts';
import type { AppProps } from 'next/app';
import Layout from '@/components/organisms/Layout';

export type NextPageWithLayout<P = NonNullable<unknown>, IP = P> = NextPage<
  P,
  IP
> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => <Layout>{page}</Layout>);
  return (
    <main className={clsx(notoSans.variable, roboto.variable, 'font-primary')}>
      {getLayout(<Component {...pageProps} />)}
    </main>
  );
}
