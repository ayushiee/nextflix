/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Cards.module.scss';

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
              More
              <strong>Title</strong>
              <span>New</span>
            </div>
        )}
      </div>
  );
}
