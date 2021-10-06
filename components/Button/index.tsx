import styles from '../../styles/Button.module.scss';
import { IconType } from 'react-icons';

interface ButtonProps {
  filled?: boolean;
  label?: string;
  Icon: IconType;
  rounded?: boolean;
  onClick?: () => void;
}

export default function Button(props: ButtonProps): React.ReactElement {
  const { filled, label, Icon, rounded, onClick } = props;
  const backgroundColor = filled ? 'white' : '#6d6d6db3';
  const fontColor = filled ? 'black' : 'white';
  
  /* 
  if not rounded === normal long style
  if filled ( and rounded) === round style
  if rounded and not filled === outline style
  */
  const style = !rounded ? styles.button : filled ? styles.roundButton : styles.outlineRounded;

  return (
    <button className={style} style={{ backgroundColor: `${backgroundColor}`, color: `${fontColor}` }} onClick={onClick}>
      <Icon className={styles.icon} />
      {!rounded && <span className={styles.label}>{label}</span>}
    </button>
  );
}
