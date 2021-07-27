import { useEffect, useState } from 'react';

export default function useScrollLimit(limit: number): boolean {
  const [reached, setReached] = useState<boolean>(false);

  useEffect(() => {
    function onScroll(): void {
      const scrolled: boolean = window.scrollY > limit;
      setReached(scrolled);
    }

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [limit]);

  return reached;
}
