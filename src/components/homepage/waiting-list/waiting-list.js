import React from 'react';
import styles from './waiting-list.module.scss';

const WaitingList = ({
  className
}) => {
  return (
    <form className={`${className} ${styles.waitingList}`}>
      <input className={styles.waitingList_input} placeholder='Enter your email address here' type='text' name='email'/>
      <input className={styles.waitingList_button} type='submit' value='Join waiting list'/>
    </form>
  );
};

export default WaitingList;