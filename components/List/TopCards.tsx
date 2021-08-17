/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Cards.module.scss';
import { Add, Play, Down, Like, Dislike } from '../../utils/icons';
import Button from '../Button';

interface TopCardsProps {
  index: number;
}

const DUMMY_IMAGE: string = 'https://source.unsplash.com/random';

export default function TopCards({ index }: TopCardsProps): React.ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.rank}>{index}</div>

      <div className={styles.topCard}>
        <img src={DUMMY_IMAGE} alt='img' className={styles.poster} />

        <div className={styles.info}>
          <div className={styles.actionRow}>
            <div className={styles.actionRow}>
              <Button Icon={Play} rounded filled />
              <Button Icon={Add} rounded />
              <Button Icon={Like} rounded />
              <Button Icon={Dislike} rounded />
            </div>
            <Button Icon={Down} rounded />
          </div>
          <div className={styles.textDetails}>
            <strong>Title</strong>
            <div className={styles.row}>
              <span className={styles.greenText}>New</span>
              <span className={styles.rating}>rating</span>
              <span className={styles.regularText}>length </span>
            </div>
            <div className={styles.row}>
              <span className={styles.regularText}>length </span>
              <span className={styles.regularText}>length </span>
              <span className={styles.regularText}>length </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
