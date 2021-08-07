import styles from '../../styles/Cards.module.scss';

interface CardsProps {
  defaultCard?: boolean;
}

export default function Cards({ defaultCard = true }: CardsProps): React.ReactElement {
  return (
    <div className={styles.cardRowss}>
      {defaultCard ? <div className={styles.card}></div> : <div className={styles.longCard}></div>}
    </div>
  );
}
