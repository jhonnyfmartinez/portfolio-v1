import { TbUser } from 'react-icons/tb';
import SectionHeading from '../components/SectionHeading';
import Image from 'next/image';

const About = () => (
  <section className="section-container">
    <SectionHeading icon={TbUser}>About me</SectionHeading>
    <div className="flex flex-col items-center gap-20 xl:flex-row">
      <div className="flex flex-col gap-6">
        <p>
          My name is Jhonny Martinez and I&apos;m passionate about creating software. My first
          approach to coding was back in high school, when I had to develop a website, I enjoyed
          that a lot and ended up doing the homework for all my classmates.
        </p>
        <p>
          During my career I have work for multiple startups and a couple of big companies. I have
          implemented solutions around the events, health, retail and financial industries.
        </p>
        <p>
          Currently, I&apos;m looking for a new role, in the meantime I build my online presence,
          contribute to open source projects and learn Rust programming language.
        </p>
        <p>Here is my main tech stack:</p>
        <ul className="bullet-list font-mono grid grid-cols-2 gap-y-3.5 gap-x-2 xl:gap-x-14">
          <li>JavaScript (ES6+)</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Angular</li>
          <li>NodeJS</li>
          <li>NextJS</li>
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
