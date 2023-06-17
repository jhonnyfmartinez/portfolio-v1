'use client';
import Button from '@/app/components/Button';
import SectionHeading from '@/app/components/SectionHeading';
import { TbMail } from 'react-icons/tb';
import { withEntranceAnimation } from '../components/EntranceWrapper';

const Contact = () => (
  <section className="section-container sm:gap-8" id="contact">
    <SectionHeading centered icon={TbMail}>
      Contact me
    </SectionHeading>
    <div className="text-center max-w-[580px] mx-auto">
      <p>
        Feel free to get in touch anytime, send me an email or message me through social media. I’m
        keen to answer a question or if you just want to say hello. I’ll reply as soon as I can.
      </p>
      <Button href="mailto:jhonny9550@gmail.com" target="_blank" className="mt-8 mx-auto">
        Say hi 👋
      </Button>
    </div>
  </section>
);

export default withEntranceAnimation(Contact);
