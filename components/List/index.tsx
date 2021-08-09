import styles from '../../styles/Cards.module.scss';
import Cards from './Cards';

interface ListProps {
  defaultCard?: boolean;
  arr: Array<object>;
  title: string;
}

export default function List({ defaultCard = true, arr, title }: ListProps): React.ReactElement {
  return (
    <div className={styles.listContainer}>
      <strong className={styles.category}>{title}</strong>
      <div className={styles.cardRow}>
        {arr.map((_, index) => {
          return <Cards key={index} defaultCard={defaultCard} />;
        })}
      </div>
    </div>
  );
}
