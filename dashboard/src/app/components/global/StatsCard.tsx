import React from "react";
import { BookText } from "lucide-react";
import 'typeface-work-sans';

interface CardProps {
  label: string;
  value: string;
}

const StatsCard: React.FC<CardProps> = ({ label, value }) => {
  return (
    <div className="flex items-center w-full h-[108px] p-[15.23px] gap-[10.23px] bg-[#FFFFFF] border-[#E4E7EC] border-[0.95px] rounded-[11.42px]">
      <div className="bg-[#2B71F0] w-[5px] h-[45px] rounded-[5px]" />
      <div>
        <h2 className="text-[#344054] text-[14px] font-medium font-sans">{label}</h2>
        <p className="text-2xl font-sans text-[#344054] text-[19.03px] font-semibold">{value}</p>
      </div>
      <div className="ml-auto bg-[#D0E0FC] w-[47px] h-[47px] items-center flex justify-center rounded-[23px]">
        <BookText className="text-[#2B71F0] w-[24px] h-[24px]" />
      </div>
    </div>
  );
};

export default StatsCard;
