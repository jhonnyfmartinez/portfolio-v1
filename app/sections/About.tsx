import { TbUser } from 'react-icons/tb';
import SectionHeading from '@/app/components/SectionHeading';
import Image from 'next/image';
import { TECH_STACK_DATA } from '@/app/utils/data.utils';

const About = () => (
  <section className="section-container" data-testid="about-section" id="about">
    <SectionHeading icon={TbUser}>About me</SectionHeading>
    <div className="flex flex-col items-center gap-20 xl:flex-row">
      <div className="flex flex-col gap-6">
        <p>
          My name is Jhonny Martinez and I&apos;m passionate about creating software. My first
          approach to coding was back in high school, when I had to develop a website, I enjoyed
          that a lot and ended up doing the homework for all my classmates.
        </p>
        <p>
          I am passionate about building excellent software that improves the lives of those around
          me. I specialize in creating software for clients ranging from individuals and
          small-businesses all the way to large enterprise corporations.
        </p>
        <p>
          Currently, I&apos;m looking for a new role, in the meantime I build my online presence,
          contribute to open source projects and learn Rust programming language.
        </p>
        <p>Here is my main tech stack:</p>
        <ul className="bullet-list font-mono grid grid-cols-2 gap-y-3.5 gap-x-2 xl:gap-x-14">
          {TECH_STACK_DATA.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
      <Image
        height={386}
        width={386}
        src="/me.png"
        alt="A picture of me"
        className="max-w-[250px] xl:max-w-none"
      />
    </div>
  </section>
);

export default About;