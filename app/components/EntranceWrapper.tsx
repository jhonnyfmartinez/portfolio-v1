/* eslint-disable react/display-name */
import clsx from 'clsx';
import { FC, useRef } from 'react';
import useIsVisible from '../hooks/useIsVisible';

export const withEntranceAnimation =
  (Component: FC<any>, threshold = 0.5) =>
  (props: any) => {
    const ref = useRef<HTMLElement>(null);
    const isVisible = useIsVisible(ref, threshold);

    return (
      <section
        ref={ref}
        className={clsx(['motion-safe:opacity-0', { 'motion-safe:animate-pop-in': isVisible }])}>
        <Component {...props} />
      </section>
    );
  };
