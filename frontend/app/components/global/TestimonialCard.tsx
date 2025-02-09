import React from "react";

type TestimonialCardProps = {
  name: string;
  title: string;
  location: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  title,
  location,
}) => {
  return (
    <div className="rounded-[10px] border-[0.91px] border-[#D2D2D2] bg-white p-4 w-full">
      {/* Video Placeholder */}
      <div className="relative bg-[#2B71F0] rounded-[13px] aspect-video mb-4">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/60 w-[60px] h-[60px] flex justify-center items-center text-center text-white rounded-full p-2 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-[44.79px] h-[39.3px]"
            >
              <path d="M9.75 8.75a.75.75 0 0 1 1.125-.653l6.75 3.75a.75.75 0 0 1 0 1.306l-6.75 3.75a.75.75 0 0 1-1.125-.653V8.75z" />
            </svg>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-4">
        <div className="rounded-full bg-[#2B71F0] w-12 h-12 flex items-center justify-center text-white text-lg font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <h3 className="font-bold text-[18px] text-[#00473B] font-sans">{name}</h3>
          <p className="text-[14px] font-medium text-[#737373]">
            {title}, {location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
