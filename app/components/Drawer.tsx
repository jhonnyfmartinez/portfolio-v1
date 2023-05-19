import clsx from 'clsx';
import NavLinks from './NavLinks';
import { forwardRef } from 'react';

type DrawerProps = {
  open?: boolean;
};

const Drawer = (props: DrawerProps, ref: React.ForwardedRef<HTMLElement>) => (
  <aside
    ref={ref}
    className={clsx(['side-drawer', props.open ? 'translate-x-0' : 'translate-x-full'])}
    data-testid="drawer">
    <NavLinks className="flex flex-col items-center gap-10 text-3xl" />
  </aside>
);

export default forwardRef(Drawer);
