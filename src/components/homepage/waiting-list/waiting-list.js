import React from 'react';
import styles from './waiting-list.module.scss';

const WaitingList = ({
  className
}) => {
  return (
    <form name='Waiting list' method='POST' data-netlify='true' data-netlify-honeypot='bot-field' action='/thank-you-for-joining-our-waiting-list' className={`${className} ${styles.waitingList}`}>
      <input type='hidden' name='bot-field'/>
      <input type='hidden' name='form-name' value='Waiting list'/>
      <input className={styles.waitingList_input} placeholder='Enter your email address here' type='text' name='email'/>
      <button type='submit' className={styles.waitingList_button}>Join waiting list</button>
    </form>
  );
};

export default WaitingList;