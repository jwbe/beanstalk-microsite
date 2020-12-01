import React from 'react';
import Theme from './container.module.scss';

const Container = ({ children }) => (
  <div className={Theme.Container}>
    {children}
  </div>
);

export default Container;