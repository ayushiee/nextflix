/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import router from 'next/router';

import { Maybe } from '../../types';
import { ROUTES } from '../../config/route';
import { CaretDown } from '../../utils/icons';
import styles from '../../styles/Navbar.module.scss';

const Dialog = dynamic(import('../Dialog'))

export default function Profile(): React.ReactElement {
  const [visible, setVisible] = useState<boolean>(false);
  const profileRef = useRef<Maybe<HTMLDivElement>>(null);

  const onHover = (): void => {
    setVisible(true);
  };

  const onClose = (): void => setVisible(false);

  const onSignout = (): Promise<boolean> => router.push(ROUTES.HOME);

  const caretAnimation = {
    animate: visible ? 'up' : 'down',
    variants: {
      up: {
        rotate: 180
      },
      down: {
        rotate: 0
      }
    },
    transition: { duration: 0.25 }
  };

  return (
    <div className={styles.profile} onMouseOver={onHover}>
      <img src='../../assets/avatar.png' alt='user' className={styles.user} />
      <motion.div {...caretAnimation}>
        <CaretDown />
      </motion.div>
      <Dialog dialogRef={profileRef} onClose={onClose} classname={styles.signout} visible={visible}>
        <div onClick={onSignout}>Sign out</div>
      </Dialog>
    </div>
  );
}
