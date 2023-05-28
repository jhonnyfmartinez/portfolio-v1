import Link from 'next/link';
import SocialLinks from './SocialLinks';

const Footer = () => (
  <footer className="p-6">
    <SocialLinks className="xl:hidden" />
    <div className="text-center">
      <Link
        className="small-copy font-mono hover:text-primary"
        href="https://github.com/jhonny9550/portfolio-v1">
        Designed & built by Jhonny Martinez
      </Link>
    </div>
  </footer>
);

export default Footer;
