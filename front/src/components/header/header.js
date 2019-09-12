import React from 'react';
import DesktopNavigation from '../desktop-navigation/desktop-navigation';
import MobileNavigation from '../mobile-navigation/mobile-navigation';
import styles from './header.module.scss';

const Header = ({
  heading,
  subheading
}) => {
  const addSubheadingLineBreak = () => {
    return(
      {
        __html: subheading.replace(/(\.(\s+))/g, '\$1 <br>')
      }
    );
  }
  return (
    <>
      <header className={styles.Header}>
        <DesktopNavigation layoutVariant={{page:true}}/>
        <MobileNavigation/>
        {
          heading
          ?
          <h1 className={styles.Header_heading}>
            {heading}
          </h1>
          :
          null
        }

        {
          subheading
          ?
          <p className={styles.Header_subheading} dangerouslySetInnerHTML={addSubheadingLineBreak()}/> // Done this way for now to programmatically add br after full-stop in subheading.
          :
          null
        }
      </header>
    </>
  );
};

export default Header;