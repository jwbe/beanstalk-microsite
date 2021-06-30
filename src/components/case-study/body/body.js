import React from 'react';
import Theme from './body.module.scss';

const Body = props => {

  const { children } = props;
  
  return (
    <div className={Theme.Container}>
      {children}
    </div>
  )
}

export default Body;