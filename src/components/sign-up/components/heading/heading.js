import React from 'react';
import Theme from './heading.module.scss';
import Divider from '../divider/divider';

const Header = ({ children }) => (
  <>
    <Divider/>
    <h2 className={Theme.Heading}>
      {children}
    </h2>
  </>
)

export default Header;