import React from 'react';

const Stats: React.FC = () => {
    return (
        <section className="flex items-center border-t border-b overflow-hidden justify-center py-[50px] sm:py-[60px] lg:py-[105px] px-[20px] sm:px-[50px] lg:px-[109px] gap-[10px] bg-[#FFFFFF]">
            <div className="relative bg-[#2B71F0] text-white rounded-[26px] py-[40px] gap-10 w-full flex items-center justify-center flex-col sm:flex-row">
                {/* Circular Decorations (hidden on small screens) */}
                <div className="absolute bottom-[-340px] left-24 w-[438px] h-[438px] border-[80px] border-[#FFFFFF24] z-0 bg-transparent rounded-full hidden sm:block"></div>
                <div className="absolute top-[-210px] right-[-148px] w-[438px] h-[438px] border-[90px] border-[#FFFFFF24] z-0 bg-transparent rounded-full hidden sm:block"></div>

                {/* Stats Content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[40px] md:gap-[70px] p-[20px] sm:p-[40px] text-center w-full">
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl sm:text-4xl font-bold">1</h2>
                        <p className="mt-2 text-base sm:text-lg">Year</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl sm:text-4xl font-bold">500+</h2>
                        <p className="mt-2 text-base sm:text-lg">Challenges Completed</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-3xl sm:text-4xl font-bold">10K+</h2>
                        <p className="mt-2 text-base sm:text-lg">Users</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <h2 className="text-[36px] sm:text-[40px] font-sans font-bold">6+</h2>
                        <p className="mt-2 text-[18px] sm:text-[21px] text-[#FFFFFF] font-sans font-normal">Countries</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
