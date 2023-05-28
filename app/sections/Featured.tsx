// istanbul ignore file
import SectionHeading from '@/app/components/SectionHeading';
import { TbFolder } from 'react-icons/tb';
import { FEATURED_PROJECTS_DATA } from '@/app/utils/data.utils';
import FeaturedProject from '@/app/components/FeaturedProject';

const Featured = () => (
  <section className="section-container" id="projects">
    <SectionHeading icon={TbFolder}>Featured projects</SectionHeading>
    <div className="flex flex-col sm:gap-[124px]">
      {FEATURED_PROJECTS_DATA.map((project, index) => (
        <FeaturedProject key={project.name} {...project} index={index} />
      ))}
    </div>
  </section>
);

export default Featured;
