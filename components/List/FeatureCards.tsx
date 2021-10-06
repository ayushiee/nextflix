/* eslint-disable @next/next/no-img-element */
import dynamic from 'next/dynamic';
import { useContext, useState } from 'react';

import styles from '../../styles/Cards.module.scss';
import { Genre, Media } from '../../types';
import { ModalContext } from '../../context/ModalContext';
import { Add, Play, Down, Like, Dislike } from '../../utils/icons';

const Button = dynamic(import('../Button'));

interface FeatureCardProps {
  index: number;
  item: Media;
}

export default function FeatureCard({ index, item }: FeatureCardProps): React.ReactElement {
  const { title, poster, banner, rating, genre } = item;
  const [image, setImage] = useState<string>(poster);

  const { setModalData, setIsModal } = useContext(ModalContext);

  const onClick = (data: Media) => {
    setModalData(data);
    setIsModal(true);
  };

  const onHover = () => {
    setImage(banner);
  };

  const onMouseOut = () => {
    setImage(poster);
  };

  return (
    <div className={styles.container}>
      <div className={styles.rank}>{index}</div>

      <div className={styles.featureCard}>
        <img src={image} alt='img' className={styles.poster} onMouseOver={onHover} onMouseOut={onMouseOut} />

        <div className={styles.info}>
          <div className={styles.actionRow}>
            <div className={styles.actionRow}>
              <Button Icon={Play} rounded filled />
              <Button Icon={Add} rounded />
              <Button Icon={Like} rounded />
              <Button Icon={Dislike} rounded />
            </div>
             <Button Icon={Down} rounded onClick={() => onClick(item)} />
          </div>
          <div className={styles.textDetails}>
            <strong>{title}</strong>
            <div className={styles.row}>
              <span className={styles.greenText}>{rating * 10}% Match</span>
              {/* <span className={styles.regularText}>length </span> */}
            </div>
            {renderGenre(genre)}
          </div>
        </div>
      </div>
    </div>
  );
}

function renderGenre(genre: Genre[]) {
  return (
    <div className={styles.row}>
      {genre.map((item, index) => {
        const isLast = index === genre.length - 1;
        return (
          <div key={index} className={styles.row}>
            <span className={styles.regularText}>{item.name}</span>
            {!isLast && <div className={styles.dot}>&bull;</div>}
          </div>
        );
      })}
    </div>
  );
}
