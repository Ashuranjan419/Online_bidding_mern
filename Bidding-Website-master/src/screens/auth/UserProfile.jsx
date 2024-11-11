import React, { useEffect, useState } from "react";
import { Caption, Title } from "../../router";
import { User2 } from "../../components/hero/Hero";
import { commonClassNameOfInput, PrimaryButton } from "../../components/common/Design";

export const UserProfile = () => {
  // State to store user data
  const [userData, setUserData] = useState(null);

  // Fetch user data on component mount
  useEffect(() => {
    // Get user data from localStorage (or context/redux)
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUserData(storedUser); // Set user data if available
    }
  }, []);

  // If user data is not available yet (loading state)
  if (!userData) {
    return <div>Loading...</div>; // Show loading message until data is fetched
  }

  return (
    <>
      <section className="shadow-s1 p-8 rounded-lg">
        <div className="profile flex items-center gap-8">
          {/* Display user profile picture */}
          <img
            src={userData.profilePicture || User2} // Default profile picture if none available
            alt="User Profile"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div>
            {/* Display user name */}
            <Title level={5} className="capitalize">
              {userData.name}
            </Title>
            {/* Display user email */}
            <Caption>{userData.email}</Caption>
          </div>
        </div>
        
        {/* Form to update profile */}
        <form>
          {/* Full Name */}
          <div className="flex items-center gap-5 mt-10">
            <div className="w-full">
              <Caption className="mb-2">Full Name</Caption>
              <input
                type="text"
                className={`capitalize ${commonClassNameOfInput}`}
                value={userData.name}
                readOnly // Name is not editable
              />
            </div>
          </div>

          {/* Contact Number and Email */}
          <div className="flex items-center gap-5 mt-10">
            <div className="w-1/2">
              <Caption className="mb-2">Contact Number</Caption>
              <input
                type="text"
                className={commonClassNameOfInput}
                placeholder="Contact Number"
              />
            </div>
            <div className="w-1/2">
              <Caption className="mb-2">Email</Caption>
              <input
                type="text"
                className={commonClassNameOfInput}
                value={userData.email}
                readOnly // Email is not editable
              />
            </div>
          </div>

          {/* Role */}
          <div className="my-8">
            <Caption className="mb-2">Role</Caption>
            <input
              type="text"
              className={commonClassNameOfInput}
              placeholder="Role"
              required
            />
          </div>

          {/* Profile Picture */}
          <div className="my-8">
            <Caption className="mb-2">Profile Picture</Caption>
            <input
              type="text"
              className={commonClassNameOfInput}
              placeholder="Profile Picture URL"
              required
            />
          </div>

          {/* Button to update profile */}
          <PrimaryButton>Update Profile</PrimaryButton>
        </form>
      </section>
    </>
  );
};
