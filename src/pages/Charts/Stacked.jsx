import React from 'react';
import { ChartsHeader, Stacked as StackedChart } from '../../components';

const Stacked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 rounded-3xl shadow-2xl bg-gradient-to-br from-white to-gray-100 dark:from-[#2B2D3A] dark:to-[#1E202A]">
    <ChartsHeader category="📊 Financial Insights" title="Stacked Revenue Breakdown by Channel" />

    <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6 mt-2">
      A comparative stacked view of revenue generated from different departments over time.
    </p>

    <div className="w-full flex justify-center">
      <StackedChart />
    </div>
  </div>
);

export default Stacked;
