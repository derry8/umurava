import React from 'react';
import Image from 'next/image';
import Img from '@/public/Screenshot 2025-01-23 225725.png';

const OurStory: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 py-[50px] bg-[#FFFFFF] px-4 sm:px-8 md:px-[100px] rounded-lg shadow-lg">
      {/* Text Section */}
      <div className="max-w-[100%] sm:max-w-[529px] text-center md:text-left">
        <h2 className="text-[28px] sm:text-[32px] font-sans font-bold mb-[24px] text-[#2B71F0]">
          Our Story
        </h2>
        <p className="text-[#2B3338] text-[18px] sm:text-[20px] font-sans mb-[24px]">
          With 3 years of experience matching African digital talents to local
          and global job markets, we still remain with a big number of jobs
          that remain unfilled due to the lack of experienced African Talents.
        </p>
        <p className="text-[#2B3338] text-[18px] sm:text-[20px] font-sans mb-[24px]">
          Driven by our mission to place skilled and professional digital
          talent, we created Skills Challenges as a project-based learning
          solution for talents to gain real-world experience, solve problems,
          and build portfolios so that they become ready for global job
          markets.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-shrink-0 w-full sm:w-[60%] md:w-[604px] h-auto">
        <Image
          src={Img}
          alt="Umurava Skills Challenges"
          className="w-full h-auto rounded-[20px] object-cover shadow-md"
        />
      </div>
    </section>
  );
};

export default OurStory;
