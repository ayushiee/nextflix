/* eslint-disable @next/next/no-img-element */

import useScrollLimit from '../hooks/useScrollLimit';
import styles from '../styles/Browse.module.scss';
import { Navbar, List, Footer, Banner } from '../components';

const SCROLL_LIMIT: number = 80;

export default function Browse(): React.ReactElement {
  const isScrolled: boolean = useScrollLimit(SCROLL_LIMIT);
  const arr = new Array(15).fill({ name: 'a', time: '2:45' });
  const arrTop = new Array(10).fill({ name: 'a', time: '2:45' });

  return (
    <div className={styles.container}>
      <Navbar isScrolled={isScrolled} />
      <Banner />

      <div className={styles.contentContainer}>
        <List arr={arr} title='Trending now' />
        <List arr={arr} title='Comedies' />
        <List arr={arrTop} title='Top 10 in India Today' topList />
        <List arr={arr} defaultCard={false} title='Only on Nextflix' />
        <List arr={arr} title='Sci-Fi' />
      </div>
      <Footer />
    </div>
  );
}
