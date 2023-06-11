import { ProjectInterface } from '@/app/interfaces/project.interface';
import clsx from 'clsx';
import Image from 'next/image';
import TechLinks from './TechLinks';

type FeaturedProjectProps = ProjectInterface & {
  index: number;
};

const FeaturedProject = (props: FeaturedProjectProps) => {
  const isOdd = props.index % 2 !== 0;
  return (
    <article
      className={clsx([
        'flex flex-col xl:flex-row xl:items-end',
        { 'xl:flex-row-reverse': isOdd },
      ])}>
      <div className="xl:flex-grow xl:max-w-fit">
        <div className="flex flex-col justify-between gap-2 xl:flex-row xl:items-end">
          <div>
            <span className="font-mono small-copy">{props.type}</span>
            <h5>{props.name}</h5>
          </div>
          <ul className="tech-list">
            {props.tech.map((tech, index) => (
              <li
                className={clsx(['font-mono small-copy', { 'hidden sm:block': index > 3 }])}
                key={`${props.name}-${tech}`}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-4 relative overflow-hidden rounded-lg w-fit">
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
        <TechLinks className="justify-end mt-4" links={props.links} />
      </div>
    </article>
  );
};

export default FeaturedProject;
