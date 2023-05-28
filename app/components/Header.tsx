'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { TbMenu2, TbX } from 'react-icons/tb';
import Drawer from './Drawer';
import NavLinks from './NavLinks';
import useOnClickOutside from '../hooks/useClickOutside';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerWraperRef = useRef(null);

  const handleToggleDrawer = useCallback(() => {
    setDrawerOpen(v => !v);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  }, [drawerOpen]);

  useOnClickOutside(drawerWraperRef, setDrawerOpen.bind(null, false));

  return (
    <header className="fixed top-0 inset-x-0 z-30 h-20 bg-background bg-opacity-80 drop-shadow-md backdrop-blur-[10px] flex items-center">
      <nav className="w-full flex items-center gap-8 px-8 xl:px-16">
        <Link
          className="transition-transform max-w-[50px] hover:scale-110"
          href="/"
          data-testid="root-link">
          <Image src="/logo.svg" alt="Vercel Logo" priority height={49} width={69} />
        </Link>
        <NavLinks className="flex-grow justify-end gap-9 hidden sm:flex" />
        <div
          ref={drawerWraperRef}
          className="flex-grow flex justify-end items-center sm:hidden"
          data-testid="wrapper">
          <button className="text-3xl" onClick={handleToggleDrawer} data-testid="toggle-button">
            {drawerOpen ? <TbX data-testname="x" /> : <TbMenu2 data-testname="menu" />}
          </button>
          <Drawer open={drawerOpen} />
        </div>
      </nav>
    </header>
  );
}
