import React from 'react';
import unlockimg from '../../../public/Unlock.png'; 
import Image from 'next/image';

const Unlock: React.FC = () => {
    return (
        <section className="w-full overflow-hidden bg-[#FFFFFF] py-[109px] px-[78px] h-auto gap-[10px] flex justify-center items-center">
            <div className="w-full sm:w-[1221px] relative h-auto sm:h-[503px] bg-[#2B71F0] text-white rounded-[26px] flex flex-col sm:flex-row">
                
                {/* Circular Decorations */}
                <div className="absolute right-[-250px] top-[-270px] sm:w-[438px] sm:h-[438px] sm:border-[80px] sm:border-[#FFFFFF24] z-0 bg-transparent rounded-full hidden sm:block"></div>
                <div className="absolute left-[70px] bottom-[-280px] sm:w-[410px] sm:h-[410px] sm:border-[60px] sm:border-[#FFFFFF24] z-0 bg-transparent rounded-full hidden sm:block"></div>
                
                {/* Unlock Content */}
                <div className="flex flex-col sm:flex-row justify-between items-center z-20 w-full sm:px-20">
                    {/* Left content */}
                    <div className='w-full sm:w-[398px] sm:h-[395px]'>
                        <Image 
                            className="w-full h-full rounded-lg" 
                            src={unlockimg}  // Use unlockimg directly here
                            alt="Unlock Image"  // Add an alt text for accessibility
                            width={398} // Set the width of the image
                            height={395} // Set the height of the image
                        />
                    </div>

                    {/* Right content */}
                    <div className="w-full sm:w-[545px] p-6 sm:p-0 sm:ml-12 text-center sm:text-left">
                        <a href="#">
                            <h5 className="mb-8 font-sans text-[28px] sm:text-[32px] font-bold">
                                Ready to Unlock Your Career Potential Today!
                            </h5>
                        </a>
                        <p className="mb-8 text-[16px] sm:text-[18px] font-sans font-light">
                            Join a challenge or a hackathon to gain valuable work experience, build an impressive portfolio, and increase your chances to land job opportunities and accelerate <br /> your career growth.
                        </p>
                        <button className="items-center w-[241px] h-[56px] mx-auto sm:mx-0 px-3 py-2 text-sm font-medium text-center bg-[#FFFFFF] text-[#2B71F0] rounded-lg ">
                            View Challenge
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Unlock;
