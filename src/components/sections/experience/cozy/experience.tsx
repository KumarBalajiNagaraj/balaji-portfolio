import React from 'react';

import MotionWrap from '@/components/motion-wrap';
import ExperienceCard from './experience-card';

import { experiences } from '@/components/sections/experience/config';
import TextReveal from '@/components/motion/text-reveal';

function Experiences() {
  return (
    <MotionWrap className="w-full py-24 lg:py-32" id="experiences">
      <div className="px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
              <TextReveal>My Experience</TextReveal>
            </h2>
            <p className="text-gray-500 dark:text-gray-400">
              <TextReveal>
                Here are some of my work experiences where I&apos;ve turned
                challenges into accomplishments, making things happen.
              </TextReveal>
            </p>
          </div>
          <div className="grid gap-4">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience_${index}`}
                name={experience.name}
                description={experience.description}
                company={experience.company}
                duration={experience.duration}
                logo={experience.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </MotionWrap>
  );
}

export default Experiences;