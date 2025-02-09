"use client";
import React, { useState } from "react";
import { Home, FileText, Users, Settings, Headphones, Gift, LogOut } from "lucide-react";
import CommunityCard from "../static/CommunityCard"; 
import User from '../../../../public/dc0f3d0f-1eec-4a31-b458-6a03dbf7297d.jpg';
import Image from "next/image";
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import Logo from '../../../../public/Screenshot 2025-02-09 130023.png';

const Sidebar: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const [isCommunityModalOpen, setIsCommunityModalOpen] = useState(false);

  const toggleCommunityModal = () => {
    setIsCommunityModalOpen(!isCommunityModalOpen);
  };

  return (
    <>
      <aside className="bg-[#2B71F0] h-screen flex flex-col justify-between py-8 px-4 transition-all duration-300 w-[72px] lg:w-[272px]">
        <div className="space-y-6">
          {/* Logo and Navigation Links */}
          <div className="flex mb-5 justify-center sm:justify-start">
            <div className="w-[55px] h-[35px] flex items-center justify-center">
              <Image src={Logo} className="w-full h-full" alt="Logo" />
            </div>
          </div>

          <nav className="space-y-2">
            <a href="/" className="flex w-full space-x-4 px-[12px] py-[16px] h-[44px] text-[#2B71F0] items-center rounded-[4px] bg-white hover:bg-blue-100">
              <Home className="w-5 h-5" />
              <span className="text-[14px] font-medium hidden lg:inline">Dashboard</span>
            </a>
            <a href="/challenge" className="flex w-full space-x-4 px-[12px] py-[16px] h-[44px] text-white items-center rounded-[4px] bg-transparent hover:bg-white hover:bg-opacity-20">
              <FileText className="w-5 h-5" />
              <span className="text-[14px] font-medium hidden lg:inline">Challenges & Hackathons</span>
            </a>
            <button onClick={toggleCommunityModal} className="flex w-full space-x-4 px-[12px] py-[16px] h-[44px] text-white items-center rounded-[4px] bg-transparent hover:bg-white hover:bg-opacity-20">
              <Users className="w-5 h-5" />
              <span className="text-[14px] font-medium hidden lg:inline">Community</span>
            </button>
          </nav>
        </div>

        <div className="space-y-6">
          <nav className="space-y-2">
            <a href="#" className="flex items-center space-x-4 text-white px-[12px] py-[10px] rounded-lg hover:bg-white hover:bg-opacity-20 transition">
              <Settings className="w-5 h-5" />
              <span className="hidden lg:inline">Settings</span>
            </a>
            <a href="#" className="flex items-center space-x-4 text-white px-[12px] py-[10px] rounded-lg hover:bg-white hover:bg-opacity-20 transition">
              <Headphones className="w-5 h-5" />
              <span className="hidden lg:inline">Help Center</span>
            </a>
            <a href="#" className="flex items-center space-x-4 text-white px-[12px] py-[10px] rounded-lg hover:bg-white hover:bg-opacity-20 transition">
              <Gift className="w-5 h-5" />
              <span className="hidden lg:inline">Refer family & friends</span>
            </a>
          </nav>

          <div className="flex px-[12px] py-[12px] items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-[40px] h-[40px] lg:inline hidden rounded-full bg-gray-200 overflow-hidden">
                <Image src={User} alt="Profile" className="w-full h-full object-cover" />
              </div>
              {/* Conditional rendering to avoid null error */}
              {user && (
                <div className="text-white hidden lg:inline">
                  <p className="text-sm font-semibold">{user.firstname}</p>
                  <p className="text-xs text-gray-300">{user.email}</p>
                </div>
              )}
            </div>
            <LogOut className="w-6 h-6 text-white cursor-pointer hover:text-gray-300 transition" />
          </div>
        </div>
      </aside>

      {isCommunityModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex justify-center items-center" onClick={() => setIsCommunityModalOpen(false)}>
          <div onClick={(e) => e.stopPropagation()}>
            <CommunityCard />
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
