import React, { useState, useEffect } from "react";
import 'typeface-work-sans';
import SweetAlert from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { createChallenge } from '@/app/redux/slices/createChallenge';
import { AppDispatch } from '@/app/redux/store';
import { ChallengeData } from '@/app/redux/slices/createChallenge';

interface CreateChallengeState {
  loading: boolean;
  error: string | null;
  successMessage: string | null;
}

const ChallengeForm: React.FC = () => {
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

  const dispatch = useDispatch<AppDispatch>();  // Type dispatch correctly
  const { loading, error, successMessage } = useSelector(
    (state: { createChallenge: CreateChallengeState }) => state.createChallenge
  );


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
      challenge_name: formData.title,  // Changed from title
      skills_needed: formData.skillsNeeded,  // Changed from skills
      seniority_level: formData.seniorityLevel,  // Changed from seniority
      duration: formData.duration,  // Changed from timeline
      deadline: formData.deadline,
      status: "open",  // Set a default value if it's required
      money_prize: parseFloat(formData.prize),  // Changed from prize
      contact_email: formData.email,  // Changed from contactEmail
      project_description: formData.description,  // Changed from projectDescription
      project_brief: formData.brief,  // Changed from projectBrief
      project_requirements: formData.projectRequirements,
      challenge_category: formData.challengeCategory,  // Changed from category
      deliverables: formData.deliverables  // Changed from deliverable
    };

    console.log(submissionData);

    dispatch(createChallenge(submissionData));
};



  // Display success or error alert
  useEffect(() => {
    if (successMessage) {
      SweetAlert.fire({
        title: 'Success!',
        text: successMessage,
        icon: 'success',
      });
    }

    if (error) {
      SweetAlert.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
      });
    }
  }, [successMessage, error]);

  return (
    <div className="h-full w-full p-6">
      <div className="w-full max-w-[624px] mx-auto py-[32px] px-[24px] border-[1px] border-[#E4E7EC] gap-[20px] rounded-[10px] bg-white">
        <h2 className="text-2xl text-black font-bold text-center">Create New Challenge</h2>
        <p className="text-[#8C94A6] font-normal text-[16px] font-sans text-center mb-4">
          Fill out these details to build your broadcast
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 p-4">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="text-[#475367] font-medium text-[14px] font-sans">Challenge/Hackathon Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter Title"
              className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px] focus:ring "
              onChange={handleChange}
            />
          </div>

          {/* Deadline and Duration Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="deadline" className="text-[#475367] font-medium text-[14px] font-sans">Deadline</label>
              <input
                type="text"
                placeholder="Date"
                name="deadline"
                className="w-full border-[1px] text-black rounded-[6px] p-[16px] gap-[12px] h-[56px]"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="duration" className="text-[#475367] font-medium text-[14px] font-sans">Duration</label>
              <input
                type="text"
                name="duration"
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
              placeholder="Enter detailed project description..."
              maxLength={1000}
              className="w-full border-[1px] text-black border-gray-300 gap-[12px] h-[114px] py-[22px] px-[16px] rounded-[6px] resize-none"
              onChange={handleChange}
            />
            <p className="text-sm text-gray-400">Provide a detailed description (max 1000 characters)</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button className="w-full sm:w-[42.5%] border-[1.5px] h-[55px] rounded-[8px] py-[16px] px-[24px] text-[#2B71F0] border-[#2B71F0] font-sans text-[16px] font-semibold">
              Cancel
            </button>
            <button type="submit" className="w-full sm:w-[50%] p-2 border-[1.5px] h-[55px] rounded-[8px] py-[16px] px-[24px] text-white bg-[#2B71F0] font-sans text-[16px] font-semibold">
              {loading ? 'Creating...' : 'Create Challenge'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChallengeForm;
