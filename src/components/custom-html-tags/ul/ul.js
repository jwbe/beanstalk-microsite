import React from 'react';
import styles from './ul.module.scss';

const Ul = ({children}) => {
  return (
    <ul className={styles.Ul}>
      {children}
    </ul>
  );
}

export default Ul;