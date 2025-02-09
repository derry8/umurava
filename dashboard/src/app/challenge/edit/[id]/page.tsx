"use client";

import EditForm from '@/app/components/forms/EditForm';
import Breadcrumb from '@/app/components/global/breadcrumbs';
import React from 'react';

const Page = () => {

  const breadcrumbItems = [
    { label: 'Challenges & Hackathons', href: '/challenges-hackathons' },
  ];

  return (
    <div className="w-full">
      <Breadcrumb items={breadcrumbItems} />
      <div className="p-7">
        {/* Pass challengeId as a prop to EditForm */}
        <EditForm />
      </div>
    </div>
  );
};

export default Page;
