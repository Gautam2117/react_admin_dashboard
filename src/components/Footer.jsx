import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 px-4 py-6 bg-white dark:bg-[#2d2f36] border-t dark:border-gray-700 shadow-sm">
      <p className="text-center text-sm text-gray-600 dark:text-gray-300 tracking-wide">
        © {currentYear} DashboardX. Crafted with care by Gautam Govind.
      </p>
    </footer>
  );
};

export default Footer;
