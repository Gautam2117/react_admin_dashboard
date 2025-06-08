import React from 'react';
import { pieChartData } from '../../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../../components';

const Pie = () => (
  <div className="m-4 md:m-10 mt-24 p-10 rounded-3xl bg-gradient-to-br from-white to-gray-100 dark:from-[#2C2F3A] dark:to-[#1E202A] shadow-2xl">
    <ChartsHeader category="💰 Budget Analysis" title="Project Cost Distribution by Department" />

    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 mb-6 text-center">
      Get insights on how the overall project budget is allocated across departments
    </p>

    <div className="w-full flex justify-center items-center">
      <PieChart
        id="chart-pie"
        data={pieChartData}
        legendVisiblity
        height="420px"
      />
    </div>
  </div>
);

export default Pie;
