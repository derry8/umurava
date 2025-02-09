// components/ChallengeCard.tsx
import 'typeface-work-sans';  
import React from "react";
import { ArrowUp, Book,ChevronDown  } from "lucide-react";

interface ChallengeCardProps {
  title: string;
  value: number;
  percentageChange: number;
}

const SummaryCard: React.FC<ChallengeCardProps> = ({
  title,
  value,
  percentageChange,
}) => {
  return (
    <div className="bg-white rounded-lg p-5 border-[1px] border-[#E4E7EC] flex items-center w-full h-[150px] py-[11px] px-[20px] relative">
      {/* Icon Section */}
      <div className="bg-[#D0E0FC] w-[40px] h-[40px] flex justify-center items-center rounded-full">
        <span role="img" className="text-[#2B71F0]" aria-label="document">
          <Book className="w-[18px] h-[19px]" />
        </span>
      </div>

      {/* Content Section */}
      <div className="ml-4 space-y-[8px] mt-4">
        <p className=" text-sm font-sans text-left text-underline-position-from-font text-decoration-skip-none text-[#667185]">
          {title}
        </p>

        <div className="flex items-center">
          <h2 className="text-[#101928] text-[18px] font-[600] leading-[26.1px] text-left text-underline-position-from-font text-decoration-skip-none font-sans">
            {value.toLocaleString()}
          </h2>

          <div className="flex items-center bg-[#E7F6EC] text-[#2B71F0] text-xs px-[4px] h-[17px] w-full space-x-[8px] rounded-[10px] ml-2">
            <ArrowUp size={12} className="mr-1" />
            {percentageChange}%
          </div>
        </div>
      </div>

      <div className="flex right-4 absolute top-4 space-x-[8px]  text-[#98A2B3] text-[12px] font-[400] leading-[17.4px] text-left text-underline-position-from-font text-decoration-skip-none font-sans " >
      <p className="">
        This Week  
      </p>
      <div>
      <ChevronDown className="w-[16px] h-[16px]" />
      </div>
      </div>

    </div>
  );
};

export default SummaryCard;
