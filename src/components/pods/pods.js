import React from 'react';
import styles from './pods.module.scss';

const Pods = ({children}) => {
  return (
    <section className={styles.Pods}>
      {children}
    </section>
  );
}

export default Pods;