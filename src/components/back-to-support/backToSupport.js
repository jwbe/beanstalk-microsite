import React from 'react';
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, TABLET_COLOURS, DESKTOP_BACKGROUNDS } from '../button/button';
import styles from './back-to-support.module.scss';

const BackToSupport = () => {
  return (
    <div className={styles.button}>
      <Button link={`/support-app`} 
        tabletColour={TABLET_COLOURS.SECONDARY}
        desktopColour={DESKTOP_COLOURS.WHITE}
        desktopSize={DESKTOP_SIZES.MEDIUM}
        desktopBackground={DESKTOP_BACKGROUNDS.SECONDARY}
        >
        Back to support
      </Button>
    </div>
  );
};

export default BackToSupport;