'use client'

import React from 'react'
import ChallengeForm from '../components/forms/ChallengeForm'
import Breadcrumbs from '../components/global/breadcrumbs'

function page() {
  const breadcrumbItems = [
    { label: 'Challenges & Hackathons', href: '/challenges-hackathons' },
    { label: 'Design a Dashboard for Sokofund', href: '/challenges-hackathons/sokofund-dashboard' },
  ];
  return (
    <div>
        <Breadcrumbs items={breadcrumbItems}/>
        <ChallengeForm/>
    </div>
  )
}

export default page
