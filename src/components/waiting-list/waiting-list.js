import React from 'react';
import styles from './waiting-list.module.scss';
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, DESKTOP_BACKGROUNDS, DESKTOP_BORDERS } from '../button/button';

const waitingList = () => (
  <div className={styles.WaitingList_wrapper}>
    <form className={styles.WaitingList} method="post" action="https://formspree.io/email@domain.tld">
      <label>
        <input className={styles.WaitingList_input} type="email" name="_replyto" placeholder="Enter your email"/>
      </label>
      <Button type="submit" className={styles.WaitingList_button} 
        desktopColour={DESKTOP_COLOURS.WHITE}
        desktopBackground={DESKTOP_BACKGROUNDS.PRIMARY}
        desktopSize={DESKTOP_SIZES.LARGE}
        >
        Submit
      </Button>
    </form>
  </div>
);

export default waitingList;