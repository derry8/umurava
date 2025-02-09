import React from 'react';

const Transform: React.FC = () => {
  return (
    <section className="w-full overflow-hidden bg-white py-12 px-6 sm:py-16  sm:px-8 lg:py-28 lg:px-24 h-auto flex justify-center items-center">
      <div className="w-full sm:w-[1221px] relative h-auto text-center sm:h-[351px] bg-[#2B71F0] text-white rounded-[26px] flex flex-col sm:flex-row justify-center items-center px-6 sm:px-12 lg:px-16">

        {/* Circular Decorations */}
        <div className="absolute right-[-250px] top-[-270px] sm:w-[438px] sm:h-[438px] sm:border-[80px] sm:border-[#FFFFFF24] z-0 bg-transparent rounded-full hidden sm:block"></div>
        <div className="absolute left-[-100px] bottom-[-230px] sm:w-[410px] sm:h-[410px] sm:border-[60px] sm:border-[#FFFFFF24] z-0 bg-transparent rounded-full hidden sm:block"></div>

        {/* Unlock Content */}
        <div className="flex flex-col justify-center my-4 items-center w-full space-y-4 sm:space-y-6 lg:space-y-8">

          <div className="w-full text-center">
            <a href="#">
            <h5 className="mb-6 font-sans text-[24px] sm:mb-8 sm:text-[32px] font-bold lg:text-[36px]">
  Ready to transform your <br /> learning institution?
</h5>

            </a>

            <button className="w-[200px]  sm:w-[241px] font-sans h-[56px] mx-auto sm:mx-0 px-6 py-2 text-sm font-medium text-center bg-white text-[#2B71F0] rounded-lg">
  Let&apos;s Partner
</button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Transform;
