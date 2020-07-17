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
      case 'right':
        return SmallButtonTheme.SmallButton___Right;
      default:
        return '';
    }
  }
  return (
    <button className={`${SmallButtonTheme.SmallButton} ${alignSelector()}`} onClick={handler}>
      {children}
    </button>
  )
};

export default SmallButton;