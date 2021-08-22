/* eslint-disable @next/next/no-img-element */

import useScrollLimit from '../hooks/useScrollLimit';
import styles from '../styles/Browse.module.scss';
import { Navbar, List, Footer, Banner } from '../components';
import { Section } from '../types';

const SCROLL_LIMIT: number = 80;

export default function Browse(): React.ReactElement {
  const isScrolled: boolean = useScrollLimit(SCROLL_LIMIT);

  return (
    <div className={styles.container}>
      <Navbar isScrolled={isScrolled} />
      <Banner />

      <div className={styles.contentContainer}>
        {sections.map((item, index) => {
          return <List
            key={index}
            heading={item.heading}
            endpoint={item.endpoint}
            defaultCard={item?.defaultCard}
            topList={item?.topList}
          />;
        })}
      </div>
      <Footer />
    </div>
  );
}

const sections: Section[] = [
  {
    heading: 'Popular on Nextflix',
    endpoint: '/api/popular?type=tv'
  },
  {
    heading: 'Horror Movies',
    endpoint: '/api/discover?type=movie&genre=27'
  },
  {
    heading: 'Only on Nextflix',
    endpoint: '/api/discover?type=tv',
    defaultCard: false
  },
  {
    heading: 'Trending Now',
    endpoint: '/api/trending?type=movie&time=week'
  },
  {
    heading: 'Comedies',
    endpoint: '/api/discover?type=movie&genre=35'
  },
  {
    heading: 'Action',
    endpoint: '/api/discover?type=movie&genre=28'
  },
  {
    heading: 'TV Sci-Fi and Horror',
    endpoint: '/api/discover?type=tv&genre=10765'
  },
  {
    heading: 'Top 10 in US Today',
    endpoint: '/api/trending?type=tv&time=day',
    topList: true
  },
  {
    heading: 'Mystery Movies',
    endpoint: '/api/discover?type=movie&genre=9648'
  },
  {
    heading: 'Animation',
    endpoint: '/api/discover?type=tv&genre=16'
  },
  {
    heading: 'Drama',
    endpoint: '/api/discover?type=movie&genre=18'
  }
];
