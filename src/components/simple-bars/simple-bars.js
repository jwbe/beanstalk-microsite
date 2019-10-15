import React from 'react';
import styles from './simple-bars.module.scss';

const SimpleBars = () => {
  return (
    <div className={styles.SimpleBars}>
      <div className={`${styles.SimpleBar} ${styles.SimpleBar___secondary}`}>
        UK Shares 4.7%
      </div>
      <div className={`${styles.SimpleBar} ${styles.SimpleBar___accent3}`}>
        Cash 1.1%
      </div>
    </div>
  );
}

export default SimpleBars;