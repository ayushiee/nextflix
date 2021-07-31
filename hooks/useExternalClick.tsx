import { MutableRefObject, useEffect } from 'react';

interface Props {
  ref: MutableRefObject<any>;
  callback: () => void;
}

export default function useExternalClick({ ref, callback }: Props): void {
  const onClick = (event: MouseEvent) => {
    if (!ref?.current?.contains(event.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  });
}
