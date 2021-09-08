/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { ModalProvider } from '../context/ModalContext';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nextflix</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </>
  );
}
export default App;
