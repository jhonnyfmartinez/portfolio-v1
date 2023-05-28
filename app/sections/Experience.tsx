// istanbul ignore file
'use client';

import { useState } from 'react';
import SectionHeading from '@/app/components/SectionHeading';
import { TbDeviceLaptop } from 'react-icons/tb';
import Tabs from '@/app/components/Tabs';
import TabContent from '@/app/components/TabContent';
import { EXPERIENCE_DATA } from '@/app/utils/data.utils';

const Experience = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <section className="section-container sm:px-16 xl:px-[260px]" id="experience">
      <SectionHeading icon={TbDeviceLaptop}>Professional experience</SectionHeading>
      <div className="flex flex-col gap-8 sm:flex-row">
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

export default Experience;
