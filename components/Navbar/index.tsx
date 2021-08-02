/* eslint-disable @next/next/no-img-element */
import { useState, useRef, ChangeEvent } from 'react';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { IoSearch, IoNotifications } from 'react-icons/io5';
import { BiCaretDown } from 'react-icons/bi';

import styles from '../../styles/Navbar.module.scss';
import nfLogo from '../../public/assets/nfLogo.png';
import Dialog from '../Dialog';
import { ROUTES } from '../../utils/config';
import { Maybe } from '../../utils/types';
import useExternalClick from '../../hooks/useExternalClick';
import Profile from './Profile';

const listLeft = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps): React.ReactElement {
  const navBackground = isScrolled ? styles.navBar__filled : styles.navBar;
  const [visible, setVisible] = useState<boolean>(false);
  const profileRef = useRef<Maybe<HTMLDivElement>>(null);
  const searchRef = useRef<Maybe<HTMLDivElement>>(null);
  const router: NextRouter = useRouter();
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');

  const onSearchActive = (): void => {
    setIsSearch(true);
  };
  useExternalClick(searchRef, () => {
    setIsSearch(false);
  });

  const onSearchQuery = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value);
  };

  const onHover = (): void => {
    setVisible(true);
  };

  const onClose = (): void => setVisible(false);

  const onSignout = (): Promise<boolean> => router.push(ROUTES.HOME);

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
        <div ref={searchRef} className={styles.searchPanel}>
          <motion.div
            className={styles.searchBar}
            initial='hidden'
            animate={isSearch ? 'visible' : 'hidden'}
            transition={{ duration: 0.5 }}
            variants={{
              visible: {
                opacity: 1,
                width: 250
              },
              hidden: {
                opacity: 0,
                width: 0
              }
            }}>
            <IoSearch className={styles.icon} />
            <input
              type='text'
              className={styles.searchBar__input}
              value={searchInput}
              onChange={onSearchQuery}
              placeholder='Titles, people, genres'
            />
          </motion.div>
          {!isSearch && <IoSearch className={styles.icon} onMouseOver={onSearchActive} />}
        </div>
        <IoNotifications className={styles.icon} />
        <Profile />
      </div>
    </motion.div>
  );
}
