import React from 'react';
import { ChartsHeader, LineChart } from '../../components';

const Line = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 rounded-3xl bg-gradient-to-br from-white to-gray-100 dark:from-[#2B2D3E] dark:to-[#1F202A] shadow-xl">
      <ChartsHeader category="📈 Trend Analysis" title="Global Inflation Rate Overview" />
      
      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-center">
        Explore how inflation has changed over time with year-wise trends
      </p>

      <div className="w-full mt-6">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
