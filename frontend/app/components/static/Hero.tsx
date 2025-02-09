import React from "react";
import Image from "next/image";
import 'typeface-work-sans';
import img1 from '@/public/image 1.png';
import img2 from '@/public/Image 2.png'

const Hero: React.FC = () => {
  return (
    <section className="bg-white w-full h-auto py-10">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">

        {/* Left Content */}
        <div className="lg:w-[571px] w-full h-auto flex flex-col justify-center gap-[30px] text-center lg:text-left">
          <h1 className="font-sans font-bold text-[32px] lg:text-[44px] leading-[44px] lg:leading-[58px] text-[#2B71F0] tracking-[-0.5px]">
            Build Work Experience through Skills Challenges Program
          </h1>

          <p className="leading-[30px] font-sans text-[#2B3338] font-[400] text-[20px] lg:text-[20px]">
            Enhance your Employability and Accelerate your Career Growth by
            working on Hands-on projects & hackathons <br /> from various businesses & organizations.
          </p>

          <button className="mt-5 bg-[#2B71F0] text-white py-3 px-6 rounded-[6px] shadow hover:bg-[#265bcc] transition w-full lg:w-[207px] lg:h-[56px] font-sans font-semibold text-center">
            Get Started
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-[746px] w-full h-auto flex items-center justify-center mt-10 lg:mt-0 relative">
          <div className="relative flex flex-col lg:flex-row gap-[24px] lg:gap-[24px] items-center">
            {/* First Image */}
            <div className="w-[275px] h-[443px] bg-transparent rounded-[32px] overflow-hidden lg:w-[360px] lg:h-[480px]">
              <Image src={img2} alt="Image 2" className="h-full w-full object-cover" />
            </div>

            {/* Second Image */}
            <div className="relative w-[275px] h-[443px] rounded-[32px] overflow-hidden lg:w-[300px] lg:h-[480px] flex justify-center items-center">
              <Image src={img1} alt="Image 1" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
