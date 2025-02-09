"use client";
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '@/app/redux/slices/userSlice';

// Define the User type
interface User {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  location: string;
  bio: string;
  profession: string;
  profile_picture: string;
  user_type: string;
}

// Utility functions to handle localStorage
const saveUserToLocalStorage = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};

const SignupForm = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [profession, setProfession] = useState('');
  const [profilePicture] = useState('http://example.com/default-profile.jpg');  // Default profile picture
  const [userType, setUserType] = useState('user');  // Default userType set to "user"
  const dispatch = useDispatch();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/umurava/user/signup', {
        firstname,
        lastname,
        email,
        password,
        location,
        bio,
        profession,
        user_type: userType,
        profile_picture: "profile picture",  // Include profile_picture
      });

      // Store the user data in Redux
      const user = response.data.user;
      dispatch(setUser(user));

      // Save user data to localStorage
      saveUserToLocalStorage(user);

      // Redirect to the profile page
      window.location.href = '/';  // You can use window.location for client-side redirection
    } catch (error) {
      console.error('Signup error', error);
      // You can also handle specific error messages or show an alert here if needed
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white text-black shadow-md rounded-lg">
      <h2 className="text-2xl mb-4 text-center">Sign Up</h2>

      <div className="mb-4 ">
        <label htmlFor="firstname" className="block text-sm font-semibold">First Name</label>
        <input
          type="text"
          id="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="lastname" className="block text-sm font-semibold">Last Name</label>
        <input
          type="text"
          id="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-semibold">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-semibold">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="location" className="block text-sm font-semibold">Location</label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="bio" className="block text-sm font-semibold">Bio</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="profession" className="block text-sm font-semibold">Profession</label>
        <input
          type="text"
          id="profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        />
      </div>


      {/* User Type selection */}
      <div className="mb-4">
        <label htmlFor="userType" className="block text-sm font-semibold">User Type</label>
        <select
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          className="w-full px-3 py-2 border rounded-md"
        >
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>

      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md">Sign Up</button>
    </form>
  );
};

export default SignupForm;
