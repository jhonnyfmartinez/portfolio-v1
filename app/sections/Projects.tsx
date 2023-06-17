// istanbul ignore file
'use client';
import ProjectCard from '@/app/components/ProjectCard';
import SectionHeading from '@/app/components/SectionHeading';
import { PROJECTS_DATA } from '@/app/utils/data.utils';
import { TbFolder } from 'react-icons/tb';
import { withEntranceAnimation } from '../components/EntranceWrapper';

const Projects = () => (
  <section className="section-container sm:px-16">
    <SectionHeading icon={TbFolder}>Other Projects</SectionHeading>
    <div className="flex items-stretch gap-4 flex-wrap xl:gap-6">
      {PROJECTS_DATA.map(project => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </div>
  </section>
);

export default withEntranceAnimation(Projects);
