/* eslint-disable @typescript-eslint/ban-ts-comment */

"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateChallenge } from '@/app/redux/slices/editChallenge';
import SweetAlert from 'sweetalert2';
import { useRouter, useParams } from 'next/navigation';
import { AppDispatch } from '@/app/redux/store';
import { fetchChallengeDetails } from '@/app/redux/slices/challengeDetails';
import { ChallengeData } from '@/app/redux/slices/editChallenge';

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
    challenge_name: "",
    deadline: "",
    duration: "",
    money_prize: "",
    contact_email: "",
    project_description: "",
    project_brief: "",
    skills_needed: [] as string[],
    seniority_level: "",
    challenge_category: "",
    deliverables: "",
    project_requirements: ""
  });

  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const { id } = useParams() as { id: string };

  const { loading: stateLoading, error, successMessage } = useSelector((state: RootState) => state.editChallenge);
  const { challengeDetails, loading: challengeLoading, error: challengeError } = useSelector((state: RootState) => state.challengeDetails);

  useEffect(() => {
    if (id) dispatch(fetchChallengeDetails(id));
  }, [id, dispatch]);

  useEffect(() => {
    if (challengeDetails) {
      setFormData({
        challenge_name: challengeDetails.challenge_name,
        deadline: challengeDetails.deadline,
        duration: challengeDetails.duration,
        money_prize: challengeDetails.money_prize.toString(),
        contact_email: challengeDetails.contact_email,
        project_description: challengeDetails.project_description,
        project_brief: challengeDetails.project_brief,
        skills_needed: challengeDetails.skills_needed,
        seniority_level: challengeDetails.seniority_level,
        challenge_category: challengeDetails.challenge_category,
        deliverables: challengeDetails.deliverables,
        project_requirements: challengeDetails.project_requirements
      });
    }
  }, [challengeDetails]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData({ ...formData, skills_needed: value.split(',').map(skill => skill.trim()) });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData: ChallengeData = {
      challenge_name: formData.challenge_name,
      skills_needed: formData.skills_needed,
      seniority_level: formData.seniority_level,
      duration: formData.duration,
      deadline: formData.deadline,
      status: 'open',
      money_prize: parseFloat(formData.money_prize),
      contact_email: formData.contact_email,
      project_description: formData.project_description,
      project_brief: formData.project_brief,
      project_requirements: formData.project_requirements,
      challenge_category: formData.challenge_category,
      deliverables: formData.deliverables
    };

    dispatch(updateChallenge({ id, challengeData: submissionData }));
  };

  useEffect(() => {
    if (successMessage) {
      SweetAlert.fire({
        title: 'Success!',
        text: successMessage,
        icon: 'success',
      }).then(() => {
        router.push(`/challenge/${id}`);
      });
    }

    if (error) {
      SweetAlert.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
      });
    }
  }, [successMessage, error, id, router]);

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
                value={formData.challenge_name}
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
                  value={formData.money_prize}
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
                  value={formData.contact_email}
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
                value={formData.skills_needed.join(', ')}
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
                value={formData.seniority_level}
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
                value={formData.challenge_category}
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
                value={formData.project_requirements}
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
                value={formData.project_brief}
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
                value={formData.project_description}
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
