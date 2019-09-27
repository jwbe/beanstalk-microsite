import React from 'react';
import DesktopNavigation from '../desktop-navigation/desktop-navigation';
import MobileNavigation from '../mobile-navigation/mobile-navigation';
import classnames from 'classnames';
import styles from './header.module.scss';

export const HEADER_VARIANT = {
  MEDIA_PAGE: 'Header___mediaPage',
};

export const Header = ({
  headerVariant,
  heading,
  subheading
}) => {
  const headerClasses = classnames(
    styles.Header,
    styles[ headerVariant ]
  );
  const addSubheadingLineBreak = () => {
    return(
      {
        __html: subheading.replace(/(\.(\s+))/g, '\$1 <br>')
      }
    );
  }
  return (
    <>
      <header className={headerClasses}>
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