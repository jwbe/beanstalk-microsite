import React from 'react';
import styles from './iphone.module.scss';

const Iphone = ({
  children,
  className
}) => {
  return (
    <div className={`${className} ${styles.Iphone_wrapper}`}>
      <div className={styles.Iphone}>
        <div className={styles.Iphone_inner}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Iphone;