"use client"
import React, { useEffect } from "react";
import Image from "next/image";
import { Mail } from "lucide-react";
import Logo from "../../../../public/Screenshot 2025-01-19 192258.png";
import { useRouter } from "next/navigation";
import { RootState, AppDispatch } from "@/app/redux/store";
import Swal from "sweetalert2";
import { deleteChallenge } from "@/app/redux/slices/deleteChallenge";
import { useDispatch, useSelector } from "react-redux";
import "typeface-work-sans";
import Link from "next/link";

interface ChallengeDetails {
  _id: string;
  challenge_name: string;
  project_description: string;
  contact_email: string;
  challenge_category: string;
  duration: string;
  project_brief: string;
  money_prize: number;
  skills_needed: string[];
  project_requirements: string;
  deliverables: string;
}

const ProjectDetailsCard: React.FC<{ challengeDetails: ChallengeDetails }> = ({ challengeDetails }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);
  const { loading, success } = useSelector((state: RootState) => state.deleteChallenge);

  useEffect(() => {
    if (!user) {
      router.push("/signup");
    }
  }, [user, router]);

  const handleDelete = (challengeId: string) => {
    // Show SweetAlert to confirm the delete action
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete the challenge with ID: ${challengeId}?`, // Correctly display the ID
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Dispatch the delete action if user confirms
        dispatch(deleteChallenge(challengeId));
        Swal.fire('Deleted!', 'Your challenge has been deleted.', 'success');
      } else {
        Swal.fire('Cancelled', 'Your challenge is safe :)', 'info');
      }
    });
  };

  // If deletion is successful, navigate to another page or show a success message
  useEffect(() => {
    if (success) {
      Swal.fire('Deleted!', 'The challenge has been deleted.', 'success');
      router.push("/challenges"); // Redirect to challenges page or list
    }
  }, [success, router]);

  const participants = [
    { name: "Hilaire Sh", role: "Product Designer", avatar: "", online: false },
    { name: "Christian Manzi", role: "UI/UX Designer", avatar: "", online: true },
    { name: "Jolly Mutesi", role: "Content Creator", avatar: "", online: true },
    { name: "Dr. Samuel Smith", role: "Mental Health Professional", avatar: "", online: true },
    { name: "Dr. Lily Chen", role: "Dermatologist", avatar: "", online: true },
  ];

  return (
    <div className="flex flex-col md:flex-row rounded-lg w-full space-y-6 md:space-x-6 md:space-y-0">
      {/* Left Section */}
      <div className="bg-white border border-[#E4E7EC] rounded-lg p-6 w-full md:w-[65%]">
        <div className="bg-[#2B71F0] rounded-lg h-[296px] w-full flex items-center justify-center">
          <Image
            src={Logo}
            alt="Umurava Logo"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>
        <h2 className="font-semibold font-sans text-[#000000] text-[20px] mt-4">{challengeDetails.challenge_name}</h2>
        <p className="text-[#475367] w-full font-normal font-sans text-[16px] mt-2">
          {challengeDetails.project_brief}
        </p>
        <h3 className="font-semibold font-sans w-full text-[#000000] text-[20px] mt-4">Tasks:</h3>
        <h3 className="font-semibold font-sans w-full text-[#000000] text-[20px] mt-4">Product Requirements</h3>
        <ul className="list-disc pl-6 w-full text-[#475367] font-normal font-sans text-[16px] mt-2">
          {challengeDetails.project_requirements.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="font-semibold w-full font-sans text-[#000000] text-[20px] mt-4">Product Design:</h3>
        <ul className="list-disc pl-6 w-full text-[#475367] font-normal font-sans text-[16px] mt-2">
          {challengeDetails.project_description.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="font-semibold font-sans w-full text-[#000000] text-[20px] mt-4">Deliverables:</h3>
        <ul className="list-disc pl-6 w-full text-[#475367] font-normal font-sans text-[16px] mt-2">
          {challengeDetails.deliverables.split("\n").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <h3 className="font-semibold font-sans w-full text-[#000000] text-[20px] mt-4">NOTE:</h3>
        <ul className="list-disc pl-6 text-[#475367] w-full font-normal font-sans text-[16px] mt-2">
          <li>Find Product Requirements Summary and Features Description for Saway Pay HERE</li>
        </ul>
        <h3 className="font-semibold font-sans w-full text-[#000000] text-[20px] mt-4">Deliverables:</h3>
        <ul className="list-disc pl-6 w-full text-[#475367] font-normal font-sans text-[16px] mt-2">
          <li>The Product Designer will provide all documents and deliverables to the client before the review meetings</li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex flex-col md:w-[35%]">
        <div className="bg-white w-full max-h-[580px] border-[#E4E7EC] border-[1px] rounded-lg p-6 sm:p-8 md:p-[24px]">
          <h2 className="text-[18px] sm:text-[20px] text-[#000000] font-semibold">Key Instructions:</h2>
          <p className="text-[#475367] font-normal text-[14px] sm:text-[16px]">
            You are free to schedule the clarification call with the team via this
          </p>

          <div className="mt-4 space-y-4  sm:space-y-6 md:space-y-[35px] font-sans">
            <div className="flex items-center space-x-3">
              <div className="bg-[#D0E0FC] w-[40px] h-[40px] sm:w-[49px] sm:h-[49px] rounded-full items-center justify-center flex">
                <Mail className="text-[#2B71F0] w-[16px] sm:w-[20px] h-[16px] sm:h-[18px]" />
              </div>
              <div className="flex-grow">
                <p className="text-[13px] sm:text-[20px] text-[#000000] font-semibold font-sans truncate">
                  {challengeDetails.contact_email}
                </p>
                <p className="text-[#475367] font-normal text-[11px] sm:text-[16px] font-sans">Contact Email</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-[#D0E0FC] w-[40px] h-[40px] sm:w-[49px] sm:h-[49px] rounded-full items-center justify-center flex">
                <Mail className="text-[#2B71F0] w-[16px] sm:w-[20px] h-[16px] sm:h-[18px]" />
              </div>
              <div>
                <p className="text-[13px] sm:text-[20px] text-[#000000] font-semibold font-sans">{challengeDetails.challenge_category}</p>
                <p className="text-[#475367] font-normal text-[11px] sm:text-[16px] font-sans">Challenge Category</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-[#D0E0FC] w-[40px] h-[40px] sm:w-[49px] sm:h-[49px] rounded-full items-center justify-center flex">
                <Mail className="text-[#2B71F0] w-[16px] sm:w-[20px] h-[16px] sm:h-[18px]" />
              </div>
              <div>
                <p className="text-[13px] sm:text-[20px] text-[#000000] font-semibold font-sans">{challengeDetails.duration}</p>
                <p className="text-[#475367] font-normal text-[11px] sm:text-[16px] font-sans">Duration</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="bg-[#D0E0FC] w-[40px] h-[40px] sm:w-[49px] sm:h-[49px] rounded-full items-center justify-center flex">
                <Mail className="text-[#2B71F0] w-[16px] sm:w-[20px] h-[16px] sm:h-[18px]" />
              </div>
              <div>
                <p className="text-[13px] sm:text-[20px] text-[#000000] font-semibold font-sans">{challengeDetails.money_prize}</p>
                <p className="text-[#475367] font-normal text-[11px] sm:text-[16px] font-sans">Money Prize</p>
              </div>
            </div>

            <div>
  {user?.user_type !== "admin" && (
    <button className="h-[55px] mb-[5px] font-semibold font-sans text-[16px] text-[white] bg-[#2B71F0] py-[7px] px-[15px] rounded-[8px] w-full transition sm:px-[30px] sm:mx-auto">
      Submit your work
    </button>
  )}
</div>

{user?.user_type === "admin" && (
  <div className="flex space-x-4 sm:space-x-6 md:flex-row flex-col">
    <button
      onClick={() => handleDelete(challengeDetails._id)} // Pass the correct challenge ID
      disabled={loading}
      className="h-[55px] mb-[5px] font-semibold font-sans text-[16px] text-[white] bg-[#E5533C] py-[7px] px-[15px] rounded-[8px] w-full transition sm:px-[30px] sm:mx-auto"
    >
      {loading ? "Deleting..." : "Delete"}
    </button>
    <Link href={`/challenge/edit/${challengeDetails._id}`}>
      <button className="h-[55px] mb-[5px] font-semibold font-sans text-[16px] text-[white] bg-[#2B71F0] py-[7px] px-[15px] rounded-[8px] w-full transition sm:px-[30px] sm:mx-auto">
        Edit
      </button>
    </Link>
  </div>
)}

          </div>
        </div>


        {user?.user_type === "admin" && (
          <div className="w-full border-[#E4E7EC] bg-white border-[1px] rounded-[12px] mt-4">
            <h2 className="flex p-[18px] border-[1px] rounded-t-[12px] border-[#E4E7EC] items-center space-x-[8px]">
              <span className="text-[#101928] font-sans font-bold text-[18px]">Participants</span>
              <span className="bg-[#2B71F0] px-[8px] rounded-[12px] text-white w-[39px] h-[17px] font-medium text-[12px]">250</span>
            </h2>
            <div className="overflow-y-auto max-h-[380px] sm:max-h-[360px] md:max-h-[420px]">
              {participants.map((participant, index) => (
                <div
                  key={index}
                  className="flex p-[18px] px-[24px] py-[20px] border-b-[1px] border-[#E4E7EC] gap-3 flex-col sm:flex-row sm:items-center"
                >
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <div className="flex-1 mt-2 sm:mt-0">
                    <p className="font-medium text-[14px] font-sans text-[#101928]">{participant.name}</p>
                    <p className="text-[14px] text-[#475367] font-normal">{participant.role}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex py-[20px] w-full">
              <button className="h-[55px] font-semibold font-sans text-[16px] text-[white] bg-[#2B71F0] py-[7px] px-[15px] rounded-[8px] w-[350px] transition sm:px-[30px] sm:mx-auto">
                View All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetailsCard;
