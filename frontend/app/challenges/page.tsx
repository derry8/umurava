"use client"
import React, { useEffect } from 'react';
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useDispatch, useSelector } from 'react-redux';
import { fetchChallenges } from '@/app/redux/challengesSlice';
import ChallengeCard from '@/app/components/global/ChallengeCard';
import { RootState, AppDispatch } from '@/app/redux/store'; // Adjust the import if needed

const ChallengesPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  // Get challenges, status, and error from Redux store
  const { challenges, status, error } = useSelector(
    (state: RootState) => state.challenges
  );

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchChallenges());
    }
  }, [dispatch, status]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  // Sort challenges by createdAt (latest first)
  const sortedChallenges = [...challenges].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime(); // Sort in descending order
  });

  return (
    <div className="bg-[#F9FAFB]">
      <div className="container mx-auto py-16 md:py-20 lg:py-24 gap-[47px] px-6 md:px-12 lg:px-24">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center mb-12">
          <button className="flex items-center text-[#667185]">
            <div className="bg-[#FFFFFF] mx-4 rounded-[4px] flex justify-center items-center text-center border-[1px] border-[#E4E7EC] h-[24px] w-[24px]">
              <ArrowLeftIcon className="w-[13px] h-[13px] text-[#000000]" />
            </div>
            Go Back
          </button>
          <span className="text-[#98A2B3] mx-3">/</span>
          <h2 className="text-[#2B71F0] text-[14px] font-medium">Challenges & Hackathons</h2>
        </div>

        {/* Challenges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedChallenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengesPage;
