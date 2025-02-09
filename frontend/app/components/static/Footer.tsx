import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import Image from 'next/image';
import Logo from '@/public/Screenshot 2025-01-18 120701.png'

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#001A40] text-white w-full pb-5 opacity-100">
            {/* Top Section */}
            <div className="w-full max-w-[1241px] mx-auto py-5 flex border-b border-[#FFFFFF38] justify-between items-center gap-[35px] opacity-100 px-4 md:px-8">
                <div className="flex h-[73px] w-[79px] items-center">
                    <Image src={Logo} alt="Logo" className="h-full w-full" />
                </div>
                {/* Social Icons Section */}
                <div className="w-[180px] h-[40px] flex justify-between items-center gap-[6px] opacity-100">
                    <div className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full">
                        <a href="#" className="text-[#001A40]">
                            <FaFacebookF className="h-4 w-4" />
                        </a>
                    </div>
                    <div className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full">
                        <a href="#" className="text-[#001A40]">
                            <FaGooglePlusG className="h-4 w-4" />
                        </a>
                    </div>
                    <div className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full">
                        <a href="#" className="text-[#001A40]">
                            <FaLinkedinIn className="h-4 w-4" />
                        </a>
                    </div>
                    <div className="w-[40px] h-[40px] flex justify-center items-center bg-white rounded-full">
                        <a href="#" className="text-[#001A40]">
                            <FaYoutube className="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div  className="w-full max-w-[1241px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[35px] py-8 px-4 md:px-8">
            <div className="space-y-4 justify-center md:justify-start">
        <h4 className="font-['Work Sans'] text-[24px] font-[700] leading-[28.15px] text-left text-white">
            Our Address
        </h4>
        <p className="text-[16px] font-[400] leading-[26px] text-left">careers@pickett.com</p>
        <p className="text-[16px] font-[400] leading-[26px] text-left">99 Mb K. Ave, Kigali</p>
        <p className="text-[16px] font-[400] leading-[26px] text-left">+250 793 000 000</p>
    </div>
    <div className="space-y-4 justify-center md:justify-start">
        <h4 className="font-['Work Sans'] text-[24px] font-[700] leading-[28.15px] text-left text-white">
            Quick Links
        </h4>
        <a href="#" className="block text-[16px] font-[400] leading-[26px] text-gray-300 hover:text-white">Home</a>
        <a href="#" className="block text-[16px] font-[400] leading-[26px] text-gray-300 hover:text-white">Program</a>
        <a href="#" className="block text-[16px] font-[400] leading-[26px] text-gray-300 hover:text-white">About</a>
        <a href="#" className="block text-[16px] font-[400] leading-[26px] text-gray-300 hover:text-white">Contact Us</a>
    </div>
                <div className="w-full max-w-[1241px] mx-auto space-y-4">
    <h4 className="font-['Work Sans'] text-[24px] font-[700] leading-[28.15px] text-left text-white">
        Join our newsletter to keep up to date with us!
    </h4>
    <div className="relative w-full max-w-sm">
        <input
            type="email"
            className="w-full h-[76px] bg-white text-slate-700 text-[16px] font-[600] leading-[26px] text-left placeholder:text-slate-400 border border-slate-200 rounded-[10px] pl-[28px] pr-[146px] py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            placeholder="Email Address"
        />
        <button
            className="absolute top-[8px] right-[10px] w-[146px] h-[60px] rounded-[8px] bg-[#2B71F0] text-white text-center text-sm py-[10px] px-0 gap-[10px] transition-all shadow-sm hover:shadow focus:bg-[#1E60D1] focus:shadow-none active:bg-[#1E60D1] hover:bg-[#1E60D1] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
        >
            <span className="font-['Work Sans'] text-[16px] font-[700] leading-[18.77px] text-left">
                Subscribe
            </span>
        </button>
    </div>
</div>

            </div>

            {/* Bottom Section */}
            <div className="w-full max-w-[1241px] mx-auto flex justify-between items-center py-4 px-4 md:px-8 border-t border-[#FFFFFF38] opacity-100">
                <p className="text-sm font-['Work Sans'] text-left text-gray-300">
                    Copyright © All Rights Reserved SawaPay 2024.
                </p>
                <div className="flex space-x-4">
                    <a
                        href="#"
                        className="text-sm font-['Work Sans'] text-right text-gray-300 hover:text-white"
                    >
                        Privacy Policy | Terms and Conditions
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
