/* eslint-disable @next/next/no-img-element */
import styles from '../../styles/Browse.module.scss';
import { Play, Info } from '../../utils/icons';
import Button from '../Button';

const DUMMY_IMAGE: string = 'https://source.unsplash.com/random';

export default function Banner() {
  return (
    <div className={styles.spotlight}>
      <img src={DUMMY_IMAGE} alt='spotlight' className={styles.spotlight__image} />
      <div className={styles.spotlight__details}>
        <div className={styles.title}>Project Name</div>
        <div className={styles.synopsis}>
          After a global blackout erases humanity&apos;s memory of the Beatles, a struggling musician performs the
          group&apos;s music and becomes a pop sensation.
        </div>
        <div className={styles.buttonRow}>
          <Button label='Play' filled Icon={Play} />
          <Button label='More Info' Icon={Info} />
        </div>
      </div>
    </div>
  );
}
