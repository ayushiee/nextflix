import Image from 'next/image';
import { motion } from 'framer-motion';
import { BiCaretDown } from 'react-icons/bi';

import styles from '../../styles/Navbar.module.scss';
import useDimensions from '../../hooks/useDimensions';
import nfLogo from '../../public/assets/nfLogo.png';
import Dialog from '../Dialog';
import { useRef, useState } from 'react';
import { Maybe } from '../../utils/types';

const browseList = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List'];

export default function Menu() {
  const { isMobile, isTablet } = useDimensions();
  const menuRef = useRef<Maybe<HTMLDivElement>>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const onMenu = (): void => {
    setIsVisible(true);
  };
  const onClose = (): void => {
    setIsVisible(false);
  };

  const caretAnimation = {
    animate: isVisible ? 'up' : 'down',
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
    <>
      <Image src={nfLogo} alt='' width={90} height={30} className={styles.logo} />
      {isTablet || isMobile ? (
        <>
          <div className={styles.browse}>
            <div className={styles.options} onMouseOver={onMenu}>
              browse
            </div>
            <motion.div {...caretAnimation}>
              <BiCaretDown />
            </motion.div>
          </div>
          <Dialog dialogRef={menuRef} onClose={onClose} classname={styles.menu} visible={isVisible}>
            {browseList.map((item, index) => (
              <div key={index} className={styles.options}>
                {item}
              </div>
            ))}
          </Dialog>
        </>
      ) : (
        browseList.map((item, index) => (
          <div key={index} className={styles.options}>
            {item}
          </div>
        ))
      )}
    </>
  );
}
