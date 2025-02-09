import React from 'react'
import SignupForm from '../components/forms/SignupForm'

const page = () => {
  return (
    <div className="h-full bg-gray-400 dark:bg-gray-900">
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
         

            {/* Form Column */}
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Create an Account!</h3>
              <SignupForm/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page