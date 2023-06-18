import Link from 'next/link';
import { FaFileDownload } from 'react-icons/fa';
import { SOCIAL_MEDIA_DATA } from '../utils/data.utils';

type SocialLinksProps = { className?: string };

const SocialLinks = (props: SocialLinksProps) => {
  const linkClassName =
    'text-xl transition-all duration-300 ease-in-out hover:scale-125 sm:text-2xl';
  return (
    <ul className={`flex items-center justify-center px-8 py-5 gap-6 ${props.className}`}>
      {SOCIAL_MEDIA_DATA.map(({ link, icon, label }, index) => {
        const Icon = icon;
        return (
          <li key={index}>
            <Link
              href={link}
              target="_blank"
              aria-label={label}
              rel="noreferrer"
              download={label === 'Download Resume'}>
              <Icon className={linkClassName} title={label} />
            </Link>
          </li>
        );
      })}
      <li>
        <Link
          href={process.env.resumeUrl || ''}
          target="_blank"
          aria-label="Download Resume"
          rel="noopener roreferrer"
          download>
          <FaFileDownload className={linkClassName} title="Download Resume" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialLinks;
