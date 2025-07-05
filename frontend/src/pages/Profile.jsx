import React, { useState } from 'react';
import { Sidebar } from '../components/custom/Sidebar';

export function Profile() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Samaira',
    lastName: 'Wahi',
    email: 'samairawahi334@gmail.com',
    phone: '+1 (555) 123-4567',
    company: 'COMPANY NAME',
    position: 'Software Engineer',
    location: 'San Francisco, CA',
    bio: 'Passionate software engineer with expertise in React and modern web technologies. I love building user-friendly applications and solving complex problems.'
  });

  const handleInputChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSave = () => {
    // Here you would typically save to backend
    console.log('Saving profile data:', profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Reset to original data
    setProfileData({
      firstName: 'Samaira',
      lastName: 'Wahi',
      email: 'samairawahi334@gmail.com',
      phone: '+1 (555) 123-4567',
      company: 'COMPANY NAME',
      position: 'Software Engineer',
      location: 'San Francisco, CA',
      bio: 'Passionate software engineer with expertise in React and modern web technologies. I love building user-friendly applications and solving complex problems.'
    });
    setIsEditing(false);
  };

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeComponent="profile" />
      
      <div className="flex-1 lg:ml-64 overflow-y-auto">
        <div className="p-4 lg:p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 sticky top-0 bg-gray-50 py-4 z-10">
            {/* Hamburger Menu for Mobile */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            
            <h1 className="text-xl lg:text-2xl">Profile</h1>
            <div className="flex items-center space-x-2 bg-white rounded-full px-3 py-1.5 border">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                alt="User avatar"
                className="w-5 h-5 rounded-full"
              />
              <span className="text-gray-600 text-xs hidden sm:inline">samairawahi334@gmail.com</span>
              <svg
                className="w-3 h-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Profile Content */}
          <div className="max-w-4xl mx-auto">
            {/* Profile Header */}
            <div className="bg-white rounded-lg p-6 shadow-sm mb-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="relative">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                    alt="Profile"
                    className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                  />
                  {isEditing && (
                    <button className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                    </button>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {profileData.firstName} {profileData.lastName}
                  </h2>
                  <p className="text-gray-600 mb-1">{profileData.position}</p>
                  <p className="text-gray-500 text-sm">{profileData.company}</p>
                </div>
                <div className="flex space-x-2">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Edit Profile
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        value={profileData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.lastName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    {isEditing ? (
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.email}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    ) : (
                      <p className="text-gray-900">{profileData.phone}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

