import React from 'react';
import styles from './waiting-list.module.scss';

const submit = () => {
  console.log('submit');
};

const WaitingList = ({
  className
}) => {
  return (
    <form className={`${className} ${styles.waitingList}`}>
      <input className={styles.waitingList_input} placeholder='Enter your email address here' type='text' name='email'/>
      <input type='button' className={styles.waitingList_button} value='Join waiting list'/>
    </form>
  );
};

export default WaitingList;