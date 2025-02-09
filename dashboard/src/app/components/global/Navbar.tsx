import React from "react";
import { Bell, Search } from "lucide-react"; // Icons from lucide-react
import User from '../../../../public/dc0f3d0f-1eec-4a31-b458-6a03dbf7297d.jpg'
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full h-[64px] px-4 sm:px-6 md:px-8 lg:px-[36px] bg-[#FFFFFF]">
        {/* Search Bar */}
        <div className="flex items-center w-full max-w-lg space-x-4">
          <div className="relative bg-[#f9fafb] w-full">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <Search className="w-5 h-5 text-[#52525b]" />
            </span>
            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-[#f9fafb] h-[40px] text-[#757575] placeholder:text-[#757575] py-2 pl-10 pr-4 rounded-[5px] text-sm border focus:outline-none focus:ring-2 focus:ring-blue-300 sm:w-[400px] md:w-[500px] lg:w-[629px]"
            />
          </div>
        </div>

        {/* Notification Icon & Profile */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Notification Bell */}
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#F0F2F5] rounded-full cursor-pointer ml-4 sm:ml-0">
            <Bell className="w-5 h-5 text-[#4B5563]" />
          </div>

          {/* Profile Image */}
          <div className="flex items-center justify-center w-[40px] h-[40px] bg-gray-300 rounded-full overflow-hidden cursor-pointer">
            <Image
              src={User} // Replace with user's profile image
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Navbar;
