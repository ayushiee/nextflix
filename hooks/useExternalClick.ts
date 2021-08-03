import { MutableRefObject, useEffect } from 'react';

export default function useExternalClick(ref: MutableRefObject<any>, callback: () => void): void {
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
