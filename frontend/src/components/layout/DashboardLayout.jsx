import React, { useState } from 'react';
import { Navbar } from '@/components/dashboard/Navbar';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { cn } from '@/lib/cn';

export function DashboardLayout({ children }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar isOpen={isMobileMenuOpen} />
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/50 transition-opacity md:hidden',
          isMobileMenuOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />
      <div className="flex-1 flex flex-col min-h-screen">
        <Navbar onMenuClick={toggleMobileMenu} />
        <main className="flex-1 space-y-4 p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
} 