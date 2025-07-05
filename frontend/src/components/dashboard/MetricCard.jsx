import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon } from './icons';

export function MetricCard({ title, value, percentageChange, trendUp = true }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-5xl font-bold tracking-tight">{value}</div>
          </div>
          <div className={`flex items-center ${trendUp ? 'text-emerald-500' : 'text-red-500'}`}>
            <ArrowUpIcon className={`h-4 w-4 ${!trendUp && 'rotate-180'}`} />
            <span className="ml-1 text-sm font-medium">{percentageChange}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 