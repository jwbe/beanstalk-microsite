import React from 'react';
import styles from './top-up.module.scss';
import iconCashInHand from '../images/icon_cash-in-hand___secondary.svg';

const topUp = ({
  middle,
  className,
  recipient,
  date
}) => {
  return (
    <div className={`${middle ? styles.TopUp___middle : null} ${styles.TopUp}`}>
      <div className={styles.TopUp_column}>
        <h3 className={styles.TopUp_header}>
          Your Top Up
        </h3>
        <p className={styles.TopUp_recipient}>
          {recipient}
        </p>
        <p className={styles.TopUp_date}>
          {date}
        </p>
      </div>
      <div className={styles.TopUp_column}>
        <img className={styles.TopUp_icon} width='40' height='40' src={iconCashInHand} alt='Top up icon'/>
      </div>
    </div>
  );
};

export default topUp;