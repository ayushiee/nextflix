import styles from '../styles/Button.module.scss';
import { IconType } from 'react-icons';

interface ButtonProps {
  filled?: boolean;
  label?: string;
  Icon: IconType;
  filledRounded?: boolean;
  outlineRounded?: boolean;
}

export default function Button(props: ButtonProps): React.ReactElement {
  const { filled, label, Icon, filledRounded, outlineRounded } = props;
  const backgroundColor = filled ? 'white' : '#6d6d6db3';
  const fontColor = filled ? 'black' : 'white';

  return (
    <>
      <button className={styles.button} style={{ backgroundColor: `${backgroundColor}`, color: `${fontColor}` }}>
        <Icon className={styles.icon} />
        <span className={styles.label}>{label}</span>
      </button>
    </>
  );
}
