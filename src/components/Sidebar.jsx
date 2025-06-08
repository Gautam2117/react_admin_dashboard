import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  const { currentColor, activeMenu, setActiveMenu, screenSize } = useStateContext();

  const handleCloseSideBar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink = 'flex items-center gap-4 pl-4 pr-3 py-2 rounded-lg text-white text-md m-2 transition-all duration-200';
  const normalLink = 'flex items-center gap-4 pl-4 pr-3 py-2 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 transition-all duration-200';

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          {/* Logo and Cancel Button */}
          <div className="flex justify-between items-center mt-4 ml-3 mr-3">
            <Link
              to="/"
              onClick={handleCloseSideBar}
              className="flex items-center gap-3 text-2xl font-extrabold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware />
              <span>Admin Dashboard</span>
            </Link>

            <TooltipComponent content="Close Sidebar" position="BottomCenter">
              <button
                type="button"
                onClick={() => setActiveMenu(false)}
                style={{ color: currentColor }}
                className="text-xl rounded-full p-2 hover:bg-light-gray md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          {/* Sidebar Links */}
          <div className="mt-8">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-500 dark:text-gray-400 uppercase font-semibold text-xs m-3 mt-5">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : '',
                    })}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar;
