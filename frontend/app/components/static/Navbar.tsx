"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/Screenshot 2025-01-18 101722.png';
import { usePathname } from 'next/navigation'; // Updated import

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current pathname

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Function to check if the current path is active
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="flex items-center h-[96px] px-6 lg:px-[100px] z-50 bg-white border-gray-300 opacity-100 w-full">
      {/* Logo Section */}
      <div className="flex items-center w-[125px] h-[37.01px] gap-0 opacity-100">
        <Image src={Logo} alt="Logo" className="h-full object-cover w-full" />
      </div>

      {/* Navbar Links Section (Hidden on small screens) */}
      <div className={`hidden lg:flex flex-grow justify-center space-x-8`}>
        <Link href="/home">
          <span
            className={`font-DM-Sans font-medium text-[14px] leading-[22.4px] cursor-pointer ${
              isActive('/home') ? 'text-[#2B71F0]' : 'text-[#2B3338]'
            }`}
          >
            Home
          </span>
        </Link>
        <Link href="/challenges">
          <span
            className={`font-DM-Sans font-medium text-[14px] hover:text-[#2B71F0] leading-[22.4px] cursor-pointer ${
              isActive('/challenges') ? 'text-[#2B71F0]' : 'text-[#2B3338]'
            }`}
          >
            Challenge & Hackathons
          </span>
        </Link>
        <Link href="/education">
          <span
            className={`font-DM-Sans font-medium text-[14px] hover:text-[#2B71F0] leading-[22.4px] cursor-pointer ${
              isActive('/education') ? 'text-[#2B71F0]' : 'text-[#2B3338]'
            }`}
          >
            For Educational Institutions
          </span>
        </Link>
        <Link href="/about">
          <span
            className={`font-DM-Sans font-medium text-[14px] hover:text-[#2B71F0] leading-[22.4px] cursor-pointer ${
              isActive('/about') ? 'text-[#2B71F0]' : 'text-[#2B3338]'
            }`}
          >
            About Us
          </span>
        </Link>
        <Link href="/contact">
          <span
            className={`font-DM-Sans font-medium text-[14px] hover:text-[#2B71F0] leading-[22.4px] cursor-pointer ${
              isActive('/contact') ? 'text-[#2B71F0]' : 'text-[#2B3338]'
            }`}
          >
            Contact Us
          </span>
        </Link>
      </div>

      {/* Join Button (Hidden on small screens) */}
      <Link href="/join">
        <button className="hidden lg:block font-DM-Sans bg-[#041738] w-[207px] h-[46px] px-[24px] rounded-[6px] border-[1px] border-gray-300 opacity-100 cursor-pointer">
          <span className="text-white text-[14px] leading-[21px] tracking-[1px] text-center">
            Join the Program
          </span>
        </button>
      </Link>

      {/* Mobile Menu Toggle (Hamburger) */}
      <div className="lg:hidden flex items-center ml-auto">
        <button onClick={toggleMenu} className="text-[#2B71F0] focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} z-50 absolute top-[96px] text-center items-center bg-[#2B71F0] left-0 w-full border-gray-300 border-t py-4`}>
        <Link href="/home">
          <span className="block px-6 py-2 font-DM-Sans font-medium text-white text-[14px]">
            Home
          </span>
        </Link>
        <Link href="/challenges">
          <span className="block px-6 py-2 font-DM-Sans font-medium text-white text-[14px] hover:text-[#2B71F0]">
            Challenge & Hackathons
          </span>
        </Link>
        <Link href="/education">
          <span className="block px-6 py-2 font-DM-Sans font-medium text-white text-[14px] hover:text-[#2B71F0]">
            For Educational Institutions
          </span>
        </Link>
        <Link href="/about">
          <span className="block px-6 py-2 font-DM-Sans font-medium text-white text-[14px] hover:text-[#2B71F0]">
            About Us
          </span>
        </Link>
        <Link href="/contact">
          <span className="block px-6 py-2 font-DM-Sans font-medium text-white text-[14px] hover:text-[#2B71F0]">
            Contact Us
          </span>
        </Link>

        <Link href="/join">
          <button className="font-DM-Sans bg-[#041738] w-[90%] h-[46px] px-[24px] rounded-[6px] opacity-100 cursor-pointer mt-4 mx-auto">
            <span className="text-white text-[14px] leading-[21px] tracking-[1px] text-center">
              Join the Program
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
