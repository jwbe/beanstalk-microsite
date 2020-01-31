import React from 'react';
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, TABLET_COLOURS, DESKTOP_BACKGROUNDS } from '../button/button';
import styles from './back-button.module.scss';

const BackButton = ({
  link
}) => {
  return (
    <div className={styles.button}>
      <Button link={link} 
        desktopColour={DESKTOP_COLOURS.WHITE}
        desktopSize={DESKTOP_SIZES.MEDIUM}
        desktopBackground={DESKTOP_BACKGROUNDS.SECONDARY}
        >
        Back
      </Button>
    </div>
  );
};

export default BackButton;