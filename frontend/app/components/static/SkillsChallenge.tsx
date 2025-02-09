import React from "react";
import Image from "next/image";
import img from '../../../public/Screenshot 2025-01-26 151834.png';
import 'typeface-work-sans';

const SkillsChallenges = () => {
  return (
    <section className="flex flex-col lg:flex-row px-6 lg:px-[100px] gap-6 lg:gap-[60px] py-[40px] lg:py-[76px]">
      {/* Text Content */}
      <div className="flex-1 text-center lg:text-left">
        <h2 className="font-sans text-[28px] sm:text-[32px] lg:text-[36px] mb-[24px] font-bold text-[#041738]">
          Skills Challenges Program is built on <br /> the
          Umurava Talent Marketplace Platform
        </h2>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] mb-[24px] w-full font-sans text-[#2B3338]">
          A Project-based Learning Solution aimed at providing young and senior
          talents with an opportunity to showcase their skills to real-world
          projects and challenges from our partner companies and organizations.
        </p>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] mb-[24px] w-full font-sans text-[#2B3338]">
          Umurava Skills Challenges enables young talents to build a <br /> portfolio
          and experience that increases their readiness to <br /> access job
          opportunities and projects.
        </p>
        <button className="w-[207px] h-[56px] bg-[#2B71F0] rounded-lg text-center text-white">
          Get Started
        </button>
      </div>

      {/* Image/Mockup Content */}
      <div className="flex-1 ml-auto w-full max-w-[550px] h-full">
        <div className="h-[300px] sm:h-[400px] lg:h-[430px] w-full rounded-lg overflow-hidden">
          <Image
            src={img}
            alt="Umurava Platform Mockup"
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsChallenges;
