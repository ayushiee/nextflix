import styles from '../../styles/Cards.module.scss';
import Cards from './Cards';
import { IoChevronBackOutline, IoChevronForward } from 'react-icons/io5';

interface ListProps {
  defaultCard?: boolean;
  arr: Array<object>;
  title: string;
}

export default function List({ defaultCard = true, arr, title }: ListProps): React.ReactElement {
  return (
    <>
      <div className={styles.cardContainer}>
        <strong className={styles.category}>{title}</strong>
        <div className={styles.cardRow}>
          <div className={styles.arrowHolder}>
            <IoChevronBackOutline />
          </div>
          {arr.map((_, index) => (
            <Cards key={index} defaultCard={defaultCard} />
          ))}
          <div className={styles.arrowHolder}>
            <IoChevronForward />
          </div>
          
        </div>
      </div>
    </>
  );
}
