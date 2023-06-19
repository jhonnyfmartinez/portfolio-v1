import { ProjectInterface } from '@/app/interfaces/project.interface';
import { TbCode } from 'react-icons/tb';
import TechLinks from './TechLinks';

type ProjectCardProps = Omit<ProjectInterface, 'image'>;

const ProjectCard = (props: ProjectCardProps) => (
  <article className="bg-paper rounded-lg p-6 drop-shadow-lg flex flex-col gap-4 w-full sm:w-[300px] xl:w-[320px]">
    <div className="flex">
      <h3 className="flex-grow">{props.name}</h3>
      <TbCode className="text-2xl text-primary sm:text-4xl" />
    </div>
    <p className="flex-grow">{props.description}</p>
    <ul className="flex flex-wrap gap-4">
      {props.tech.map(t => (
        <li className="font-mono small-copy" key={`${props.name}-${t}`}>
          {t}
        </li>
      ))}
    </ul>
    <TechLinks links={props.links} />
  </article>
);

export default ProjectCard;
