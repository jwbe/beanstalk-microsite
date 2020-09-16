import React from 'react';
import styles from './section.module.scss';

const Section = ({
  className,
  children
}) => {
  return (
    <section className={`${className} ${styles.Section}`}>
      <div className={styles.Section_inner}>
        {children}
      </div>
    </section>
  );
};

export default Section;