/* eslint-disable @typescript-eslint/ban-ts-comment */

"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateChallenge } from '@/app/redux/slices/editChallenge';
import SweetAlert from 'sweetalert2';
import { useRouter } from 'next/navigation';
import { useParams } from 'next/navigation';
import { AppDispatch } from '@/app/redux/store';
import { fetchChallengeDetails } from '@/app/redux/slices/challengeDetails';
import { ChallengeData } from '@/app/redux/slices/editChallenge'; // Import your fetch challenge action

interface ChallengeDetails {
  challenge_name: string;
  deadline: string;
  duration: string;
  money_prize: number;
  contact_email: string;
  project_description: string;
  project_brief: string;
  skills_needed: string[];
  seniority_level: string;
  challenge_category: string;
  deliverables: string;
  project_requirements: string;
}

interface RootState {
  editChallenge: {
    loading: boolean;
    error: string | null;
    successMessage: string | null;
  };
  challengeDetails: {
    challengeDetails: ChallengeDetails | null;
    loading: boolean;
    error: string | null;
  };
}

const EditForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    deadline: "",
    duration: "",
    prize: "",
    email: "",
    description: "",
    brief: "",
    tasks: "",
    skillsNeeded: [] as string[],
    seniorityLevel: "",
    challengeCategory: "",
    deliverables: "",
    projectRequirements: ""
  });

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { loading: stateLoading, error, successMessage } = useSelector((state: RootState) => state.editChallenge);
  const { challengeDetails, loading: challengeLoading, error: challengeError } = useSelector((state: RootState) => state.challengeDetails); // Added selector for challenge details
  
  const { id } = useParams() as { id: string };

  // Fetch the existing challenge data on mount
  useEffect(() => {
    if (id) {
      dispatch(fetchChallengeDetails(id));
    }
  }, [id, dispatch]);

  // When challengeDetails is available, update the form data
  useEffect(() => {
    if (challengeDetails) {
      setFormData({
        title: challengeDetails.challenge_name,
        deadline: challengeDetails.deadline,
        duration: challengeDetails.duration,
        prize: challengeDetails.money_prize.toString(),
        email: challengeDetails.contact_email,
        description: challengeDetails.project_description,
        brief: challengeDetails.project_brief,
        tasks: "", // Assuming you don't have tasks data in the response
        skillsNeeded: challengeDetails.skills_needed,
        seniorityLevel: challengeDetails.seniority_level,
        challengeCategory: challengeDetails.challenge_category,
        deliverables: challengeDetails.deliverables,
        projectRequirements: challengeDetails.project_requirements
      });
    }
  }, [challengeDetails]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const skillsNeeded = value ? value.split(',').map(skill => skill.trim()) : [];
    setFormData({ ...formData, skillsNeeded });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData: ChallengeData = {
      skills: formData.skillsNeeded,
      seniority: formData.seniorityLevel,
      timeline: formData.duration,
      title: formData.title,
      deadline: formData.deadline,
      Status: 'open', 
      prize: Number(formData.prize),
      contactEmail: formData.email,
      projectDescription: formData.description,
      projectBrief: formData.brief,
      projectRequirements: formData.projectRequirements,
      category: formData.challengeCategory,
      deliverable: formData.deliverables
    };
    
  
    dispatch(updateChallenge({ id, challengeData: submissionData }));
  };
  

  useEffect(() => {
    if (id && typeof id === 'string') {
      dispatch(fetchChallengeDetails(id));
    }
  }, [id, dispatch]);
  
   // make sure dispatch is included if necessary
  
  useEffect(() => {
    if (successMessage) {
      SweetAlert.fire({
        title: 'Success!',
        text: successMessage,
        icon: 'success',
      }).then(() => {
        router.push(`/challenge/${id}`); // Redirect after success
      });
    }
  
    if (error) {
      SweetAlert.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
      });
    }
  }, [successMessage, error, id, router]); // include id and router
  
  return (
    <div className="h-full w-full p-6">
      <div className="w-full max-w-[624px] mx-auto py-[32px] px-[24px] border-[1px] border-[#E4E7EC] gap-[20px] rounded-[10px] bg-white">
        <h2 className="text-2xl text-black font-bold text-center">Edit Challenge</h2>
        <p className="text-[#8C94A6] font-normal text-[16px] font-sans text-center mb-4">
          Fill out these details to edit your challenge
        </p>

        {challengeLoading ? (
          <p>Loading challenge details...</p>
        ) : challengeError ? (
          <p>Error loading challenge details: {challengeError}</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 p-4">
            {/* Title Input */}
            <div>
              <label htmlFor="title" className="text-[#475367] font-medium text-[14px] font-sans">Challenge/Hackathon Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                placeholder="Enter Title"
                className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px] border-[#FA9874] focus:ring focus:ring-[#FA9874]"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="deadline" className="text-[#475367] font-medium text-[14px] font-sans">Deadline</label>
                <input
                  type="text"
                  placeholder="Date"
                  name="deadline"
                  value={formData.deadline}
                  className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px]"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="duration" className="text-[#475367] font-medium text-[14px] font-sans">Duration</label>
                <input
                  type="text"
                  name="duration"
                  value={formData.duration}
                  placeholder="Duration"
                  className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px]"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Prize and Email Inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="prize" className="text-[#475367] font-medium text-[14px] font-sans">Money Prize</label>
                <input
                  type="text"
                  name="prize"
                  value={formData.prize}
                  placeholder="Prize"
                  className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px]"
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="text-[#475367] font-medium text-[14px] font-sans">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="Email"
                  className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px]"
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Skills Needed Input */}
            <div>
              <label htmlFor="skillsNeeded" className="text-[#475367] font-medium text-[14px] font-sans">Skills Needed (comma separated)</label>
              <input
                type="text"
                name="skillsNeeded"
                value={formData.skillsNeeded.join(', ')}
                placeholder="Enter skills needed"
                className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px]"
                onChange={handleSkillsChange}
              />
            </div>

            {/* Seniority Level Input */}
            <div>
              <label htmlFor="seniorityLevel" className="text-[#475367] font-medium text-[14px] font-sans">Seniority Level</label>
              <input
                type="text"
                name="seniorityLevel"
                value={formData.seniorityLevel}
                placeholder="Seniority level"
                className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px]"
                onChange={handleChange}
              />
            </div>

            {/* Challenge Category Input */}
            <div>
              <label htmlFor="challengeCategory" className="text-[#475367] font-medium text-[14px] font-sans">Challenge Category</label>
              <input
                type="text"
                name="challengeCategory"
                value={formData.challengeCategory}
                placeholder="Enter challenge category"
                className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px]"
                onChange={handleChange}
              />
            </div>

            {/* Deliverables Input */}
            <div>
              <label htmlFor="deliverables" className="text-[#475367] font-medium text-[14px] font-sans">Deliverables</label>
              <input
                type="text"
                name="deliverables"
                value={formData.deliverables}
                placeholder="Enter deliverables"
                className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px]"
                onChange={handleChange}
              />
            </div>

            {/* Project Requirements Textarea */}
            <div>
              <label htmlFor="projectRequirements" className="text-[#475367] font-medium text-[14px] font-sans">Project Requirements</label>
              <textarea
                name="projectRequirements"
                value={formData.projectRequirements}
                placeholder="Enter project requirements..."
                maxLength={500}
                className="w-full border-[1px] text-black border-gray-300 gap-[12px] h-[114px] py-[22px] px-[16px] rounded-[6px] resize-none"
                onChange={handleChange}
              />
              <p className="text-sm text-gray-400">Keep this simple (max 500 characters)</p>
            </div>

            {/* Project Brief Textarea */}
            <div>
              <label htmlFor="brief" className="text-[#475367] font-medium text-[14px] font-sans">Project Brief</label>
              <textarea
                name="brief"
                value={formData.brief}
                placeholder="Enter project brief..."
                maxLength={500}
                className="w-full border-[1px] text-black border-gray-300 gap-[12px] h-[114px] py-[22px] px-[16px] rounded-[6px] resize-none"
                onChange={handleChange}
              />
              <p className="text-sm text-gray-400">Keep this brief (max 500 characters)</p>
            </div>

            {/* Project Description Textarea */}
            <div>
              <label htmlFor="description" className="text-[#475367] font-medium text-[14px] font-sans">Project Description</label>
              <textarea
                name="description"
                value={formData.description}
                placeholder="Enter detailed project description..."
                maxLength={1000}
                className="w-full border-[1px] text-black border-gray-300 gap-[12px] h-[114px] py-[22px] px-[16px] rounded-[6px] resize-none"
                onChange={handleChange}
              />
              <p className="text-sm text-gray-400">Provide a detailed description (max 1000 characters)</p>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <button
                type="button"
                className="w-full sm:w-[42.5%] border-[1.5px] h-[55px] rounded-[8px] py-[16px] px-[24px] text-[#2B71F0] border-[#2B71F0] font-sans text-[16px] font-semibold"
                onClick={() => router.push('/challenges-hackathons')} // Cancel button redirects to list
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-full sm:w-[50%] p-2 border-[1.5px] h-[55px] rounded-[8px] py-[16px] px-[24px] text-white bg-[#2B71F0] font-sans text-[16px] font-semibold"
              >
                {stateLoading ? 'Updating...' : 'Update Challenge'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default EditForm;
