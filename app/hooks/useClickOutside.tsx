import React from 'react';

// Thanks to https://usehooks.com/useOnClickOutside/ and Andarist at https://github.com/Andarist/use-onclickoutside/blob/main/src/index.ts

const MOUSEDOWN = 'mousedown';
const TOUCHSTART = 'touchstart';

type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART];
type HandledEventsType = HandledEvents[number];
type PossibleEvent = {
  [Type in HandledEventsType]: HTMLElementEventMap[Type];
}[HandledEventsType];
type Handler = (event: PossibleEvent) => void;

const events: HandledEvents = [MOUSEDOWN, TOUCHSTART];

export default function useOnClickOutside(ref: React.RefObject<HTMLElement>, handler: Handler) {
  React.useEffect(() => {
    const listener = (event: PossibleEvent) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref?.current || ref?.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };

    events.forEach(ev => {
      document.addEventListener(ev, listener);
    });

    return () => {
      events.forEach(ev => {
        document.removeEventListener(ev, listener);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handler]);
}
