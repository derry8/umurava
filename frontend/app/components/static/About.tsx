import React from 'react';
import Image from 'next/image';
import Monitor from '@/public/Screenshot 2025-01-19 105311.png';
import Logo from '@/public/Screenshot 2025-01-19 120024.png';

const About: React.FC = () => {
    return (
        <section className="bg-[#FFFFFF] px-[20px] sm:px-[40px] lg:px-[100px] py-[40px] sm:py-[61px] border-b">
            <div className="text-center w-full max-w-[1240px] mx-auto mb-[35px]">
                <h1 className="text-[24px] sm:text-[30px] lg:text-[40px] font-sans font-bold text-[#03192E] leading-tight">
                    Skills Challenges Cover various in-demand skills <br />
                    and Careers for the digital economy
                </h1>
                <p className="mt-4 text-[#687588] text-[14px] sm:text-[16px] lg:text-[18px] font-normal text-center">
                    Explore the projects that various talents are working on.
                </p>
            </div>

            {/* Cards container */}
            <div className="mt-6 mx-auto w-full max-w-[972px] h-auto">
                {/* First row - centered 2 cards */}
                <div className="flex justify-center gap-5 flex-wrap mb-5">
                    {["UI/UX Design", "Data Science"].map((tag, index) => (
                        <span
                            key={index}
                            className={`px-[24px] py-[14px] text-[14px] font-sans font-normal rounded-[8px] text-center h-[55px] transition-all duration-300 ${tag === "UI/UX Design"
                                ? "bg-[#2B71F0] text-white"
                                : "bg-[#F1F1F1] text-[#687588]"}`
                            }
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Second and third rows - 4 cards in grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 opacity-100 auto-rows-auto">
                    {/* Second row - 4 cards */}
                    <div className="flex justify-center gap-5 flex-wrap col-span-4">
                        {[
                            "Graphic Design",
                            "Data Analysis & Research",
                            "Animation",
                            "Videography & Photography",
                        ].map((tag, index) => (
                            <span
                                key={index}
                                className="px-[24px] py-[14px] text-[14px] font-sans font-normal rounded-[8px] text-center h-[55px] transition-all duration-300 bg-[#F1F1F1] text-[#687588]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Third row - 4 cards */}
                    <div className="flex justify-center gap-5 flex-wrap col-span-4">
                        {[
                            "Data Science",
                            "AI & Machine Learning",
                            "Web3",
                            "Digital Marketing & Communications",
                        ].map((tag, index) => (
                            <span
                                key={index}
                                className="px-[24px] py-[14px] text-[14px] font-sans font-normal rounded-[8px] text-center h-[55px] transition-all duration-300 bg-[#F1F1F1] text-[#687588]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Second Section */}
            <div className="bg-[#F1F1F1] h-auto mt-[57px] py-10 sm:px-[40px] lg:px-[60px] rounded-[12px] flex flex-col lg:flex-row items-center gap-[50px] lg:gap-[40px] px-4">
                {/* Left Side Content */}
                <div className="flex flex-col justify-center items-center lg:items-start max-w-[440px] px-4">
                    <div className="w-[93px] rounded-[10px] h-[89px] bg-[#FFFFFF] flex items-center justify-center">
                        <Image
                            src={Logo}
                            alt="Logo"
                            className="w-[45px] h-[45px] rounded-full"
                        />
                    </div>

                    <p className="text-[#687588] text-[16px] sm:text-[18px] lg:text-[18px] p-0 h-auto font-sans my-6 text-center lg:text-left">
                        The Embedded Finance Platform and Payroll Management Software Solutions for your organization and Workforce.
                    </p>

                    <a href="#" className="mt-6 inline-flex items-center text-blue-600 font-medium">
                        Learn more
                        <svg
                            className="ml-2 w-4 h-4 text-blue-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                            ></path>
                        </svg>
                    </a>
                </div>

                {/* Right Side Image */}
                <div className="relative max-w-[600px] lg:w-[500px] w-full h-[300px] sm:h-[400px] lg:h-[400px] lg:mt-0 ml-auto">
                    <Image
                        src={Monitor}
                        alt="Monitor"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>





        </section>
    );
};

export default About;
