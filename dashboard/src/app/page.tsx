"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import StatsCard from "./components/global/StatsCard";
import HeaderWithButton from "./components/static/Header";
import ChallengeCard from "./components/global/ChallengeCard";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { fetchChallenges } from '@/app/redux/slices/challengeSlice';  
import { AppDispatch } from '@/app/redux/store';  
import SummaryCard from "./components/global/SummaryCard";
import { ClipLoader } from 'react-spinners';

export default function Home() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();  // Use AppDispatch here
  const user = useSelector((state: RootState) => state.user.user);  // Get user from Redux store
  const challenges = useSelector((state: RootState) => state.challenges.challenges);  // Get challenges from Redux store
  const loading = useSelector((state: RootState) => state.challenges.loading);  // Get loading state

  // Redirect to signup page if user is not found
  useEffect(() => {
    if (!user) {
      router.push('/signup');
    }
  }, [user, router]);

  // Fetch challenges when the component mounts
  useEffect(() => {
    dispatch(fetchChallenges());  // This now works with the correct dispatch type
  }, [dispatch]);

  // If user is not found, return loading message
  if (!user) {
    return <p>Redirecting...</p>;
  }

  // If loading challenges, show a loading state
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="#2B71F0" size={50} /> {/* Centered spinner */}
      </div>
    );
  }


  // Sort challenges by createdAt (most recent first), without mutating the original array
  const sortedChallenges = challenges
    ?.slice()  // Create a shallow copy of the challenges array
    .sort((a, b) => {
      const dateA = new Date(a.createdAt);  // Convert createdAt string to Date
      const dateB = new Date(b.createdAt);
      return dateB.getTime() - dateA.getTime();  // Sort in descending order (latest first)
    });

  // Slice the first 3 latest challenges
  const latestChallenges = sortedChallenges?.slice(0, 3);

  console.log(challenges);

  return (
    <div className="h-full p-6">
      <div className="">
        <HeaderWithButton
          subtitle="Build Work Experience through Skills Challenges"
          buttonText="View Profile"
        />
      </div>

      {/* Conditionally render StatsCard or SummaryCard based on user role */}
      {user?.user_type === 'admin' ? (
       <div className="space-y-[16px]">
       <div className="flex gap-[16px] flex-wrap md:flex-nowrap">
         <SummaryCard title="Total Challenges" value={29405} percentageChange={15} />
         <SummaryCard title="Total Participants" value={29405} percentageChange={15} />
       </div>
       <div className="flex gap-[16px] flex-wrap md:flex-nowrap">
         <SummaryCard title="Completed Challenge" value={29405} percentageChange={15} />
         <SummaryCard title="Open Challenge" value={29405} percentageChange={15} />
         <SummaryCard title="Ongoing Challenge" value={29405} percentageChange={15} />
       </div>
     </div>
     
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
          <StatsCard label="Completed Challenge" value="03" />
          <StatsCard label="Open Challenges" value="20" />
          <StatsCard label="Ongoing Challenges" value="30" />
        </div>
      )}

      <div className="w-full max-w-7xl mx-auto py-10">

        {/* Header Section */}
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xl font-semibold text-gray-900">Recent Challenges</h2>
          <a href="#" className="text-blue-600 hover:underline text-sm">
            See all
          </a>
        </div>

        {/* Centered Challenges Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestChallenges && latestChallenges.length > 0 ? (
              latestChallenges.map((challenge) => (  // Map over the 3 latest challenges
                <ChallengeCard key={challenge.id} challenge={challenge} />
              ))
            ) : (
              <p>No challenges available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
