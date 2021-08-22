import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../../styles/Cards.module.scss';
import { Media } from '../../types';
import Cards from './Cards';
import FeatureCard from './FeatureCards';

interface ListProps {
  defaultCard?: boolean;
  heading: string;
  topList?: boolean;
  endpoint: string;
}

export default function List({
  defaultCard = true,
  heading,
  topList = false,
  endpoint
}: ListProps): React.ReactElement {
  const [media, setMedia] = useState<Media[]>([]);

  async function getEndpoint() {
    try {
      const result = await axios.get(endpoint);
      setMedia(result.data.data);
    } catch (error) {}
  }

  useEffect(() => {
    getEndpoint();
  }, []);

  return (
    <div className={styles.listContainer}>
      <strong className={styles.category}>{heading}</strong>
      <div className={styles.cardRow}>
        {media?.map((item, index) => {
          if (topList) {
            return <FeatureCard key={index} index={index + 1} item={item} />;
          } else {
            return <Cards key={index} defaultCard={defaultCard} item={item} />;
          }
        })}
      </div>
    </div>
  );
}
