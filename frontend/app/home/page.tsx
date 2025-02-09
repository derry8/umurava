import Hero from "../components/static/Hero";
import Stats from "../components/static/Stats";
import About from "../components/static/About";
import Challenges from "../components/static/Challenges";
import WhatElse from "../components/static/WhatElse";
import GetStarted from "../components/static/GetStarted";
import Unlock from "../components/static/unlock";
import TestimonialSlider from "../components/static/TestimonialSlider";
import Card from "@/app/components/global/Card";
import { BriefcaseIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <>
      <main className="">
        <Hero />
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
              title="Build a Strong Portfolio and Hand-On Experience"
              content="Tackle real-world projects through challenges and hackathons that mirror real-world challenges faced by businesses and organizations. Therefore, showcase your skills and accomplishments to potential employers and clients through a portfolio of completed projects."
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-6 mt-8">
            {/* Second Card */}
            <Card
              icon={<BriefcaseIcon className="h-[24px] w-[24px] text-[#2596be]" />}
              title="Enhance Your Employment Path"
              content="Develop the in-demand skills and build a strong portfolio to increase your chances of landing your dream job or contract."
            />
            {/* Third Card */}
            <Card
              icon={<BriefcaseIcon className="h-[24px] w-[24px] text-[#2596be]" />}
              title="Earn Recognition and Prizes"
              content="Earn both Money and Knowledge Prizes by participating in various contests and competitions by working on real-world projects and hackathons from our partner companies & organizations."
            />
          </div>
        </div>
        <Stats />
        <About />
        <Challenges />
        <WhatElse />
        <TestimonialSlider />
        <GetStarted />
        <Unlock />
      </main>

    </>
  );
}
