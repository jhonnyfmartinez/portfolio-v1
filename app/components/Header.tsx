'use client';

import useOnClickOutside from '@/app/hooks/useClickOutside';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TbMenu2, TbX } from 'react-icons/tb';
import { ScrollDirection, useScrollDirection } from '../hooks/useScrollDirection';
import Drawer from './Drawer';
import NavLinks from './NavLinks';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerWraperRef = useRef(null);
  const scrollDirection = useScrollDirection();

  const handleToggleDrawer = useCallback(() => {
    setDrawerOpen(v => !v);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.documentElement.classList.add('blur');
    } else {
      document.documentElement.classList.remove('blur');
    }
  }, [drawerOpen]);

  useEffect(() => {
    const closeDrawer = setDrawerOpen.bind(null, false);
    window.addEventListener('closedrawer', closeDrawer);
    return () => {
      window.removeEventListener('closedrawer', closeDrawer);
    };
  }, []);

  useOnClickOutside(drawerWraperRef, setDrawerOpen.bind(null, false));

  return (
    <header className={clsx(['header', { scrolled: scrollDirection === ScrollDirection.down }])}>
      <nav className="w-full flex items-center gap-8 px-8 xl:px-16">
        <Link
          className="max-w-[50px] motion-safe:opacity-0 motion-safe:animate-pop-in motion-safe:animation-delay-[800ms]"
          href="/"
          data-testid="root-link">
          <Image
            className="motion-safe:transition-all hover:scale-110"
            src="/logo.svg"
            alt="Vercel Logo"
            priority
            height={49}
            width={69}
          />
        </Link>
        <NavLinks className="flex-grow justify-end gap-9 hidden sm:flex" />
        <div
          ref={drawerWraperRef}
          className="flex-grow flex justify-end items-center sm:hidden"
          data-testid="wrapper">
          <button
            className="text-3xl motion-safe:opacity-0 motion-safe:animate-pop-in motion-safe:animation-delay-[1000ms]"
            onClick={handleToggleDrawer}
            data-testid="toggle-button">
            {drawerOpen ? <TbX data-testname="x" /> : <TbMenu2 data-testname="menu" />}
          </button>
          <Drawer open={drawerOpen} />
        </div>
      </nav>
    </header>
  );
}
