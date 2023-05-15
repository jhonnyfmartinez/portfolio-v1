import Image from 'next/image';
import Link from 'next/link';
import { TbUser, TbFolder, TbDeviceLaptop, TbMail } from 'react-icons/tb';

export default function NavBar() {
  return (
    <header className="header">
      <nav className="navbar" role="navigation">
        <Link className="navbar__logo" href="/" data-testid="root-link">
          <Image
            src="/logo.svg"
            alt="Vercel Logo"
            priority
            height={49}
            width={69}
            data-testid="logo"
          />
        </Link>
        <div className="navbar__links" data-testid="links-container">
          <Link className="navlink" href="#about" data-testid="navlink">
            <TbUser className="navlink__icon" />
            About
          </Link>
          <Link className="navlink" href="#experience" data-testid="navlink">
            <TbDeviceLaptop className="navlink__icon" />
            Experience
          </Link>
          <Link className="navlink" href="#projects" data-testid="navlink">
            <TbFolder className="navlink__icon" />
            Projects
          </Link>
          <Link className="navlink" href="#contact" data-testid="navlink">
            <TbMail className="navlink__icon" />
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
