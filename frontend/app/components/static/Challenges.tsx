"use client"; // Add this line to mark this file as a Client Component
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // No need for Provider here anymore
import ChallengeCard from '../global/ChallengeCard';
import { RootState, AppDispatch } from '../../../app/redux/store';
import { fetchChallenges } from '../../../app/redux/challengesSlice';
import { Challenge } from '../../../app/types/index';

const Challenges: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { challenges, status, error } = useSelector((state: RootState) => state.challenges);

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

  // Sort challenges by the createdAt field in descending order (latest first)
  const sortedChallenges = [...challenges].sort((a, b) => {
    const dateA = new Date(a.createdAt);
    const dateB = new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime(); // Descending order
  });

  // Limit to the latest 3 challenges
  const latestChallenges = sortedChallenges.slice(0, 3);

  return (
    <section className="bg-white overflow-hidden py-16 px-4 sm:px-6 md:px-8">
      <div className="text-center gap-[35px] mb-10 px-4 sm:px-6 md:px-8">
        <h1 className="text-[28px] sm:text-[34px] md:text-[40px] font-bold font-sans text-[#03192E]">
          Explore Challenges & Hackathons
        </h1>
        <p className="mt-4 text-[#687588] text-[14px] sm:text-[14px] md:text-[18px] text-center">
          Join Skills Challenges Program to accelerate your career growth and become <br /> part of Africa&rsquo;s largest workforce of digital professionals.
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl px-4 sm:px-6">
          {latestChallenges.map((challenge: Challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} />
          ))}
        </div>
      </div>

      <div className="text-center mt-14 px-4 sm:px-6">
        <button className="border-[#2B71F0] border-[1px] text-[#2B71F0] w-[207px] text-center font-semibold font-sans px-[24px] py-[21px] rounded-lg text-[16px] sm:text-[18px]">
          View More
        </button>
      </div>
    </section>
  );
};

export default Challenges;
