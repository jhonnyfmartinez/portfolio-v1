import clsx from 'clsx';
import Link from 'next/link';
import { TbBrandGithub, TbExternalLink } from 'react-icons/tb';

type ListIconLinkProps = { href: string; icon: React.ReactElement; label: string };

const ListIconLink = (props: ListIconLinkProps) => (
  <li>
    <Link className="text-2xl" href={props.href} target="_blank" aria-label={props.label}>
      {props.icon}
    </Link>
  </li>
);

type IconLinksProps = { links: { github: string; demo: string }; className?: string };

const IconLinks = (props: IconLinksProps) => (
  <ul className={clsx(['flex items-center gap-4', props.className])}>
    {props.links.github && (
      <ListIconLink href={props.links.github} icon={<TbBrandGithub />} label="GitHub Link" />
    )}
    {props.links.demo && (
      <ListIconLink href={props.links.demo} icon={<TbExternalLink />} label="Demo Link" />
    )}
  </ul>
);

export default IconLinks;
