import React from 'react';
import { Link } from 'gatsby';
import styles from './point.module.scss';

const Point = ({
  icon,
  iconSize,
  heading,
  children,
  linkTarget,
  linkText
}) => {
  return (
    <article className={styles.Point}>
      <div className={styles.Point_icon}>
        <img src={icon} width='100%' height='100%'/>
      </div>
      <h2 className={styles.Point_heading}>
        {heading}
      </h2>
      <p className={styles.Point_content}>
        {children}
      </p>
      <Link className={styles.Point_link} to={linkTarget}>
        {linkText}
      </Link>
    </article>
  );
};

export default Point;