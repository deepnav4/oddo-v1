import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function DashboardHeader({ title }) {
  return (
    <>
      <div className="flex items-center justify-between">
        <h1 className="text-3xl ">{title}</h1>
      </div>
      
      <Tabs defaultValue="total-users">
        <TabsList>
          <TabsTrigger value="total-users">Total Users</TabsTrigger>
          <TabsTrigger value="total-projects">Total Projects</TabsTrigger>
          <TabsTrigger value="operating-status">Operating Status</TabsTrigger>
        </TabsList>
      </Tabs>
    </>
  );
} 