import React from 'react';

type CardProps = {
  icon: JSX.Element;
  title: string;
  content: string;
};

const Card: React.FC<CardProps> = ({ icon, title, content }) => {
  return (
    <div className="bg-[#2B71F0] text-white p-[48px] w-full rounded-[12px] shadow-md flex flex-col items-start mb-6 lg:mb-0">
      <div className="flex mb-4 w-[60px] h-[60px] justify-center items-center rounded-[5px] bg-white p-4 sm:p-0">
        {icon}
      </div>

      <h2 className="font-sans text-[20px] lg:text-[24px] font-bold leading-[28.8px] tracking-[-0.5px] mb-4 text-left">
        {title}
      </h2>
      <p className="font-sans text-[14px] lg:text-[16px] font-normal leading-[24px] text-left underline-offset-4 decoration-transparent">
        {content}
      </p>
    </div>
  );
};

export default Card;
