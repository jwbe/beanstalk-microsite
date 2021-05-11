import React from 'react';
import styles from './point.module.scss';

const Point = ({
  icon,
  iconSize,
  heading,
  children,
  link
}) => {
  return (
    <article className={styles.Point}>
      {
        link ?
        <a className={styles.Point_icon} href={link}>
          <img src={icon} width="100%" height="100%"/>
        </a>
        :
        <div className={styles.Point_icon}>
          <img src={icon} width="100%" height="100%"/>
        </div>
      }
      <h2 className={styles.Point_heading}>
        {heading}
      </h2>
      <div className={styles.Point_content}>
        {children}
      </div>
    </article>
  );
};

export default Point;