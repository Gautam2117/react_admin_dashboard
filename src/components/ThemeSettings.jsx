import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { themeColors } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const ThemeSettings = () => {
  const { setColor, setMode, currentMode, currentColor, setThemeSettings } = useStateContext();

  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0 z-50">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-96 p-6 overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-lg font-semibold">Settings</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            className="text-2xl p-2 rounded-full hover:drop-shadow-xl hover:bg-light-gray"
            style={{ color: 'rgb(153, 171, 180)' }}
          >
            <MdOutlineCancel />
          </button>
        </div>

        {/* Theme Option */}
        <div className="border-t border-color pt-4">
          <p className="font-semibold text-xl mb-4">Theme Option</p>
          <div className="space-y-3">
            <div>
              <input
                type="radio"
                id="light"
                name="theme"
                value="Light"
                onChange={setMode}
                checked={currentMode === 'Light'}
                className="cursor-pointer"
              />
              <label htmlFor="light" className="ml-2 text-md cursor-pointer">
                Light
              </label>
            </div>
            <div>
              <input
                type="radio"
                id="dark"
                name="theme"
                value="Dark"
                onChange={setMode}
                checked={currentMode === 'Dark'}
                className="cursor-pointer"
              />
              <label htmlFor="dark" className="ml-2 text-md cursor-pointer">
                Dark
              </label>
            </div>
          </div>
        </div>

        {/* Theme Colors */}
        <div className="border-t border-color pt-6 mt-6">
          <p className="font-semibold text-xl mb-4">Theme Colors</p>
          <div className="flex flex-wrap gap-3">
            {themeColors.map((item) => (
              <TooltipComponent key={item.name} content={item.name} position="TopCenter">
                <div className="relative">
                  <button
                    type="button"
                    className="h-10 w-10 rounded-full cursor-pointer flex items-center justify-center"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setColor(item.color)}
                  >
                    <BsCheck className={`text-2xl text-white ${currentColor === item.color ? 'block' : 'hidden'}`} />
                  </button>
                </div>
              </TooltipComponent>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
