"use client";
import React, { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/redux/store";
import { fetchChallenges } from "@/app/redux/slices/challengeSlice";
import HeaderWithButton from '../components/static/Header';
import ChallengeFilterCard from '../components/global/ChallengeFilterCard';
import ChallengeCard from '../components/global/ChallengeCard';
import { Challenge } from '@/app/types/index';
import { useRouter } from "next/navigation";
import { AppDispatch } from '@/app/redux/store';
import { ClipLoader } from 'react-spinners';
import Link from "next/link";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.user.user);
  const challenges = useSelector((state: RootState) => state.challenges.challenges);
  const loading = useSelector((state: RootState) => state.challenges.loading);

  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  useEffect(() => {
    if (!user) {
      router.push('/signup');
    }
  }, [user, router]);

  useEffect(() => {
    dispatch(fetchChallenges());
  }, [dispatch]);

  const filteredChallenges = challenges?.filter((challenge) => {
    if (selectedStatus === "All") return true;
    // Match the status correctly from the backend
    return challenge.status.toLowerCase() === selectedStatus.toLowerCase();
  });

 
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <ClipLoader color="#2B71F0" size={50} /> {/* Centered spinner */}
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="px-4 sm:px-6 lg:px-8">
        <HeaderWithButton
          buttonText=""
          subtitle="Join a challenge or hackathon to gain valuable workspace experience"
          showButton={false}
        />
      </div>

      <div className="flex flex-wrap gap-4 mb-6 px-4 sm:px-6 lg:px-8">
        <ChallengeFilterCard
          active={selectedStatus === "All"}
          title="All Challenges"
          count={challenges?.length || 0}
          onClick={() => setSelectedStatus("All")}
        />
        <ChallengeFilterCard
          active={selectedStatus === "Closed"}
          title="Completed Challenges"
          count={challenges?.filter(challenge => challenge.status === "closed").length || 0}
          onClick={() => setSelectedStatus("closed")}
        />
        <ChallengeFilterCard
          active={selectedStatus === "Open"}
          title="Open Challenges"
          count={challenges?.filter(challenge => challenge.status === "open").length || 0}
          onClick={() => setSelectedStatus("open")}
        />
        <ChallengeFilterCard
          active={selectedStatus === "ongoing"}
          title="Ongoing Challenges"
          count={challenges?.filter(challenge => challenge.status === "ongoing").length || 0}
          onClick={() => setSelectedStatus("ongoing")}
        />
        {/* Show the "Create New Challenge" button only if the user is an admin */}
        {user?.user_type === "admin" && (
          <Link href={'/newChallenge'} >
            <button className="flex items-center font-sans  space-x-[3px] bg-[#2B71F0] border-[#2B71F0] border-[1px] text-white px-[14px] py-[10px] rounded-[8px] transition">
              <Plus className="w-[14px] h-[14px] font-bold" />
              <span> Create New Challenge</span>
            </button>
          </Link>
        )}
      </div>

      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredChallenges && filteredChallenges.length > 0 ? (
            filteredChallenges.map((challenge: Challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))
          ) : (
            <p className="text-black text-center flex justify-center">No challenges available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
