import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { TbBrandGithub, TbExternalLink } from 'react-icons/tb';

type FeaturedProjectProps = {
  name: string;
  type: string;
  description: string;
  tech: string[];
  image: string;
  links: {
    github: string;
    demo: string;
  };
  index: number;
};

const ListIconLink = (props: { href: string; icon: React.ReactElement }) => (
  <li hidden={!props.href}>
    <Link className="text-2xl hover:text-primary" href={props.href} target="_blank">
      {props.icon}
    </Link>
  </li>
);

const FeaturedProject = (props: FeaturedProjectProps) => {
  const isOdd = props.index % 2 !== 0;
  return (
    <article
      className={clsx([
        'flex flex-col xl:flex-row xl:items-end',
        { 'xl:flex-row-reverse': isOdd },
      ])}>
      <div className="xl:flex-grow xl:min-w-[658px]">
        <div className="flex flex-col justify-between gap-2 xl:flex-row xl:items-end">
          <div className="text-headings">
            <p className="font-mono small-copy">{props.type}</p>
            <h5>{props.name}</h5>
          </div>
          <ul className="tech-list">
            {props.tech.map((tech, index) => (
              <li
                className={clsx(['font-mono small-copy', { 'hidden xlblock': index > 3 }])}
                key={`${props.name}-${tech}`}
                hidden={index > 3}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 relative overflow-hidden rounded-lg">
          <Image src={props.image} alt="Featured project" width={658} height={350} />
          <div className="absolute z-10 inset-0 h-full w-full bg-primary opacity-60" />
        </div>
      </div>
      <div
        className={clsx([
          'mb-4 bg-paper rounded-lg p-4 z-10 mx-8 translate-y-[-60px] xl:translate-y-0 xl:w-[377px]',
          isOdd ? 'xl:translate-x-[120px]' : 'xl:translate-x-[-120px]',
        ])}>
        <p className="small-copy">{props.description}</p>
        <ul className="flex items-center gap-4 justify-end mt-4">
          <ListIconLink href={props.links.github} icon={<TbBrandGithub />} />
          <ListIconLink href={props.links.demo} icon={<TbExternalLink />} />
        </ul>
      </div>
    </article>
  );
};

export default FeaturedProject;
