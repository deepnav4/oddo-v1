import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardTrack = () => {
  const navigate = useNavigate();
  const [purpose, setPurpose] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [error, setError] = useState('');

  const options = [
    'Monitor performance',
    'Track user engagement',
    'Report to stakeholders',
    'Discover trends',
    'Compare campaigns'
  ];

  const handleSubmit = () => {
    // Validate inputs
    if (!purpose.trim()) {
      setError('Please describe your purpose');
      return;
    }
    if (!selectedOption) {
      setError('Please select an option');
      return;
    }

    // Clear any previous errors
    setError('');

    // Log the form data
    const formData = {
      purpose: purpose.trim(),
      selectedOption,
      timestamp: new Date().toISOString(),
      userId: 'samairawahi334@gmail.com' // You can replace this with actual user ID
    };

    console.log('Dashboard Track Form Data:', formData);

    // Navigate to the next page
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 sm:mb-12 space-y-4 sm:space-y-0">
        <div className="flex items-center">
          <div className="text-xl sm:text-2xl text-[#1F77B4F2]">€</div>
          <div className="ml-2 text-base sm:text-lg">COMPANY NAME</div>
        </div>
        
        <div className="flex items-center space-x-2 bg-white rounded-full px-3 py-1.5 border w-full sm:w-auto">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="User avatar"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-gray-600 text-xs truncate">samairawahi334@gmail.com</span>
          <svg
            className="w-3 h-3 text-gray-400 flex-shrink-0"
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

      {/* Main Content */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-xl sm:text-2xl mb-8 sm:mb-12 text-gray-800 font-semibold">
          What do you want your dashboard to track?
        </h1>

        {/* Error Message */}
        {error && (
          <div className="mb-4 text-red-500 text-sm">
            {error}
          </div>
        )}

        {/* Purpose Input */}
        <div className="mb-6 sm:mb-10">
          <h2 className="text-base sm:text-lg text-gray-600 mb-3">
            Describe your purpose
          </h2>
          <div className="relative">
            <input
              type="text"
              value={purpose}
              onChange={(e) => {
                setPurpose(e.target.value);
                setError(''); // Clear error on input change
              }}
              placeholder="Describe the purpose of your dashboard"
              className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-white border rounded-full focus:outline-none focus:ring-1 focus:ring-[#1F77B4F2] pr-12 text-sm"
            />
            <button 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#1F77B4F2] text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center hover:bg-[#1F77B4] transition-colors"
              onClick={() => {
                if (purpose.trim()) {
                  console.log('Added purpose:', purpose.trim());
                }
              }}
            >
              <span className="text-base sm:text-lg">+</span>
            </button>
          </div>
        </div>

        {/* Options Dropdown */}
        <div className="mb-6 sm:mb-10">
          <h2 className="text-base sm:text-lg text-gray-600 mb-3">
            What would you like your dashboard to help you do?
          </h2>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-white border rounded-full focus:outline-none focus:ring-1 focus:ring-[#1F77B4F2] text-left text-sm text-gray-700 flex justify-between items-center"
            >
              {selectedOption || "Please choose from below"}
              <svg
                className={`w-3 h-3 text-gray-400 transform ${
                  isDropdownOpen ? "rotate-180" : ""
                } flex-shrink-0`}
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
            </button>

            {isDropdownOpen && (
              <div className="absolute w-full mt-2 bg-white border rounded-2xl shadow-lg z-10">
                {options.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedOption(option);
                      setIsDropdownOpen(false);
                      setError(''); // Clear error on selection
                      console.log('Selected option:', option);
                    }}
                    className="w-full px-4 sm:px-5 py-2 sm:py-2.5 text-left hover:bg-gray-50 text-sm text-gray-700 first:rounded-t-2xl last:rounded-b-2xl"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-5 sm:px-6 py-2 sm:py-2.5 bg-[#1F77B4F2] text-white rounded-full hover:bg-[#1F77B4] transition-colors text-sm font-medium"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardTrack; 