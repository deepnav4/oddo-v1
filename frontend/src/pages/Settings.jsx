import React, { useState } from 'react';
import { Sidebar } from '../components/custom/Sidebar';

export function Settings() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} activeComponent="settings" />
      
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
            
            <h1 className="text-xl lg:text-2xl">Clients</h1>
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

          {/* Coming Soon Content */}
          <div className="flex items-center justify-center h-96">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Coming Soon</h2>
              <p className="text-gray-600">This feature is currently under development.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
