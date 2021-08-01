/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { IoSearch, IoNotifications } from 'react-icons/io5';
import { BiCaretDown } from 'react-icons/bi';

import styles from '../../styles/Browse.module.scss';
import nfLogo from '../../public/assets/nfLogo.png';
import Dialog from '../Dialog';

const listLeft = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps): React.ReactElement {
  const navBackground = isScrolled ? styles.navBar__filled : styles.navBar;
  const [visible, setVisible] = useState<boolean>(false);
  const profileRef = useRef(null);
  const router: NextRouter = useRouter();

  const onHover = (): void => {
    setVisible(true);
  };

  const onClose = (): void => setVisible(false);

  const onSignout = (): Promise<boolean> => router.push('/');

  return (
    <motion.div
      className={navBackground}
      initial='hidden'
      animate='visible'
      exit='hidden'
      variants={{
        hidden: { opacity: 0, transition: { duration: 0.2 } },
        visible: { opacity: 1, transition: { duration: 0.2 } }
      }}>
      <div className={styles.navBar__left}>
        <Image src={nfLogo} alt='' width={90} height={30} className={styles.logo} />
        {listLeft.map((item, index) => (
          <div key={index} className={styles.options}>
            {item}
          </div>
        ))}
      </div>

      <div className={styles.navBar__right}>
        <IoSearch className={styles.icon} />
        <IoNotifications className={styles.icon} />

        <div className={styles.profile} onMouseOver={onHover}>
          <img src='../assets/avatar.png' alt='user' className={styles.user} />
          <BiCaretDown className={styles.smallIcon} />
          <Dialog dialogRef={profileRef} onClose={onClose} classname={styles.signout} visible={visible}>
            <div onClick={onSignout}>Sign out</div>
          </Dialog>
        </div>
      </div>
    </motion.div>
  );
}
