/* eslint-disable @next/next/no-img-element */
import { useState, useRef, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import { IoSearch, IoNotifications } from 'react-icons/io5';

import styles from '../../styles/Navbar.module.scss';
import { Maybe } from '../../utils/types';
import useExternalClick from '../../hooks/useExternalClick';
import Profile from './Profile';
import useDimensions from '../../hooks/useDimensions';
import Menu from './Menu';

interface NavbarProps {
  isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps): React.ReactElement {
  const navBackground = isScrolled ? styles.navBar__filled : styles.navBar;
  const searchRef = useRef<Maybe<HTMLDivElement>>(null);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>('');
  const { isMobile } = useDimensions();

  const onSearchActive = (): void => {
    setIsSearch(true);
  };
  useExternalClick(searchRef, () => {
    setIsSearch(false);
  });

  const onSearchQuery = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(target.value);
  };

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
        <Menu />
      </div>

      <div className={styles.navBar__right}>
        <div ref={searchRef} className={styles.searchPanel}>
          <motion.div
            className={styles.searchBar}
            initial='hidden'
            animate={isSearch ? 'visible' : 'hidden'}
            transition={{ duration: 0.45 }}
            variants={{
              visible: {
                opacity: 1,
                width: isMobile ? 130 : 250
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
        {!isMobile && <IoNotifications className={styles.icon} />}
        <Profile />
      </div>
    </motion.div>
  );
}
