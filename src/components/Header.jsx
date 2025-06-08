import React from 'react';

const Header = ({ category, title }) => (
  <div className="mb-10">
    <p className="text-sm uppercase text-gray-500 tracking-wide dark:text-gray-400">{category}</p>
    <h2 className="text-4xl font-bold text-slate-900 dark:text-gray-100 mt-2">
      {title}
    </h2>
  </div>
);

export default Header;
