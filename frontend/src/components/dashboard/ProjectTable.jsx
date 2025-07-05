import React from 'react';

const projects = [
  {
    user: {
      name: 'ByeWind',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ByeWind'
    },
    date: 'Jun 24, 2025',
    amount: '$942.00',
    status: 'In Progress'
  },
  {
    user: {
      name: 'Natali Craig',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Natali'
    },
    date: 'Mar 10, 2025',
    amount: '$881.00',
    status: 'Complete'
  },
  {
    user: {
      name: 'Drew Cano',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Drew'
    },
    date: 'Nov 10, 2025',
    amount: '$409.00',
    status: 'Pending'
  },
  {
    user: {
      name: 'Orlando Diggs',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Orlando'
    },
    date: 'Dec 20, 2025',
    amount: '$953.00',
    status: 'Approved'
  },
  {
    user: {
      name: 'Andi Lane',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Andi'
    },
    date: 'Jul 25, 2025',
    amount: '$901.00',
    status: 'Rejected'
  }
];

const StatusBadge = ({ status }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'Complete':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusStyles()}`}>
      {status}
    </span>
  );
};

export const ProjectTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="text-left text-xs text-gray-500">
            <th className="pb-3 font-normal">Date</th>
            <th className="pb-3 font-normal">Amount</th>
            <th className="pb-3 font-normal">Status</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index} className="border-t border-gray-100">
              <td className="py-3">
                <div className="flex items-center">
                  <img
                    src={project.user.avatar}
                    alt={project.user.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <div className="ml-3">
                    <div className="text-sm font-medium text-gray-900">{project.user.name}</div>
                    <div className="text-xs text-gray-500">{project.date}</div>
                  </div>
                </div>
              </td>
              <td className="py-3">
                <span className="text-sm text-gray-900">{project.amount}</span>
              </td>
              <td className="py-3">
                <StatusBadge status={project.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 