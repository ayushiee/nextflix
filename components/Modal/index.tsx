/* eslint-disable @next/next/no-img-element */
import React, { useContext } from 'react';
import styles from '../../styles/Modal.module.scss';
import { ModalContext } from '../../context/ModalContext';
import { Play, Add, Like, Dislike } from '../../utils/icons';
import Button from '../Button';

export default function Modal() {
  const { modalData, setIsModal, isModal } = useContext(ModalContext);
  const { title, banner, rating, overview, genre } = modalData;

  return (
    <div className={styles.container} style={{ display: isModal ? 'flex' : 'none' }}>
      <div className={styles.overlay} onClick={() => setIsModal(false)}></div>
      <div className={styles.modal}>
        <div className={styles.spotlight}>
          <img src={banner} alt='spotlight' className={styles.spotlight__image} />
          <div className={styles.details}>
            <div className={styles.title}>{title}</div>
            <div className={styles.buttonRow}>
              <Button label='Play' filled Icon={Play} />
              <Button Icon={Add} rounded />
              <Button Icon={Like} rounded />
              <Button Icon={Dislike} rounded />
            </div>
          </div>
        </div>

        <div className={styles.cross} onClick={() => setIsModal(false)}>
          &#10005;
        </div>
        <div className={styles.overview}>{overview}</div>
      </div>
    </div>
  );
}
