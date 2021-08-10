/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Cards.module.scss';
import { Add, Play, Down } from '../../utils/icons';
import Button from '../Button';

interface CardsProps {
  defaultCard?: boolean;
}

const DUMMY_IMAGE: string = 'https://source.unsplash.com/random';

export default function Cards({ defaultCard = true }: CardsProps): React.ReactElement {
  const style = defaultCard ? styles.card : styles.longCard;
  return (
    <div className={style}>
      <img src={DUMMY_IMAGE} alt='img' className={styles.cardPoster} />
      {defaultCard ? (
        <div className={styles.cardInfo}>bottom</div>
      ) : (
        <div className={styles.more}>
          <div className={styles.actionRow}>
            <div className={styles.actionRow}>
              <Button Icon={Play} rounded filled />
              <Button Icon={Add} rounded />
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
      )}
    </div>
  );
}
