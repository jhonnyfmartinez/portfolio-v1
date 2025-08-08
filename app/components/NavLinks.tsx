import { PropsWithChildren, useCallback } from 'react';
import { IconType } from 'react-icons';
import { TbDeviceLaptop, TbFolder, TbMail, TbUser } from 'react-icons/tb';

type NavLinkProps = {
  icon: IconType;
  href: string;
  className?: string;
};

const NavLink = (props: PropsWithChildren<NavLinkProps>) => {
  const Icon = props.icon;

  const handleDispatchCloseDrawerEvent = useCallback(() => {
    const closeDrawerEvent = new CustomEvent('closedrawer');
    window.dispatchEvent(closeDrawerEvent);
  }, []);

  return (
    <li className={`motion-safe:opacity-0 motion-safe:animate-pop-in ${props.className}`}>
      <a
        className="flex flex-col items-center gap-2 align-middle sm:flex-row"
        href={props.href}
        onClick={handleDispatchCloseDrawerEvent}>
        <Icon className="text-primary text-lg xl:text-xl" />
        {props.children}
      </a>
    </li>
  );
};

type NavLinksProps = { className?: string };

const NavLinks = (props: NavLinksProps) => (
  <ul className={props.className}>
    <NavLink icon={TbUser} href="/#about" className="motion-safe:animation-delay-1000">
      About
    </NavLink>
    <NavLink
      icon={TbDeviceLaptop}
      href="/#experience"
      className="motion-safe:animation-delay-[1200ms]">
      Experience
    </NavLink>
    <NavLink icon={TbFolder} href="/#projects" className="motion-safe:animation-delay-[1400ms]">
      Projects
    </NavLink>
    <NavLink icon={TbMail} href="/#contact" className="motion-safe:animation-delay-[1600ms]">
      Contact
    </NavLink>
  </ul>
);

export default NavLinks;
