/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';

import { Play, Info } from '../utils/icons';
import useScrollLimit from '../hooks/useScrollLimit';
import styles from '../styles/Browse.module.scss';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import List from '../components/List';

const SCROLL_LIMIT: number = 80;
const DUMMY_IMAGE: string = 'https://source.unsplash.com/random';

export default function Browse(): React.ReactElement {
  const isScrolled: boolean = useScrollLimit(SCROLL_LIMIT);
  const arr = new Array(40).fill({ name: 'a', time: '2:45' });
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar isScrolled={isScrolled} />

      <div className={styles.spotlight}>
        <img src={DUMMY_IMAGE} alt='spotlight' className={styles.spotlight__image} />
        <div className={styles.spotlight__details}>
          <div className={styles.title}>Project Name</div>
          <div className={styles.synopsis}>
            After a global blackout erases humanity&apos;s memory of the Beatles, a struggling musician performs the group&apos;s
            music and becomes a pop sensation.
          </div>
          <div className={styles.buttonRow}>
            <Button label='Play' filled Icon={Play} />
            <Button label='More Info' Icon={Info} />
          </div>
        </div>
      </div>

      <div className={styles.contentContainer}>
        <List arr={arr} defaultCard title='Popular on Nextflix' />
        <List arr={arr} defaultCard={false} title='Sci-Fi' />
      </div>
      
    </div>
  );
}
