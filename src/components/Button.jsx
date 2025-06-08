import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Button = ({
  icon = null,
  text = '',
  bgColor = '#4CAF50',
  color = '#fff',
  bgHoverColor = '#45a049',
  size = 'base',
  borderRadius = '8px',
  width = 'auto',
}) => {
  const { setIsClicked, initialState } = useStateContext();

  const buttonStyles = {
    backgroundColor: bgColor,
    color,
    borderRadius,
    width,
  };

  return (
    <button
      type="button"
      onClick={() => setIsClicked(initialState)}
      style={buttonStyles}
      className={`text-${size} p-3 hover:drop-shadow-xl hover:bg-[${bgHoverColor}] transition-all duration-200 flex items-center gap-2`}
    >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
    </button>
  );
};

export default Button;
