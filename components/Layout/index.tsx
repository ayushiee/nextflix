import React from 'react';
import dynamic from 'next/dynamic';

import useScrollLimit from '../../hooks/useScrollLimit';
import styles from '../../styles/Browse.module.scss';

const Footer = dynamic(import('../Footer'));
const Navbar = dynamic(import('../Navbar'));

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
