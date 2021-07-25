import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../styles/Login.module.scss';
import LoginBg from '../assets/loginBg.jpg';

export default function Home() {
  const router = useRouter();

  const onSignIn = () => {
    router.push('/Home')
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Image src={LoginBg} alt='background image' placeholder='blur' layout='fill' className={styles.main__bgImage} />
        <div className={styles.main__card}>
          <h1>
            Netflix clone
          </h1>
          <p>A simple netflix clone built using Next.js</p>
          <div className={styles.button} onClick={onSignIn}>Sign in</div>
        </div>
      </main>
    </div>
  );
}
