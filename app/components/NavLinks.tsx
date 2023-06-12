import { PropsWithChildren } from 'react';
import { TbDeviceLaptop, TbFolder, TbMail, TbUser } from 'react-icons/tb';

type NavLinkProps = {
  icon: (props: { className: string }) => React.ReactElement;
  href: string;
  className?: string;
};

const NavLink = (props: PropsWithChildren<NavLinkProps>) => {
  const Icon = props.icon;
  return (
    <li className={`opacity-0 animate-pop-in ${props.className}`}>
      <a className="flex flex-col items-center gap-2 align-middle sm:flex-row" href={props.href}>
        <Icon className="text-primary text-lg xl:text-xl" />
        {props.children}
      </a>
    </li>
  );
};

const NavLinks = (props: { className?: string }) => (
  <ul className={props.className}>
    <NavLink icon={TbUser} href="/#about" className="animation-delay-1000">
      About
    </NavLink>
    <NavLink icon={TbDeviceLaptop} href="/#experience" className="animation-delay-[1200ms]">
      Experience
    </NavLink>
    <NavLink icon={TbFolder} href="/#projects" className="animation-delay-[1400ms]">
      Projects
    </NavLink>
    <NavLink icon={TbMail} href="/#contact" className="animation-delay-[1600ms]">
      Contact
    </NavLink>
  </ul>
);

export default NavLinks;
