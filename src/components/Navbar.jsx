import React, { useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { FiShoppingCart } from 'react-icons/fi';
import { BsChatLeft } from 'react-icons/bs';
import { RiNotification3Line } from 'react-icons/ri';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import avatar from '../data/avatar.jpg';
import { Cart, Chat, Notification, UserProfile } from '.';
import { useStateContext } from '../contexts/ContextProvider';

// Reusable button with tooltip and optional dot indicator
const NavButton = ({ title, onClick, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      onClick={onClick}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {dotColor && (
        <span
          style={{ backgroundColor: dotColor }}
          className="absolute inline-flex h-2 w-2 rounded-full right-2 top-2"
        />
      )}
      {icon}
    </button>
  </TooltipComponent>
);

const Navbar = () => {
  const {
    currentColor,
    activeMenu,
    setActiveMenu,
    handleClick,
    isClicked,
    setScreenSize,
    screenSize,
  } = useStateContext();

  // Update screen size on resize
  useEffect(() => {
    const updateScreenSize = () => setScreenSize(window.innerWidth);
    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Toggle sidebar visibility based on screen size
  useEffect(() => {
    setActiveMenu(screenSize > 900);
  }, [screenSize, setActiveMenu]);

  return (
    <div className="flex justify-between items-center p-2 md:mx-6 relative z-50 bg-white dark:bg-main-dark-bg shadow-sm">
      {/* Left side - Menu toggle */}
      <NavButton
        title="Toggle Menu"
        onClick={() => setActiveMenu(!activeMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      {/* Right side - Icons and Profile */}
      <div className="flex items-center gap-4">
        <NavButton
          title="Cart"
          onClick={() => handleClick('cart')}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Messages"
          onClick={() => handleClick('chat')}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notifications"
          onClick={() => handleClick('notification')}
          color={currentColor}
          dotColor="#FEC90F"
          icon={<RiNotification3Line />}
        />

        {/* User Avatar & Name */}
        <TooltipComponent content="User Profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick('userProfile')}
          >
            <img src={avatar} alt="User Avatar" className="w-8 h-8 rounded-full" />
            <div className="hidden sm:flex flex-col">
              <span className="text-xs text-gray-400">Hi there,</span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                Gautam
              </span>
            </div>
            <MdKeyboardArrowDown className="text-gray-500" />
          </div>
        </TooltipComponent>

        {/* Conditional Components */}
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
