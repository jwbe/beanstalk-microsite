import React from 'react';
import styles from './p.module.scss';

const P = ({children}) => {
  return (
    <p className={styles.P}>
      {children}
    </p>
  );
}

export default P;