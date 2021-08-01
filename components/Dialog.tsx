import { motion } from 'framer-motion';
import { MutableRefObject } from 'react';
import useExternalClick from '../hooks/useExternalClick';

interface DialogProps {
  visible: boolean;
  classname?: string;
  onClose: () => void;
  dialogRef: MutableRefObject<any>;
  children: React.ReactNode;
}

export default function Dialog(props: DialogProps): React.ReactElement {
  const { visible, classname, onClose, dialogRef, children } = props;

  useExternalClick(dialogRef, () => {
    onClose?.();
  });

  return (
    <>
      {visible && (
        <motion.div
          className={classname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}>
          {children}
        </motion.div>
      )}
    </>
  );
}
