import React from 'react';
import Image from 'next/image';
import BG from '../../../public/challBG.png';
import BriefcaseIcon from '@heroicons/react/24/outline/BriefcaseIcon';

function WhatElse() {
  return (
    <div className="p-6 sm:p-8 lg:p-14 bg-[#F9FAFB]">
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="font-sans text-[32px] sm:text-[36px] md:text-[40px] font-bold leading-[48px] tracking-[-0.5px] text-[#03192E] w-full h-auto opacity-100 text-center mb-6">
            What else can I gain from <br /> participating in Skills Challenges?
          </h1>
          <p className="font-sans text-[16px] sm:text-[18px] md:text-[18px] font-normal text-[#687588] mx-auto text-center w-full sm:w-[650px] h-auto opacity-100 mb-4">
            Join Skills Challenges Program to accelerate your career growth and become part of Africa’s largest workforce of digital professionals.
          </p>
        </div>
      </section>

      <div className="w-full p-4 gap-[12px] flex flex-col lg:flex-row items-start lg:items-center">
        {/* Left Side Grid with 4 Items */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-[12px]">
          {/* First Item */}
          <div className="mb-6 w-full lg:w-[400px] relative min-h-[147px] flex flex-col justify-between">
            <div className="bg-[#2B71F0] w-[62px] h-[62px] mb-3 rounded-[5px] items-center flex justify-center">
              <BriefcaseIcon className="text-[#FFFFFF] w-[24px] h-[24px]" />
            </div>
            <h3 className="text-[#060E19] font-sans text-[16px] font-bold mb-2">
              Enhance Your Employment Path
            </h3>
            <p className="text-[#687588] w-full font-sans text-[14px] mb-4">
              Network with other talented individuals <br /> and learn from their experiences.
            </p>
          </div>

          {/* Second Item */}
          <div className="mb-6 w-full lg:w-[400px] relative min-h-[147px] flex flex-col justify-between">
            <div className="bg-[#2B71F0] w-[62px] h-[62px] mb-3 rounded-[5px] items-center flex justify-center">
              <BriefcaseIcon className="text-[#FFFFFF] w-[24px] h-[24px]" />
            </div>
            <h3 className="text-[#060E19] font-sans text-[16px] font-bold mb-2">
              Earn Recognition and Prizes
            </h3>
            <p className="text-[#687588] w-full font-sans text-[14px] mb-4">
              Gain valuable experience and knowledge to <br /> advance your career in the digital economy.
            </p>
          </div>

          {/* Third Item */}
          <div className="mb-6 w-full lg:w-[400px] relative min-h-[147px] flex flex-col justify-between">
            <div className="bg-[#2B71F0] w-[62px] h-[62px] mb-3 rounded-[5px] items-center flex justify-center">
              <BriefcaseIcon className="text-[#FFFFFF] w-[24px] h-[24px]" />
            </div>
            <h3 className="text-[#060E19] font-sans text-[16px] font-bold mb-2">
              Personal Growth
            </h3>
            <p className="text-[#687588] w-full font-sans text-[14px] mb-4">
              Challenge yourself, learn new skills, and <br /> expand your professional network.
            </p>
          </div>

          {/* Fourth Item */}
          <div className="mb-6 w-full lg:w-[400px] relative min-h-[147px] flex flex-col justify-between">
            <div className="bg-[#2B71F0] w-[62px] h-[62px] mb-3 rounded-[5px] items-center flex justify-center">
              <BriefcaseIcon className="text-[#FFFFFF] w-[24px] h-[24px]" />
            </div>
            <h3 className="text-[#060E19] font-sans text-[16px] font-bold mb-2">
              Learn from Industry Experts
            </h3>
            <p className="text-[#687588] w-full font-sans text-[14px] mb-4">
              Access valuable insights and guidance from experienced <br /> professionals in the digital careers fields and spaces.
            </p>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-2/3 xl:w-1/2 ml-auto mt-8 lg:mt-0">
          <Image src={BG} alt="background" className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export default WhatElse;
