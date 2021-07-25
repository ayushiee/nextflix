import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix Home</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.spotlight}>
        <Image
          src='https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
          alt='spotlight'
          height={400}
          width={1200}
          className={styles.spotlight__image}
        />
      </div>
      <div className={styles.bottomContainer}>bottom</div>
    </div>
  );
}
