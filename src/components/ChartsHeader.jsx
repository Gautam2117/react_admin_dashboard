import React from 'react';

const ChartsHeader = ({ category, title }) => (
  <div className="mb-10 px-4">
    {/* Header */}
    <div className="mb-3">
      <p className="text-base text-gray-500 uppercase tracking-wide">Chart Type</p>
      <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100">{category}</h2>
    </div>

    {/* Title */}
    <p className="text-center text-xl font-medium text-gray-700 dark:text-gray-200 mt-4">
      {title}
    </p>

    {/* Divider */}
    <div className="w-20 h-1 bg-current mx-auto mt-2 rounded-md" />
  </div>
);

export default ChartsHeader;
