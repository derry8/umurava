import Image from 'next/image';
import React from 'react';
import { ChallengeCardProps } from '@/app/types/index';
import Logo from '../../../../public/Screenshot 2025-01-19 192258.png'; // Add a default logo image
import Link from 'next/link';

const ChallengeCard: React.FC<ChallengeCardProps> = ({ challenge }) => {
  return (
    <div key={challenge.id} className="bg-white rounded-[12px] border-[0.98px] border-[#E4E7EC] h-full w-full px-[16px] pt-[16px]">
      <div className="bg-[#2B71F0] relative rounded-lg h-[199px] flex items-center justify-center">
        <span className="bg-[#0F973D] absolute top-[13px] right-[13px] text-center w-[81px] h-[28px] z-30 font-sans font-normal text-[14px] text-white rounded-[12px] flex items-center justify-center">
          {challenge.status.charAt(0).toUpperCase() + challenge.status.slice(1)}
        </span>

        {/* Use the logo if available, otherwise fall back to DefaultLogo */}
        <Image 
          src={challenge.logo || Logo} 
          alt="Logo" 
          className="w-[221px] h-[72px]" 
        />
      </div>

      <div className="gap-5 py-4">
        <h3 className="text-[17px] w-full h-full my-2 font-sans font-semibold text-[#101928]">
          {challenge.title}
        </h3>

        <div className="flex mt-2">
          <p className="font-semibold text-[11px] font-sans text-[#25272B]">Skills Needed:</p>
        </div>

        {/* Skills */}
        <div className="flex gap-2 mt-2 flex-wrap">
          {challenge.skills.map((skill, index) => (
            <span
              key={index}
              className="border-[1px] border-[#2B71F0] text-center px-[6.39px] h-[24.7px] rounded-[10px] text-[#2B71F0] text-[12px] font-medium flex items-center justify-center"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Seniority Level and Timeline */}
        <p className="text-sm text-[#475367] mt-1">
          <strong className="text-[#171717] font-semibold text-[12px] font-sans">Seniority Level:</strong> ({challenge.seniority})
        </p>
        <p className="text-sm text-[#475367] mt-1">
          <strong className="text-[#171717] font-semibold text-[12px] font-sans">Timeline:</strong> {challenge.timeline}
        </p>
        <div className="-mx-4 w-[calc(100%+32px)] h-[1.5px] mt-4 bg-[#E4E7EC]"></div>

        <div className="w-full mt-6 flex items-center justify-end">
          <Link href={`https://umurava-dashboard-zeta.vercel.app/challenge/${challenge.id}`}>
            <button className="bg-[#2B71F0] text-white text-sm py-2 px-6 rounded-lg">View Challenge</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChallengeCard;
