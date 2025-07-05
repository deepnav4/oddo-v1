import React from 'react';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import { HomeIcon, ChartIcon, SettingsIcon } from './icons';
import { Link } from 'react-router-dom';

const menuItems = [
  { icon: HomeIcon, label: 'Dashboard', href: '/dashboard' },
  { icon: ChartIcon, label: 'Analytics', href: '/dashboard/analytics' },
  { icon: SettingsIcon, label: 'Settings', href: '/dashboard/settings' },
];

export function Sidebar({ isOpen }) {
  return (
    <div
      className={cn(
        'fixed inset-y-0 left-0 z-50 w-64 bg-background border-r transform transition-transform duration-200 ease-in-out md:translate-x-0 md:static',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      <div className="flex h-16 items-center border-b px-4">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>
      <nav className="space-y-1 p-4">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-colors hover:text-gray-900 hover:bg-gray-100"
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
} 