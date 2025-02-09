import React from 'react';
import Image from 'next/image';
import Step1 from '../../../public/Step1.png';
import Step2 from '../../../public/Step2.png';

function GetStarted() {
  const Lsteps = [
    {no:'Step 1', title:'Sign Up on Umurava Platform', description: 'Submit your completed project for evaluation', img:Step1, width: 263, height: 180},
    {no:'Step 2', title:'Browse Open Challenges', description: 'Explore the range of challenges and hackathons and choose one that aligns with your interests and career goals', img:Step2, width: 263, height: 180},
  ];

  const Rsteps = [
    {no:'Step 3', title:'Register and Participate', description: 'Sign up for the challenge and start working on the project.'},
    {no:'Step 4', title:'Submit your work', description: 'Submit your completed project for evaluation '},
    {no:'Step 5', title:'Receive Feedback and Recognition', description: 'Get feedback on your work and celebrate your achievements'},
  ];

  return (
    <div className='p-6 sm:p-9 lg:p-12 border bg-[#F9FAFB]'>
      <div>
        <h1 className='font-sans text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold text-[#03192E] text-center my-8'>
          How to Get Started
        </h1>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 px-6 md:px-12 lg:px-36'>
        {/* Left Side */}
        <div className='flex flex-col gap-5'>
          {Lsteps.map((step, index) => (
            <div key={index} className='bg-white shadow-md p-6 sm:p-8 lg:p-10 h-full mb-4 rounded-xl relative flex flex-col'>
              <div className='bg-[#2B71F0] w-[55px] h-[30px] flex justify-center items-center rounded-[5px] mb-3 text-white text-sm'>
                {step.no}
              </div>
              <div className='font-sans text-[18px] sm:text-[20px] md:text-[24px] text-black mb-3 font-bold'>
                {step.title}
              </div>
              <p className='font-sans text-[14px] sm:text-[15px] md:text-[16px] text-[#687588] mb-4'>
                {step.description}
              </p>

              {/* Image positioned at the bottom-right with responsive styling */}
              <div className='absolute bottom-0 right-0 w-full max-w-[263px] h-auto hidden sm:block'>
                <Image
                  className='w-full h-auto object-contain'
                  src={step.img}
                  alt={step.title}
                  width={step.width}  // Add width
                  height={step.height} // Add height
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className='flex flex-col gap-5'>
          {Rsteps.map((step, index) => (
            <div key={index} className='bg-white shadow-md h-full p-6 sm:p-8 lg:p-10 mb-4 rounded-xl flex flex-col'>
              <div className='bg-[#2B71F0] w-[55px] h-[30px] flex justify-center items-center rounded-[5px] mb-3 text-white text-sm'>
                {step.no}
              </div>
              <div className='font-sans text-[18px] sm:text-[20px] md:text-[24px] text-black mb-3 font-bold'>
                {step.title}
              </div>
              <p className='font-sans text-[14px] sm:text-[15px] md:text-[16px] text-[#687588] mb-4'>
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
