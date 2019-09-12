import React from 'react';
import styles from './h2.module.scss';

const H2 = ({children}) => {
  return (
    <h2 className={styles.H2}>
      {children}
    </h2>
  );
}

export default H2;