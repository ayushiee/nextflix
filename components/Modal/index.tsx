import styles from '../../styles/Modal.module.scss';
import { Media } from '../../types';

interface ModalProps {
  data: Media,
}

export default function Modal(props: ModalProps) {
  const { data } = props;

  return (
    <div className={styles.modal}>
      {/* <div>hello</div> */}
      hi {data.title}
      {console.log('modal!', data.title)}
    </div>
  );
}
