import styles from '../../styles/Cards.module.scss';
import Cards from './Cards';
import FeatureCard from './FeatureCards';

interface ListProps {
  defaultCard?: boolean;
  arr: Array<object>;
  title: string;
  topList?: boolean;
}

export default function List({ defaultCard = true, arr, title, topList = false }: ListProps): React.ReactElement {
  return (
    <div className={styles.listContainer}>
      <strong className={styles.category}>{title}</strong>
      <div className={styles.cardRow}>
        {arr.map((_, index) => {
          if (topList) {
            return <FeatureCard key={index} index={index + 1} />;
          } else {
            return <Cards key={index} defaultCard={defaultCard} />;
          }
        })}
      </div>
    </div>
  );
}
