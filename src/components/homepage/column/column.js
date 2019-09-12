import React from 'react';
import styles from './column.module.scss';

const Column = ({
  className,
  children
}) => {
  return (
    <div className={`${className} ${styles.Column}`}>
      {children}
    </div>
  );
};

export default Column;