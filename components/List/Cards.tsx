/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Cards.module.scss';

interface CardsProps {
  defaultCard?: boolean;
}

const DUMMY_IMAGE: string = 'https://source.unsplash.com/random';

export default function Cards({ defaultCard = true }: CardsProps): React.ReactElement {
  const height = defaultCard ? '9rem' : '9rem';
  return (
    <>
      <div className={styles.card} style={{ height: `${height}` }}>
        <img src={DUMMY_IMAGE} alt='img' className={styles.cardPoster} />
        <div className={styles.cardInfo}>bottom</div>
      </div>
    </>
  );
}
