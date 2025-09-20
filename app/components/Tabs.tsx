import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

const BUTTON_WIDTH = 120;
const BUTTON_HEIGHT = 41;
const PADDING_SIZE = 41;

type TabsProps = {
  className?: string;
  selectedTab: number;
  tabs: Array<string>;
  onChange?: (selectedTab: number) => void;
};

const Tabs = (props: TabsProps) => {
  const [indicatorLeft, setIndicatorLeft] = useState(0);
  const [indicatorTop, setIndicatorTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIndicatorLeft(props.selectedTab * BUTTON_WIDTH + PADDING_SIZE);
    setIndicatorTop(props.selectedTab * BUTTON_HEIGHT);
  }, [props.selectedTab]);

  return (
    <div className="tabs" ref={ref} role="tablist" aria-label="Experience Tabs">
      {props.tabs.map((tab, index) => (
        <button
          key={index}
          type="button"
          role="tab"
          className={clsx(
            'py-1.5 pt-2 small-copy text-center hover:cursor-pointer hover:text-primary hover:bg-paper motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-in-out',
            {
              'bg-paper text-primary': index === props.selectedTab,
            },
            'sm:py-2.5 sm:px-8',
            props.className,
          )}
          onClick={props.onChange?.bind(null, index)}
          style={{ minWidth: BUTTON_WIDTH }}>
          {tab}
        </button>
      ))}
      <div
        className="
          h-px border border-solid border-primary absolute z-20 motion-safe:transition-left motion-safe:ease-in-out motion-safe:duration-300
          sm:hidden
        "
        style={{ left: indicatorLeft, width: BUTTON_WIDTH }}
      />
      <div
        className="
          hidden w-px border border-solid border-primary absolute z-20 right-0 motion-safe:transition-top motion-safe:ease-in-out motion-safe:duration-300
          sm:block
        "
        style={{ top: indicatorTop, height: BUTTON_HEIGHT }}
      />
      {ref.current && (
        <>
          <div
            className="
              h-px border border-solid border-text opacity-20 absolute z-10
              sm:hidden
            "
            style={{ left: PADDING_SIZE, width: ref.current.scrollWidth - PADDING_SIZE * 1.25 }}
          />
          <div
            className="
              hidden w-px border border-solid border-text opacity-20 absolute z-10 right-0 sm:block
            "
            style={{ top: 0, height: BUTTON_HEIGHT * props.tabs.length }}
          />
        </>
      )}
    </div>
  );
};

export default Tabs;
