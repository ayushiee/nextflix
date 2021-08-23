import React from 'react';

import { Footer, Navbar } from '..';
import useScrollLimit from '../../hooks/useScrollLimit';
import styles from '../../styles/Browse.module.scss';

interface Layout {
  children: React.ReactNode;
}

const SCROLL_LIMIT: number = 80;

export default function Layout({ children }: Layout) {
  const isScrolled: boolean = useScrollLimit(SCROLL_LIMIT);
  return (
    <div className={styles.container}>
      <Navbar isScrolled={isScrolled} />
      {children}
      <Footer />
    </div>
  );
}
