import Image from 'next/image';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { TbUser, TbFolder, TbDeviceLaptop, TbMail } from 'react-icons/tb';

type NavLinkProps = {
  icon: (props: { className: string }) => React.ReactElement;
  href: string;
};

const NavLink = (props: PropsWithChildren<NavLinkProps>) => {
  const Icon = props.icon;
  return (
    <Link className="flex items-center gap-2 align-middle hover:text-primary" href={props.href}>
      <Icon className="text-primary text-xl" />
      {props.children}
    </Link>
  );
};

export default function NavBar() {
  return (
    <header className="fixed top-0 inset-x-0 z-30 h-28">
      <nav className="bg-opacity-80 backdrop-blur-md px-16 py-8 flex items-center gap-8">
        <Link className="transition-transform hover:scale-110" href="/" data-testid="root-link">
          <Image src="/logo.svg" alt="Vercel Logo" priority height={49} width={69} />
        </Link>
        <div className="flex flex-grow justify-end gap-9" data-testid="links-container">
          <NavLink icon={TbUser} href="#about">
            About
          </NavLink>
          <NavLink icon={TbDeviceLaptop} href="#experience">
            Experience
          </NavLink>
          <NavLink icon={TbFolder} href="#projects">
            Projects
          </NavLink>
          <NavLink icon={TbMail} href="#contact">
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
