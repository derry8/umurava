import React from 'react'
import Mainimage from '../../UMURAVA/Image 3.png'
import Image from 'next/image'
import 'typeface-work-sans';

function Main() {
    return (
        <div className='flex flex-col lg:flex-row justify-center gap-[10px] items-center pt-[50px] lg:pt-[100px] pb-[50px] lg:pb-[138px] px-[20px] lg:px-[100px]'>
            <div className='text-center lg:text-left'>
                <h2 className="font-sans text-[#2B71F0] font-bold text-[24px] lg:text-[28px] leading-[28px] lg:leading-[33.6px] tracking-[-0.5px] text-left decoration-skip-ink-none mb-[20px] lg:mb-[40px]">
                    Accelerate Your Students and Trainees Employability and Career Growth through Project-based Learning Solution
                </h2>

                <p className='text-[#2B3338] w-full lg:w-[538px] font-normal text-[18px] lg:text-[20px] font-sans mb-[20px] lg:mb-[40px] leading-7 lg:leading-8'>
                    We partner with Universities, Schools, and Training Institutions to build the work experience of their students and trainees through project-based learning challenges and hackathons.
                </p>
                <button type="button" className="text-white bg-[#2B71F0] py-[14px] px-[20px] gap-[8px] w-full lg:w-[207px] h-full font-sans font-semibold text-center text-[14px] lg:text-[16px] flex justify-center rounded-[6px] ">
                    Partner with us
                </button>
            </div>
            <Image src={Mainimage} className='w-full lg:w-1/2' alt="Umurava Skills Challenges" />
        </div>
    )
}

export default Main
