import Image from 'next/image';
import Link from 'next/link';
import { TbUser, TbFolder, TbDeviceLaptop, TbMail } from 'react-icons/tb';

export default function NavBar() {
  return (
    <header className="header">
      <nav className="navbar">
        <Link className="navbar__logo" href="/">
          <Image src="/logo.svg" alt="Vercel Logo" priority height={49} width={69} />
        </Link>
        <div className="navbar__links">
          <Link className="navlink" href="#about">
            <TbUser className="navlink__icon" />
            About
          </Link>
          <Link className="navlink" href="#experience">
            <TbDeviceLaptop className="navlink__icon" />
            Experience
          </Link>
          <Link className="navlink" href="#projects">
            <TbFolder className="navlink__icon" />
            Projects
          </Link>
          <Link className="navlink" href="#contact">
            <TbMail className="navlink__icon" />
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
