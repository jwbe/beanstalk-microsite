import React from 'react';
import { Link } from 'gatsby';
import styles from './pod.module.scss';

import tempIcon from '../../images/icons/icon_rosette.svg';

const Pod = ({
  icon,
  link,
  heading,
  description
}) => {
  return (
    <div className={styles.Pod_wrapper}>
      <article className={styles.Pod}>
        <Link className={styles.Pod_link} to={link}/>
        <div className={styles.Pod_icon_wrapper}>
          <img className={styles.Pod_icon} src={tempIcon} width='34' height='34'/>
        </div>
        <h2 className={styles.Pod_title}>
          {heading}
        </h2>
        <p className={styles.Pod_description}>
          {description}
        </p>
      </article>
    </div>
  );
}

export default Pod;