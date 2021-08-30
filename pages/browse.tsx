/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';

import styles from '../styles/Browse.module.scss';
import { Section } from '../types';

const Banner = dynamic(import ('../components/Banner'));
const List = dynamic(import('../components/List'));
const Layout = dynamic(import('../components/Layout'))


export default function Browse(): React.ReactElement {

  return (
    <Layout>
      <Banner />
      <div className={styles.contentContainer}>
        {sections.map((item, index) => {
          return (
            <List
              key={index}
              heading={item.heading}
              endpoint={item.endpoint}
              defaultCard={item?.defaultCard}
              topList={item?.topList}
            />
          );
        })}
      </div>
    </Layout>
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
    heading: 'Top 10 in US Today',
    endpoint: '/api/trending?type=tv&time=day',
    topList: true
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
