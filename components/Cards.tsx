import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';

import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';

import styles from '../styles/Cards.module.scss';

SwiperCore.use([Pagination, Navigation]);

interface CardsProps {
  original?: boolean;
}

export default function Cards({ original = true }: CardsProps): React.ReactElement {
  return (
    <>
      <div className={styles.cardContainer}>
        <h2>title</h2>
        <div className={styles.cardRow}>
          {original ? <div className={styles.card}></div> : <div className={styles.longCard}></div>}
        </div>
      </div>
    </>
  );
}
