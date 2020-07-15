import React from 'react';
import SmallButtonTheme from './small-button.module.scss';

const SmallButton = ({
  handler,
  children,
  align
}) => {
  const alignSelector = () => {
    switch (align) {
      case 'centred':
        return SmallButtonTheme.SmallButton___Centred;
        break;
      default:
        return null;
      case 'right':
        return SmallButtonTheme.SmallButton___Right;
    }
  }
  return (
    <button className={`${SmallButtonTheme.SmallButton} ${alignSelector()}`} onClick={handler}>
      {children}
    </button>
  )
};

export default SmallButton;