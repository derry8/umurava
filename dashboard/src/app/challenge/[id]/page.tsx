'use client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'next/navigation'; // Corrected import from next/navigation
import ProjectDetailsCard from '../../components/static/ProjectDetails';
import Breadcrumb from '../../components/global/breadcrumbs';
import { fetchChallengeDetails } from '@/app/redux/slices/challengeDetails'; // Import the thunk action
import { RootState } from '@/app/redux/store';
import { AppDispatch } from '@/app/redux/store';

const Page = () => {
  const { id } = useParams(); // Access dynamic `id` from params (not query)
  const dispatch = useDispatch<AppDispatch>();

  // Access challengeDetails from Redux store with proper typing
  const { challengeDetails, loading } = useSelector(
    (state: RootState) => state.challengeDetails
  );

  useEffect(() => {
    if (id) {
      dispatch(fetchChallengeDetails(id as string)); // Dispatch fetchChallengeDetails action
    }
  }, [id, dispatch]);

  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(challengeDetails);

  if (!challengeDetails) {
    return <div>No challenge details found.</div>;
  }

  // Dynamic breadcrumb based on the challenge id
  const breadcrumbItems = [
    { label: 'Challenges & Hackathons', href: '/challenges-hackathons' },
    { label: challengeDetails.challenge_name, href: `/challenges-hackathons/${challengeDetails._id}` },
  ];

  return (
    <div className="w-full">
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-7">
        <ProjectDetailsCard challengeDetails={challengeDetails} />
      </div>
    </div>
  );
};

export default Page;
