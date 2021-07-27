/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { IoSearch, IoNotifications } from 'react-icons/io5';
import { BiCaretDown } from 'react-icons/bi';

import useScrollLimit from '../hooks/useScrollLimit';
import styles from '../styles/Browse.module.scss';
import nfLogo from '../public/assets/nfLogo.png';

const listLeft = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

const SCROLL_LIMIT: number = 80;

export default function Browse(): React.ReactElement {
  const isScrolled: boolean = useScrollLimit(SCROLL_LIMIT);

  const navBackground = isScrolled ? styles.navBar__filled : styles.navBar;

  return (
    <div className={styles.container}>
      <Head>
        <title>Nextflix Home</title>
        <meta name='description' content='Netflix clone, made using Next.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <motion.div
        className={navBackground}
        // initial='hidden'
        // animate='visible'
        // exit='hidden'
        // // variants={{
        // hidden: { opacity: 0, transition: { duration: 0.2 } },
        // visible: { opacity: 1, transition: { duration: 0.2 } }
        // }}
      >
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
          <div className={styles.profile}>
            <img src='../assets/avatar.png' alt='user' className={styles.user} />
            <BiCaretDown className={styles.smallIcon} />
          </div>
        </div>
      </motion.div>
      <div className={styles.spotlight}>
        <img
          src='https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
          alt='spotlight'
          // height={400}
          // width={1200}
          className={styles.spotlight__image}
        />
        <img
          src='https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
          alt='spotlight'
          // height={400}
          // width={1200}
          className={styles.spotlight__image}
        />
        <img
          src='https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
          alt='spotlight'
          // height={400}
          // width={1200}
          className={styles.spotlight__image}
        />
      </div>
      {/* <div className={styles.bottomContainer}> */}
      bottom
      <div className={styles.eh}>hehhehehe</div>
      {/* </div> */}
    </div>
  );
}
