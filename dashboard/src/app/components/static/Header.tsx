"use client"
import React, { useEffect } from "react";
import { Eye } from "lucide-react"; // Use lucide-react for the eye icon
import "typeface-work-sans";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { setUser } from '@/app/redux/slices/userSlice';

interface HeaderWithButtonProps {
  subtitle: string;
  buttonText?: string; // Make buttonText optional
  showButton?: boolean; // Add showButton to control visibility of button
}

const HeaderWithButton: React.FC<HeaderWithButtonProps> = ({
  subtitle,
  buttonText,
  showButton = true, // Default to true, so the button shows by default
}) => {
   const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.user.user);
  
    useEffect(() => {
      if (!user) {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          dispatch(setUser(parsedUser));
        }
      }
    }, [dispatch, user]);
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 sm:p-6 mb-2 rounded-lg">
      <div>
        {user && <h1 className="text-[#000000] text-[20px] sm:text-[24px] font-semibold font-sans">
          Welcome back {user.firstname},
        </h1>}
        
        <p className="text-[14px] sm:text-[16px] font-normal font-sans text-[#475367]">
          {subtitle}
        </p>
      </div>
      {showButton && buttonText && (
        <button
          className="flex items-center gap-2 px-6 py-3 mt-4 sm:mt-0 bg-[#2B71F0] text-white rounded-[8px] text-[14px] sm:text-[16px] font-sans font-medium"
        >
          <Eye className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" />
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default HeaderWithButton;
