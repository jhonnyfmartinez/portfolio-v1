import clsx from 'clsx';
import Link from 'next/link';
import { TbBrandGithub, TbExternalLink } from 'react-icons/tb';

type ListIconLinkProps = { href: string; icon: React.ReactElement };

const ListIconLink = (props: ListIconLinkProps) => (
  <li hidden={!props.href}>
    <Link className="text-2xl hover:text-primary" href={props.href} target="_blank">
      {props.icon}
    </Link>
  </li>
);

type IconLinksProps = { links: { github: string; demo: string }; className?: string };

const IconLinks = (props: IconLinksProps) => (
  <ul className={clsx(['flex items-center gap-4', props.className])}>
    <ListIconLink href={props.links.github} icon={<TbBrandGithub />} />
    <ListIconLink href={props.links.demo} icon={<TbExternalLink />} />
  </ul>
);

export default IconLinks;
