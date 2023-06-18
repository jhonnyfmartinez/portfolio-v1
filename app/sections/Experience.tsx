// istanbul ignore file
'use client';

import SectionHeading from '@/app/components/SectionHeading';
import TabContent from '@/app/components/TabContent';
import Tabs from '@/app/components/Tabs';
import { EXPERIENCE_DATA } from '@/app/utils/data.utils';
import { useState } from 'react';
import { TbDeviceLaptop } from 'react-icons/tb';
import { withEntranceAnimation } from '../components/EntranceWrapper';

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="section-container sm:px-16 xl:px-[260px]" id="experience">
      <SectionHeading icon={TbDeviceLaptop}>Professional experience</SectionHeading>
      <div className="flex flex-col gap-8 min-h-[520px] sm:flex-row sm:min-h-[400px]">
        <Tabs
          tabs={EXPERIENCE_DATA.map(tab => tab.title)}
          selectedTab={selectedTab}
          onChange={setSelectedTab}
        />
        {EXPERIENCE_DATA.map((tab, index) => (
          <TabContent
            key={tab.title}
            company={tab.title}
            period={tab.content.period}
            position={tab.content.position}
            items={tab.content.items}
            hidden={index !== selectedTab}
          />
        ))}
      </div>
    </section>
  );
};

export default withEntranceAnimation(Experience);
