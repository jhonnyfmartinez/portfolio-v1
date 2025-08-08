// istanbul ignore file
import { useEffect, useState } from 'react';

export default function useIsVisible(ref: React.RefObject<HTMLElement | null>, threshold = 0.5) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref?.current as Element;
    if (!el) {
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);

    return () => {
      observer.unobserve(el);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isVisible;
}
