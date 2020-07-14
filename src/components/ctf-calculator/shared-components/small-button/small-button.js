import React from 'react';
import SmallButtonTheme from './small-button.module.scss';

const SmallButton = ({
  handler,
  children
}) => {
  return (
    <button className={SmallButtonTheme.SmallButton} onClick={handler}>
      {children}
    </button>
  )
};

export default SmallButton;