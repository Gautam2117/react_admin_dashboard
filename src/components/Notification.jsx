import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Notification = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-40 top-16 w-96 bg-white dark:bg-[#2e3038] p-6 rounded-xl shadow-lg z-50">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 border-gray-200 dark:border-gray-600">
        <div className="flex items-center gap-2">
          <p className="text-lg font-semibold dark:text-gray-200 text-gray-800">Notifications</p>
          <span className="bg-orange-theme text-white text-xs font-semibold px-2 py-0.5 rounded">
            5 New
          </span>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>

      {/* Notification Items */}
      <div className="mt-4 max-h-80 overflow-y-auto custom-scrollbar">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 py-3 border-b border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-[#3a3b45] cursor-pointer rounded-lg px-2"
          >
            <img src={item.image} alt="notif" className="w-10 h-10 rounded-full object-cover" />
            <div className="flex flex-col">
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{item.message}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="See all notifications"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default Notification;
