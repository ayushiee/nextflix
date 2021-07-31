/* eslint-disable @next/next/no-img-element */
import { useState, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoSearch, IoNotifications } from 'react-icons/io5';
import { BiCaretDown } from 'react-icons/bi';

import useScrollLimit from '../../hooks/useScrollLimit';
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

  const onHover = (): void => {
    console.log('click');
    setVisible(!visible);
    console.log('v: ', visible);
  };
  const onClose = (): void => setVisible(false);

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

        <div className={styles.profile} onClick={onHover}>
          <img src='../assets/avatar.png' alt='user' className={styles.user} />
          <BiCaretDown className={styles.smallIcon} />
          <Dialog ref={profileRef} onClose={onClose} classname={styles.signout} visible={visible}>
            <button className={styles.signout} onClick={() => console.log('Sign out!')}>
              Sign out
            </button>
            {/* {visible && <button className={styles.signout} onClick={() => console.log('Sign out!')}>Sign out</button>} */}
          </Dialog>
        </div>
      </div>
    </motion.div>
  );
}
