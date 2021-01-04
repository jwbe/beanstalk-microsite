import React from 'react';
import Theme from './heading.module.scss';
import Divider from '../divider/divider';

const Header = ({ 
  children,
  dividerDefaultOnMobile
}) => (
  <>
    <Divider dividerDefaultOnMobile={dividerDefaultOnMobile}/>
    <h2 className={`${Theme.Heading} ${dividerDefaultOnMobile && Theme.Heading___dividerDefaultOnMobile}`}>
      {children}
    </h2>
  </>
)

export default Header;