import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';
import { Button } from '.';

const Cart = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="bg-black bg-opacity-50 fixed top-0 right-0 w-full h-full z-50">
      <div className="float-right h-full transition-all duration-500 ease-in-out bg-white dark:bg-[#2d2f36] p-8 shadow-2xl md:w-96">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Your Cart</h2>
          <Button
            icon={<MdOutlineCancel />}
            color="gray"
            bgHoverColor="light-gray"
            size="2xl"
            borderRadius="50%"
          />
        </div>

        {/* Cart Items */}
        {cartData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-start gap-5 border-b border-gray-200 dark:border-gray-600 py-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-20 h-24 object-cover rounded-md shadow-sm"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 dark:text-white">{item.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">{item.category}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-md font-semibold">{item.price}</span>
                <div className="flex items-center border rounded-md overflow-hidden">
                  <button className="px-2 py-1 text-red-500 border-r dark:border-gray-600">
                    <AiOutlineMinus />
                  </button>
                  <span className="px-3 text-sm text-green-600 font-semibold">0</span>
                  <button className="px-2 py-1 text-green-500 border-l dark:border-gray-600">
                    <AiOutlinePlus />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Summary */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
            <span className="font-medium">$890</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-300">Total</span>
            <span className="font-bold text-lg">$890</span>
          </div>
        </div>

        {/* Place Order Button */}
        <div className="mt-6">
          <Button
            color="white"
            bgColor={currentColor}
            text="Place Order"
            borderRadius="8px"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
