import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const CommunityCard = () => {
  return (
    <div className="bg-white p-6 sm:p-8 md:p-10 z-50 w-full max-w-[542px] border-[#E4E7EC] border-[1px] justify-center items-center text-center h-auto rounded-[12px]">
      <div className="flex justify-center mb-8 items-center bg-[#D0E0FC] w-[120px] sm:w-[133px] p-4 rounded-full h-[120px] sm:h-[134px] mx-auto">
        <FaPaperPlane className="text-[#2B71F0] w-[50px] sm:w-[62px] h-[50px] sm:h-[62px]" />
      </div>
      <h2 className="text-[#101928] font-semibold text-[20px] sm:text-[24px] font-sans mb-2">Join our WhatsApp community</h2>
      <p className="text-[#475367] font-sans text-center text-[16px] sm:text-[18px] font-normal mb-4">
        Get notified on the latest projects <br /> and hackathons
      </p>
      <button className="mt-4 bg-[#2B71F0] text-white px-[18px] py-[10px] sm:px-[22px] sm:py-[11px] w-[120px] sm:w-[131px] h-[45px] sm:h-[55px] rounded-[11px] transition">
        Join
      </button>
    </div>
  );
};

export default CommunityCard;
