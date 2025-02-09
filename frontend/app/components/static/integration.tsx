import React from 'react'
import banner from '../../UMURAVA/banner_img 1.png'
import Image from 'next/image'
import 'typeface-work-sans';

function Integration() {
    return (
        <div className="flex flex-col items-center border justify-center bg-[#F9FAFB] py-8 px-4 md:px-16">
            <h2 className="text-[24px] md:text-[32px] w-full max-w-[740px] mb-[44px] text-center font-bold mx-auto font-sans text-[#03192E]">
                How Skills Challenges Program can Be Integrated into your Learning Institution
            </h2>
            <div className="flex flex-col md:flex-row justify-center w-full max-w-[1200px] space-y-8 md:space-y-0">
                <div className="md:w-[50%] flex justify-center text-left space-y-[24px] w-full max-w-[420px] mx-auto">
                    <ul className="space-y-4">
                        {[
                            "As Career Development and Job Readiness Program",
                            "As Skills Assessments Method after a course or a term",
                            "As extracurricular activities to complement academic courses",
                            "As the portfolio of the Students",
                            "As part of Capstone Projects or final-year assignments",
                        ].map((item, index) => (
                            <li key={index} className="flex items-center space-x-4">
                                <div className="bg-[#2B71F0] border-black h-[42px] w-[42px] flex justify-center items-center text-center text-white rounded-full flex-shrink-0">
                                    {index + 1}
                                </div>

                                <p className="mb-4 mt-2 text-[#0E225A] font-normal font-sans text-[14px] md:text-[17px]">
                                    {item}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:w-[50%] mt-8 md:mt-0 flex justify-center relative">
                    <div className="absolute w-3/4 h-3/4 rounded-full top-12 left-12 -z-10"></div>
                    <Image
                        src={banner} // Change this to the correct image path
                        alt="Skills Challenges UI"
                        width={512}
                        height={480}
                        className="w-full max-w-[512px] h-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Integration;
