import React from 'react';
import styles from './isolated-text-block.module.scss';

export const IsolatedTextBlock = ({
  children
}) => {
  return (
    <section className={styles.IsolatedTextBlock}>
      {children}
    </section>
  );
};