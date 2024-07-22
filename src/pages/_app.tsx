import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { notoSans, roboto } from '@/libs/fonts';
import clsx from 'clsx';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(notoSans.variable, roboto.variable, 'font-primary')}>
      <Component {...pageProps} />
    </main>
  );
}
