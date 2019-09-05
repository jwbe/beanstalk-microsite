import React from 'react';
import DesktopNavigation from '../desktop-navigation/desktop-navigation';
import MobileNavigation from '../mobile-navigation/mobile-navigation';
//import { Link } from 'gatsby';
import styles from './header.module.scss';

const Header = ({
  state,
  handler,
  heading,
  subheading
}) => {
  return (
    <>
      <header className={styles.Header}>
        <DesktopNavigation/>
        <MobileNavigation handlers={{ handler }} state={{ state }}/>
        <h1 className={styles.Header_heading}>
          {heading}
        </h1>
        <p className={styles.Header_subheading}>
          {subheading}
        </p>
      </header>
    </>
  );
};

export default Header;