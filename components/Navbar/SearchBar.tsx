/* eslint-disable @next/next/no-img-element */
import { useState, useRef, ChangeEvent } from 'react';
import { motion } from 'framer-motion';

import useExternalClick from '../../hooks/useExternalClick';
import { Search } from '../../utils/icons';
import useDimensions from '../../hooks/useDimensions';
import styles from '../../styles/Navbar.module.scss';
import { Maybe } from '../../types';

export default function SearchBar(): React.ReactElement {
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
    <div ref={searchRef} className={styles.searchPanel}>
      <motion.div
        className={styles.searchBar}
        initial='hidden'
        animate={isSearch ? 'visible' : 'hidden'}
        transition={{ duration: 0.45 }}
        variants={{
          visible: {
            opacity: 1,
            width: isMobile ? 120 : 250
          },
          hidden: {
            opacity: 0,
            width: 0
          }
        }}>
        <Search className={styles.icon} />
        <input
          type='text'
          className={styles.searchBar__input}
          value={searchInput}
          onChange={onSearchQuery}
          placeholder='Titles, people, genres'
        />
      </motion.div>
      {!isSearch && <Search className={styles.icon} onMouseOver={onSearchActive} />}
    </div>
  );
}
