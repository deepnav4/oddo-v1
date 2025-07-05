import React, { useState } from 'react';
import { LineChart } from '../components/dashboard/LineChart';
import { BarChart } from '../components/dashboard/BarChart';
import { ProjectTable } from '../components/dashboard/ProjectTable';
import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/custom/Sidebar.jsx';


const MetricCard = ({ title, value, change }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow-sm">
      <div className="text-sm text-gray-600 mb-1">{title}</div>
      <div className="text-3xl mb-2">{value}</div>
      <div className={`text-sm ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
        {change >= 0 ? '↑' : '↓'} {Math.abs(change)}%
      </div>
    </div>
  );
};

export function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex bg-gray-50 min-h-screen">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
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
            
            <h1 className="text-xl lg:text-2xl">My Dashboard</h1>
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

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-8">
            <MetricCard title="Views" value="7,265" change={11.01} />
            <MetricCard title="Views" value="7,265" change={11.01} />
            <MetricCard title="Views" value="7,265" change={11.01} />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-8">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-sm text-gray-600 mb-4">Total Users</h3>
              <LineChart />
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="text-sm text-gray-600 mb-4">Lorem ipsum</h3>
              <BarChart />
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-lg p-4 shadow-sm">
            <h3 className="text-sm text-gray-600 mb-4">Projects</h3>
            <ProjectTable />
          </div>
        </div>
      </div>
    </div>
  );
}
