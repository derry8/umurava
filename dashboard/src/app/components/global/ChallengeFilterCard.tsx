import React from "react";
import { Book } from "lucide-react";

type ChallengeFilterCardProps = {
  title: string;
  count: number;
  active?: boolean;
  onClick: () => void; // Added onClick prop
};

const ChallengeFilterCard: React.FC<ChallengeFilterCardProps> = ({
  title,
  count,
  active,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center space-x-[10px] py-[12px] px-[15px] cursor-pointer h-[44px] rounded-[6px] border-[1px] transition-all ${
        active
          ? "bg-[#D0E0FC] border-[#FCD2C2] opacity-100"
          : "bg-[#F0F2F5] border-[1px] text-[#344054]  border-[#D0D5DD]"
      }`}
      onClick={onClick} // Trigger onClick when card is clicked
    >
      {/* Book icon on the left */}
      <Book className="w-[12px] h-[14px] text-[#2B71F0]" />

      {/* Text in the middle */}
      <span className="text-[14px] font-sans font-medium text-[#101928] flex-grow text-center">
        {title}
      </span>

      {/* Count on the right */}
      <span
        className={`text-xs font-semibold w-[24px] h-[17px] items-center text-center flex justify-center px-[6px] py-1 rounded-full ${
          active ? "bg-[#2B71F0] text-white" : "bg-[#E4E7EC] text-[#344054]"
        }`}
      >
        {count}
      </span>
    </div>
  );
};

export default ChallengeFilterCard;
