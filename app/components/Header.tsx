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
  const drawerRef = useRef(null);

  const handleToggleDrawer = useCallback(() => {
    setDrawerOpen(v => !v);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  }, [drawerOpen]);

  useOnClickOutside(drawerRef, handleCloseDrawer);

  return (
    <header className="fixed top-0 inset-x-0 z-30 h-20 bg-background bg-opacity-80 drop-shadow-md backdrop-blur-[10px] flex items-center">
      <nav className="w-full flex items-center gap-8 px-8 xl:px-16">
        <Link className="transition-transform hover:scale-110" href="/" data-testid="root-link">
          <Image src="/logo.svg" alt="Vercel Logo" priority height={49} width={69} />
        </Link>
        <div className="flex-grow flex justify-end items-center sm:hidden">
          <button className="ml-auto text-3xl" onClick={handleToggleDrawer}>
            {drawerOpen ? <TbX /> : <TbMenu2 />}
          </button>
        </div>
        <NavLinks className="flex-grow justify-end gap-9 hidden sm:flex" />
        <Drawer ref={drawerRef} open={drawerOpen} />
      </nav>
    </header>
  );
}
