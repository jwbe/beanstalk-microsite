import React from 'react';
import styles from './waiting-list.module.scss';
import { Button, DESKTOP_COLOURS, DESKTOP_SIZES, DESKTOP_BACKGROUNDS, DESKTOP_BORDERS } from '../button/button';

const waitingList = () => (
  <div className={styles.WaitingList_wrapper}>
    <form name='Waiting list' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' action='/thank-you-for-joining-our-waiting-list' className={styles.WaitingList}>
      <input type='hidden' name='bot-field'/>
      <input type='hidden' name='form-name' value='Waiting list'/>
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