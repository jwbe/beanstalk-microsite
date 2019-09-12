import React from 'react';
import styles from './iphone.module.scss';

const Iphone = ({
  children,
  className
}) => {
  return (
    <div className={`${className} ${styles.Iphone}`}>
      <div className={styles.Iphone_inner} style={children}>
      </div>
    </div>
  );
};

export default Iphone;