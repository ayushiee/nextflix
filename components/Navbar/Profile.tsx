/* eslint-disable @next/next/no-img-element */
import router from 'next/router';
import React, { useRef, useState } from 'react';
import { BiCaretDown } from 'react-icons/bi';

import styles from '../../styles/Navbar.module.scss';
import { ROUTES } from '../../utils/config';
import { Maybe } from '../../utils/types';
import Dialog from '../Dialog';

export default function Profile(): React.ReactElement {
  const [visible, setVisible] = useState<boolean>(false);
  const profileRef = useRef<Maybe<HTMLDivElement>>(null);

  const onHover = (): void => {
    setVisible(true);
  };

  const onClose = (): void => setVisible(false);

  const onSignout = (): Promise<boolean> => router.push(ROUTES.HOME);
  
  return (
    <div className={styles.profile} onMouseOver={onHover}>
      <img src='../../assets/avatar.png' alt='user' className={styles.user} />
      <BiCaretDown className={styles.smallIcon} />
      <Dialog dialogRef={profileRef} onClose={onClose} classname={styles.signout} visible={visible}>
        <div onClick={onSignout}>Sign out</div>
      </Dialog>
    </div>
  );
}
