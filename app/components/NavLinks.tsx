import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { TbDeviceLaptop, TbFolder, TbMail, TbUser } from 'react-icons/tb';

type NavLinkProps = {
  icon: (props: { className: string }) => React.ReactElement;
  href: string;
};

const NavLink = (props: PropsWithChildren<NavLinkProps>) => {
  const Icon = props.icon;
  return (
    <li>
      <Link className="flex flex-col items-center gap-2 align-middle sm:flex-row" href={props.href}>
        <Icon className="text-primary text-lg xl:text-xl" />
        {props.children}
      </Link>
    </li>
  );
};

const NavLinks = (props: { className?: string }) => (
  <ul className={props.className}>
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
  </ul>
);

export default NavLinks;
