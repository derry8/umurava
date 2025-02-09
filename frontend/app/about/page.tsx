import React from 'react'
import OurStory from '../components/static/Ourstory'
import SkillsChallenges from '../components/static/SkillsChallenge'
import Card from '@/app/components/global/Card'
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const page = () => {
  return (
    <div><OurStory/>
    <div className="bg-[#F9FAFB] pt-[90px] pb-[60px] border-t text-center px-6 lg:px-[183px]">
      <h1 className="font-sans text-[32px] lg:text-[40px] font-bold leading-[48px] tracking-[-0.5px] text-[#03192E] w-full opacity-100 text-center mb-4">
        Experience a New Way of Building <br /> Work Experience
      </h1>
      <p className="font-sans text-[16px] lg:text-[18px] font-normal leading-[27px] text-[#687588] text-center w-full opacity-100 mb-4">
  Join Skills Challenges Program to accelerate your career growth and become <br /> part of Africa&rsquo;s largest workforce of digital professionals.
</p>

      <div className="mt-12">
        {/* Single Card */}
        <Card
          icon={<BriefcaseIcon className="h-[24px] w-[24px] text-[#2596be]" />}
          title="Bridging the Experience Ga"
          content="Many talents acquired theoretical knowledge and are rejected from jobs because they lack work experience and are not able to put in actions what they acquired in the schools."
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 mt-8">
        {/* Second Card */}
        <Card
          icon={<BriefcaseIcon className="h-[24px] w-[24px] text-[#2596be]" />}
          title="Bridging Education and Employment"
          content="Traditional education doesn't always prepare talents for the demands of the tech and digital economy and we are providing in-demand skills through Skills Challenges."
        />
        {/* Third Card */}
        <Card
  icon={<BriefcaseIcon className="h-[24px] w-[24px] text-[#2596be]" />}
  title="Preparing Talents for Global Job Markets"
  content="We are ensuring that African talents shine globally and that&rsquo;s why we are equipping them with global technical experience and shandout globally"
/>

      </div>
    </div>
    <SkillsChallenges/>
    </div>
  )
}

export default page