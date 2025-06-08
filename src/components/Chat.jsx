import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Button } from '.';
import { chatData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Chat = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="nav-item absolute right-5 md:right-52 top-16 bg-white dark:bg-[#2d2f36] p-6 rounded-xl w-96 shadow-lg border dark:border-gray-600">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 dark:border-gray-600">
        <div className="flex items-center gap-2">
          <h3 className="text-xl font-bold text-slate-800 dark:text-gray-200">Inbox</h3>
          <span className="bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            5 New
          </span>
        </div>
        <Button
          icon={<MdOutlineCancel />}
          color="#999"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>

      {/* Messages */}
      <div className="mt-4 space-y-4 max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600">
        {chatData?.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border-b pb-3 last:border-b-0 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-[#3a3b3f] rounded-lg p-2 transition duration-200 cursor-pointer"
          >
            <div className="relative">
              <img
                src={item.image}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span
                className="absolute h-2 w-2 rounded-full right-0 -top-1"
                style={{ backgroundColor: item.dotColor }}
              />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.message}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
              <p className="text-xs text-gray-400 dark:text-gray-500">{item.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Button */}
      <div className="mt-5">
        <Button
          color="white"
          bgColor={currentColor}
          text="See all messages"
          borderRadius="10px"
          width="full"
        />
      </div>
    </div>
  );
};

export default Chat;
